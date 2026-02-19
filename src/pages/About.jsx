import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Eye, Award } from 'lucide-react';

const pillars = [
    {
        icon: Eye,
        title: 'Owner-Supervised Guarantee',
        body: 'Every site — from a daily office clean to a complex post-construction job — is directly managed by an owner. You are never dealing with a faceless agency; you are dealing directly with the people who built this company.',
    },
    {
        icon: ShieldCheck,
        title: 'Vetted & Discreet Staff',
        body: 'We understand the confidentiality requirements of head offices, banking environments, and medical facilities. Our teams are background-checked, professionally trained, and operate with full discretion.',
    },
    {
        icon: Award,
        title: 'Industrial-Grade Standards',
        body: 'We invest in premium equipment and professional-grade cleaning chemicals specifically suited for high-traffic corporate environments. No shortcuts. No substitutions.',
    },
];

export default function About() {
    return (
        <>
            {/* ── PAGE HEADER ── */}
            <section className="relative pt-40 pb-24 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2070&q=80"
                        alt="Modern corporate office building"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900" />
                </div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-400 mb-4 block">Our Story</span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
                            Hands-On Management.{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                                Uncompromising Standards.
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* ── NARRATIVE ── */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-snug">
                                A Family Business Built on Corporate Standards
                            </h2>
                            <div className="space-y-5 text-slate-500 leading-relaxed text-base">
                                <p>
                                    Vision For Cleaning is family-owned and operated. That means every client we take on becomes a direct relationship — not a ticket in a queue. When you call, you speak to a decision-maker. When you have a concern, it is resolved immediately.
                                </p>
                                <p>
                                    Most cleaning agencies send you whoever is available. We operate differently. Every site is personally overseen by a family member or a senior supervisor we have trained ourselves. This is our guarantee — not a marketing line.
                                </p>
                                <p>
                                    We work with multinational corporations, medical facilities, showrooms, and construction firms. Each one chose us because they needed more than just cleaners — they needed a partner who understood their standards.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1683141112334-d7d404f6e716?auto=format&fit=crop&w=900&q=80"
                                alt="Two professional cleaners vacuuming a modern office"
                                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
                            />
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3 border border-slate-100">
                                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center flex-shrink-0">
                                    <Eye className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">Every project</p>
                                    <p className="text-sm font-bold text-slate-900">Owner Supervised</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── THREE PILLARS ── */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pillars.map((pillar, i) => {
                            const Icon = pillar.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.12, duration: 0.5 }}
                                    className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-3">{pillar.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{pillar.body}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── VALUE PROPOSITION QUOTE ── */}
            <section className="py-24 bg-slate-900">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="text-6xl text-primary-400 font-serif mb-6 leading-none">"</div>
                        <blockquote className="text-2xl md:text-3xl font-medium text-white leading-relaxed mb-8">
                            We are not the cheapest option in the market, and we don't try to be. We are the choice for businesses that value{' '}
                            <span className="text-primary-400">consistency</span>,{' '}
                            <span className="text-primary-400">security</span>, and an{' '}
                            <span className="text-primary-400">immaculate work environment</span>.
                        </blockquote>
                        <p className="text-slate-400 text-sm font-medium tracking-widest uppercase">— Vision For Cleaning</p>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to elevate your facility?</h3>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-lg shadow-primary-600/20 hover:-translate-y-0.5"
                    >
                        Contact Our Team
                    </Link>
                </div>
            </section>
        </>
    );
}
