import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
                    <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Terms of Service</h1>

                    <div className="prose prose-green max-w-none text-gray-600">
                        <p className="mb-4">Last updated: December 28, 2025</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">1. Acceptance of Terms</h3>
                        <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">2. Use License</h3>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on College Freelancers Club's website for personal, non-commercial transitory viewing only.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">3. User Portfolios</h3>
                        <p>You retain all rights to the content you post to your portfolio. By posting content, you grant us a license to display it on our platform.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">4. Disclaimer</h3>
                        <p>The materials on College Freelancers Club's website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">5. Governing Law</h3>
                        <p>These terms and conditions are governed by and construed in accordance with the laws of the State and you irrevocably submit to the exclusive jurisdiction of the courts in that State.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
