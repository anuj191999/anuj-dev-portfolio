import { BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts: any[] = [
  // {
  //   title: "Getting Started with React and TypeScript",
  //   excerpt: "Learn how to set up a React project with TypeScript and understand the benefits of type safety in your applications.",
  //   date: "March 15, 2024",
  //   readTime: "5 min read",
  //   category: "React",
  //   slug: "getting-started-react-typescript"
  // },
  // {
  //   title: "Building Scalable APIs with Node.js",
  //   excerpt: "Best practices for designing and building scalable REST APIs using Node.js, Express, and MongoDB.",
  //   date: "March 10, 2024",
  //   readTime: "8 min read",
  //   category: "Backend",
  //   slug: "building-scalable-apis-nodejs"
  // },
  // {
  //   title: "CSS Grid vs Flexbox: When to Use What",
  //   excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout system.",
  //   date: "March 5, 2024",
  //   readTime: "6 min read",
  //   category: "CSS",
  //   slug: "css-grid-vs-flexbox"
  // }
];

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1>Blog</h1>
            <p className="text-slate-600">Thoughts, tutorials, and insights on web development</p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
            <div className="p-6 border-b">
              <div className="flex items-start justify-between gap-4 mb-2">
                <div className="flex-1">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <p className="text-slate-600">{post.excerpt}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (when no blogs) */}
      {blogPosts.length === 0 && (
        <div className="bg-white rounded-lg border shadow-sm text-center py-12">
          <div className="p-6">
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-slate-400" />
            <h3 className="mb-2">No blog posts yet</h3>
            <p className="text-slate-600">Check back soon for new articles and tutorials!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export { BlogPage };