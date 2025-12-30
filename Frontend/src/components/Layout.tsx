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
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <main className="pt-16 pb-6 px-4 max-w-screen-xl mx-auto">
                <Outlet />
            </main>
            <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-12 bg-zinc-50 dark:bg-zinc-950">
                <div className="max-w-screen-xl mx-auto px-4 text-center">
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">&copy; {new Date().getFullYear()} College Freelancers Platform. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
