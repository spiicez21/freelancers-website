import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="font-display font-medium text-xl text-primary tracking-tight">FreelancersHub</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            A market-ready, scalable portfolio showcase platform for student freelancers.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-medium text-gray-900 mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/members" className="hover:text-primary">Browse Members</Link></li>
                            <li><Link href="/projects" className="hover:text-primary">Featured Projects</Link></li>
                            <li><Link href="/hire" className="hover:text-primary">Hire Talent</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-medium text-gray-900 mb-6">Club</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                            <li><Link href="/join" className="hover:text-primary">Join the Network</Link></li>
                            <li><Link href="/login" className="hover:text-primary">Member Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-medium text-gray-900 mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-400">© 2025 College Freelancers Club. All rights reserved.</p>
                    <p className="text-xs text-gray-400">Designed with Donezo Aesthetics</p>
                </div>
            </div>
        </footer>
    );
}
