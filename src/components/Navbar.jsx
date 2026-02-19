import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <div className="bg-white rounded-xl px-3 py-1.5 shadow-sm">
                        <img src="/logo.png" alt="Vision For Cleaning" className="h-8 w-auto" />
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {links.map(l => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === '/'}
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${isActive
                                    ? 'text-white bg-white/10'
                                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        className="ml-4 px-5 py-2 bg-primary-500 hover:bg-primary-400 text-white text-sm font-semibold rounded-full transition-colors duration-200"
                    >
                        Get a Quote
                    </Link>
                </nav>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 px-6 py-4 space-y-1">
                    {links.map(l => (
                        <NavLink
                            key={l.to}
                            to={l.to}
                            end={l.to === '/'}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'text-white bg-white/10' : 'text-slate-300 hover:text-white'
                                }`
                            }
                        >
                            {l.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="block mt-2 px-4 py-3 bg-primary-500 text-white text-sm font-semibold rounded-lg text-center"
                    >
                        Get a Quote
                    </Link>
                </div>
            )}
        </header>
    );
}
