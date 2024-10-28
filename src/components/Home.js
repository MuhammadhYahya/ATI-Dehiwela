import React, { useState, useEffect } from "react";

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-section">
      <div
        className={`hero-content first-section ${
          activeSection === 0 ? "fade-in" : "fade-out"
        }`}
      >
        <h1>Welcome to Advanced Technological Institute Dehiwala</h1>
        <button className="cta-button">About Us</button>
      </div>

      <div
        className={`hero-content second-section ${
          activeSection === 1 ? "fade-in" : "fade-out"
        }`}
      >
        <h1>Focus on Improvement</h1>
        <button className="cta-button">SLIATE LMS</button>
      </div>

      <div
        className={`hero-content third-section ${
          activeSection === 2 ? "fade-in" : "fade-out"
        }`}
      >
        <h1>Stay In Touch</h1>
        <button className="cta-button">Contact Us</button>
      </div>
    </section>
  );
};

export default Home;
