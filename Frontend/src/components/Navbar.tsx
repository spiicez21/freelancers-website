import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Members', path: '/members' },
        { name: 'Works', path: '/works' },
        { name: 'About', path: '/about' },
    ];

    return (
        <>
            {/* Modular Compact Navbar - Floating Island Style */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 apple-blur rounded-2xl px-6 py-4 transition-all duration-300">
                <div className="flex items-center justify-between">

                    {/* Logo Section */}
                    <Link to="/" className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-xl font-display">C</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-zinc-900 dark:text-white font-display">
                            College<span className="text-emerald-500">Freelancers</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${location.pathname === link.path
                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                    : 'text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Actions & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 text-zinc-500 rounded-full hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        <div className="hidden md:flex items-center gap-4 ml-1">
                            <Link to="/login" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                                Log in
                            </Link>
                            <Link to="/join">
                                <Button size="sm" className="rounded-full px-5 text-xs font-bold">
                                    Join
                                </Button>
                            </Link>
                        </div>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-white dark:bg-zinc-950 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Close Button Absolute */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Mobile Links */}
                <div className="flex flex-col items-center space-y-8 text-center">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-3xl font-bold tracking-tight transition-colors duration-200 ${location.pathname === link.path
                                ? 'text-emerald-500'
                                : 'text-zinc-900 dark:text-white hover:text-emerald-500'
                                }`}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex flex-col gap-4 w-full px-8">
                        <Link to="/join" onClick={() => setIsOpen(false)}>
                            <Button size="lg" className="w-full rounded-full text-lg">
                                Join Now
                            </Button>
                        </Link>
                        <Link to="/login" onClick={() => setIsOpen(false)} className="text-zinc-500 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                            Log in
                        </Link>
                    </div>
                </div>

                {/* Decorative Bottom Text */}
                <div className="absolute bottom-10 text-sm text-zinc-400 tracking-widest uppercase">
                    College Freelancers
                </div>
            </div>
        </>
    );
};

export default Navbar;
