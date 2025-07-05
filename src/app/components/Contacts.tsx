export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-500 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects. Let&apos;s connect!
          </p>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Email Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl mr-4">
                📧
              </div>
              <h3 className="text-2xl font-bold text-green-400">Email</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <a 
              href="mailto:marknambuva@example.com" 
              className="text-green-500 hover:text-green-400 transition-colors font-semibold"
            >
              marknambuva@example.com
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-2xl mr-4">
                📍
              </div>
              <h3 className="text-2xl font-bold text-green-400">Location</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Based in Kenya, available for remote work worldwide.
            </p>
            <span className="text-green-500 font-semibold">Kenya</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
            >
              📱
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              💼
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-2xl hover:bg-blue-400 hover:text-white transition-all duration-300 hover:scale-110"
            >
              🐦
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-blue-500 text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer">
            <span>🚀</span>
            <span>Let&apos;s build something amazing together!</span>
          </div>
        </div>
      </div>
    </main>
  );
}
