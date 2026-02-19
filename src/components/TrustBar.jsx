import { motion } from 'framer-motion';

const partners = [
    'Mersaco',
    'Boehringer Ingelheim',
    'Saint-Gobain',
    'Scholl',
    'Ficep',
    'Victoire Insurance',
    'Makoukji Auto Glass',
];

export default function TrustBar() {
    return (
        <section className="bg-slate-900 py-14 border-y border-slate-700">
            <div className="container mx-auto px-6">
                <motion.p
                    className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Trusted Partner of Industry Leaders
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                    {partners.map((name, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <span className="text-slate-400 group-hover:text-white font-semibold text-base md:text-lg tracking-wide transition-colors duration-300 whitespace-nowrap select-none">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
