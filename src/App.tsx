import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DashBoardLayout } from "./components/DashBoardLayout";
import { HomePage } from "./pages/HomePage";
import { EducationPage } from "./pages/EducationPage";
import { WorkExperiencePage } from "./pages/WorkExperiencePage";
import { SkillsPage } from "./pages/SkillsPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoardLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="experience" element={<WorkExperiencePage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}