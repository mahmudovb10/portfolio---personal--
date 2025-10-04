import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wszp4o9",
        "template_u9xbyeg",
        form.current,
        "nIdfdldPYcfb5buo5"
      )
      .then(
        (result) => {
          alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Xabar yuborishda xatolik yuz berdi!");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="tel:+998775007434"
            className="flex items-center space-x-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition"
          >
            <span className="text-2xl">📞</span>
            <span>+998 77 500 74 34</span>
          </a>

          <a
            href="https://t.me/bahodirkhonn"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition"
          >
            <span className="text-2xl">✉</span>
            <span>Telegram</span>
          </a>

          <a
            href="https://www.linkedin.com/in/bahodirxon-mahmudov-561096353/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-3 text-lg font-medium text-gray-800 hover:text-blue-600 transition"
          >
            <span className="text-2xl">💼</span>
            <span>LinkedIn</span>
          </a>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 flex flex-col space-y-4 bg-white/80 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Ismingiz"
            required
            className="p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email manzilingiz"
            required
            className="p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Xabaringiz..."
            required
            className="p-4 rounded-lg text-black h-32 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Yuborish
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
