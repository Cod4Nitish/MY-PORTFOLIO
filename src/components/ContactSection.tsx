import React from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  location?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const ContactSection = ({
  email = "theeditornitish@gmail.com",
  phone = "6206889310",
  location = "Noida, Sector 102, Uttar Pradesh",
  socialLinks = {
    linkedin: "https://linkedin.com/in/nitish-kumar",
    github: "https://github.com/nitishkumar",
    twitter: "https://twitter.com/nitishkumar",
  },
}: ContactSectionProps) => {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl mb-8 text-gray-700">
              Let's work together! If you have a creative project or development
              idea, feel free to connect.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href={`tel:${phone}`}
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-lg font-medium">{location}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <Button className="px-8 py-6 text-lg rounded-full bg-black text-white hover:bg-gray-800">
                Download Resume
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="bg-gray-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-700 mb-6">
                Whether you're looking for a design consultation, development
                partnership, or just want to say hello, I'm always open to new
                opportunities and conversations.
              </p>
              <Button className="w-full py-6 text-lg rounded-full bg-black text-white hover:bg-gray-800">
                Send Message
              </Button>
            </div>

            <div className="mt-8">
              <p className="text-gray-500 mb-4">Follow me on social media</p>
              <div className="flex gap-4">
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-gray-700" />
                  </a>
                )}

                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Github className="h-6 w-6 text-gray-700" />
                  </a>
                )}

                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Twitter className="h-6 w-6 text-gray-700" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2025 Nitish Kumar Singh</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="#about"
                className="text-gray-500 hover:text-black transition-colors"
              >
                about
              </a>
              <a
                href="#portfolio"
                className="text-gray-500 hover:text-black transition-colors"
              >
                portfolio
              </a>
              <a
                href="#blog"
                className="text-gray-500 hover:text-black transition-colors"
              >
                blog
              </a>
              <a
                href="#contact"
                className="text-gray-500 hover:text-black transition-colors"
              >
                contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
