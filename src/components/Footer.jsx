import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-900 text-slate-300">
            {/* CTA Banner */}
            <div className="bg-primary-600 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Upgrade Your<br />Facility Standards.
                        </h2>
                        <p className="text-primary-100 text-lg mb-10 max-w-xl mx-auto">
                            Get in touch today and let us show you what a professionally managed cleaning team can do for your business.
                        </p>
                        <a
                            href="https://wa.me/96176340955"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-700 font-bold text-lg rounded-full hover:bg-primary-50 transition-all duration-300 shadow-xl"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Request a Site Visit
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Contact Details */}
            <div className="py-16 border-b border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="text-2xl font-bold text-white mb-3">
                                Vision for Cleaning
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Premium commercial cleaning &amp; facility support. Owner-supervised teams for businesses that demand perfection.
                            </p>
                        </div>

                        {/* Phone */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-4 h-4 text-primary-400" />
                                </div>
                                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Phone</span>
                            </div>
                            <a
                                href="tel:+96176340955"
                                className="text-white font-medium hover:text-primary-400 transition-colors text-lg"
                            >
                                +961 76 340 955
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-4 h-4 text-green-400" />
                                </div>
                                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">WhatsApp</span>
                            </div>
                            <a
                                href="https://wa.me/96176340955"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white font-medium hover:text-green-400 transition-colors text-lg"
                            >
                                +961 76 340 955
                            </a>
                        </div>

                        {/* Email & Address */}
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Email</span>
                                </div>
                                <a
                                    href="mailto:info@visionforcleaning.com"
                                    className="text-white font-medium hover:text-primary-400 transition-colors break-all"
                                >
                                    info@visionforcleaning.com
                                </a>
                            </div>
                            <div>
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-4 h-4 text-primary-400" />
                                    </div>
                                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Address</span>
                                </div>
                                <span className="text-white font-medium">Jdeide, Lebanon</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="py-6">
                <div className="container mx-auto px-6 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} Vision for Cleaning. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
