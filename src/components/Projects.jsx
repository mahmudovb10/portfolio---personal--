import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    github: "https://github.com/mahmudovb10/uzum",
    vercel: "https://uzum-fpyv.vercel.app/",
    title: "Uzum Market ( Clone )",
  },
  {
    github: "https://github.com/mahmudovb10/Music-Player",
    vercel: "https://music-player-wine-theta.vercel.app/",
    title: "Musiqa Playeri",
  },
  {
    github: "https://github.com/mahmudovb10/nexcent",
    vercel: "https://imtihon4-pi.vercel.app/",
    title: "Nexcent ( Figma )",
  },
  {
    github: "https://github.com/mahmudovb10/tech-books",
    vercel: "https://tech-books-ruddy.vercel.app/",
    title: "Tech Books ( Figma )",
  },
  {
    github: "https://github.com/mahmudovb10/examfigma ",
    vercel: "https://examfigma-g8a5.vercel.app/",
    title: "Health Recipe",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-4">{p.title}</h3>
            <div className="flex space-x-4">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href={p.vercel}
                target="_blank"
                rel="noreferrer"
                className="text-green-500 hover:underline"
              >
                Vercel
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
