import React from "react";
import { Separator } from "./ui/separator";
import { motion } from "framer-motion";

interface SkillItem {
  name: string;
}

interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

interface AboutSectionProps {
  skills?: SkillCategory[];
}

const AboutSection = ({ skills = defaultSkills }: AboutSectionProps) => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              I'm Nitish Kumar Singh, a passionate full stack developer and
              graphic designer currently pursuing BTech in Computer Science
              Engineering (CSE-AI) from Noida Institute of Engineering &
              Technology.
            </p>
            <p>
              I have over 20 years of experience in frontend development, UI/UX
              design, and branding. I combine design thinking with technical
              implementation to craft engaging, accessible, and
              performance-driven digital experiences.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <Separator className="my-2" />
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const defaultSkills: SkillCategory[] = [
  {
    title: "Frontend & Full Stack",
    skills: [
      { name: "HTML5, CSS3, JavaScript (ES6+)" },
      { name: "React.js, Tailwind CSS, Bootstrap" },
      { name: "Node.js, Express.js" },
      { name: "MongoDB, Firebase" },
      { name: "REST APIs, Git, GitHub, CI/CD" },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Adobe Photoshop, Illustrator" },
      { name: "Figma, Canva, After Effects" },
      { name: "UI/UX Design" },
      { name: "Logo & Brand Identity" },
      { name: "Wireframing & Prototyping" },
    ],
  },
];

export default AboutSection;
