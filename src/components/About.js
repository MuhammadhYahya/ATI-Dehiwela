const About = () => {
  return (
    <section className="about-section">
      {/* About Title */}
      <h1 className="about-title">About Us</h1>

      {/* Vision and Mission Section */}
      <div className="vision-mission-container">
        <div className="vision-section box">
          <h2>Our Vision</h2>
          <img src="/images/vision.png" alt="Vision Logo" className="logo" />
          <p>
            " To Become the Centre of Excellence in Technological Education "
          </p>
        </div>

        <div className="mission-section box">
          <h2>Our Mission</h2>
          <img src="/images/mision.png" alt="Mission Logo" className="logo" />
          <p>
            " Creating Excellent Higher National and National Diplomates with
            Modern Technology for Sustainable Development "
          </p>
        </div>
      </div>

      {/* Sri Lanka Institute Section */}
      <div className="sliate-section">
        <div className="sliate-content">
          <h2>SRI LANKA INSTITUTE OF ADVANCED TECHNOLOGICAL EDUCATION</h2>
          <h4>DEHIWALA</h4>
        </div>
        <div className="sliate-details">
          <img
            src="/images/slide_1.jpg"
            alt="SLIATE Building"
            className="sliate-image"
          />
          <p>
            The SLIATE is a statutory body operating under the purview of
            Ministry of Higher Education and is one of the leading higher
            educational institutions in Srilanka. SLIATE has been focusing on
            fostering Advanced Technical Education at a post secondary level. It
            is mandated to establish Advanced Technological Institute (ATI) in
            every province for technological courses. At present it manages and
            supervises Twelve Advanced Technological Institutes and Six
            Sections. SLIATE is headed by a Director General while each of its
            institutes is headed by a Director. All academic sections of SLIATE
            and its institutions are headed by Academic Coordinators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
