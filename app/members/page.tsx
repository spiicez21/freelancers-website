import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MemberCard from "../components/ui/MemberCard";
import { Search } from "lucide-react";

export default function Members() {
    const members = [
        {
            name: "Alex Morgan",
            role: "Full Stack Developer",
            image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=800&auto=format&fit=crop&q=60",
            tags: ["React", "Node.js", "PostgreSQL"],
            slug: "alex-morgan"
        },
        {
            name: "Sarah Chen",
            role: "UI/UX Designer",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60",
            tags: ["Figma", "Motion", "User Research"],
            slug: "sarah-chen"
        },
        {
            name: "Jordan Lee",
            role: "Brand Strategist",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&auto=format&fit=crop&q=60",
            tags: ["Branding", "Copywriting", "SEO"],
            slug: "jordan-lee"
        },
        {
            name: "Casey West",
            role: "Mobile Developer",
            image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop&q=60",
            tags: ["Flutter", "Dart", "Firebase"],
            slug: "casey-west"
        },
        {
            name: "Jamie Rivera",
            role: "Illustrator",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
            tags: ["Procreate", "Adobe CC", "Character Design"],
            slug: "jamie-rivera"
        },
        {
            name: "Avery Taylor",
            role: "Data Scientist",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=60",
            tags: ["Python", "TensorFlow", "SQL"],
            slug: "avery-taylor"
        }
    ];

    const filters = [
        { title: "Department", options: ["Computer Science", "Design", "Business", "Media"] },
        { title: "Skills", options: ["Development", "Design", "Marketing", "Video"] },
        { title: "Year", options: ["1st Year", "2nd Year", "3rd Year", "4th Year"] },
    ];

    return (
        <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-12">

                    {/* Sidebar Filters */}
                    <aside className="w-full md:w-64 shrink-0 space-y-8">
                        <div>
                            <h1 className="text-3xl font-display font-medium text-gray-900 mb-4">Members</h1>
                            <p className="text-gray-500 text-sm">Discover {members.length}+ talented freelancers.</p>
                        </div>

                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search members..."
                                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                        </div>

                        {filters.map(filter => (
                            <div key={filter.title}>
                                <h4 className="font-medium text-gray-900 mb-3">{filter.title}</h4>
                                <div className="space-y-2">
                                    {filter.options.map(option => (
                                        <label key={option} className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer hover:text-primary">
                                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                                            {option}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </aside>

                    {/* Member Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {members.map(member => (
                                <MemberCard key={member.slug} {...member} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
