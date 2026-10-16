/**
 * Prints the built CV to one PDF per language, so the download is the same file
 * on every browser and device instead of whatever the viewer's print dialog
 * produces. Layout comes from the `@page` and `@media print` rules. Run after
 * `ng build`; writes cv-<lang>.pdf into the build output.
 */
import { readFile, stat } from 'node:fs/promises';
import { join } from 'node:path';

import { DIST, chrome, serve } from './chrome.mjs';

/** Read from the app's source so a new language gets a PDF without touching this script. */
async function langs() {
  const source = await readFile('src/app/common/lang/types.ts', 'utf8');
  const list = source.match(/LANGS\s*=\s*\[([^\]]*)\]/)?.[1];

  if (!list) {
    throw new Error('Could not find LANGS in src/app/common/lang/types.ts');
  }

  return [...list.matchAll(/'([a-z]+)'/g)].map(([, lang]) => lang);
}

/** Chrome writes uncompressed page objects, so counting them is enough for a sanity check. */
function pageCount(pdf) {
  return (pdf.toString('latin1').match(/\/Type\s*\/Page(?!s)/g) ?? []).length;
}

const server = await serve();
const { port } = server.address();

try {
  for (const lang of await langs()) {
    const out = join(DIST, `cv-${lang}.pdf`);

    const bin = await chrome([
      '--no-pdf-header-footer',
      `--print-to-pdf=${out}`,
      `http://127.0.0.1:${port}/?lang=${lang}`,
    ]);
    const { size } = await stat(out);
    const pages = pageCount(await readFile(out));

    if (pages === 0) {
      throw new Error(`cv-${lang}.pdf has no pages`);
    }

    console.log(`cv-${lang}.pdf  ${pages} pages  ${(size / 1024).toFixed(0)} kB  (via ${bin})`);
  }
} finally {
  server.close();
}
