import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day6(): JSX.Element {
    return (
        <Layout title="Day 6 Guide" description="Event Day 6">
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <Link to="/event-details">← Back to Event Hub</Link>
                <div style={{ marginTop: '2rem' }}>
                    <h1>📅 Day 6: The Final Push</h1>
                    <p>Double rewards for Guild Boss.</p>

                    <h3>Today's Buffs</h3>
                    <ul>
                        <li>Crit Damage +50%</li>
                        <li>Max HP -20%</li>
                    </ul>

                    <h3>Recommended Shikigami</h3>
                    <p>Use Vampira or other low-hp scaling units securely shielded.</p>
                </div>
            </div>
        </Layout>
    );
}
