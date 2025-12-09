const fs = require('fs');
const path = require('path');

// Read CSV file
const csvPath = path.join(__dirname, 'docs', 'shikigami', 'shikigami_list.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');

// Parse CSV
const lines = csvContent.split('\n').filter(line => line.trim());
const shikigamiList = lines.map(line => {
    // Remove quotes and split
    const cleaned = line.replace(/"/g, '');
    const [rarity, id, name] = cleaned.split(',');
    return { rarity, id, name };
}).filter(s => s.name && s.name.trim());

console.log(`Found ${shikigamiList.length} shikigami`);

// Group by rarity
const rarityFolders = {
    'UR': 'UR',
    'SP': 'SP',
    'SSR': 'SSR',
    'SR': 'SR',
    'R': 'R',
    'N': 'N',
    'SSN': 'SSN',
    'M': 'M'
};

// Generate markdown files
shikigamiList.forEach(shikigami => {
    const { rarity, id, name } = shikigami;

    if (!rarityFolders[rarity]) {
        console.log(`Unknown rarity: ${rarity} for ${name}`);
        return;
    }

    // Create slug from name
    const slug = name.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

    const folder = path.join(__dirname, 'docs', 'shikigami', rarityFolders[rarity]);
    const filePath = path.join(folder, `${slug}.md`);

    // Skip if file already exists
    if (fs.existsSync(filePath)) {
        console.log(`Skipping ${name} - file exists`);
        return;
    }

    // Create markdown content - quote values to avoid YAML errors
    const markdown = `---
id: ${slug}
name: "${name}"
rarity: ${rarity}
gameId: "${id || 'unknown'}"
role: []
icon: /img/shikigami/${rarity}/${slug}/icon.png
image: /img/shikigami/${rarity}/${slug}/full.png
attack: 0
attack_rank: C
health: 0
health_rank: C
defense: 0
defense_rank: C
speed: 0
speed_rank: C
crit: 10%
crit_dmg: 150%
effect_hit: 0%
effect_res: 0%
---

# ${name}

Information about ${name} will be added soon.

## Skills

### Skill 1
To be documented.

### Skill 2
To be documented.

### Skill 3
To be documented.
`;

    fs.writeFileSync(filePath, markdown, 'utf-8');
    console.log(`Created: ${name} (${rarity})`);
});

console.log('Done!');
