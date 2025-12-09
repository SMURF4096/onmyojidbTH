import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day1(): JSX.Element {
  return (
    <Layout title="Day 1 Guide" description="Event Day 1">
      <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
        <Link to="/event-details">← Back to Event Hub</Link>
        <div style={{ marginTop: '2rem' }}>
            <h1>📅 Day 1: The Beginning</h1>
            <p>Focus on unlocking the map and gathering basic buffs.</p>
            
            <h3>Today's Buffs</h3>
            <ul>
                <li>Crit Rate +10%</li>
                <li>Effect Hit +20%</li>
            </ul>

            <h3>Recommended Shikigami</h3>
            <p>SR Kiyohime is essential for crowd control today.</p>
        </div>
      </div>
    </Layout>
  );
}
