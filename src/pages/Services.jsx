import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, HardHat, Layers, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Building2,
        tag: 'Daily & Weekly',
        title: 'Corporate Maintenance',
        body: 'Daily and weekly office cleaning tailored for corporate environments, medical facilities, and showrooms. Scheduled around your operations so productivity is never interrupted.',
        bullets: ['Head offices & co-working spaces', 'Medical & pharmaceutical facilities', 'Retail showrooms'],
    },
    {
        icon: HardHat,
        tag: 'New Builds',
        title: 'Post-Construction Detailing',
        body: 'Deep cleaning for new builds and renovations to make your property showroom-ready. Fast turnaround with dedicated teams trained to handle construction debris, dust, and residues.',
        bullets: ['Construction dust & debris removal', 'Window & glass polishing', 'Floor prime & protection'],
    },
    {
        icon: Layers,
        tag: 'Flooring',
        title: 'Specialized Floor Care',
        body: 'Professional carpet extraction, hard floor polishing & rubber flooring maintenance to protect your assets and extend the lifespan of your surfaces.',
        bullets: ['Carpet hot-water extraction', 'Marble & tile polishing', 'Rubber & vinyl maintenance'],
    },
];

export default function Services() {
    return (
        <>
            {/* ── PAGE HEADER ── */}
            <section className="pt-40 pb-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1d4ed820,transparent_70%)]" />
                <div className="relative container mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-400 mb-4 block">
                            What We Offer
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Tailored Facility{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                                Solutions
                            </span>
                        </h1>
                        <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                            Every service is owner-supervised and delivered with industrial-grade equipment.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── SERVICE SECTIONS ── */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl space-y-20">
                    {services.map((svc, i) => {
                        const Icon = svc.icon;
                        const even = i % 2 === 0;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid md:grid-cols-2 gap-12 items-center ${!even ? 'md:[&>*:first-child]:order-last' : ''}`}
                            >
                                {/* Text */}
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-600 text-xs font-semibold rounded-full uppercase tracking-widest mb-5">
                                        {svc.tag}
                                    </div>
                                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{svc.title}</h2>
                                    <p className="text-slate-500 leading-relaxed mb-6">{svc.body}</p>
                                    <ul className="space-y-2">
                                        {svc.bullets.map((b, j) => (
                                            <li key={j} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                                {b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Visual card */}
                                <div className={`rounded-3xl p-10 flex flex-col items-center justify-center min-h-[240px] shadow-sm border border-slate-100 ${even ? 'bg-slate-50' : 'bg-primary-50'}`}>
                                    <div className="w-20 h-20 rounded-3xl bg-primary-600 flex items-center justify-center mb-6 shadow-lg">
                                        <Icon className="w-10 h-10 text-white" />
                                    </div>
                                    <p className="text-slate-700 font-semibold text-lg text-center">{svc.title}</p>
                                    <p className="text-primary-500 text-sm font-medium mt-1">{svc.tag}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── BOTTOM BANNER ── */}
            <section className="py-20 bg-primary-600">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-primary-100 text-sm font-semibold uppercase tracking-widest mb-4">Custom Solutions</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 max-w-xl mx-auto leading-snug">
                            Need a custom cleaning schedule for your facility?
                        </h2>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary-700 font-bold text-lg rounded-full hover:bg-primary-50 transition-all duration-300 shadow-xl group"
                        >
                            Get a Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
