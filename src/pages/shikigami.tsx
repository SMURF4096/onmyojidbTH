import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { shikigamiList } from '@site/src/data/shikigami-list';

const RARITIES = ['All', 'UR', 'SP', 'SSR', 'SR', 'R', 'N', 'SSN', 'M'];
const ALPHABET = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function ShikigamiList(): JSX.Element {
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredShikigami = useMemo(() => {
    let filtered = shikigamiList;

    // Filter by rarity
    if (selectedRarity !== 'All') {
      filtered = filtered.filter(s => s.rarity === selectedRarity);
    }

    // Filter by letter
    if (selectedLetter) {
      if (selectedLetter === '#') {
        filtered = filtered.filter(s => !/^[A-Z]/i.test(s.name));
      } else {
        filtered = filtered.filter(s => s.name.toUpperCase().startsWith(selectedLetter));
      }
    }

    // Filter by search
    if (searchQuery) {
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Group by rarity
    const grouped: Record<string, typeof shikigamiData> = {};
    RARITIES.slice(1).forEach(rarity => {
      grouped[rarity] = [];
    });

    filtered.forEach(s => {
      if (grouped[s.rarity]) {
        grouped[s.rarity].push(s);
      }
    });

    return grouped;
  }, [selectedRarity, selectedLetter, searchQuery]);

  const getRarityColor = (rarity: string) => {
    const colors: Record<string, string> = {
      'UR': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'SP': 'linear-gradient(135deg, #FA8BFF 0%, #2BD2FF 90%)',
      'SSR': 'linear-gradient(135deg, #FFA500 0%, #FF6347 100%)',
      'SR': 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
      'R': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
      'N': 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
      'SSN': 'linear-gradient(135deg, #84cc16 0%, #65a30d 100%)',
      'M': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
    };
    return colors[rarity] || '#999';
  };

  return (
    <Layout title="Shikigami" description="Browse all Shikigami">
      <div className="container" style={{ padding: '2rem 1rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Shikigami Library</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)' }}>
            Browse all Shikigami by Rarity and Name
          </p>
        </div>

        {/* Search */}
        <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
          <input
            type="text"
            placeholder="Search Shikigami..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              borderRadius: '2rem',
              border: '2px solid var(--ifm-color-emphasis-300)',
              background: 'var(--ifm-background-color)',
              outline: 'none'
            }}
          />
        </div>

        {/* Rarity Filter */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            {RARITIES.map(rarity => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '1.5rem',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  background: selectedRarity === rarity
                    ? (rarity === 'All' ? '#667eea' : getRarityColor(rarity))
                    : 'var(--ifm-color-emphasis-200)',
                  color: selectedRarity === rarity ? 'white' : 'var(--ifm-font-color-base)',
                  transition: 'all 0.2s',
                  transform: selectedRarity === rarity ? 'scale(1.05)' : 'scale(1)'
                }}
              >
                {rarity}
              </button>
            ))}
          </div>
        </div>

        {/* Alphabet Filter */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.4rem'
          }}>
            <button
              onClick={() => setSelectedLetter(null)}
              style={{
                padding: '0.4rem 0.8rem',
                borderRadius: '0.5rem',
                border: 'none',
                fontWeight: '500',
                fontSize: '0.85rem',
                cursor: 'pointer',
                background: selectedLetter === null ? '#667eea' : 'var(--ifm-color-emphasis-200)',
                color: selectedLetter === null ? 'white' : 'var(--ifm-font-color-base)'
              }}
            >
              All
            </button>
            {ALPHABET.map(letter => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(selectedLetter === letter ? null : letter)}
                style={{
                  width: '2rem',
                  height: '2rem',
                  borderRadius: '0.4rem',
                  border: 'none',
                  fontWeight: '500',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  background: selectedLetter === letter ? '#667eea' : 'var(--ifm-color-emphasis-200)',
                  color: selectedLetter === letter ? 'white' : 'var(--ifm-font-color-base)'
                }}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>

        {/* Shikigami Grid */}
        <div>
          {RARITIES.slice(1).map(rarity => {
            const list = filteredShikigami[rarity];
            if (!list || list.length === 0) return null;

            return (
              <div key={rarity} style={{ marginBottom: '3rem' }}>
                <h2 style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid var(--ifm-color-emphasis-200)'
                }}>
                  <span style={{
                    background: getRarityColor(rarity),
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '1.5rem',
                    fontWeight: 'bold'
                  }}>
                    {rarity}
                  </span>
                  <span style={{ color: 'var(--ifm-color-emphasis-600)', fontSize: '1.2rem' }}>
                    ({list.length})
                  </span>
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '1.5rem'
                }}>
                  {list.map(shikigami => (
                    <Link
                      key={shikigami.id}
                      to={`/docs/shikigami/${rarity}/${shikigami.id}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid var(--ifm-color-emphasis-200)',
                        background: 'var(--ifm-background-surface-color)',
                        textAlign: 'center',
                        transition: 'all 0.3s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div style={{
                        width: '100%',
                        height: '150px',
                        background: 'var(--ifm-color-emphasis-100)',
                        borderRadius: '8px',
                        marginBottom: '0.75rem',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <img
                          src={`/onmyojidbTH/img/shikigami/${rarity}/${shikigami.id}/icon.png`}
                          alt={shikigami.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = '<div style="font-size:3rem">👤</div>';
                            }
                          }}
                        />
                      </div>
                      <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>{shikigami.name}</div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {Object.values(filteredShikigami).every(list => list.length === 0) && (
          <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--ifm-color-emphasis-600)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
            <p style={{ fontSize: '1.2rem' }}>No Shikigami found</p>
          </div>
        )}
      </div>
    </Layout>
  );
}
