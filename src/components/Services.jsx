import { Home, Building2, Sparkles, shieldCheck, Clock, Award } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Home className="w-8 h-8 text-primary" />,
            title: "Residential Cleaning",
            description: "Comprehensive home cleaning services tailored to your lifestyle. From deep cleaning to regular maintenance.",
            features: ["Deep Cleaning", "Standard Cleaning", "Move-in/Move-out"]
        },
        {
            icon: <Building2 className="w-8 h-8 text-primary" />,
            title: "Commercial Cleaning",
            description: "Professional cleaning solutions for offices and commercial spaces. Maintain a pristine business environment.",
            features: ["Office Spaces", "Retail Stores", "Post-Construction"]
        }
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
                    <p className="text-lg text-slate-600">
                        We deliver excellence in every detail. Choose the service that fits your needs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div key={index} className="group p-8 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                            <div className="bg-primary-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-slate-700 font-medium">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
