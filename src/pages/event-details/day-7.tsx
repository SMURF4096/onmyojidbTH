import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Day7(): JSX.Element {
    return (
        <Layout title="Day 7 Guide" description="Event Day 7">
            <div className="container" style={{ padding: '4rem 1rem', maxWidth: '800px' }}>
                <Link to="/event-details">← Back to Event Hub</Link>
                <div style={{ marginTop: '2rem' }}>
                    <h1>📅 Day 7: Showdown</h1>
                    <p>The Demon King appears. Unlimited challenge attempts.</p>

                    <h3>Today's Buffs</h3>
                    <ul>
                        <li>Damage Dealt +100%</li>
                        <li>Damage Taken +50%</li>
                    </ul>

                    <h3>Recommended Shikigami</h3>
                    <p>Maximum single-target DPS required. Susanoo, SP Ibaraki Doji.</p>
                </div>
            </div>
        </Layout>
    );
}
