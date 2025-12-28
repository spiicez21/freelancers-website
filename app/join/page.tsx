"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";
import Link from "next/link";

export default function Join() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Join the Network</h1>
                        <p className="text-gray-500 font-medium">
                            Apply to become a verified member of the Freelancers Club.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm">
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Full Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="Alex Morgan" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">College Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="alex@college.edu" />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900">Student ID</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="2023001" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-900">Year</label>
                                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium">
                                        <option>1st Year</option>
                                        <option>2nd Year</option>
                                        <option>3rd Year</option>
                                        <option>4th Year</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Primary Skill</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="e.g. Graphic Design, React, Copywriting" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-900">Portfolio Link (Optional)</label>
                                <input type="url" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" placeholder="https://example.com" />
                            </div>

                            <div className="pt-2">
                                <Button className="w-full rounded-xl py-4 text-base shadow-lg shadow-green-900/10 font-bold">Submit Application</Button>
                            </div>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-sm text-gray-500 font-medium">
                                Already a member? <Link href="/login" className="text-primary font-bold hover:underline">Log in</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
