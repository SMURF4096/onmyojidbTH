import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Boss6(): JSX.Element {
  return (
    <Layout title="6-Star Boss Guide" description="Strategy for 6-Star Boss">
      <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
        <Link to="/event-details">← Back to Event Hub</Link>
        <div style={{ marginTop: '2rem' }}>
            <h1>⭐⭐⭐⭐⭐⭐ 6-Star Boss Strategy</h1>
            <p className="admonition admonition-danger alert alert--danger">
                Warning: High Difficulty Encounter
            </p>
            
            <div style={{ margin: '2rem 0' }}>
                <h3>🛡️ Boss Mechanics</h3>
                <ul>
                    <li><strong>Passive:</strong> Reduces damage taken by 50% from non-critical hits.</li>
                    <li><strong>Skill 1:</strong> AoE attack that inflicts Daze.</li>
                </ul>
            </div>

            <div style={{ margin: '2rem 0' }}>
                <h3>⚔️ Recommended Team</h3>
                <div className="card shadow--lw" style={{ padding: '1.5rem' }}>
                    <strong>Main DPS:</strong> Asura / Susanoo<br/>
                    <strong>Support:</strong> Fukengaku, SP Kaguya<br/>
                    <strong>Buffs:</strong> ATK Bonus, Crit DMG
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
