import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="space-y-24 pb-10">
            {/* 1. Hero Section (Home Style) */}
            <section className="relative w-[calc(100vw-20px)] relative left-1/2 -ml-[calc(50vw-10px)]">
                <div className="relative w-full h-[60vh] bg-black rounded-[40px] overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                        <span className="text-emerald-400 font-medium tracking-wide text-lg mb-4 block">Our Mission</span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight mb-6">
                            Building the <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">Future of Work</span>
                        </h1>
                        <p className="text-xl text-zinc-300 max-w-2xl leading-relaxed">
                            College Freelancers bridges the gap between ambitious student talent and businesses needing professional-grade digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Values Bento Grid */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">Core Values</h2>
                    <p className="text-zinc-500 hidden md:block">What drives our platform forward.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

                    {/* Large Card: Community */}
                    <div className="md:col-span-2 p-10 rounded-[40px] bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-900/20 dark:to-transparent" />
                        <div className="absolute right-0 top-0 p-10 opacity-10 dark:opacity-5 group-hover:scale-110 transition-transform duration-500">
                            <Users size={200} />
                        </div>

                        <div className="relative z-10 max-w-lg">
                            <div className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400">
                                <Users size={32} />
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Empowering Community</h3>
                            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                We're not just a job board. We're fostering a thriving ecosystem where students grow through real-world experience and mentorship.
                            </p>
                        </div>
                    </div>

                    {/* Card: Excellence */}
                    <div className="p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent dark:from-emerald-900/20 dark:to-transparent" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
                                <Target size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Excellence</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Delivering professional-grade work that rivals - and often exceeds - industry standards.
                            </p>
                        </div>
                    </div>

                    {/* Card: Trust */}
                    <div className="p-8 rounded-[40px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent dark:from-orange-900/20 dark:to-transparent" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-2xl bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center mb-6 text-orange-600 dark:text-orange-400">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Trust & Safety</h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                A fully vetted, college-affiliated platform ensuring reliability, security, and quality assurance.
                            </p>
                        </div>
                    </div>

                    {/* Large Card: Ready to Join? */}
                    <div className="md:col-span-2 p-10 rounded-[40px] bg-black relative overflow-hidden group flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent" />

                        <div className="relative z-10 max-w-xl">
                            <h3 className="text-3xl font-bold text-white mb-4">Join our revolution</h3>
                            <p className="text-zinc-300 mb-8 text-lg">Whether you're a student looking to build your portfolio or a business needing fresh talent.</p>
                            <div className="flex gap-4">
                                <Link to="/hire" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors">
                                    Hire Talent
                                </Link>
                                <Link to="/members" className="px-6 py-3 bg-zinc-800 text-white font-bold rounded-full hover:bg-zinc-700 transition-colors">
                                    Browse Experts
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. Core Team Section */}
            <section className="max-w-6xl mx-auto px-4 pt-10">
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10 text-center">Meet the Core Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: 'Quality First', desc: 'We maintain high standards through mentorship and peer code reviews.', gradient: 'from-pink-500 to-rose-500' },
                        { title: 'Fresh Perspective', desc: 'Students bring the latest tech stack knowledge and innovative ideas.', gradient: 'from-cyan-500 to-blue-500' },
                        { title: 'Reliable Delivery', desc: 'Managed by senior students to ensure deadlines and requirements are met.', gradient: 'from-amber-500 to-orange-500' }
                    ].map((value, i) => (
                        <div key={i} className="p-1 rounded-3xl bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 hover:from-zinc-300 dark:hover:from-zinc-700 transition-colors hover:scale-[1.02] duration-300">
                            <div className="bg-white dark:bg-zinc-950 p-8 rounded-[22px] h-full relative overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.gradient} opacity-10 blur-3xl -mr-10 -mt-10 rounded-full`}></div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 relative z-10">{value.title}</h3>
                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm relative z-10">
                                    {value.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
