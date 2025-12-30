import React from 'react';
import { HelpCircle, FileText, Mail } from 'lucide-react';

const HelpCenter: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 space-y-12">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-white">Help Center</h1>
                <p className="text-xl text-zinc-500 dark:text-zinc-400">How can we help you today?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <FileText size={24} />
                    </div>
                    <h3 className="font-bold text-lg dark:text-white">FAQs</h3>
                    <p className="text-sm text-zinc-500">Find answers to common questions about hiring and working.</p>
                    <button className="text-emerald-500 font-medium text-sm hover:underline">Read FAQs</button>
                </div>

                <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <HelpCircle size={24} />
                    </div>
                    <h3 className="font-bold text-lg dark:text-white">Support Ticket</h3>
                    <p className="text-sm text-zinc-500">Having an issue? Submit a ticket and we'll help you out.</p>
                    <button className="text-blue-500 font-medium text-sm hover:underline">Open Ticket</button>
                </div>

                <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Mail size={24} />
                    </div>
                    <h3 className="font-bold text-lg dark:text-white">Contact Us</h3>
                    <p className="text-sm text-zinc-500">Directly email our support team for specific inquiries.</p>
                    <button className="text-purple-500 font-medium text-sm hover:underline">Email Support</button>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;
