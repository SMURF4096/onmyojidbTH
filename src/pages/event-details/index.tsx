import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function EventDetailsHub(): JSX.Element {
  return (
    <Layout title="Event Hub" description="Return of the Demon King Guide">
      <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
        
        <Link to="/events" style={{ display: 'inline-block', marginBottom: '2rem' }}>← Back to Events List</Link>
        
        {/* HERO HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
           <h1 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Return of the Demon King</h1>
           <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-600)' }}>Complete Guide & Walkthrough</p>
        </div>

        {/* BOSS GUIDES */}
        <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ borderBottom: '2px solid var(--ifm-color-primary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                Boss Encounters
            </h2>
            <div className="row">
                <div className="col col--6">
                    <Link to="/event-details/boss-6" className="card-link">
                        <div className="card shadow--md" style={{ height: '100%', transition: 'transform 0.2s' }}>
                            <div className="card__header">
                                <h3>⭐⭐⭐⭐⭐⭐ 6-Star Boss</h3>
                            </div>
                            <div className="card__body">
                                <p>Ultimate strategy guide for the 6-Star Demon King. High difficulty team comps.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col col--6">
                    <Link to="/event-details/boss-5" className="card-link">
                        <div className="card shadow--md" style={{ height: '100%', transition: 'transform 0.2s' }}>
                            <div className="card__header">
                                <h3>⭐⭐⭐⭐⭐ 5-Star Boss</h3>
                            </div>
                            <div className="card__body">
                                <p>Efficient farming teams for the 5-Star Minion stages.</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        {/* DAILY GUIDES */}
        <div>
            <h2 style={{ borderBottom: '2px solid var(--ifm-color-primary)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                Daily Stages (Days 1-7)
            </h2>
            <div className="row" style={{ rowGap: '1.5rem' }}>
                {[1, 2, 3, 4, 5, 6, 7].map(day => (
                    <div key={day} className="col col--3">
                        <Link to={`/event-details/day-${day}`} className="card-link">
                            <div className="card shadow--sm" style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
                                <h4 style={{ margin: 0 }}>Day {day}</h4>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

      </div>

        {/* Global Styles for this page's cards */}
        <style>{`
            .card-link {
                text-decoration: none !important;
                color: inherit !important;
                display: block;
                height: 100%;
            }
            .card-link:hover .card {
                transform: translateY(-5px);
                box-shadow: 0 10px 20px rgba(0,0,0,0.15) !important;
                border-color: var(--ifm-color-primary);
            }
        `}</style>
    </Layout>
  );
}
