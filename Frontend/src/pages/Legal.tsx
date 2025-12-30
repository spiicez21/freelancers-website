import React from 'react';

const Legal: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-12 py-10">
            <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Legal Information</h1>

            <div className="space-y-12">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Privacy Policy</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Terms of Service</h2>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Legal;
