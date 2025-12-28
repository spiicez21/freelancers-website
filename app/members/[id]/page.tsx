import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function MemberPortfolio({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id
    const member = {
        name: "Alex Morgan",
        role: "Full Stack Developer",
        bio: "I build accessible, pixel-perfect, and performant web experiences. Currently a 3rd year CS student passionate about React and Node.js.",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=60",
        skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
        projects: [
            { title: "Health Tracker App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60" },
            { title: "E-Commerce Dashboard", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60" },
            { title: "Social Media Bot", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" }
        ]
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">

                {/* Profile Header */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 mb-8">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] overflow-hidden shrink-0 bg-gray-100">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        </div>

                        <div className="flex-1">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                                <div>
                                    <h1 className="text-4xl font-display font-medium text-gray-900 mb-2">{member.name}</h1>
                                    <p className="text-xl text-primary font-medium">{member.role}</p>
                                </div>
                                <div className="flex gap-3">
                                    <Button>Hire Me</Button>
                                    <Button variant="outline">Download CV</Button>
                                </div>
                            </div>

                            <p className="text-gray-500 max-w-2xl text-lg mb-8 leading-relaxed">
                                {member.bio}
                            </p>

                            <div className="flex gap-4">
                                {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-colors">
                                        <Icon size={18} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Sidebar info */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-[32px] p-8 border border-gray-100">
                            <h3 className="font-display font-medium text-lg mb-4">Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {member.skills.map(skill => (
                                    <span key={skill} className="bg-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-100">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[32px] p-8 border border-gray-100">
                            <h3 className="font-display font-medium text-lg mb-4">Availability</h3>
                            <div className="flex items-center gap-3 text-green-600 bg-green-50 px-4 py-3 rounded-xl border border-green-100">
                                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                                <span className="font-medium text-sm">Open to work</span>
                            </div>
                        </div>
                    </div>

                    {/* Works */}
                    <div className="lg:col-span-2 space-y-8">
                        <h3 className="font-display font-medium text-2xl">Selected Works</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {member.projects.map((project, i) => (
                                <div key={i} className="group bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
                                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <a href="#" className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowUpRight size={20} />
                                        </a>
                                    </div>
                                    <div className="p-5">
                                        <h4 className="font-display font-medium text-lg">{project.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}
