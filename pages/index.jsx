import React from 'react';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';

const Portfolio = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section with Animation */}
      <section className="h-screen flex flex-col justify-center items-center text-center relative">
        <h1 className="text-7xl font-bold mb-6 animate-fadeIn">
          Hey, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Pavithra</span>.
        </h1>
        <p className="text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12 animate-fadeIn animation-delay-200">
          I'm an aspiring Software Developer with a focused interest in applying my CS skills 
          to bridge humans and technology for an innovative future.
        </p>
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce absolute bottom-10 cursor-pointer text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-400">About Me</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a Computer Science student at the University of Illinois at Urbana-Champaign, 
              with 2+ years of experience in software development and AI. I've been working on 
              various projects involving machine learning, financial analysis, and web development.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section with Hover Effects */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Investment Banker",
                tech: "Python, NLP, Langchain, Open AI",
                description: "Developing an AI-driven financial analysis tool using Langchain for NLP and Streamlit for interactive user interface",
                link: "#"
              },
              {
                title: "On-Premise vs Cloud Servers Research",
                tech: "AWS, Python",
                description: "Researched speed differences between on-premise and cloud servers, certified by IMSA. Implemented comprehensive testing methodologies to analyze performance metrics.",
                link: "#"
              },
              {
                title: "LoCative - Destination Recommender",
                tech: "JavaScript, HTML, CSS, MySQL",
                description: "Developed a nationally qualified Lake County destination recommendation program. Created an intuitive interface for users to discover local attractions.",
                link: "#"
              },
              {
                title: "UIUC Project: Code Investment Analysis",
                tech: "Python, Machine Learning, Financial APIs",
                description: "Leading development of investment sentiment analysis tools. Building automated systems for market trend analysis and prediction.",
                link: "#"
              },
              {
                title: "10x Labs Innovation Projects",
                tech: "Various Technologies",
                description: "Contributing to strategic planning and technical development of innovative solutions. Collaborating with cross-functional teams on feature implementation.",
                link: "#"
              },
              {
                title: "Portfolio Website",
                tech: "React, Next.js, TailwindCSS",
                description: "Designed and developed a responsive personal portfolio website showcasing projects and skills using modern web technologies.",
                link: "#"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group relative bg-gray-900 p-6 rounded-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.split(', ').map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm px-2 py-1 bg-gray-800 text-blue-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Talk!</h2>
          <p className="text-xl text-gray-300 mb-8">I'm currently looking for new opportunities</p>
          <div className="flex justify-center gap-6">
            <a 
              href="mailto:pyarl2@illinois.edu"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <Mail size={20} />
              Email Me
            </a>
            <a 
              href="https://linkedin.com/in/pavithra-yarlagadda"
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;