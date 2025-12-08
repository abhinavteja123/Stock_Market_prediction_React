import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export function LoadingView() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'radial-gradient(circle at center, #1e1b4b 0%, #050511 70%)',
            color: 'white'
        }}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                    marginBottom: '2rem',
                    color: 'var(--primary)',
                    filter: 'drop-shadow(0 0 10px var(--primary))'
                }}
            >
                <Zap size={64} />
            </motion.div>

            <motion.h2
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    letterSpacing: '4px',
                    fontSize: '1.2rem',
                    color: 'var(--accent)'
                }}
            >
                PROCESSING MARKET DATA...
            </motion.h2>

            <div style={{
                marginTop: '1rem',
                width: '200px',
                height: '2px',
                background: 'rgba(255,255,255,0.1)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: '30%',
                        background: 'var(--success)',
                        boxShadow: '0 0 10px var(--success)'
                    }}
                    animate={{ left: ['-30%', '100%'] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
    );
}
