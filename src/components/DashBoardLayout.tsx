import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  GraduationCap,
  Briefcase,
  Code,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
  Building2,
  BookOpen
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", path: "/home", icon: Home },
  { name: "Education", path: "/education", icon: GraduationCap },
  { name: "Experience", path: "/experience", icon: Building2 },
  { name: "Skills", path: "/skills", icon: Code },
  { name: "Projects", path: "/projects", icon: Briefcase },
  { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/anuj191999" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/anuj-kumar-choubey-908ba1205/" }
];

const DashBoardLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-40 flex items-center px-4">
        <button
          className="p-2 hover:bg-gray-100 rounded-md"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        <div className="ml-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
            AC
          </div>
          <span>Portfolio</span>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-slate-200 transition-transform duration-300 lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Profile Section */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                AC
              </div>
              <div>
                <h3 className="text-slate-900">Anuj Choubey</h3>
                <p className="text-slate-500">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="p-4 border-t border-slate-200">
            <p className="text-slate-500 mb-3 px-4">Connect</p>
            <div className="flex gap-2 px-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200">
            <p className="text-slate-400 px-4">© 2025 Portfolio</p>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="p-6 lg:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export { DashBoardLayout };
