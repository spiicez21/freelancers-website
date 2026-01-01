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
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="relative w-full max-w-sm mx-auto p-8">
                {/* Background Decor */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="text-center mb-8 space-y-2">
                    <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Welcome Back</h1>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Enter your credentials to access your account.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 dark:text-zinc-400 ml-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400"
                            placeholder="••••••••"
                        />
                    </div>

                    <Button variant="primary" size="md" className="w-full py-2.5 mt-2 shadow-emerald-500/20">
                        Sign In
                    </Button>
                </form>

                <div className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-400">
                    Don't have an account?{' '}
                    <Link to="/join" className="text-emerald-500 hover:text-emerald-400 font-medium transition-colors">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
