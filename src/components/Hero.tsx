import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
            AC
          </div>
        </div>
        <h1 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Anuj Choubey
        </h1>
        <h2 className="text-slate-600 mb-6">Software Engineer - Java</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Passionate about creating beautiful, functional Backend Application. 
          Specialized in backend development, microservices architecture,Java, Spring Boot, and modern web technologies.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Contact Me
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Github className="h-4 w-4" />
            GitHub
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </button>
        </div>
      </div>
    </section>
  );
}

export { Hero };
