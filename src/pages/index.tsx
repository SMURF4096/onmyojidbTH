import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Billboard"
      description="Onmyoji Shikigami Database">

      <div className="billboard-container">

        {/* HERO BILLBOARD */}
        <div className="billboard-hero">
          <img
            src="/onmyojidbTH/img/shikigami/SSR/taira-no-masakado/full.png"
            alt="Taira no Masakado"
          />
          <div className="billboard-overlay">
            <h1 className="billboard-title">TAIRA NO MASAKADO</h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
              The legendary samurai returns. Wield the power of the Futsunomitama and dominate the battlefield.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <Link
                to="/docs/shikigami/SSR/taira-no-masakado"
                className="button button--primary button--lg"
                style={{ background: 'var(--heian-gold)', border: 'none', color: '#000', fontWeight: 'bold' }}
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>

        {/* NEWS TICKER */}
        <div className="news-scroll-container">
          <div className="news-scroll-inner">
            <Link to="/events" className="news-item">🔥 [Event] Annual 520 Livestream Now Live!</Link>
            <Link to="/docs/shikigami/SSR/taira-no-masakado" className="news-item">⚔️ [New] Taira no Masakado Arrives</Link>
            <Link to="#" className="news-item">👘 [Skin] New Kotodama Skin Available</Link>
            <Link to="#" className="news-item">⚖️ [Balance] Recent Skill Adjustments</Link>
          </div>
        </div>

        {/* FEATURED SECTIONS */}
        <div className="heian-grid">
          <HeianCard
            title="Events"
            desc="Check out the latest ongoing and upcoming events in Heian-Kyo."
            image="/onmyojidbTH/img/shikigami/SSR/amaterasu/full.png" // Placeholder or different image
            link="/events"
          />
          <HeianCard
            title="Shikigami"
            desc="Explore the complete database of spirits and warriors."
            image="/onmyojidbTH/img/shikigami/SSR/susanoo/full.png" // Placeholder or different image
            link="/shikigami"
          />
          <HeianCard
            title="Strategies"
            desc="Master the mechanics of souls, zones, and duels."
            image="/onmyojidbTH/img/shikigami/SSR/fukengaku/full.png" // Placeholder or different image
            link="/docs/soul"
          />
        </div>

      </div>
    </Layout>
  );
}

function HeianCard({ title, desc, image, link }) {
  return (
    <Link to={link} className="heian-card" style={{ textDecoration: 'none', display: 'block' }}>
      <img src={image} alt={title} className="heian-card-image" onError={(e) => {
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement.style.background = '#2a2a2a';
        e.currentTarget.parentElement.innerHTML = '<div style="height:200px; display:flex; align-items:center; justify-content:center; color:#555">Image</div>';
      }} />
      <div className="heian-card-content">
        <h3 className="heian-card-title">{title}</h3>
        <p className="heian-card-desc">{desc}</p>
      </div>
    </Link>
  );
}
