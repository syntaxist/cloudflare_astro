import { mkdir, writeFile } from 'node:fs/promises';
const distDir = new URL('../dist/', import.meta.url);
await mkdir(distDir, { recursive: true });
await writeFile(new URL('.assetsignore', distDir), '_worker.js\n', 'utf8');
console.log('Wrote dist/.assetsignore to exclude _worker.js from asset uploads.');
