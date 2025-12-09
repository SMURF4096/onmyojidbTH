import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { soulList, Soul } from '@site/src/data/soul-list';

const CATEGORIES = ['All', 'atk', 'crit', 'def', 'hp', 'res', 'hit', 'boss', 'critdmp', 'material'];

export default function SoulList(): JSX.Element {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredSouls = useMemo(() => {
        let filtered = soulList;

        // Filter by category
        if (selectedCategory !== 'All') {
            filtered = filtered.filter(s => s.category.toLowerCase() === selectedCategory);
        }

        // Filter by search
        if (searchQuery) {
            filtered = filtered.filter(s =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Sort alphabetically
        filtered.sort((a, b) => a.name.localeCompare(b.name));

        return filtered;
    }, [selectedCategory, searchQuery]);

    return (
        <Layout title="Soul Library" description="Browse all Souls">
            <div className="billboard-container" style={{ minHeight: '100vh', padding: '2rem' }}>

                {/* Header */}
                <div className="section-header">
                    <h2>Soul Library</h2>
                </div>

                {/* Search */}
                <div style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                    <input
                        type="text"
                        placeholder="Search Souls..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem 1.5rem',
                            fontSize: '1rem',
                            borderRadius: '2px',
                            border: '1px solid var(--heian-gold)',
                            background: 'var(--heian-panel-bg)',
                            color: 'var(--heian-text)',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* Category Filter */}
                <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '2px',
                                    border: '1px solid var(--heian-gold)',
                                    background: selectedCategory === cat ? 'var(--heian-gold)' : 'transparent',
                                    color: selectedCategory === cat ? '#000' : 'var(--heian-gold)',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Soul Grid */}
                <div className="heian-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1.5rem' }}>
                    {filteredSouls.map(soul => (
                        <div key={soul.id} className="heian-card" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div
                                className="heian-card-image"
                                style={{ height: '150px', padding: '1rem', background: 'rgba(0,0,0,0.2)' }}
                            >
                                <img
                                    src={soul.image}
                                    alt={soul.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.parentElement.innerHTML = '<span style="font-size:2rem">🔮</span>';
                                    }}
                                />
                            </div>
                            <div className="heian-card-content" style={{ textAlign: 'center', padding: '1rem 0.5rem' }}>
                                <div className="heian-card-title" style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                                    {soul.name}
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#888', textTransform: 'uppercase' }}>
                                    {soul.category}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredSouls.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#666' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌑</div>
                        <p style={{ fontSize: '1.2rem' }}>No souls found matching your criteria</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
