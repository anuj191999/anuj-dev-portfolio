import { Code, Palette, Database, Wrench, Server, Smartphone } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 60 },
      { name: "TypeScript", level: 65 },
      { name: "JavaScript", level: 65 },
      { name: "Tailwind CSS", level: 20 },
      { name: "HTML5/CSS3", level: 70 },
    ]
  },
  {
    category: "Backend Development",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 75 },
      { name: "Spring Boot", level: 90 },
      { name: "Microservices", level: 90 },
      { name: "REST API", level: 90 },
      { name: "GraphQL", level: 50 },
    ]
  },
  {
    category: "Database & Storage",
    icon: Database,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 50 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    category: "Design & UI/UX",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Figma", level: 90 },
      { name: "Adobe XD", level: 80 },
      { name: "Prototyping", level: 85 }
    ]
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    color: "from-yellow-500 to-amber-500",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Jenkins", level: 85 },
    ]
  },
];

const technologies = [
  "Java","Spring Boot","Microservices","TypeScript", "JavaScript", "Node.js",
  "Express", "MongoDB", "PostgreSQL", "Tailwind CSS", "Git", "Docker",
  "AWS", "Redux", "REST API", "Jest", "Firebase", "Figma",
  "Sass", "Webpack", "Linux", "Jenkins"
];

const SkillsPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <Code className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1>Skills & Technologies</h1>
            <p className="text-slate-600">My technical expertise and proficiency levels</p>
          </div>
        </div>
      </div>

      {/* Skills by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {skillCategories.filter(cat => cat.skills.length > 0).map((category, index) => {
          const Icon = category.icon;
          return (
            <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  {category.category}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* All Technologies */}
      {technologies.length > 0 && (
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Technologies I Work With</h3>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { SkillsPage };