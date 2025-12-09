import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Onmyoji Shikigami Database">

      {/* HERO SECTION - Adaptive Docusaurus Style */}
      <div className="hero hero--primary" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className="hero__title">Onmyoji Database</h1>
          <p className="hero__subtitle">The comprehensive guide to Shikigami, Souls, and Events.</p>
          <div style={{ marginTop: '2rem' }}>
            <Link
              className="button button--secondary button--lg"
              to="/shikigami">
              Browse Shikigami
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '3rem 0' }}>

        {/* LATEST NEWS / TICKER REPLACEMENT */}
        <div style={{
          background: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-200)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Latest Updates</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <Link to="/events" style={{ fontWeight: 'bold' }}>🔥 Annual 520 Livestream</Link>
            <Link to="/docs/shikigami/SSR/taira-no-masakado">⚔️ New SSR: Taira no Masakado</Link>
            <Link to="#">⚖️ Skill Adjustments</Link>
          </div>
        </div>

        {/* FEATURE CARDS - Matching Soul/Shikigami Style */}
        <div className="row">
          <FeatureCard
            title="Events"
            description="Check out current and upcoming events."
            link="/events"
            icon="🎉"
          />
          <FeatureCard
            title="Shikigami Library"
            description="Search and filter all Shikigami."
            link="/shikigami"
            icon="👺"
          />
          <FeatureCard
            title="Soul Library"
            description="Browse souls and their effects."
            link="/soul"
            icon="🔮"
          />
        </div>

      </div>
    </Layout>
  );
}

function FeatureCard({ title, description, link, icon }) {
  return (
    <div className="col col--4">
      <Link
        to={link}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'block',
          height: '100%',
          padding: '2rem',
          borderRadius: '12px',
          border: '1px solid var(--ifm-color-emphasis-200)',
          background: 'var(--ifm-background-surface-color)',
          transition: 'all 0.3s',
          textAlign: 'center',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
        }}
      >
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--ifm-color-emphasis-600)' }}>{description}</p>
      </Link>
    </div>
  );
}
