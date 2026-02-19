import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2070&q=80"
                    alt="Sparkling clean modern office"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-32">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary-300 mb-6 border border-primary-400/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                            Premium Commercial Cleaning
                        </span>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
                            Premium Commercial{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                                Cleaning
                            </span>{' '}
                            &amp; Facility Support.
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                            We don't just clean. We manage your standards.{' '}
                            <span className="text-white font-medium">
                                Owner-supervised teams
                            </span>{' '}
                            for offices that demand perfection.
                        </p>

                        <motion.a
                            href="https://wa.me/96176340955"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-primary-500 hover:bg-primary-400 text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-2xl shadow-primary-500/30 hover:shadow-primary-400/50 hover:-translate-y-0.5"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {/* WhatsApp icon */}
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Request a Site Visit
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 text-xs font-medium tracking-widest uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
            >
                <span>Scroll</span>
                <motion.div
                    className="w-px h-8 bg-white/30"
                    animate={{ scaleY: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </motion.div>
        </section>
    );
}
