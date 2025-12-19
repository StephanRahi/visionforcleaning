import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
                            Get in Touch
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Discuss Your Cleaning Needs</h2>
                        <p className="text-lg text-slate-600 mb-12">
                            Ready to experience the Vision for Cleaning difference? Contact us today for a free quote tailored to your specific requirements.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    icon: <Phone className="w-6 h-6" />,
                                    title: "Phone",
                                    value: "+1 (555) 123-4567",
                                    link: "tel:+15551234567"
                                },
                                {
                                    icon: <Mail className="w-6 h-6" />,
                                    title: "Email",
                                    value: "contact@visionforcleaning.com",
                                    link: "mailto:contact@visionforcleaning.com"
                                },
                                {
                                    icon: <MapPin className="w-6 h-6" />,
                                    title: "Location",
                                    value: "Serving Greater Metro Area",
                                    link: "#"
                                }
                            ].map((item, index) => (
                                <a key={index} href={item.link} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-primary-50/50 transition-colors group">
                                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors text-slate-700">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="font-medium text-slate-900 mb-1">{item.title}</div>
                                        <div className="text-primary font-bold text-lg">{item.value}</div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="Your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Phone</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="Your phone" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="your@email.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Service Type</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-slate-600">
                                    <option>Residential Cleaning</option>
                                    <option>Commercial Cleaning</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white" placeholder="Tell us about your cleaning needs..."></textarea>
                            </div>

                            <button className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-700 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 group">
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
