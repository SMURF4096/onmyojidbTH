import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Onmyoji Shikigami Database - Complete guide to all Shikigami">
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Onmyoji Database
          </h1>
          <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.95 }}>
            Complete Shikigami Guide & Database
          </p>
          <Link
            to="/shikigami"
            style={{
              background: 'white',
              color: '#667eea',
              padding: '1rem 2.5rem',
              borderRadius: '2rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Browse Shikigami →
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <FeatureCard
            title="260+ Shikigami"
            description="Browse the complete collection of all Shikigami from N to UR rarity"
            icon="📚"
            link="/shikigami"
          />
          <FeatureCard
            title="Detailed Stats"
            description="View base stats, skill descriptions, and rankings for each Shikigami"
            icon="📊"
            link="/shikigami"
          />
          <FeatureCard
            title="Easy Navigation"
            description="Filter by rarity or search alphabetically to find what you need"
            icon="🔍"
            link="/shikigami"
          />
        </div>

        {/* Rarity Overview */}
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem' }}>
          Shikigami by Rarity
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          textAlign: 'center'
        }}>
          <RarityBadge rarity="UR" count="1" color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" />
          <RarityBadge rarity="SP" count="46" color="linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)" />
          <RarityBadge rarity="SSR" count="78" color="linear-gradient(135deg, #FFA500 0%, #FF6347 100%)" />
          <RarityBadge rarity="SR" count="68" color="linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)" />
          <RarityBadge rarity="R" count="39" color="linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)" />
          <RarityBadge rarity="N" count="29" color="linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)" />
        </div>
      </div>
    </Layout>
  );
}

function FeatureCard({ title, description, icon, link }) {
  return (
    <Link
      to={link}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        padding: '2rem',
        borderRadius: '12px',
        border: '1px solid var(--ifm-color-emphasis-200)',
        background: 'var(--ifm-background-surface-color)',
        transition: 'all 0.3s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
      }}
    >
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--ifm-color-emphasis-700)', margin: 0 }}>{description}</p>
    </Link>
  );
}

function RarityBadge({ rarity, count, color }) {
  return (
    <div style={{
      background: color,
      color: 'white',
      padding: '1.5rem 1rem',
      borderRadius: '12px',
      fontWeight: 'bold'
    }}>
      <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{rarity}</div>
      <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>{count}</div>
    </div>
  );
}
