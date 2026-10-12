/**
 * Renders the Open Graph card straight from the built CV, so the preview can
 * never drift from the real page. Run after `ng build`; writes og.png into the
 * build output. No dependencies beyond a Chrome binary.
 */
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFile, writeFile, rm, stat } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';

const DIST = resolve('dist/ocv/browser');
const WIDTH = 1200;
const HEIGHT = 630;

const CHROMES = [
  process.env['CHROME'],
  'google-chrome',
  'google-chrome-stable',
  'chromium',
  'chromium-browser',
].filter(Boolean);

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
};

/**
 * The toolbar is page chrome, not CV content, so it stays out of the card, and
 * the fade makes the crop at the bottom of the card read as deliberate.
 */
const OG_STYLE = `<style>
  .bar { display: none !important; }
  body::after {
    content: '';
    position: fixed;
    inset: auto 0 0 0;
    height: 160px;
    background: linear-gradient(to bottom, transparent, #fff 85%);
  }
</style>`;

function serve() {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    try {
      const body = await readFile(join(DIST, path === '/' ? 'index.html' : path));
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

async function shoot(url, out) {
  const args = [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--hide-scrollbars',
    '--force-color-profile=srgb',
    '--virtual-time-budget=10000',
    `--window-size=${WIDTH},${HEIGHT}`,
    `--screenshot=${out}`,
    url,
  ];

  for (const bin of CHROMES) {
    try {
      await run(bin, args);
      return bin;
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
  }

  throw new Error(`No Chrome binary found. Tried: ${CHROMES.join(', ')}`);
}

const server = await serve();
const { port } = server.address();
const page = join(DIST, 'og.html');
const out = join(DIST, 'og.png');

try {
  const html = await readFile(join(DIST, 'index.html'), 'utf8');
  await writeFile(page, html.replace('</head>', `${OG_STYLE}</head>`));

  const bin = await shoot(`http://127.0.0.1:${port}/og.html?lang=en`, out);
  const { size } = await stat(out);

  console.log(`og.png  ${WIDTH}x${HEIGHT}  ${(size / 1024).toFixed(0)} kB  (via ${bin})`);
} finally {
  await rm(page, { force: true });
  server.close();
}
