import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Mail, Menu, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import HeroSection from "./HeroSection";
import ProjectGrid from "./ProjectGrid";

const HomePage = () => {
  const [makeItPop, setMakeItPop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top Figma Plugins for Designers in 2025",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
      date: "May 15, 2025",
    },
    {
      id: 2,
      title: "Building Modern Dashboards with React",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      date: "April 28, 2025",
    },
    {
      id: 3,
      title: "Graphic Design Tips for Beginners",
      image:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      date: "March 12, 2025",
    },
    {
      id: 4,
      title: "My Design System Process",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      date: "February 5, 2025",
    },
  ];

  return (
    <div className={`min-h-screen bg-white ${makeItPop ? "make-it-pop" : ""}`}>
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 px-6 md:px-12 lg:px-24 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">NS</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-gray-300 transition-colors">
              about
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">
              skills
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-300 transition-colors"
            >
              portfolio
            </a>
            <a href="#blog" className="hover:text-gray-300 transition-colors">
              blog
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              contact
            </a>

            <div className="flex space-x-4 ml-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a href="mailto:theeditornitish@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-6 flex flex-col space-y-4"
          >
            <a href="#about" className="hover:text-gray-300 transition-colors">
              about
            </a>
            <a href="#skills" className="hover:text-gray-300 transition-colors">
              skills
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-300 transition-colors"
            >
              portfolio
            </a>
            <a href="#blog" className="hover:text-gray-300 transition-colors">
              blog
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              contact
            </a>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a href="mailto:theeditornitish@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </motion.nav>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 px-6 md:px-12 lg:px-24">
          <HeroSection makeItPop={makeItPop} setMakeItPop={setMakeItPop} />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 px-6 md:px-12 lg:px-24">
          <h2 className="text-4xl font-bold mb-8">Portfolio</h2>
          <ProjectGrid />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-1">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=nitish"
                  alt="Nitish Kumar Singh"
                  className="rounded-full w-48 h-48 object-cover mx-auto"
                />
              </div>
              <div className="md:col-span-2 space-y-4">
                <p className="text-lg">
                  I'm Nitish Kumar Singh, a passionate full stack developer and
                  graphic designer currently pursuing BTech in Computer Science
                  Engineering (CSE-AI) from Noida Institute of Engineering &
                  Technology.
                </p>
                <p className="text-lg">
                  I have over 20 years of experience in frontend development,
                  UI/UX design, and branding. I combine design thinking with
                  technical implementation to craft engaging, accessible, and
                  performance-driven digital experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Frontend & Full Stack
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    HTML5, CSS3, JavaScript (ES6+)
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    React.js, Tailwind CSS, Bootstrap
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    Node.js, Express.js
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    MongoDB, Firebase
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                    REST APIs, Git, GitHub, CI/CD
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Design & Tools</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Adobe Photoshop, Illustrator
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Figma, Canva, After Effects
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    UI/UX Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Logo & Brand Identity
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                    Wireframing & Prototyping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Blog</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-w-16 aspect-h-9 relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg mb-6">
                  Let's work together! If you have a creative project or
                  development idea, feel free to connect.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a
                        href="mailto:theeditornitish@gmail.com"
                        className="text-blue-600 hover:underline"
                      >
                        theeditornitish@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a
                        href="tel:+916206889310"
                        className="text-blue-600 hover:underline"
                      >
                        +91 6206889310
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-3 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p>Noida, Sector 102, Uttar Pradesh</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 hover:text-blue-600"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:theeditornitish@gmail.com"
                aria-label="Email"
                className="text-gray-600 hover:text-red-600"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>© 2025 Nitish Kumar Singh</p>
            </div>
            <nav className="flex space-x-6">
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors"
              >
                about
              </a>
              <a
                href="#portfolio"
                className="hover:text-gray-300 transition-colors"
              >
                portfolio
              </a>
              <a href="#blog" className="hover:text-gray-300 transition-colors">
                blog
              </a>
              <a
                href="#contact"
                className="hover:text-gray-300 transition-colors"
              >
                contact
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
