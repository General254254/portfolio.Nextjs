export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* About Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/about.jpg')",
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>
      <section className="max-w-3xl text-center space-y-6 relative z-10">
        <h1 className="text-4xl font-bold text-green-500">About Me</h1>
        <p className="text-lg text-gray-300">
          Hi 👋 I&apos;m <span className="text-white font-semibold">Mark Nambuva</span>, a passionate Full-Stack & Network Engineer based in Kenya. I build performant, scalable web apps using modern tools like React, Next.js, and TypeScript.
        </p>
        <p className="text-gray-400">
          I also have hands-on experience in network design and simulation with HCIA DATACOM certification. Whether it&apos;s frontend UI, backend APIs, or infrastructure, I aim to deliver clean, well-architected solutions.
        </p>
        <p className="text-sm text-gray-500">
          Always learning. Always building. Let&apos;s create something great together.
        </p>
      </section>
    </main>
  );
}
