/**
 * Renders the Open Graph card straight from the built CV, so the preview can
 * never drift from the real page. Run after `ng build`; writes og.png into the
 * build output. No dependencies beyond a Chrome binary.
 */
import { readFile, writeFile, rm, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { DIST, chrome, serve } from './chrome.mjs';

const WIDTH = 1200;
const HEIGHT = 630;

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

const server = await serve();
const { port } = server.address();
const page = join(DIST, 'og.html');
const out = join(DIST, 'og.png');

try {
  const html = await readFile(join(DIST, 'index.html'), 'utf8');
  await writeFile(page, html.replace('</head>', `${OG_STYLE}</head>`));

  const bin = await chrome([
    '--hide-scrollbars',
    `--window-size=${WIDTH},${HEIGHT}`,
    `--screenshot=${out}`,
    `http://127.0.0.1:${port}/og.html?lang=en`,
  ]);
  const { size } = await stat(out);

  console.log(`og.png  ${WIDTH}x${HEIGHT}  ${(size / 1024).toFixed(0)} kB  (via ${bin})`);
} finally {
  await rm(page, { force: true });
  server.close();
}
