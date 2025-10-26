import { Briefcase, Calendar, MapPin, TrendingUp, Award } from "lucide-react";

const workExperience = [
  {
    position: "Software Engineer",
    company: "Publicis Groupe",
    location: "Gurgaon, Haryana",
    period: "January 2024 - Present",
    type: "Full-time",
    description:
      "Contributing to backend development and automation workflows in the AEM ecosystem. Focused on scalable microservices, asset management, and system optimization using Java and Spring Boot.",
    responsibilities: [
      "Developed the Asset Relate feature to enable efficient linking of related assets, improving content organization and retrieval.",
      "Built a high-efficiency migration job for relocating 100,000+ assets, fully automated via Jenkins to ensure seamless production execution.",
      "Implemented multiple Spring Boot schedulers for automated task execution and resource optimization, achieving 95% improvement in process accuracy.",
      "Integrated notification modules for schedulers to enhance transparency and real-time process monitoring.",
      "Designed a Playwright-based test runner achieving 95% test coverage and cross-browser automation efficiency."
    ],
    achievements: [
      "Reduced manual effort by 98% through scheduler automation and migration job optimization.",
      "Improved system scalability and stability using concurrent processing and asynchronous task handling.",
      "Enhanced overall reliability of backend systems with robust error handling and efficient resource management."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Microservices",
      "Docker",
      "MongoDB",
      "MySQL",
      "Jenkins"
    ]
  },
  {
    position: "Software Engineer Intern",
    company: "Rein Games",
    location: "Noida, Uttar Pradesh",
    period: "May 2023 - September 2023",
    type: "Internship",
    description:
      "Worked on backend logic and data flow for online gaming systems with a focus on API design, concurrency, and fairness mechanisms in gameplay.",
    responsibilities: [
      "Developed REST APIs using Spring Framework for efficient data transfer between gaming components.",
      "Implemented game logic for points and chip distribution in Poker/Teen Patti, ensuring fair and concurrent execution.",
      "Collaborated with frontend developers to design seamless data exchange and improve user experience."
    ],
    achievements: [
      "Improved response efficiency and maintained fairness in high-load gaming operations.",
      "Delivered production-ready APIs with well-tested and optimized business logic."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Postman", "Git"]
  },
  {
    position: "Software Engineer Intern",
    company: "Netmeds",
    location: "Chennai, Tamil Nadu",
    period: "February 2023 - April 2023",
    type: "Internship",
    description:
      "Developed RESTful services for e-commerce data operations, focusing on backend optimization and data export features.",
    responsibilities: [
      "Created APIs enabling CRUD operations on MySQL databases with intuitive design and consistent response handling.",
      "Performed integration testing using Postman to validate data flow and system reliability.",
      "Implemented functionality to export database contents to Excel, improving data accessibility."
    ],
    achievements: [
      "Delivered fully functional REST APIs within strict timelines.",
      "Enhanced data accessibility and reduced manual data extraction time."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Postman", "Git"]
  }
];


const stats = [
  { label: "Years of Experience", value: "3+", icon: TrendingUp },
  { label: "Companies Worked", value: "3", icon: Briefcase }
  // { label: "Projects Delivered", value: "50+", icon: Award }
];

const WorkExperiencePage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1>Work Experience</h1>
            <p className="text-slate-600">My professional journey and career growth</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg border shadow-sm p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <p className="text-slate-900 mb-1">{stat.value}</p>
              <p className="text-slate-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Experience Timeline */}
      <div className="space-y-6">
        {workExperience.map((job, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{job.position}</h3>
                      <p className="text-slate-900 mb-1">{job.company}</p>
                      <div className="flex flex-wrap gap-3 text-slate-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${job.type === "Full-time" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                  {job.type}
                </span>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">{job.description}</p>

              <div className="mb-6">
                <h3 className="mb-3">Key Responsibilities</h3>
                <div className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-indigo-600" />
                  <h3>Key Achievements</h3>
                </div>
                <div className="space-y-2">
                  {job.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { WorkExperiencePage };