import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

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
        <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="pt-16 pb-6 px-4 max-w-screen-2xl mx-auto w-full flex-grow">
                <Outlet />
            </main>
            <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 pt-16 pb-8 mt-20">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        {/* Brand Column */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-green-400 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">C</span>
                                </div>
                                <span className="font-bold text-xl dark:text-white">College<span className="text-emerald-500">Freelancers</span></span>
                            </div>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                Bridging the gap between academic excellence and real-world business needs.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Platform</h4>
                            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                                <li><a href="/members" className="hover:text-emerald-500 transition-colors">Browse Talent</a></li>
                                <li><a href="/works" className="hover:text-emerald-500 transition-colors">Success Stories</a></li>
                                <li><a href="/hire" className="hover:text-emerald-500 transition-colors">Pricing & Plans</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Company</h4>
                            <ul className="space-y-4 text-sm text-zinc-500 dark:text-zinc-400">
                                <li><a href="/about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                                <li><a href="/join" className="hover:text-emerald-500 transition-colors">Join as Freelancer</a></li>
                                <li><a href="/legal" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                            </ul>
                        </div>

                        {/* Newsletter / Contact */}
                        <div>
                            <h4 className="font-bold text-zinc-900 dark:text-white mb-6">Stay Updated</h4>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                                Get the latest updates on new talent features throughout the semester.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-sm w-full focus:outline-none focus:border-emerald-500 dark:text-white placeholder:text-zinc-400"
                                />
                                <button className="p-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors">
                                    →
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">&copy; {new Date().getFullYear()} College Freelancers Platform. All rights reserved.</p>
                        <div className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
                            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-emerald-500 transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
