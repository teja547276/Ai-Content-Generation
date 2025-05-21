import { Button } from "@/components/ui/button";
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 animate-fade-in">
        <div className="flex items-center space-x-3.5">
          <div className="hover:rotate-[360deg] transition-transform duration-500">
            <Image 
               src={'/logo.svg'}
              alt="AI Content Logo" 
              width={40} 
              height={40} 
              className="h-10 w-10"
            />
          </div>
          <span className="text-xl font-bold text-black-600 ">AI Content Generation</span>
        </div>
        
        <div className="flex space-x-4">
          <Link href="/sign-in" className="hover:scale-105 active:scale-95 transition-transform">
            <Button variant="ghost" className="text-black-600 hover:bg-indigo-50">
              Login
            </Button>
          </Link>
          <Link href="/sign-up" className="hover:scale-105 active:scale-95 transition-transform">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              Register
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 md:py-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
          Transform Your Content <br className="hidden md:block"/>
          <span className="text-indigo-600">With AI Power</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-slide-up delay-100">
          Generate high-quality content in seconds with our advanced AI technology.
          Perfect for blogs, social media, and marketing materials.
        </p>
        
        <Link href="/sign-in" className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-slide-up delay-200">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
            Get Started Free
          </Button>
       
        </Link>
        
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl border border-gray-200 mx-auto max-w-4xl animate-scale-in">
          <Image
            src="/ai-dashboard-preview.jpg"
            alt="AI Content Generator Preview"
            fill
            className="object-cover object-top"
            priority
            quality={100}
          />
        </div>
      </main>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Why Choose Our AI Generator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Generate content in seconds, not hours"
              },
              {
                icon: "🎯",
                title: "Precision Quality",
                description: "AI trained on millions of high-quality samples"
              },
              {
                icon: "🔄",
                title: "Multiple Formats",
                description: "Blogs, social posts, ads, and more"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-50 p-6 rounded-lg text-center hover:shadow-md transition-all hover:-translate-y-1 duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl mb-4 inline-block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 animate-fade-in">
        <div className="container mx-auto px-6 text-center">
          <p>© {new Date().getFullYear()} AI Content Generation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}