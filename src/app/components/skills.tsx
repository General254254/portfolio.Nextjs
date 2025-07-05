"use client";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "JavaScript", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "HTML/CSS", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "Tailwind CSS", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "MongoDB", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "REST APIs", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
        { name: "GraphQL", level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
      ]
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "Docker", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "AWS", level: 65, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Linux", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
        { name: "CI/CD", level: 70, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Nginx", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      ]
    },
    {
      category: "Network Engineering",
      items: [
        { name: "HCIA DATACOM", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg" },
        { name: "Network Design", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg" },
        { name: "Routing & Switching", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cisco/cisco-original.svg" },
        { name: "Network Security", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pfsense/pfsense-original.svg" },
        { name: "Network Simulation", level: 80, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/putty/putty-original.svg" },
        { name: "Troubleshooting", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wireshark/wireshark-original.svg" },
      ]
    }
  ];

  return (
    <section className="min-h-screen relative py-24 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/skills.jpg')",
          }}
        />
        {/* Dark overlay for sophisticated aesthetic */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            The technologies and tools I use to create exceptional digital experiences.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skills.map((skillCategory, categoryIndex) => (
            <div key={categoryIndex} className="">
              {/* Category Title */}
              <h3 className="text-3xl font-light text-white mb-8 text-center">
                {skillCategory.category}
              </h3>
              
              {/* Skills Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group p-4 hover:scale-105 transition-all duration-300 ease-out"
                  >
                    {/* Skill Logo */}
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
                        <img 
                          src={skill.logo} 
                          alt={`${skill.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className="text-sm font-medium text-gray-900 text-center mb-3 leading-tight">
                      {skill.name}
                    </h4>
                    
                    {/* Skill Level Dots */}
                    <div className="flex justify-center space-x-1">
                      {[...Array(5)].map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            dotIndex < Math.ceil(skill.level / 20)
                              ? 'bg-blue-500'
                              : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-24">
          <div className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-200 inline-block cursor-pointer shadow-sm hover:shadow-md">
            Let&apos;s work together
          </div>
        </div>
      </div>

    </section>
  );
}
