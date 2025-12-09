import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day2(): JSX.Element {
    return (
        <Layout title="Day 2 Guide" description="Event Day 2">
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <Link to="/event-details">← Back to Event Hub</Link>
                <div style={{ marginTop: '2rem' }}>
                    <h1>📅 Day 2: Gathering Forces</h1>
                    <p>New zones unlocked. Priority: Farm Soul Zones.</p>

                    <h3>Today's Buffs</h3>
                    <ul>
                        <li>SPD +30</li>
                        <li>Orb Cost -1</li>
                    </ul>

                    <h3>Recommended Shikigami</h3>
                    <p>AOE DPS like Asura or SP Orochi shine today.</p>
                </div>
            </div>
        </Layout>
    );
}
