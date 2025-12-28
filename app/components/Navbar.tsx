"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { name: "Home", href: "/" },
        { name: "Members", href: "/members" },
        { name: "Works", href: "/projects" },
        { name: "About", href: "/about" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                    </div>
                    <span className="font-display font-bold text-xl text-primary tracking-tight">
                        Freelancers<span className="text-gray-400">Hub</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-bold transition-colors ${isActive(link.href) ? "text-primary" : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Link href="/hire" className="hidden md:block">
                        <Button variant="ghost" size="sm">Hire Talent</Button>
                    </Link>
                    <Link href="/join">
                        <Button size="sm">Join Club</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
