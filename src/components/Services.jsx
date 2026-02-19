import { motion } from 'framer-motion';
import { Building2, HardHat, Layers } from 'lucide-react';

const services = [
    {
        icon: Building2,
        title: 'Corporate Maintenance',
        body: 'Daily and weekly office cleaning tailored for corporate environments.',
        tag: 'Office',
    },
    {
        icon: HardHat,
        title: 'Post-Construction Detailing',
        body: 'Deep cleaning for new builds and renovations to make your property showroom-ready.',
        tag: 'Construction',
    },
    {
        icon: Layers,
        title: 'Specialized Floor Care',
        body: 'Carpet extraction, hard floor polishing & rubber flooring.',
        tag: 'Flooring',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-28 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-600 mb-4 block">
                        What We Do
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Services</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((svc, i) => {
                        const Icon = svc.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 p-10"
                            >
                                {/* Decorative gradient blob */}
                                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-primary-600 flex items-center justify-center shadow-lg">
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                        <span className="text-xs font-semibold tracking-wider uppercase text-primary-500 bg-primary-50 border border-primary-100 px-3 py-1 rounded-full">
                                            {svc.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{svc.title}</h3>
                                    <p className="text-slate-500 leading-relaxed">{svc.body}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
