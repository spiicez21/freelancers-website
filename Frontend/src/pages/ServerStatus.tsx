import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServerStatus: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto py-12 space-y-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">System Status</h1>

            <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-4">
                <CheckCircle className="text-emerald-500 w-8 h-8" />
                <div>
                    <h3 className="font-bold text-emerald-700 dark:text-emerald-400">All Systems Operational</h3>
                    <p className="text-sm text-emerald-600 dark:text-emerald-500">Last updated: Just now</p>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="font-bold text-lg dark:text-white px-2">Service Breakdown</h3>

                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="font-medium dark:text-zinc-300">Website Frontend</span>
                    <span className="flex items-center gap-2 text-sm text-emerald-500 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Operational</span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="font-medium dark:text-zinc-300">API Gateway</span>
                    <span className="flex items-center gap-2 text-sm text-emerald-500 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Operational</span>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="font-medium dark:text-zinc-300">Database</span>
                    <span className="flex items-center gap-2 text-sm text-emerald-500 font-medium"><div className="w-2 h-2 rounded-full bg-emerald-500"></div> Operational</span>
                </div>
            </div>
        </div>
    );
};

export default ServerStatus;
