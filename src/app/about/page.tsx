"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const technologies = [
    { name: "C++", icon: "🔧" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Node.js", icon: "🟢" },
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "Redis", icon: "🔴" },
    { name: "Kafka", icon: "📊" },
    { name: "Prisma", icon: "🔷" },
    { name: "SQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [technologies.length])

  const getVisibleTechs = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % technologies.length
      visible.push(technologies[index])
    }
    return visible
  }

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-mono">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-gray-600 transition-colors">
            ← Back
          </Link>
          {/* <Link
            href="/developer"
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-sm"
          >
            Developer Portfolio
          </Link> */}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-6">
        <h1 className="text-6xl font-bold text-black mb-12">About Me</h1>

        <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
          <p>
            I'm <span className="font-bold text-black">Vivek Kumar</span>, a System Engineer currently working with{" "}
            <span className="font-semibold">Tata Consultancy Services</span>, deployed at the{" "}
            <span className="font-semibold">National Stock Exchange</span>. I specialize in backend systems with
            hands-on experience in C++, Linux, and system-level development. My role involves building and optimizing
            trading applications, automating workflows, and solving high-impact production issues with deep root cause
            analysis.
          </p>

          <p>
            I'm passionate about building robust and scalable systems — both in enterprise environments and personal
            projects. From developing utilities and debugging live trading environments to building real-time crypto
            exchange backends and drone survey platforms, I thrive in fast-paced, problem-solving environments.
          </p>

          <p>
            Beyond the backend, I have experience in full-stack development using tools like Next.js, Node.js, and
            PostgreSQL. I enjoy contributing to systems that require both performance and precision.
          </p>

          <p>
            When I'm not coding, you'll probably find me on a badminton court — I was a{" "}
            <span className="font-semibold text-blue-600">3rd place winner</span> in the{" "}
            <span className="font-semibold">All-India Tata Inter-Companies Tournament</span>. I'm driven by curiosity,
            performance, and delivering value through clean and effective code.
          </p>
        </div>

        {/* Technology Carousel */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-black mb-8">Technologies I Work With</h2>

          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center space-x-8 py-8">
              {getVisibleTechs().map((tech, index) => (
                <div
                  key={`${tech.name}-${currentIndex}-${index}`}
                  className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                    index === 2 ? "scale-110 opacity-100" : "scale-90 opacity-60"
                  }`}
                >
                  <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center text-2xl border border-gray-200">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-4">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-black mb-4">Let's Build Something Together</h3>
          <p className="text-gray-600 mb-6">
            Whether it's optimizing backend systems, building scalable applications, or solving complex technical
            challenges, I'm always excited to collaborate on meaningful projects.
          </p>
          
          </div>
        </div>
      </div>
    
  )
}
