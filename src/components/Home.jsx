import React from "react";
import face from "../assets/face.jpg"; // rasm manzilingiz
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center text-gray-900"
    >
      <motion.div
        className="flex flex-col md:flex-row items-center text-center md:text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Rasm */}
        <img
          src={face}
          alt="Bahodirxon"
          className="w-48 h-48 rounded-full border-4 border-white shadow-lg mb-6 md:mb-0 md:mr-10 heroImg"
        />

        {/* Matn */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Mahmudov Bahodirxon</h1>
          <h2 className="text-2xl mb-6 text-blue-600">Frontend Developer</h2>

          {/* Bio qismini punktli qildim */}
          <motion.ul
            className="space-y-3 text-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <li>
              📚 <span className="font-semibold">Najot Ta'lim</span> — Frontend
              kursida 8 oy o‘qidim
            </li>
            <li>
              ⚡ Yoshim: <span className="font-semibold">19</span>
            </li>
            <li>
              🛠 Biladigan texnologiyalarim:
              <span className="ml-2 text-blue-700 font-semibold">
                HTML, CSS, JS, React, Sass, TypeScript, Tailwind
              </span>
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
