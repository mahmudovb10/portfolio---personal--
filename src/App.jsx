import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-100 to-gray-800">
      <Navbar />
      <main className="flex-1">
        <Home />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
