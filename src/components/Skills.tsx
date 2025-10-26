import { Code, Palette, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend Development",
    icon: Code,
    skills: [
      "React", "TypeScript", "JavaScript",
      "Tailwind CSS", "HTML5", "CSS3", "Redux", "React Query"
    ]
  },
  {
    category: "Backend Development",
    icon: Database,
    skills: [
      "Node.js", "Express", "Spring Boot", "PostgreSQL",
      "MongoDB", "REST API", "GraphQL", "Redis", "JWT", "Microservices","Kafka"
    ]
  },
  {
    category: "Design & UI/UX",
    icon: Palette,
    skills: [
      "Figma", "Adobe XD", "Sketch", "Prototyping",
      "Wireframing", "User Research", "Responsive Design"
    ]
  },
  {
    category: "Tools & Others",
    icon: Wrench,
    skills: [
      "Git", "Docker", "AWS", "Jenkins", "Grafana",
      "Agile", "Scrum", "Linux", "VS Code"
    ]
  },
    {
    category: "Languages",
    icon: Wrench,
    skills: [
      "Java","C++","Golang","JavaScript"
    ]
  }

];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">Skills & Technologies</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
                <div className="p-6 border-b">
                  <h3 className="text-xl font-semibold flex items-center gap-2">
                    <Icon className="h-5 w-5 text-blue-600" />
                    {category.category}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export {Skills}
