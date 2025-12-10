import React, { useState, useRef, useEffect } from 'react';

interface GlossaryTooltipProps {
    term: string;
    title: string;
    description: React.ReactNode;
}

export default function GlossaryTooltip({ term, title, description }: GlossaryTooltipProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef<HTMLSpanElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <span
            ref={tooltipRef}
            style={{
                position: 'relative',
                display: 'inline-block',
                cursor: 'pointer',
                borderBottom: '1px dashed var(--ifm-color-primary)',
                color: 'var(--ifm-color-primary)',
                fontWeight: 'bold'
            }}
            onClick={() => setIsOpen(!isOpen)}
        >
            {term}

            {isOpen && (
                <span style={{
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '300px',
                    padding: '1rem',
                    backgroundColor: 'var(--ifm-background-surface-color)',
                    border: '1px solid var(--ifm-color-emphasis-200)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    zIndex: 100,
                    textAlign: 'left',
                    color: 'var(--ifm-font-color-base)',
                    fontWeight: 'normal',
                    fontSize: '0.9rem',
                    lineHeight: '1.5'
                }}>
                    <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem' }}>{title}</strong>
                    {description}

                    {/* Arrow */}
                    <span style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        marginLeft: '-8px',
                        borderWidth: '8px',
                        borderStyle: 'solid',
                        borderColor: 'var(--ifm-background-surface-color) transparent transparent transparent'
                    }} />
                    <span style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        marginLeft: '-9px',
                        marginTop: '1px',
                        borderWidth: '9px',
                        borderStyle: 'solid',
                        borderColor: 'var(--ifm-color-emphasis-200) transparent transparent transparent',
                        zIndex: -1
                    }} />
                </span>
            )}
        </span>
    );
}
