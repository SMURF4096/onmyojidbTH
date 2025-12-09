const fs = require('fs');
const path = require('path');

// Read all markdown files from shikigami folders
const rarityFolders = ['UR', 'SP', 'SSR', 'SR', 'R', 'N', 'SSN', 'M'];
const shikigamiData = [];

rarityFolders.forEach(rarity => {
    const folderPath = path.join(__dirname, 'docs', 'shikigami', rarity);

    if (!fs.existsSync(folderPath)) {
        console.log(`Folder not found: ${folderPath}`);
        return;
    }

    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'));

    files.forEach(file => {
        const content = fs.readFileSync(path.join(folderPath, file), 'utf-8');

        // Extract frontmatter
        const frontmatterMatch = content.match(/^---\n([\s\S]+?)\n---/);
        if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];

            // Extract id and name
            const idMatch = frontmatter.match(/id:\s*(.+)/);
            const nameMatch = frontmatter.match(/name:\s*["']?([^"'\n]+)["']?/);

            if (idMatch && nameMatch) {
                shikigamiData.push({
                    id: idMatch[1].trim(),
                    name: nameMatch[1].trim(),
                    rarity: rarity
                });
            }
        }
    });
});

console.log(`Found ${shikigamiData.length} shikigami`);

// Write to TypeScript file
const tsContent = `// Auto-generated file - do not edit manually
// Run 'node extract-shikigami-data.js' to regenerate

export interface ShikigamiListItem {
  id: string;
  name: string;
  rarity: string;
}

export const shikigamiList: ShikigamiListItem[] = ${JSON.stringify(shikigamiData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'shikigami-list.ts'), tsContent, 'utf-8');
console.log('Generated src/data/shikigami-list.ts');
