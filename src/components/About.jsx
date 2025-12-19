import { Shield, Users, Clock } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-200/50 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            {/* Abstract Image Placeholder using Gradients */}
                            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/20 text-9xl font-bold select-none">VFC</span>
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-30"></div>
                                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-green-50 rounded-lg">
                                        <Shield className="w-8 h-8 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-slate-900">100%</div>
                                        <div className="text-slate-600 text-sm font-medium">Satisfaction Guaranteed</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
                            About Us
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            We Don't Just Clean,<br />
                            <span className="text-primary">We Care for Your Space.</span>
                        </h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Founded on the principles of integrity and excellence, Vision for Cleaning has established itself as a premier provider of cleaning services. We believe that a clean environment is the foundation for a healthy, productive life.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: <Users className="w-6 h-6 text-primary" />,
                                    title: "Expert Team",
                                    desc: "Our staff is rigorously trained and background checked."
                                },
                                {
                                    icon: <Clock className="w-6 h-6 text-primary" />,
                                    title: "Reliable Service",
                                    desc: "We respect your time and schedule with punctual service."
                                },
                                {
                                    icon: <Shield className="w-6 h-6 text-primary" />,
                                    title: "Quality Guaranteed",
                                    desc: "If you're not satisfied, we'll make it right."
                                }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-slate-100">
                                    <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
