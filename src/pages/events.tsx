import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Events(): JSX.Element {
    return (
        <Layout title="Events" description="Onmyoji Events">
            <div className="container" style={{ padding: '3rem 0' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Events Billboard</h1>

                {/* UPCOMING EVENT BANNER */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '4px solid var(--ifm-color-primary)' }}>Featured Event</h2>

                    <Link
                        to="/event-details"
                        style={{
                            display: 'block',
                            position: 'relative',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                            transition: 'transform 0.2s',
                            textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        {/* Using Taira image as placeholder for event banner */}
                        <img
                            src="/onmyojidbTH/img/shikigami/SSR/taira-no-masakado/full.png"
                            alt="Event Banner"
                            style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 20%' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            padding: '3rem 2rem 2rem',
                            color: 'white'
                        }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#ffd700', textShadow: '0 2px 4px black' }}>
                                Return of the Demon King
                            </h2>
                            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
                                Limited Time Event: Gather souls to summon Taira no Masakado! Click for details.
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Past Events List (Placeholder) */}
                <div>
                    <h2 style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '4px solid var(--ifm-color-gray-500)' }}>Past Events</h2>
                    <div className="row">
                        <EventCard title="Six Realms Gate" status="Ended" />
                        <EventCard title="Mirror World" status="Ended" />
                        <EventCard title="Feast of Hundred Tales" status="Ended" />
                    </div>
                </div>

            </div>
        </Layout>
    );
}

function EventCard({ title, status }) {
    return (
        <div className="col col--4" style={{ marginBottom: '1.5rem' }}>
            <div style={{
                padding: '1.5rem',
                background: 'var(--ifm-background-surface-color)',
                border: '1px solid var(--ifm-color-emphasis-200)',
                borderRadius: '8px'
            }}>
                <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
                <span className="badge badge--secondary">{status}</span>
            </div>
        </div>
    );
}
