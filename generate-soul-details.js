const fs = require('fs');
const path = require('path');

const soulListPath = path.join(__dirname, 'src', 'data', 'soul-list.ts');
const outputPath = path.join(__dirname, 'src', 'data', 'soul-details.ts');

const input = fs.readFileSync(soulListPath, 'utf8');
const idRegex = /"id":\s*"([^"]+)"/g;

let match;
const ids = [];
while ((match = idRegex.exec(input)) !== null) {
    ids.push(match[1]);
}

const template = {
    description: "A legendary soul that increases damage to low-HP targets.",
    set2: "Crit +15%",
    set4: "Deals +50% damage to targets with below 40% HP.",
    drops: ["Moans", "Soul Zone 10 (Fri)", "Mystic Trader"]
};

let outputContent = `// Auto-generated placeholder details
// You can manually edit this file to update soul details.

export interface SoulDetail {
  description: string;
  set2: string;
  set4: string;
  drops: string[];
}

export const soulDetails: Record<string, SoulDetail> = {\n`;

ids.forEach(id => {
    outputContent += `  "${id}": ${JSON.stringify(template, null, 4).replace(/\n/g, '\n  ')},\n`;
});

outputContent += `};\n`;

fs.writeFileSync(outputPath, outputContent);
console.log(`Generated details for ${ids.length} souls in ${outputPath}`);
