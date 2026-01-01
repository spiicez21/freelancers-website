import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(email);
        if (email.includes('admin')) {
            navigate('/admin');
        } else {
            navigate('/members');
        }
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center relative">
            {/* Background Decor */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

            <div className="relative w-full max-w-[420px] mx-auto p-12 apple-blur border border-zinc-200 dark:border-white/10 rounded-[32px] shadow-2xl">
                <div className="text-center mb-10 space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white font-display">Welcome Back</h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-body">Enter your credentials to access your account.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1 font-display">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-5 py-3.5 apple-blur border border-zinc-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 font-body"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 ml-1 font-display">Security Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-5 py-3.5 apple-blur border border-zinc-200 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 font-body"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button variant="primary" size="lg" className="w-full py-4 mt-4 shadow-xl shadow-emerald-500/20 font-display uppercase tracking-widest text-xs">
                        AUTHENTICATE
                    </Button>
                </form>

                <div className="mt-10 text-center text-xs text-zinc-500 dark:text-zinc-400 font-body">
                    New to the club?{' '}
                    <Link to="/join" className="text-emerald-500 hover:text-emerald-400 font-bold transition-colors">
                        JOIN NOW
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
