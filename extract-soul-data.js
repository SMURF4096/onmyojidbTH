const fs = require('fs');
const path = require('path');

const soulDir = path.join(__dirname, 'static', 'img', 'soul');
const outputDir = path.join(__dirname, 'src', 'data');
const outputFile = path.join(outputDir, 'soul-list.ts');

const categories = ['atk', 'boss', 'crit', 'critdmp', 'def', 'hit', 'hp', 'material', 'res'];

const souls = [];

if (fs.existsSync(soulDir)) {
    const dirs = fs.readdirSync(soulDir);

    dirs.forEach(category => {
        if (!categories.includes(category.toLowerCase())) return;

        const categoryPath = path.join(soulDir, category);
        if (!fs.statSync(categoryPath).isDirectory()) return;

        const files = fs.readdirSync(categoryPath);

        // Group files by soul name (assuming filename format like "soulname.png" or "soulnamebig.png")
        // We want to find unique souls.
        // Heuristic: If we find "harpy.png" and "harpybig.png", it's one soul "Harpy".

        const soulMap = new Map();

        files.forEach(file => {
            if (!file.match(/\.(png|jpg|jpeg|webp)$/i)) return;

            const name = file.replace(/\.(png|jpg|jpeg|webp)$/i, '');
            const isBig = name.toLowerCase().endsWith('big');
            const baseName = isBig ? name.slice(0, -3) : name;

            // Clean up base name for display (e.g. "soul-edge" -> "Soul Edge")
            const displayName = baseName
                .split(/[-_]/)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');

            if (!soulMap.has(baseName)) {
                soulMap.set(baseName, {
                    id: baseName.toLowerCase(),
                    name: displayName,
                    category: category,
                    image: null
                });
            }

            const soul = soulMap.get(baseName);

            // Prefer "big" image, otherwise use standard
            if (isBig) {
                soul.image = `/onmyojidbTH/img/soul/${category}/${file}`;
            } else if (!soul.image) {
                soul.image = `/onmyojidbTH/img/soul/${category}/${file}`;
            }
        });

        souls.push(...soulMap.values());
    });
}

const content = `// Auto-generated file
export interface Soul {
  id: string;
  name: string;
  category: string;
  image: string;
}

export const soulList: Soul[] = ${JSON.stringify(souls, null, 2)};
`;

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, content);
console.log(`Generated ${souls.length} souls in ${outputFile}`);
