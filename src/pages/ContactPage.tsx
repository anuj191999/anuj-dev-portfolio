import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "anujchoubey19@gmail.com",
    href: "mailto:anujchoubey19@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7070066397",
    href: "tel:+917070066397"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi, India",
    href: "#"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/anuj191999",
    username: "@anuj191999",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/anuj-kumar-choubey-908ba1205/",
    username: "/in/anuj-kumar-choubey-908ba1205/",
    color: "from-blue-600 to-blue-800"
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1>Get In Touch</h1>
            <p className="text-slate-600">Let's discuss your project or collaboration opportunities</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Send a Message</h3>
              <p className="text-slate-600">Fill out the form below and I'll get back to you within 24 hours</p>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-slate-700">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-slate-700">
                      Your Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="anuj@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 text-slate-700">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-slate-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or question..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Contact Information</h3>
            </div>
            <div className="p-6 space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-slate-500">{info.label}</p>
                      <p className="text-slate-900">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold">Connect on Social</h3>
            </div>
            <div className="p-6 space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900">{social.name}</p>
                      <p className="text-slate-500">{social.username}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Note */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-lg">
            <div className="p-6">
              <p className="text-slate-700">
                💡 <strong>Quick Response:</strong> I typically respond to all inquiries within 24 hours. For urgent matters, feel free to reach out via phone or LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ContactPage };