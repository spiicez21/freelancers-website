import React from 'react';

const Privacy: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto py-12 space-y-8">
            <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">Privacy Policy</h1>

            <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-600 dark:text-zinc-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Data Collection</h2>
                    <p>We collect basic information such as name, email, and portfolio details to facilitate project matching.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Usage of Information</h2>
                    <p>Your data is used solely for the purpose of connecting students with potential clients. We do not sell data to third parties.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Security</h2>
                    <p>We implement standard security measures to protect your personal information.</p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
