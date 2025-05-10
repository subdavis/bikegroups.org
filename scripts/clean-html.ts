import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { JSDOM } from 'jsdom';

async function findHtmlFiles(dir: string): Promise<string[]> {
  const files: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtmlFiles(fullPath)));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function isFullUrl(src: string): boolean {
  try {
    new URL(src);
    return true;
  } catch {
    return false;
  }
}

async function cleanHtmlFile(filePath: string): Promise<void> {
  console.log(`Processing ${filePath}`);
  const content = await readFile(filePath, 'utf-8');
  const dom = new JSDOM(content);
  const document = dom.window.document;

  const scripts = document.getElementsByTagName('script');
  const scriptsToRemove: Element[] = [];

  for (const script of scripts) {
    const src = script.getAttribute('src');
    const hasInlineJs = script.textContent?.trim().length > 0;

    if (hasInlineJs || (src && !isFullUrl(src))) {
      scriptsToRemove.push(script);
    }
  }

  scriptsToRemove.forEach((script) => script.remove());

  await writeFile(filePath, dom.serialize());
  console.log(`Cleaned ${filePath}`);
}

async function main() {
  const outDir = join(process.cwd(), 'out');

  try {
    const htmlFiles = await findHtmlFiles(outDir);
    console.log(`Found ${htmlFiles.length} HTML files to process`);

    for (const file of htmlFiles) {
      await cleanHtmlFile(file);
    }

    console.log('Finished cleaning HTML files');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
