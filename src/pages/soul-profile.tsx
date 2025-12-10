import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { soulList } from '@site/src/data/soul-list';
import { soulDetails } from '@site/src/data/soul-details';

export default function SoulProfile(): JSX.Element {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  
  const soul = soulList.find(s => s.id === id);
  const details = id ? soulDetails[id] : null;

  if (!soul || !details) {
      return (
        <Layout title="Soul Not Found">
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h1>Soul Not Found</h1>
                <Link to="/soul">Return to Library</Link>
            </div>
        </Layout>
      );
  }

  return (
    <Layout title={soul.name} description={`${soul.name} Soul Details`}>
      <div className="container" style={{ padding: '4rem 1rem', maxWidth: '1000px' }}>
        
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/soul">← Back to Library</Link>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(300px, 1fr) 2fr', 
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Image Card */}
          <div style={{
            background: 'var(--ifm-background-surface-color)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            border: '1px solid var(--ifm-color-emphasis-200)'
          }}>
             <div style={{ 
               height: '250px', 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center',
               marginBottom: '1rem' 
             }}>
               <img 
                 src={soul.image} 
                 alt={soul.name} 
                 style={{ 
                   maxHeight: '100%', 
                   maxWidth: '100%', 
                   filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.2))'
                 }} 
               />
             </div>
             <h1 style={{ marginBottom: '0.5rem' }}>{soul.name}</h1>
             <span style={{ 
               display: 'inline-block',
               padding: '0.25rem 1rem',
               borderRadius: '20px',
               background: 'var(--ifm-color-primary)',
               color: 'white',
               fontWeight: 'bold',
               textTransform: 'uppercase',
               fontSize: '0.9rem'
             }}>
               {soul.category}
             </span>
          </div>

          {/* Right Column: Stats & Details */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h2>Effect</h2>
              <div style={{ 
                background: 'var(--ifm-background-surface-color)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-emphasis-200)' 
              }}>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
                      "{details.description}"
                  </p>
                  <strong style={{ color: 'var(--ifm-color-primary)' }}>2-Piece Set:</strong> <br/>
                  {details.set2}
                </div>
                <div>
                  <strong style={{ color: 'var(--ifm-color-primary)' }}>4-Piece Set:</strong> <br/>
                  {details.set4}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h2>Acquisition</h2>
              <div style={{ 
                background: 'var(--ifm-background-surface-color)', 
                padding: '1.5rem', 
                borderRadius: '12px',
                border: '1px solid var(--ifm-color-emphasis-200)' 
              }}>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  {details.drops.map((drop, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{drop}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
