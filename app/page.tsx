import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/ui/Button";
import MemberCard from "./components/ui/MemberCard";
import Link from "next/link";

export default function Home() {
  const featuredMembers = [
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
    }
  ];

  const categories = [
    "Design", "Web Development", "App Development", "AI / ML", "Illustration", "Content & Writing", "Video & Motion"
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans text-gray-900 flex flex-col">
      <Navbar />

      <main className="flex-1">

        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-display font-semibold text-primary mb-6 leading-tight">
            A curated network of <br /> student freelancers.
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
            Designers. Developers. Creators. Ready to work from Kongu Engineering College.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/members">
              <Button size="lg" className="rounded-2xl shadow-lg shadow-green-900/20 font-bold">Explore Portfolios</Button>
            </Link>
            <Link href="/hire">
              <Button variant="outline" size="lg" className="rounded-2xl font-bold">Hire From Us</Button>
            </Link>
          </div>
        </section>

        {/* Featured Portfolios */}
        <section className="py-20 bg-white rounded-t-[64px]">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">Featured Talent</h2>
                <p className="text-gray-500">Hand-picked portfolios from our top members</p>
              </div>
              <Link href="/members" className="hidden md:block">
                <Button variant="ghost" className="font-semibold">View All Members</Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredMembers.map((member) => (
                <MemberCard key={member.slug} {...member} />
              ))}
            </div>

            <div className="mt-12 text-center md:hidden">
              <Link href="/members">
                <Button variant="outline" className="w-full font-bold">View All Members</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Find Talent by Skill</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <Link key={cat} href={`/members?skill=${cat}`} className="px-6 py-3 rounded-[20px] bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors font-bold text-sm">
                {cat}
              </Link>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-[#05110d] rounded-[48px] container mx-auto my-12 relative overflow-hidden text-center px-4">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-primary blur-[120px]"></div>
            <div className="absolute bottom-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-primary blur-[100px]"></div>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Ready to bring your ideas to life?</h2>
            <p className="text-gray-400 mb-10 text-lg">Connect with the best student talent for your next project.</p>
            <Link href="/hire">
              <Button variant="white" size="lg" className="border-none font-bold">Start a Project</Button>
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
