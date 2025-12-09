# How to Add a New Shikigami

Adding a new Shikigami to the database is simple - just create a new Markdown file!

## Steps

1. **Choose the correct rarity folder**
   - Navigate to `docs/shikigami/[RARITY]/`
   - Rarities: UR, SP, SSR, SR, R, N, SSN, M

2. **Create a new .md file**
   - Name it with the shikigami ID (lowercase, use hyphens)
   - Example: `kaguya-hime.md`, `ootengu.md`

3. **Fill in the frontmatter** (copy from template below)

4. **Add skill descriptions** in Markdown format

5. **Save and rebuild** - The page will be generated automatically!

## Template

```markdown
---
id: shikigami-name-here
name: Shikigami Display Name
rarity: SSR
role: [DPS, Support]
icon: /img/shikigami/name/icon.png
image: /img/shikigami/name/full.png
attack: 3000
attack_rank: S
health: 10000
health_rank: B
defense: 400
defense_rank: A
speed: 110
speed_rank: A
crit: 10%
crit_dmg: 150%
effect_hit: 0%
effect_res: 0%
---

# Shikigami Name

Brief description/lore here.

## Skills

### Skill 1 Name
Description of what the skill does.

**Level Up Effects:**
- Lv.2: Effect description
- Lv.3: Effect description
- Lv.4: Effect description
- Lv.5: Effect description

### Skill 2 Name
Another skill description.

### Skill 3 Name
Ultimate ability description.
```

## Important Notes

- **Stat Ranks**: Use SS, S, A, B, C, D
- **Roles**: Common roles include DPS, Tank, Support, Healer, Control
- **Images**: Place images in `static/img/shikigami/[name]/`
- **Formatting**: Use Markdown for bold (**text**), italics (*text*), lists, etc.

## Testing Locally

After adding a new file, test it locally:

```bash
npm run start
```

This will open the site at `http://localhost:3000` where you can preview your new Shikigami page!
