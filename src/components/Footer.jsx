import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="py-14 border-b border-slate-800">
                <div className="container mx-auto px-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <div className="mb-4">
                                <div className="bg-white rounded-2xl px-4 py-2 inline-block shadow-md">
                                    <img src="/logo.png" alt="Vision For Cleaning" className="h-12 w-auto" />
                                </div>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                                Premium commercial cleaning &amp; facility support. Owner-supervised. Industrial-grade.
                            </p>
                        </div>

                        {/* Nav */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Pages</h4>
                            <ul className="space-y-2.5">
                                {[['/', 'Home'], ['/about', 'About'], ['/services', 'Services'], ['/contact', 'Contact']].map(([to, label]) => (
                                    <li key={to}>
                                        <Link to={to} className="text-slate-400 hover:text-white transition-colors text-sm">
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Phone & WA */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="tel:+96176340955" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                                        <Phone className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                        +961 76 340 955
                                    </a>
                                </li>
                                <li>
                                    <a href="https://wa.me/96176340955" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors text-sm">
                                        <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:visionforcleaning@gmail.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                                        <Mail className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                        visionforcleaning@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-2 text-slate-400 text-sm">
                                    <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0" />
                                    Jdeideh, Lebanon
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-400 text-sm mb-4">Ready to upgrade your facility?</p>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm rounded-full transition-colors duration-200"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6">
                <div className="container mx-auto px-6 text-center text-slate-500 text-xs">
                    © {new Date().getFullYear()} Vision For Cleaning. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
