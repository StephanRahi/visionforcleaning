import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
    return (
        <div id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100 via-slate-50 to-white"></div>
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-accent-200/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Premium Cleaning Services
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-8 leading-[1.1]">
                            Experience the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                Clarity of Clean
                            </span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed">
                            Elevate your environment with Vision for Cleaning. We provide meticulous cleaning solutions for prestigious homes and forward-thinking companies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-16">
                            <a href="#contact" className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 group">
                                Get Your Quote
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold text-lg hover:bg-slate-50 transition-colors">
                                View Services
                            </a>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-200/60">
                            {[
                                "Background Verified Staff",
                                "Eco-Friendly Products",
                                "100% Satisfaction Guarantee"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
