import { Link } from "react-router-dom";
import {
  GraduationCap,
  Code,
  Briefcase,
  Mail,
  ArrowRight,
  Award,
  Target,
  Zap,
  Building2,
  BookOpen
} from "lucide-react";

const stats = [
  { label: "Years Experience", value: "2+", icon: Award },
  { label: "Projects Completed", value: "5+", icon: Target },
  { label: "Technologies", value: "10+", icon: Zap },
];

const quickLinks = [
  {
    title: "Education",
    description: "View my academic background and achievements",
    icon: GraduationCap,
    path: "/education",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Experience",
    description: "Explore my professional work history",
    icon: Building2,
    path: "/experience",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Skills",
    description: "Explore my technical skills and expertise",
    icon: Code,
    path: "/skills",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Projects",
    description: "Check out my latest work and projects",
    icon: Briefcase,
    path: "/projects",
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Blog",
    description: "Read my articles and tutorials",
    icon: BookOpen,
    path: "/blog",
    color: "from-teal-500 to-cyan-500"
  },
  {
    title: "Contact",
    description: "Get in touch for collaboration",
    icon: Mail,
    path: "/contact",
    color: "from-green-500 to-emerald-500"
  },
];

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
          <div className="w-32 h-32 rounded-full bg-white p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl">
              AC
            </div>
          </div>
        </div>
        <h1 className="mb-4">Welcome to My Portfolio</h1>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          I’m Anuj, a Backend Developer who enjoys building reliable and scalable web applications.I work with Java, Spring Boot, and microservices to create efficient backend solutions.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link to="https://drive.google.com/file/d/1bv0Pf4L-8E9mPmubD9f5AMhtbP3LvlzW/view?usp=drive_link" target="_blank" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            Resume
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Contact Me
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-slate-900 mb-1">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="mb-6">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.path} to={link.path}>
                <div className="bg-white rounded-lg border shadow-sm h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-2">{link.title}</h3>
                        <p className="text-slate-600">{link.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-slate-400 mt-1" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-lg border shadow-sm p-6">
        <h2 className="mb-4 text-xl font-semibold">About Me</h2>
        <p className="text-slate-600 mb-4">
          I'm Anuj Kumar Choubey, a Backend Developer with hands-on experience in designing scalable,
          distributed systems using Java and Spring Boot. Over the past few years, I’ve engineered
          microservice-based applications that emphasize concurrency, performance, and reliability.
        </p>
        <p className="text-slate-600 mb-4">
          My expertise spans developing RESTful APIs, integrating Kafka for asynchronous communication,
          and leveraging multithreading to optimize resource utilization and execution efficiency.
          I enjoy architecting systems that are not only functional but also clean, maintainable,
          and built for scale.
        </p>
        <p className="text-slate-600">
          I hold a Master’s degree in Computer Applications from NIT Jamshedpur. Beyond coding, I’m
          driven by curiosity — whether it’s exploring new frameworks, diving deep into concurrent
          programming patterns, or automating workflows that simplify complex operations.
        </p>
      </div>

    </div>
  );
}

export { HomePage };