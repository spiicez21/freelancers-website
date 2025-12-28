import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-5xl font-display font-medium text-primary mb-6">Empowering Student Creatives</h1>
                    <p className="text-xl text-gray-500 leading-relaxed">
                        We are the official Freelancers Club of [College Name]. Our mission is to bridge the gap between academic learning and professional freelancing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 md:order-1">
                        <h2 className="text-3xl font-display font-medium text-gray-900 mb-4">Why we started</h2>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Students often struggle to find their first clients, while businesses find it hard to trust young talent. We created this centralized platform to showcase verified portfolios, ensuring quality and trust on both sides.
                        </p>
                        <ul className="space-y-3">
                            {["Curated Talent Pool", "College Verified Members", "Professional Workflow"].map(item => (
                                <li key={item} className="flex items-center gap-3 text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-primary text-xs">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="order-1 md:order-2 h-[400px] bg-gray-200 rounded-[40px] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" alt="Team working" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="bg-[#05110d] rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-display font-medium mb-6">Join the Movement</h2>
                        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                            Are you a student with a skill? Apply to join the club and get listed on our platform.
                        </p>
                        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-medium hover:bg-green-800 transition-colors">
                            Apply for Membership
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
