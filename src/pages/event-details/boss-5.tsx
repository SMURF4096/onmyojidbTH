import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Boss5(): JSX.Element {
  return (
    <Layout title="5-Star Boss Guide" description="Strategy for 5-Star Boss">
      <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
        <Link to="/event-details">← Back to Event Hub</Link>
        <div style={{ marginTop: '2rem' }}>
            <h1>⭐⭐⭐⭐⭐ 5-Star Boss Strategy</h1>
            
            <div style={{ margin: '2rem 0' }}>
                <h3>🛡️ Boss Mechanics</h3>
                <ul>
                    <li>Standard defense. Susceptible to Control effects.</li>
                </ul>
            </div>

            <div style={{ margin: '2rem 0' }}>
                <h3>⚔️ Recommended Team</h3>
                <div className="card shadow--lw" style={{ padding: '1.5rem' }}>
                    <strong>Main DPS:</strong> Kuro Mujou / SR Ubume<br/>
                    <strong>Support:</strong> Zashiki, Yamausagi<br/>
                    <strong>Strategy:</strong> Fast clear for maximum points.
                </div>
            </div>
        </div>
      </div>
    </Layout>
  );
}
