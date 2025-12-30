import React from 'react';

const Terms: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 space-y-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">Terms of Service</h1>

            <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Introduction</h2>
                    <p>Welcome to College Freelancers. By accessing our website, you agree to be bound by these Terms of Service.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. User Agreements</h2>
                    <p>Both freelancers (students) and clients must adhere to professional standards. We reserve the right to suspend accounts for misconduct.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Payments & Services</h2>
                    <p>College Freelancers acts as a connector. Payment terms are often agreed upon directly or via our secure escrow (if applicable).</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Liability</h2>
                    <p>Kongu Engineering College is not liable for disputes arising from direct freelance contracts, though we provide mediation support.</p>
                </section>
            </div>
        </div>
    );
};

export default Terms;
