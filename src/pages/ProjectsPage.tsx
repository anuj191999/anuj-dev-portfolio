import { ExternalLink, Github, Briefcase } from "lucide-react";

const projects = [
  {
    title: "Fast-Food (Backend)",
    description:
      "Developed a scalable microservices-based backend system for a fast-food business using Spring Boot. The system included key modules such as user authentication, menu management, cart handling, order processing, payment integration, and an API gateway for seamless service communication. Implemented Eureka Service Registry to enable dynamic service discovery and load balancing, improving performance and system reliability.",
    image: "fast-food backend architecture",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Eureka", "API Gateway"],
    github: "#",
    live: "#"
  },
  {
    title: "Sprint-Board (Backend)",
    description:
      "Designed and developed a task management application that helps users organize, assign, and track tasks efficiently. Built secure user authentication and authorization using Spring Security and JWT, ensuring safe access control and data protection. Leveraged MongoDB for flexible and efficient data storage and retrieval, providing a responsive and user-friendly experience.",
    image: "sprint board backend",
    technologies: ["Java", "Spring Boot", "MongoDB", "Spring Security", "JWT"],
    github: "#",
    live: "#"
  }
];

const ProjectsPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1>Projects</h1>
            <p className="text-slate-600">Professional projects I've worked on</p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm flex flex-col hover:shadow-lg transition-shadow">
            <div className="p-0">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-t-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 pt-0 flex gap-2">
              <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Github className="h-4 w-4" />
                Code
              </button>
              <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { ProjectsPage };