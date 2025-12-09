import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day4(): JSX.Element {
    return (
        <Layout title="Day 4 Guide" description="Event Day 4">
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <Link to="/event-details">← Back to Event Hub</Link>
                <div style={{ marginTop: '2rem' }}>
                    <h1>📅 Day 4: Counterattack</h1>
                    <p>Enemies have high effect resistance.</p>

                    <h3>Today's Buffs</h3>
                    <ul>
                        <li>Effect Hit +50%</li>
                        <li>Control Effects Duration +1 Turn</li>
                    </ul>

                    <h3>Recommended Shikigami</h3>
                    <p>Taishakuten and SP Momiji for control.</p>
                </div>
            </div>
        </Layout>
    );
}
