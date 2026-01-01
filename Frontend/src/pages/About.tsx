import React from 'react';
import { Users, Target, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    return (
        <div className="space-y-32 pb-20">
            {/* 1. Hero Section */}
            <section className="relative w-[calc(100vw-20px)] relative left-1/2 -ml-[calc(50vw-10px)]">
                <div className="relative w-full h-[65vh] md:h-[80vh] bg-black rounded-[48px] overflow-hidden group shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                        alt="Team collaboration"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2s]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-10 md:p-20 max-w-6xl">
                        <span className="text-emerald-400 font-bold tracking-[0.2em] text-xs md:text-sm mb-8 block uppercase font-display">Our Mission</span>
                        <h1 className="text-7xl md:text-9xl lg:text-[11vw] font-bold text-white tracking-tighter leading-[0.8] mb-10 font-display">
                            THE <span className="text-emerald-500">NEW</span> <br /> STANDARD
                        </h1>
                        <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl leading-relaxed font-body font-medium">
                            Bridging the gap between ambitious academic talent and businesses needing professional-grade digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Values Bento Grid */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white font-display tracking-tight leading-none">Core Values</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-6 text-xl font-body">What drives our platform forward every day.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[400px]">
                    {/* Large Card: Community */}
                    <div className="md:col-span-2 p-12 rounded-[48px] apple-blur border border-zinc-200 dark:border-white/10 relative overflow-hidden group flex flex-col justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent dark:from-indigo-500/10 dark:to-transparent" />
                        <div className="absolute right-[-80px] top-[-80px] opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                            <Users size={500} />
                        </div>

                        <div className="relative z-10 max-w-2xl">
                            <div className="w-20 h-20 rounded-[24px] bg-indigo-500/10 dark:bg-indigo-500/20 flex items-center justify-center mb-10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                                <Users size={40} />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-8 font-display tracking-tight">Empowering Community</h3>
                            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-body font-medium">
                                We're not just a platform; we're fostering a thriving ecosystem where students grow through real-world experience and professional mentorship.
                            </p>
                        </div>
                    </div>

                    {/* Card: Excellence */}
                    <div className="p-12 rounded-[48px] apple-blur border border-zinc-200 dark:border-white/10 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent dark:from-emerald-500/10 dark:to-transparent" />
                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-[24px] bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center mb-10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                                <Target size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 font-display tracking-tight">Excellence</h3>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-body font-medium leading-relaxed">
                                Delivering professional-grade work that rivals - and often exceeds - conventional industry standards.
                            </p>
                        </div>
                    </div>

                    {/* Card: Trust */}
                    <div className="p-12 rounded-[48px] apple-blur border border-zinc-200 dark:border-white/10 relative overflow-hidden group flex flex-col justify-between">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent dark:from-orange-500/10 dark:to-transparent" />
                        <div className="relative z-10">
                            <div className="w-20 h-20 rounded-[24px] bg-orange-500/10 dark:bg-orange-500/20 flex items-center justify-center mb-10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                                <ShieldCheck size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-zinc-900 dark:text-white mb-6 font-display tracking-tight">Trust & Safety</h3>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-body font-medium leading-relaxed">
                                A fully vetted platform ensuring reliability, security, and quality assurance for every project.
                            </p>
                        </div>
                    </div>

                    {/* Large Card: CTA */}
                    <div className="md:col-span-2 p-12 rounded-[48px] bg-emerald-600 relative overflow-hidden group flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-[3s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 to-transparent" />

                        <div className="relative z-10 max-w-2xl">
                            <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 font-display tracking-tight leading-[0.9]">Join the Revolution</h3>
                            <p className="text-emerald-50 mb-12 text-xl font-body font-medium leading-relaxed">Whether you're a student looking to build your career or a business needing fresh, expert perspective.</p>
                            <div className="flex flex-wrap gap-6">
                                <Link to="/hire" className="px-10 py-5 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-all active:scale-95 font-display text-sm tracking-widest uppercase">
                                    HIRE TALENT
                                </Link>
                                <Link to="/members" className="px-10 py-5 bg-emerald-950/40 text-white backdrop-blur-md border border-white/20 font-bold rounded-2xl hover:bg-emerald-950/60 transition-all active:scale-95 font-display text-sm tracking-widest uppercase">
                                    BROWSE EXPERTS
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Principles Section */}
            <section className="max-w-screen-2xl mx-auto px-4 md:px-8 pb-20">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white font-display tracking-tight">Our Principles</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: 'Quality First', desc: 'We maintain high standards through mentorship and rigorous peer reviews.', icon: '🏆', color: 'emerald' },
                        { title: 'Fresh Vision', desc: 'Students bring latest tech conocimiento and innovative academic perspectives.', icon: '💡', color: 'blue' },
                        { title: 'Reliable Growth', desc: 'Managed by senior members to ensure deadlines and project integrity.', icon: '📈', color: 'orange' }
                    ].map((value, i) => (
                        <div key={i} className="apple-blur p-12 rounded-[40px] border border-zinc-200 dark:border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 group">
                            <div className="text-5xl mb-10 group-hover:scale-125 transition-transform duration-500 inline-block">{value.icon}</div>
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 font-display tracking-tight">{value.title}</h3>
                            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed font-body font-medium text-lg">
                                {value.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
