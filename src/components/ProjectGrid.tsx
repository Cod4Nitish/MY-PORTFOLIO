import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

// Inline ProjectCard component since we can't import it
const ProjectCard = ({
  title = "Project Title",
  description = "Project Description",
  imageUrl = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white h-full">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
    </div>
  );
};

interface ProjectGridProps {
  projects?: Project[];
}

const ProjectGrid = ({ projects = [] }: ProjectGridProps) => {
  const [filter, setFilter] = useState<string>("all");

  // Default projects if none are provided
  const defaultProjects: Project[] = [
    {
      id: "1",
      title: "E-commerce UI Kit",
      description: "UI/UX Design",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "2",
      title: "Real Estate Website",
      description: "Full Stack App",
      imageUrl:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      category: "fullstack",
    },
    {
      id: "3",
      title: "Digital Branding Kit",
      description: "Logo & Identity",
      imageUrl:
        "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80",
      category: "branding",
    },
    {
      id: "4",
      title: "Flight Booking UI",
      description: "Frontend Design",
      imageUrl:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "5",
      title: "Thermal Plant Project",
      description: "Academic Project",
      imageUrl:
        "https://images.unsplash.com/photo-1498084393753-b411b2d26b34?w=800&q=80",
      category: "academic",
    },
    {
      id: "6",
      title: "Mobile Banking App",
      description: "UI/UX Design",
      imageUrl:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "7",
      title: "Healthcare Dashboard",
      description: "Frontend Development",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      category: "frontend",
    },
    {
      id: "8",
      title: "Restaurant Branding",
      description: "Logo & Identity",
      imageUrl:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      category: "branding",
    },
    {
      id: "9",
      title: "Social Media Platform",
      description: "Full Stack App",
      imageUrl:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      category: "fullstack",
    },
    {
      id: "10",
      title: "Fitness Tracker",
      description: "Mobile App Design",
      imageUrl:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "11",
      title: "Educational Platform",
      description: "Web Application",
      imageUrl:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      category: "fullstack",
    },
    {
      id: "12",
      title: "Smart Home Interface",
      description: "UI/UX Design",
      imageUrl:
        "https://images.unsplash.com/photo-1558002038-bb0237f4b3af?w=800&q=80",
      category: "ui-ux",
    },
    {
      id: "13",
      title: "Crypto Dashboard",
      description: "Frontend Development",
      imageUrl:
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
      category: "frontend",
    },
    {
      id: "14",
      title: "Fashion Brand Identity",
      description: "Logo & Branding",
      imageUrl:
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80",
      category: "branding",
    },
    {
      id: "15",
      title: "AI Research Project",
      description: "Academic Research",
      imageUrl:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
      category: "academic",
    },
  ];

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? displayProjects
      : displayProjects.filter((project) => project.category === filter);

  // Categories for filter buttons
  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "frontend", label: "Frontend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "branding", label: "Branding" },
    { id: "academic", label: "Academic" },
  ];

  // Animation variants for the grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 py-16 bg-white">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">My Projects</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Check out some of my latest graphic and web design case studies. I've
          worked on creative digital projects from logos and websites to full UI
          systems and real-world applications.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category.id ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
