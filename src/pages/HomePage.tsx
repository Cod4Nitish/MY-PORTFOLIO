import React, { useState } from "react";
import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  const [makeItPop, setMakeItPop] = useState(false);

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "E-commerce UI Kit",
      description: "UI/UX Design",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    },
    {
      id: 2,
      title: "Real Estate Website",
      description: "Full Stack App",
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    },
    {
      id: 3,
      title: "Digital Branding Kit",
      description: "Logo & Identity",
      imageUrl:
        "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=800&q=80",
    },
    {
      id: 4,
      title: "Flight Booking UI",
      description: "Frontend Design",
      imageUrl:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    },
    {
      id: 5,
      title: "Thermal Plant Project",
      description: "Academic Project",
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f6?w=800&q=80",
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "UI/UX Design",
      imageUrl:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    },
    {
      id: 7,
      title: "Healthcare Dashboard",
      description: "Frontend Development",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    },
    {
      id: 8,
      title: "Food Delivery App",
      description: "Full Stack Development",
      imageUrl:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    },
    {
      id: 9,
      title: "Fitness Tracker",
      description: "Mobile App Design",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    },
    {
      id: 10,
      title: "Travel Blog",
      description: "Web Development",
      imageUrl:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?w=800&q=80",
    },
    {
      id: 11,
      title: "Music Streaming UI",
      description: "Interface Design",
      imageUrl:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    },
    {
      id: 12,
      title: "Educational Platform",
      description: "Full Stack Project",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    },
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Top Figma Plugins for Designers in 2025",
      imageUrl:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80",
    },
    {
      id: 2,
      title: "Building Modern Dashboards with React",
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      id: 3,
      title: "Graphic Design Tips for Beginners",
      imageUrl:
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
    },
    {
      id: 4,
      title: "My Design System Process",
      imageUrl:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    },
  ];

  return (
    <div
      className={`min-h-screen bg-white ${makeItPop ? "bg-gradient-to-br from-blue-50 to-purple-50" : ""}`}
    >
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              portfolio.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Check out some of my latest graphic and web design case studies.
              I've worked on creative digital projects from logos and websites
              to full UI systems and real-world applications.
            </motion.p>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-sm font-medium">Make it pop</span>
              <Switch
                checked={makeItPop}
                onCheckedChange={setMakeItPop}
                className={makeItPop ? "bg-purple-500" : ""}
              />
            </div>
          </div>

          <div className="md:w-2/5">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
                  alt="Beaches"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <Heart size={20} className="text-red-500" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">Beaches</h3>
                <p className="text-gray-600">Favourites</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">© 2025 Nitish Kumar Singh</p>
          <div className="flex justify-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">
              about
            </a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">
              portfolio
            </a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900">
              blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">
              contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
