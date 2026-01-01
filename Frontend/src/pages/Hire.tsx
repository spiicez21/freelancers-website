import React from 'react';
import { Send } from 'lucide-react';
import Button from '../components/ui/Button';

const Hire: React.FC = () => {
    return (
        <div className="relative max-w-lg mx-auto py-12 px-4">
            {/* Background Decor - Minimal & Subtle */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="text-center space-y-2 mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                    Start Your <span className="text-gradient">Project</span>
                </h1>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm mx-auto leading-relaxed">
                    Tell us about your vision. Professional quality, fresh perspectives.
                </p>
            </div>

            <form className="bg-white dark:bg-zinc-900/50 backdrop-blur-md p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all hover:shadow-md space-y-4">

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Your Name</label>
                        <input type="text" className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Organization</label>
                        <input type="text" className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400" placeholder="Company" />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400" placeholder="john@example.com" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Type</label>
                        <select className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white appearance-none cursor-pointer">
                            <option>Web Dev</option>
                            <option>Mobile App</option>
                            <option>Design</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Budget</label>
                        <select className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white appearance-none cursor-pointer">
                            <option>$1k - $5k</option>
                            <option>$5k - $10k</option>
                            <option>$10k+</option>
                            <option>Not sure</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Details</label>
                    <textarea rows={3} className="w-full px-3 py-2 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-lg focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 resize-none" placeholder="Briefly describe your vision..."></textarea>
                </div>

                <Button variant="primary" size="md" className="w-full py-2 text-sm gap-2 mt-2 shadow-emerald-500/20">
                    Submit Request
                    <Send size={14} />
                </Button>
            </form>
        </div>
    );
};

export default Hire;
