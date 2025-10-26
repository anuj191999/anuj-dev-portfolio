import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import nitLogo from "../assets/nit_logo.png";
import ranchiLogo from "../assets/ranchi_university_logo.png";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "National Institute of Technology, Jamshedpur",
    period: "2020 - 2023",
    location: "Jamshedpur, Jharkhand, India",
    gpa: "7.97/10.0",
    logo: nitLogo,
    description: "Completed MCA with a focus on core computer science subjects and practical applications. Secured a CGPA of 7.97 out of 10.",
    achievements: [
      "Gained hands-on experience in software development and problem-solving",
      "Worked on academic projects involving AI and web technologies",
      "Actively participated in college-level technical events"
    ],
    courses: [
      "Machine Learning",
      "Deep Learning",
      "Advanced Data Structures and Algorithms",
      "Computer Vision",
      "Natural Language Processing",
      "Distributed Systems",
      "Web Technologies"
    ]
  },
  {
    degree: "Bachelor of Science (Hons) in Computer Science",
    institution: "Ranchi University",
    period: "2016 - 2019",
    location: "Ranchi, Jharkhand, India",
    gpa: "8.0/10.0",
    logo: ranchiLogo,
    description: "Studied fundamental concepts of computer science and programming. Graduated with 80% marks.",
    achievements: [
      "Graduated with Distinction",
      "College Topper",
      "Completed several academic projects in Java and database systems"
    ],
    courses: [
      "Programming Languages: C, C++, Java, Python",
      "Discrite Mathematics",
      "Statistics and Probability",
      "Database Systems",
      "Operating Systems"
    ]
  }
];

const EducationPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1>Education</h1>
            <p className="text-slate-600">My academic journey and qualifications</p>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                <div className="flex-1 flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-slate-600 mb-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <p className="text-slate-500">{edu.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-slate-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-slate-600 mb-6">{edu.description}</p>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="h-4 w-4 text-blue-600" />
                  <h3>Achievements & Honors</h3>
                </div>
                <div className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-slate-600">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
                      {course}
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

export { EducationPage };