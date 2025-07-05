// app/page.tsx or pages/index.tsx

import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white relative overflow-hidden">
      {/* Home Page - Full Viewport */}
      <div className="h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-50"
            style={{
              backgroundImage: "url('/i need a background picture to use in my portfolio like an office with black and some green plants with white table light.jpg')",
            }}
          />
          {/* Lighter overlay for better image visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        </div>
        
        {/* Navigation */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Hero or Intro */}
        <section className="flex-1 flex items-center justify-center px-6 relative z-10 h-full">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-green-500">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I&apos;m Mark Nambuva, a Full-Stack & Network Engineer passionate about building scalable web applications and network solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link 
                href="/about" 
                className="inline-block bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition"
              >
                Learn More
              </Link>
              <Link 
                href="/skills" 
                className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition"
              >
                View Skills
              </Link>
              <Link 
                href="/contact" 
                className="inline-block border border-green-500 text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-500 hover:text-black transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </div>

    </main>
  );
}
