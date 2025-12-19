import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <span className={`text-xl font-bold font-sans tracking-tight ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
                        Vision for Cleaning
                    </span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Home', 'Services', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-slate-600 hover:text-primary font-medium transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-primary-700 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40">
                        Get a Quote
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-700 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    {['Home', 'Services', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-lg font-medium text-slate-700 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="bg-primary text-white text-center py-3 rounded-lg font-medium">
                        Get a Quote
                    </a>
                </div>
            )}
        </nav>
    );
}
