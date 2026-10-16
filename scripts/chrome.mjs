/**
 * Shared plumbing for the build-time renderers: serves the built CV over HTTP
 * and drives a headless Chrome against it. No dependencies beyond a Chrome
 * binary.
 */
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, extname, resolve } from 'node:path';

export const DIST = resolve('dist/ocv/browser');

const CHROMES = [
  process.env['CHROME'],
  'google-chrome',
  'google-chrome-stable',
  'chromium',
  'chromium-browser',
].filter(Boolean);

/** Flags every render needs: no sandbox for CI, and time for fonts and Angular to settle. */
const BASE_ARGS = [
  '--headless',
  '--no-sandbox',
  '--disable-gpu',
  '--disable-dev-shm-usage',
  '--force-color-profile=srgb',
  '--virtual-time-budget=10000',
];

const TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};

/** Serves DIST on a random local port; read the port from `server.address()`. */
export function serve() {
  const server = createServer(async (req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const path = pathname === '/' ? 'index.html' : pathname;
    try {
      const body = await readFile(join(DIST, path));
      res.writeHead(200, { 'content-type': TYPES[extname(path)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });

  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)));
}

function run(bin, args) {
  return new Promise((ok, fail) => {
    const child = spawn(bin, args, { stdio: 'ignore' });
    child.on('error', fail);
    child.on('exit', (code) => (code === 0 ? ok() : fail(new Error(`${bin} exited ${code}`))));
  });
}

/**
 * Runs the first Chrome binary found with `args` after the base flags; resolves to its name.
 * Each run gets a throwaway profile, so it never attaches to a Chrome the user has open.
 */
export async function chrome(args) {
  const profile = await mkdtemp(join(tmpdir(), 'ocv-chrome-'));

  try {
    for (const bin of CHROMES) {
      try {
        await run(bin, [...BASE_ARGS, `--user-data-dir=${profile}`, ...args]);
        return bin;
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
      }
    }
  } finally {
    await rm(profile, { recursive: true, force: true });
  }

  throw new Error(`No Chrome binary found. Tried: ${CHROMES.join(', ')}`);
}
