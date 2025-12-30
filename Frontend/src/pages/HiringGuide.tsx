import React from 'react';

const HiringGuide: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 space-y-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-2">Hiring Guide</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400">A step-by-step guide to finding the perfect student talent.</p>

            <div className="space-y-8 mt-8">
                <div className="flex gap-6">
                    <div className="flex-none flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">1</div>
                        <div className="w-0.5 h-full bg-zinc-200 dark:bg-zinc-800 mt-2"></div>
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold dark:text-white mb-2">Define Your Project</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Be clear about your requirements, timeline, and budget. The more detail you provide, the better match we can find.</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-none flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">2</div>
                        <div className="w-0.5 h-full bg-zinc-200 dark:bg-zinc-800 mt-2"></div>
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold dark:text-white mb-2">Browse & Filter</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Use our "Members" page to filter by skill (React, Design, Python). Look for "Available" badges.</p>
                    </div>
                </div>

                <div className="flex gap-6">
                    <div className="flex-none flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold">3</div>
                        {/* No line for last item */}
                    </div>
                    <div className="pb-8">
                        <h3 className="text-xl font-bold dark:text-white mb-2">Contact & Interview</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">Reach out directly via the profile contact options. We recommend a quick video call to align on expectations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HiringGuide;
