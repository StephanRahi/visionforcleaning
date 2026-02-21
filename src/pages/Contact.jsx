import { motion } from 'framer-motion';
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', company: '', phone: '', service: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const handleSubmit = e => {
        e.preventDefault();
        // Build a WhatsApp message with the form data
        const msg = encodeURIComponent(
            `Hello Vision For Cleaning!\n\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nService: ${form.service}`
        );
        window.open(`https://wa.me/96176340955?text=${msg}`, '_blank');
        setSubmitted(true);
    };

    return (
        <>
            {/* ── PAGE HEADER ── */}
            <section className="pt-40 pb-20 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#1d4ed825,transparent_60%)]" />
                <div className="relative container mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary-400 mb-4 block">
                            Get In Touch
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            Upgrade Your Facility{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                                Standards Today.
                            </span>
                        </h1>
                        <p className="mt-6 text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                            Reach out directly or fill in the form below — we respond fast.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                        {/* ── CONTACT INFO ── */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Direct Contact</h2>
                            <div className="space-y-6">
                                {/* Phone */}
                                <a
                                    href="tel:+96176340955"
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Phone</p>
                                        <p className="text-slate-900 font-semibold text-lg">+961 76 340 955</p>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/96176340955"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-green-200 hover:bg-green-50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                        <MessageCircle className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">WhatsApp</p>
                                        <p className="text-slate-900 font-semibold text-lg">Chat with us directly</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:visionforcleaning@gmail.com"
                                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-primary-200 hover:bg-primary-50 transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary-600 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                                        <Mail className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Email</p>
                                        <p className="text-slate-900 font-semibold">visionforcleaning@gmail.com</p>
                                    </div>
                                </a>

                                {/* Address */}
                                <div className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-700 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-0.5">Address</p>
                                        <p className="text-slate-900 font-semibold">Jdeideh, Lebanon</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* ── CONTACT FORM ── */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Request</h2>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
                                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Request Sent!</h3>
                                    <p className="text-slate-500">We've opened WhatsApp with your details. We'll be in touch shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Name <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Company Name <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            id="company"
                                            name="company"
                                            type="text"
                                            required
                                            value={form.company}
                                            onChange={handleChange}
                                            placeholder="Your company or organisation"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Phone Number <span className="text-primary-500">*</span>
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+961 xx xxx xxx"
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                                        />
                                    </div>

                                    {/* Service dropdown */}
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                                            What service are you looking for? <span className="text-primary-500">*</span>
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            required
                                            value={form.service}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="" disabled>Select a service…</option>
                                            <option value="Office Cleaning">Office Cleaning</option>
                                            <option value="Post-Construction">Post-Construction</option>
                                            <option value="Floor Care">Floor Care</option>
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/20 hover:-translate-y-0.5 mt-2"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Request
                                    </button>
                                    <p className="text-xs text-slate-400 text-center">
                                        Submitting opens WhatsApp with your details pre-filled for instant response.
                                    </p>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
