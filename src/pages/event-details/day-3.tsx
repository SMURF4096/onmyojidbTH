import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day3(): JSX.Element {
    return (
        <Layout title="Day 3 Guide" description="Event Day 3">
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <Link to="/event-details">← Back to Event Hub</Link>
                <div style={{ marginTop: '2rem' }}>
                    <h1>📅 Day 3: The Deepening Shadow</h1>
                    <p>Boss defense increases. Bring Defense Break.</p>

                    <h3>Today's Buffs</h3>
                    <ul>
                        <li>Indirect Damage +40%</li>
                    </ul>

                    <h3>Recommended Shikigami</h3>
                    <p>Shokurei and SP Menreiki team composition recommended.</p>
                </div>
            </div>
        </Layout>
    );
}
