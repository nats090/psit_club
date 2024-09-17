import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <section className="hero-section text-center bg-dark text-white" style={{ padding: '100px 0' }}>
        <div className="container">
          <h1>Welcome to NDKC PSIT Club</h1>
          <p className="lead">Website is basic but useful</p>
          <Link to="/events" className="btn btn-primary mt-4">View Events</Link>
        </div>
      </section>

      <section id="events" className="events-section bg-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2>Our Events</h2>
          <p>Join our workshops and seminars to stay updated with the latest in technology.</p>
          <Link to="/events" className="btn btn-secondary">See Events</Link>
        </div>
      </section>

      <section id="about" className="about-section bg-dark text-white" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2>About Us</h2>
          <p>We are a community of tech enthusiasts, promoting learning and collaboration in IT.</p>
          <Link to="/about" className="btn btn-secondary">Learn More</Link>
        </div>
      </section>

      <section id="contact" className="contact-section bg-light" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2>Contact Us</h2>
          <p>Have any questions? Reach out to us!</p>
          <Link to="/contact" className="btn btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
