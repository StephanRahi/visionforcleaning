export default function Footer() {
    return (
        <footer className="bg-primary-950 text-slate-300 py-12 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="text-2xl font-bold text-white mb-4">Vision for Cleaning</div>
                        <p className="max-w-xs text-slate-400">
                            Providing top-tier cleaning services for residential and commercial clients. Quality and satisfaction guaranteed.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Vision for Cleaning. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
