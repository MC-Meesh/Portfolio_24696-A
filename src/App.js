import React from "react";

const sections = ["About Me", "Projects", "Resume", "Contact"];

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen text-gray-900">
      <nav className="bg-blue-600 p-4 text-white text-center">
        {sections.map((section) => (
          <a key={section} href={`#${section.toLowerCase().replace(/ /g, "-")}`} className="px-4">
            {section}
          </a>
        ))}
      </nav>

      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Chase Allen Engineering Portfolio</h1>
        <p className="text-lg text-gray-600">Showcasing AI, ML, and Engineering Projects</p>
      </header>

      <section id="about-me" className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4">I'm a Mechanical Engineering graduate pursuing a Master’s in AI Engineering at Carnegie Mellon. Passionate about AI/ML, I co-founded an AI/ML Club and enjoy competing in Kaggle competitions. Outside of engineering, I love playing guitar and skiing.</p>
      </section>

      <section id="projects" className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4 space-y-6">
          {["Fast Finetune on Flux.1 LoRa", "Augmented Reality with Planar Homographies", "Lucas-Kanade Object Tracking", "3D Reconstruction", "AI Meeting Assistant (Quaternion Studios)", "Swarm Robotics - Reinforcement Learning"].map((project) => (
            <div key={project} className="border-b pb-4">
              <h3 className="text-xl font-semibold">{project}</h3>
              <p>Brief description of the project.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="resume" className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Resume</h2>
        <p className="mt-4">Download my resume: <a href="resume.pdf" className="text-blue-600">Resume.pdf</a></p>
      </section>

      <section id="contact" className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-4">Feel free to reach out for collaborations or opportunities:</p>
        <ul className="mt-2">
          <li>Email: <a href="mailto:temp@gmail.com" className="text-blue-600">placedholder</a></li>
          <li>GitHub: <a href="https://github.com/MC-Meesh" className="text-blue-600">MC-Meesh</a></li>
          <li>Website: <a href="https://github.com/MC-Meesh" className="text-blue-600">placeholder</a></li>
        </ul>
      </section>

      <footer className="text-center p-4 mt-6 bg-gray-200">
        <p>&copy; 2025 MC-Meesh. All rights reserved.</p>
      </footer>
    </div>
  );
}
