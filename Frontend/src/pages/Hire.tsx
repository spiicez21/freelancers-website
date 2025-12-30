import React from 'react';
import { Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Hire: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto space-y-10">
            <div className="text-center space-y-4 mb-16">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400 pb-2">
                    Start Your Project
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                    Tell us about your vision. Our talented student freelancers are ready to bring it to life with professional quality and fresh perspectives.
                </p>
            </div>
            <form className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-black/20 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Your Name</label>
                        <input type="text" className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Organization</label>
                        <input type="text" className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400" placeholder="Company Name" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Project Type</label>
                        <select className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-zinc-900 dark:text-white appearance-none">
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>UI/UX Design</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Budget Range</label>
                        <select className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-zinc-900 dark:text-white appearance-none">
                            <option>$1k - $5k</option>
                            <option>$5k - $10k</option>
                            <option>$10k+</option>
                            <option>Not sure yet</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Project Details</label>
                    <textarea rows={4} className="w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-zinc-900 dark:text-white placeholder:text-zinc-400 resize-none" placeholder="Tell us about your project..."></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full gap-2 group">
                    Submit Project Request
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
            </form>
        </div>
    );
};

export default Hire;
