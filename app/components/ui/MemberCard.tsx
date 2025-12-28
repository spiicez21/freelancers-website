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
        <Link href={`/members/${slug}`} className="group block">
            <div className="bg-white p-4 rounded-[32px] border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/5 hover:-translate-y-1">

                {/* Image / Thumbnail placeholder */}
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden mb-4 relative">
                    <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                    <div className="absolute top-3 right-3 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowUpRight size={20} className="text-primary" />
                    </div>
                </div>

                <div>
                    <h3 className="font-display font-bold text-lg text-gray-900 mb-1">{name}</h3>
                    <p className="text-sm font-semibold text-gray-500 mb-4">{role}</p>

                    <div className="flex flex-wrap gap-2">
                        {tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-extrabold px-2 py-1 rounded-lg bg-gray-50 text-gray-600 border border-gray-100 uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
