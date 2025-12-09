import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Wiki"
      description="Onmyoji Shikigami Database">

      <div className="wiki-container">
        <div className="wiki-grid">

          {/* MAIN COLUMN */}
          <div className="wiki-main">

            {/* LATEST NEWS */}
            <div className="wiki-section">
              <div className="wiki-header">
                <h2>Latest</h2>
              </div>
              <ul className="wiki-list">
                <li><Link to="/docs/shikigami/SSR/taira-no-masakado">New SSR Shikigami: Taira no Masakado</Link></li>
                <li><Link to="/shikigami">Shikigami List Updated</Link></li>
                <li><Link to="#">New Skin: Kotodama</Link></li>
                <li><Link to="#">Event: Annual 520 Livestream</Link></li>
              </ul>
            </div>

            {/* NEW SHIKIGAMI SECTION */}
            <div className="wiki-section">
              <div className="wiki-header">
                <h2>New SSR Shikigami!</h2>
              </div>
              <div className="wiki-featured-grid">
                <WikiCard
                  title="Taira no Masakado"
                  image="/onmyojidbTH/img/shikigami/SSR/taira-no-masakado/full.png"
                  link="/docs/shikigami/SSR/taira-no-masakado"
                />
                <WikiCard
                  title="Amaterasu"
                  image="/onmyojidbTH/img/shikigami/SSR/amaterasu/icon.png"
                  link="/docs/shikigami/SSR/amaterasu"
                />
                <WikiCard
                  title="Susanoo"
                  image="/onmyojidbTH/img/shikigami/SSR/susanoo/icon.png"
                  link="/docs/shikigami/SSR/susanoo"
                />
              </div>
            </div>

            {/* ARCHIVES */}
            <div className="wiki-section">
              <div className="wiki-header">
                <h2>Archives</h2>
              </div>
              <ul className="wiki-list">
                <li><Link to="#">Story Archive</Link></li>
                <li><Link to="#">Event Archive</Link></li>
                <li><Link to="#">Skill Adjustments</Link></li>
              </ul>
            </div>

          </div>

          {/* SIDEBAR COLUMN */}
          <div className="wiki-sidebar">

            <div className="wiki-section">
              <div className="wiki-header">
                <h2>Game Features</h2>
              </div>
              <ul className="wiki-list">
                <li><Link to="/shikigami">Shikigami List</Link></li>
                <li><Link to="#">Soul Zones</Link></li>
                <li><Link to="#">Secret Zones</Link></li>
                <li><Link to="#">Duel Guide</Link></li>
                <li><Link to="#">Wanted Quests</Link></li>
                <li><Link to="#">Guilds</Link></li>
              </ul>
            </div>

            <div className="wiki-section">
              <div className="wiki-header">
                <h2>Server Time</h2>
              </div>
              <div style={{ padding: '0.5rem', background: 'var(--ifm-background-surface-color)', borderRadius: '4px', border: '1px solid var(--wiki-border-color)' }}>
                <div style={{ marginBottom: '0.5rem' }}><strong>Global:</strong> {new Date().toLocaleTimeString()}</div>
                <div style={{ marginBottom: '0.5rem' }}><strong>CN:</strong> {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Shanghai' })}</div>
                <div><strong>JP:</strong> {new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo' })}</div>
              </div>
            </div>

            <div className="wiki-section">
              <div className="wiki-header">
                <h2>Social Media</h2>
              </div>
              <ul className="wiki-list">
                <li><Link to="https://twitter.com/Onmyojigame">Twitter (Global)</Link></li>
                <li><Link to="https://www.facebook.com/Onmyojigame/">Facebook (Global)</Link></li>
                <li><Link to="https://discord.gg/onmyoji">Discord</Link></li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}

function WikiCard({ title, image, link }) {
  return (
    <Link to={link} className="wiki-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div className="wiki-card-image">
        <img src={image} alt={title} onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement.style.background = '#ccc';
          e.currentTarget.parentElement.innerHTML = '<span style="font-size:2rem">ERROR</span>';
        }} />
      </div>
      <div className="wiki-card-content">
        <div className="wiki-card-title">{title}</div>
        <div className="wiki-card-link">Read more &gt;</div>
      </div>
    </Link>
  );
}
