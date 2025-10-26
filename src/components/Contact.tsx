import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Get In Touch</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-slate-600">Email</p>
            <p className="font-medium">anujchoubey19@gmail.com</p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-slate-600">Phone</p>
            <p className="font-medium">+91 7070066397</p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm p-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-slate-600">Location</p>
            <p className="font-medium">Delhi, India</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border shadow-sm max-w-2xl mx-auto">
          <div className="p-6 border-b">
            <h3 className="text-xl font-semibold">Send a Message</h3>
          </div>
          <div className="p-6">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };