"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-20">
                <div className="max-w-md mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Welcome Back</h1>
                        <p className="text-gray-500 font-medium">
                            Log in to manage your portfolio and projects.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="you@example.com" />
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-gray-900">Password</label>
                                    <Link href="#" className="text-xs font-semibold text-primary hover:underline">Forgot password?</Link>
                                </div>
                                <input type="password" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="••••••••" />
                            </div>

                            <div className="pt-2">
                                <Button className="w-full rounded-xl py-4 text-base shadow-lg shadow-green-900/10 font-bold">Log In</Button>
                            </div>
                        </form>

                        <div className="mt-8 text-center border-t border-gray-100 pt-8">
                            <p className="text-sm text-gray-500 font-medium mb-4">Don't have an account?</p>
                            <Link href="/join">
                                <Button variant="outline" className="w-full font-bold">Apply for Membership</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
