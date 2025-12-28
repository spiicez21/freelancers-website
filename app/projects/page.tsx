import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowUpRight, FolderGit2, Globe } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Rebrand",
            category: "Design",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
            author: "Sarah Chen",
            icon: Globe
        },
        {
            title: "Health Tracker App",
            category: "Development",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
            author: "Alex Morgan",
            icon: FolderGit2
        },
        {
            title: "Startup Launch Video",
            category: "Motion",
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=60",
            author: "Jamie Rivera",
            icon: Globe
        }
    ];

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl font-display font-medium text-gray-900 mb-4">Featured Work</h1>
                    <p className="text-gray-500">
                        Explore real-world projects delivered by our student community. From branding to full-stack applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, i) => (
                        <div key={i} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                            <div className="aspect-video relative overflow-hidden bg-gray-100">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                                    <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                                        View Case Study <ArrowUpRight size={18} />
                                    </button>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            <project.icon size={16} />
                                        </div>
                                        <span className="text-xs font-bold text-primary uppercase tracking-wide bg-green-50 px-2 py-1 rounded-lg border border-green-100 group-hover:bg-white group-hover:border-primary/20 transition-colors">{project.category}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-display font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>

                                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <p className="text-sm font-bold text-gray-400">by <span className="text-gray-600">{project.author}</span></p>
                                    <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-primary group-hover:text-primary transition-colors">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
