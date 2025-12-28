"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/ui/Button";

export default function Hire() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="max-w-xl mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-display font-medium text-gray-900 mb-4">Hire From Us</h1>
                        <p className="text-gray-500">
                            Tell us about your project. We'll connect you with the right student talent.
                        </p>
                    </div>

                    <div className="bg-white p-8 md:p-10 rounded-[40px] border border-gray-100 shadow-sm">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Your Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-900">Organization</label>
                                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Company Inc." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Project Type</label>
                                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20">
                                    <option>Web Development</option>
                                    <option>Mobile App</option>
                                    <option>Design & Branding</option>
                                    <option>Marketing</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-900">Project Details</label>
                                <textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 h-32 resize-none" placeholder="Describe your project goals, timeline, and requirements..."></textarea>
                            </div>

                            <Button className="w-full rounded-xl py-4 text-base shadow-lg shadow-green-900/10">Submit Request</Button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
