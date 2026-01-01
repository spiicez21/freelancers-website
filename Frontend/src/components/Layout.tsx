import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Layout: React.FC = () => {
    const [darkMode, setDarkMode] = useState(true); // Default to dark mode

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="min-h-screen flex flex-col bg-apple-gradient text-zinc-900 dark:text-zinc-100 transition-colors duration-300 relative overflow-x-hidden">
            <div className="grain-overlay" />
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="pt-30 pb-6 px-4 max-w-screen-2xl mx-auto w-full flex-grow relative z-10">
                <Outlet />
            </main>

            {/* Footer with Pre-Footer CTA */}
            <footer className="mt-32 pb-12">
                <div className="max-w-screen-xl mx-auto px-4">


                    {/* Main Footer Content */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
                        {/* Brand Column */}
                        <div className="col-span-2 md:col-span-1 flex flex-col justify-start">
                            <div className="flex items-center space-x-2">
                                <span className="font-bold text-2xl text-zinc-900 dark:text-white">College<span className="text-emerald-500">Freelancers</span></span>
                            </div>
                        </div>

                        {/* Link Columns */}
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 text-lg">Platform</h4>
                            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                <li><a href="/members" className="hover:text-emerald-500 transition-colors">Browse Talent</a></li>
                                <li><a href="/how-it-works" className="hover:text-emerald-500 transition-colors">How it Works</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 text-lg">Company</h4>
                            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                <li><a href="/about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                                <li><a href="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                                <li><a href="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 text-lg">Resources</h4>
                            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                                <li><a href="/help" className="hover:text-emerald-500 transition-colors">Help Center</a></li>
                                <li><a href="/guide" className="hover:text-emerald-500 transition-colors">Hiring Guide</a></li>
                                <li><a href="/status" className="hover:text-emerald-500 transition-colors">Server Status</a></li>
                            </ul>
                        </div>

                        {/* Get in Touch */}
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6 text-lg">Get in touch</h4>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6 leading-relaxed">
                                Questions or feedback? We'd love to hear from you.
                            </p>
                            <div className="flex gap-6">
                                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors hover:scale-110 transform duration-200">
                                    <Instagram size={24} />
                                </a>
                                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors hover:scale-110 transform duration-200">
                                    <Twitter size={24} />
                                </a>
                                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors hover:scale-110 transform duration-200">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Copyright & Developer Info */}
                    <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                            &copy; {new Date().getFullYear()} Kongu Engineering College
                        </p>
                        <p className="text-xs text-zinc-400 font-medium">
                            Developed by Varunkumar N, Yuga Bharathi J and Rohit
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
