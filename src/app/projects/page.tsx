import Link from "next/link"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      name: "StockExchange",
      githubUrl: "https://github.com/yourusername/stockexchange",
    },
    {
      name: "DroneSurvey",
      githubUrl: "https://github.com/yourusername/dronesurvey",
    },
    {
      name: "MediumClone",
      githubUrl: "https://github.com/yourusername/mediumclone",
    },
    {
      name: "Personal Portfolio",
      githubUrl: "https://github.com/yourusername/portfolio",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden font-mono">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold hover:text-gray-600 transition-colors">
            ← Back
          </Link>
          
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 py-6">
        <h1 className="text-6xl font-bold text-black mb-12">Projects</h1>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
