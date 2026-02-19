import { motion } from 'framer-motion';
import { Users, ShieldCheck, Gem } from 'lucide-react';

const differentiators = [
    {
        icon: Users,
        title: 'Owner Supervision.',
        body: 'Most agencies send strangers. We send managed teams. A family member or senior supervisor inspects every site to ensure consistent quality.',
        accent: 'from-primary-500 to-primary-700',
    },
    {
        icon: ShieldCheck,
        title: 'Corporate Security.',
        body: 'We understand the privacy and security needs of head offices, banks, and medical facilities. Our staff is vetted, trained, and discreet.',
        accent: 'from-slate-600 to-slate-800',
    },
    {
        icon: Gem,
        title: 'Authentic Work.',
        body: 'No hidden costs. No cutting corners. We use premium industrial equipment and chemicals to protect your assets.',
        accent: 'from-primary-400 to-primary-600',
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-28 bg-slate-50">
            <div className="container mx-auto px-6">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-600 mb-4 block">
                        Our Standard
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Why We Are <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Different</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {differentiators.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="group relative bg-white rounded-3xl p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                            >
                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-8 shadow-lg`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>

                                {/* Number accent */}
                                <span className="absolute top-8 right-10 text-5xl font-black text-slate-100 select-none">
                                    {String(i + 1).padStart(2, '0')}
                                </span>

                                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                <p className="text-slate-500 leading-relaxed text-base">{item.body}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
