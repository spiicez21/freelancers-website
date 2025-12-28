import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Privacy() {
    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm">
                    <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-green max-w-none text-gray-600">
                        <p className="mb-4">Last updated: December 28, 2025</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">1. Information We Collect</h3>
                        <p>We collect information you provide directly to us when you create an account, create a portfolio, or communicate with us. This may include your name, email address, student ID, and portfolio content.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">2. How We Use Your Information</h3>
                        <p>We use the information we collect to operate and maintain our platform, connect you with potential clients, and improve our services.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">3. Sharing of Information</h3>
                        <p>We do not share your personal information with third parties except as described in this policy, such as when you choose to display your portfolio publicly.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">4. Security</h3>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>

                        <h3 className="text-gray-900 font-bold text-lg mt-8 mb-4">5. Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us at privacy@collegefreelancers.edu.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
