import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { JSDOM } from 'jsdom';

export async function findHtmlFiles(dir: string): Promise<string[]> {
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

export function isFullUrl(src: string): boolean {
  try {
    new URL(src);
    return true;
  } catch {
    return false;
  }
}

export async function cleanHtmlFile(filePath: string): Promise<boolean> {
  const content = await readFile(filePath, 'utf-8');
  const dom = new JSDOM(content);
  const document = dom.window.document;

  // Handle script tags
  const scripts = document.getElementsByTagName('script');
  const scriptsToRemove: Element[] = [];

  for (const script of scripts) {
    const src = script.getAttribute('src');
    const hasInlineJs = script.textContent && script.textContent.trim().length > 0;

    if (hasInlineJs || (src && !isFullUrl(src))) {
      scriptsToRemove.push(script);
    }
  }

  // Handle link tags with as="script"
  const links = document.getElementsByTagName('link');
  const linksToRemove: Element[] = [];

  for (const link of links) {
    const href = link.getAttribute('href');
    if (link.getAttribute('as') === 'script' && href && !isFullUrl(href)) {
      linksToRemove.push(link);
    }
  }

  // If no changes needed, return false
  if (scriptsToRemove.length === 0 && linksToRemove.length === 0) {
    return false;
  }

  // Remove all elements marked for removal
  [...scriptsToRemove, ...linksToRemove].forEach((element) => element.remove());

  const newContent = dom.serialize();
  // Only write if content actually changed
  if (newContent !== content) {
    await writeFile(filePath, newContent);
    return true;
  }

  return false;
}

async function main() {
  const outDir = join(process.cwd(), 'out');

  try {
    const htmlFiles = await findHtmlFiles(outDir);
    let changedFiles = 0;

    for (const file of htmlFiles) {
      const wasChanged = await cleanHtmlFile(file);
      if (wasChanged) {
        console.log(`Cleaned ${file}`);
        changedFiles++;
      }
    }

    if (changedFiles > 0) {
      console.log(`Cleaned ${changedFiles} of ${htmlFiles.length} HTML files`);
    }
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();
