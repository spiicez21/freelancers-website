import React from 'react';
import { CheckCircle2, Search, MessageSquare, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            icon: <Search className="w-8 h-8 text-emerald-500" />,
            title: "1. Browse or Post",
            desc: "Search our curated talent pool or post your project details to get matched."
        },
        {
            icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
            title: "2. Connect",
            desc: "Chat directly with students. View their portfolios and discuss project scope."
        },
        {
            icon: <CheckCircle2 className="w-8 h-8 text-purple-500" />,
            title: "3. Hire & Collaborate",
            desc: "Agree on terms and start working. Our platform ensures clear communication."
        },
        {
            icon: <Zap className="w-8 h-8 text-orange-500" />,
            title: "4. Professional Results",
            desc: "Receive high-quality deliverables at competitive student rates."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-12 space-y-16">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">How it Works</h1>
                <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
                    Simple, transparent, and efficient. We bridge the gap between student talent and professional needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="p-8 rounded-[32px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col gap-4 hover:border-emerald-500/30 transition-colors">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center mb-2">
                            {step.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{step.title}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-[40px] p-12 text-center">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Ready to get started?</h2>
                <div className="flex justify-center gap-4">
                    <a href="/members" className="px-6 py-3 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-colors">Browse Talent</a>
                    <a href="/hire" className="px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-full font-bold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors">Post a Job</a>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
