import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "National Institute of Technology, Jamshedpur",
    period: "2020 - 2023",
    description: "Completed MCA with a focus on core computer science subjects and practical applications. Secured a CGPA of 7.97 out of 10.",
    achievements: [
      "Gained hands-on experience in software development and problem-solving",
      "Worked on academic projects involving AI and web technologies",
      "Actively participated in college-level technical events"
    ]
  },
  {
    degree: "Bachelor of Science (Hons) in Computer Science",
    institution: "Ranchi University",
    period: "2016 - 2019",
    description: "Studied fundamental concepts of computer science and programming. Graduated with 80% marks.",
    achievements: [
      "Graduated with Distinction",
      "College Topper",
      "Completed several academic projects in Java and database systems"
    ]
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 flex items-center justify-center gap-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
              <div className="p-6 border-b">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-slate-600">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{edu.description}</p>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export { Education };