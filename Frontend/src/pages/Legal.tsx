import React from 'react';

const Legal: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-12 py-10">
            <section className="space-y-4">
                <h1 className="text-3xl font-bold dark:text-white">Privacy Policy</h1>
                <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
                    This privacy policy sets out how our website uses and protects any information that you give us when you use this website. We are committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, then you can be assured that it will only be used in accordance with this privacy statement.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold dark:text-white">Terms of Service</h2>
                <div className="space-y-4 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    <p>
                        By accessing this website, you are agreeing to be bound by these web site Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                    </p>
                    <p>
                        The materials on this web site are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Legal;
