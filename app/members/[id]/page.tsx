import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/ui/Button";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, MapPin, Calendar } from "lucide-react";

export default function MemberPortfolio({ params }: { params: { id: string } }) {
    // In a real app, fetch data based on params.id
    const member = {
        name: "Alex Morgan",
        role: "Full Stack Developer",
        bio: "I build accessible, pixel-perfect, and performant web experiences. Currently a 3rd year CS student passionate about React and Node.js. I love turning complex problems into simple, beautiful, and intuitive designs.",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=60",
        location: "San Francisco, CA",
        joined: "Joined Sept 2023",
        availability: "Open to work",
        skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Figma", "AWS"],
        projects: [
            { title: "Health Tracker App", category: "Mobile App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60" },
            { title: "E-Commerce Dashboard", category: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60" },
            { title: "Social Media Bot", category: "Automation", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" },
            { title: "Travel Journal", category: "Web App", image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop&q=60" }
        ]
    };

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">

                {/* Profile Header & Bio */}
                <div className="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
                    {/* Decorative Background Blur */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                        {/* Avatar */}
                        <div className="w-full md:w-[320px] shrink-0">
                            <div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-gray-100 relative group">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                {/* Status Badge */}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 shadow-sm border border-white/50">
                                    <div className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-green-900">{member.availability}</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-6 justify-center md:justify-start">
                                {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                                    <button key={i} className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary hover:bg-green-50 transition-all hover:-translate-y-1 shadow-sm">
                                        <Icon size={20} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 py-4">
                            <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-500 mb-4">
                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                                    <MapPin size={16} /> {member.location}
                                </div>
                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg">
                                    <Calendar size={16} /> {member.joined}
                                </div>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 mb-4 tracking-tight">{member.name}</h1>
                            <p className="text-2xl font-medium text-primary mb-8">{member.role}</p>

                            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">About</h3>
                            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl font-medium">
                                {member.bio}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-12">
                                <Button size="lg" className="rounded-2xl px-8 font-bold shadow-lg shadow-green-900/20">Hire Me</Button>
                                <Button variant="outline" size="lg" className="rounded-2xl px-8 font-bold">Download CV</Button>
                            </div>

                            <div className="border-t border-gray-100 pt-8">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">Skills & Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    {member.skills.map(skill => (
                                        <span key={skill} className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-bold hover:border-primary hover:text-primary transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Selected Works */}
                <div className="space-y-8">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-8 px-2">Selected Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {member.projects.map((project, i) => (
                            <div key={i} className="group bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:border-green-200 hover:shadow-2xl hover:shadow-green-900/5 transition-all duration-500 hover:-translate-y-1">
                                <div className="aspect-[16/9] relative overflow-hidden bg-gray-100">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button className="bg-white text-primary px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            View Project <ArrowUpRight size={18} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                                            <h3 className="font-display font-bold text-2xl text-gray-900 group-hover:text-primary transition-colors">{project.title}</h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
