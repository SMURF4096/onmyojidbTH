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

        if (selectedCategory !== 'All') {
            filtered = filtered.filter(s => s.category.toLowerCase() === selectedCategory);
        }

        if (searchQuery) {
            filtered = filtered.filter(s =>
                s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        filtered.sort((a, b) => a.name.localeCompare(b.name));

        return filtered;
    }, [selectedCategory, searchQuery]);

    return (
        <Layout title="Soul Library" description="Browse all Souls">
            <div className="container" style={{ padding: '2rem 1rem' }}>

                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Soul Library</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)' }}>
                        Browse all Souls by Category
                    </p>
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
                            borderRadius: '2rem',
                            border: '2px solid var(--ifm-color-emphasis-300)',
                            background: 'var(--ifm-background-color)',
                            color: 'var(--ifm-font-color-base)',
                            outline: 'none'
                        }}
                    />
                </div>

                {/* Category Filter */}
                <div style={{ marginBottom: '3rem' }}>
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
                                    borderRadius: '1.5rem',
                                    border: 'none',
                                    fontWeight: 'bold',
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    background: selectedCategory === cat ? 'var(--ifm-color-primary)' : 'var(--ifm-color-emphasis-200)',
                                    color: selectedCategory === cat ? '#fff' : 'var(--ifm-font-color-base)',
                                    transition: 'all 0.2s',
                                    transform: selectedCategory === cat ? 'scale(1.05)' : 'scale(1)'
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Soul Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {filteredSouls.map(soul => (
                        <Link
                            to={`/soul-profile?id=${soul.id}`}
                            key={soul.id}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                padding: '1rem',
                                borderRadius: '12px',
                                border: '1px solid var(--ifm-color-emphasis-200)',
                                background: 'var(--ifm-background-surface-color)',
                                textAlign: 'center',
                                transition: 'all 0.3s',
                                display: 'flex',
                                flexDirection: 'column',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
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
                                justifyContent: 'center',
                                padding: '1rem'
                            }}>
                                <img
                                    src={soul.image}
                                    alt={soul.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.2))'
                                    }}
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        if (target.parentElement) {
                                            target.parentElement.innerHTML = '<span style="font-size:3rem">🔮</span>';
                                        }
                                    }}
                                />
                            </div>
                            <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                                {soul.name}
                            </div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                {soul.category}
                            </div>
                        </Link>
                    ))}
                </div>

                {/* No Results */}
                {filteredSouls.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--ifm-color-emphasis-600)' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
                        <p style={{ fontSize: '1.2rem' }}>No souls found matching your criteria</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
