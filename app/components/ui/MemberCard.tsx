import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface MemberCardProps {
    name: string;
    role: string;
    image: string;
    tags: string[];
    slug: string; // unique id for portfolio page
}

export default function MemberCard({ name, role, image, tags, slug }: MemberCardProps) {
    return (
        <Link href={`/members/${slug}`} className="group block h-full">
            <div className="bg-white p-3 rounded-[32px] border border-gray-100 transition-all duration-300 hover:border-green-200 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1 h-full flex flex-col">

                {/* Image / Thumbnail */}
                <div className="aspect-[4/3] rounded-[24px] overflow-hidden mb-4 relative bg-gray-100">
                    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Floating Action Button */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                        <ArrowUpRight size={20} className="text-primary" />
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm border border-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-800">Available</span>
                    </div>
                </div>

                <div className="px-2 pb-2 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-display font-bold text-xl text-gray-900 group-hover:text-primary transition-colors">{name}</h3>
                    </div>
                    <p className="text-sm font-semibold text-gray-400 mb-4">{role}</p>

                    <div className="mt-auto pt-4 border-t border-gray-50">
                        <div className="flex flex-wrap gap-2">
                            {tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-[10px] font-extrabold px-2.5 py-1.5 rounded-lg bg-gray-50 text-gray-600 border border-gray-100 uppercase tracking-wide group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/10 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
