import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day5(): JSX.Element {
    return (
        <Layout title="Day 5 Guide" description="Event Day 5">
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <Link to="/event-details">← Back to Event Hub</Link>
                <div style={{ marginTop: '2rem' }}>
                    <h1>📅 Day 5: Total War</h1>
                    <p>Multi-team format enabled.</p>

                    <h3>Today's Buffs</h3>
                    <ul>
                        <li>All Stats +10%</li>
                        <li>Healing turned into Shield</li>
                    </ul>

                    <h3>Recommended Shikigami</h3>
                    <p>Prepare 3 distinct teams. Review the General Guide for comps.</p>
                </div>
            </div>
        </Layout>
    );
}
