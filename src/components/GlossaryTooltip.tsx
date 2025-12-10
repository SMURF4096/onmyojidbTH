import React, { useState, useRef, useEffect } from 'react';

interface GlossaryTooltipProps {
    term: string;
    title: string;
    description: React.ReactNode;
}

export default function GlossaryTooltip({ term, title, description }: GlossaryTooltipProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef<HTMLSpanElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        function handleResize() {
            setIsMobile(window.innerWidth < 768);
        }

        // Initial check
        handleResize();

        document.addEventListener("mousedown", handleClickOutside);
        window.addEventListener("resize", handleResize);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const tooltipStyle: React.CSSProperties = isMobile ? {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '350px',
        maxHeight: '80vh',
        overflowY: 'auto',
        padding: '1.5rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-emphasis-200)',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        zIndex: 200,
        textAlign: 'left',
        color: 'var(--ifm-font-color-base)',
        fontWeight: 'normal',
        fontSize: '0.95rem',
        lineHeight: '1.6'
    } : {
        position: 'absolute',
        bottom: '125%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '320px',
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
    };

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
                <>
                    {isMobile && (
                        <div style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            zIndex: 199,
                            backdropFilter: 'blur(2px)'
                        }} />
                    )}
                    <span style={tooltipStyle}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                            <strong style={{ fontSize: '1.1rem' }}>{title}</strong>
                            {isMobile && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        fontSize: '1.5rem',
                                        lineHeight: 1,
                                        cursor: 'pointer',
                                        color: 'var(--ifm-color-emphasis-600)',
                                        padding: '0 0.5rem'
                                    }}
                                >
                                    &times;
                                </button>
                            )}
                        </div>

                        {description}

                        {/* Arrow - only show on desktop */}
                        {!isMobile && (
                            <>
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
                            </>
                        )}
                    </span>
                </>
            )}
        </span>
    );
}
