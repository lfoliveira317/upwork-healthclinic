import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaStethoscope, FaHeadphones, FaBook, FaMobileAlt, FaUserMd, FaCalendarCheck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-primary text-white py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4">Your Wellness Journey Starts Here</h1>
            <p className="lead mb-4">
              Experience a modern, calming digital platform designed to support your health and personal development goals.
            </p>
            <div className="d-flex gap-3">
              <Button variant="light" size="lg" className="px-4">Get Started</Button>
              <Button variant="outline-light" size="lg" className="px-4">Learn More</Button>
            </div>
          </Col>
          <Col lg={6} className="mt-5 mt-lg-0 text-center">
            <div className="bg-white rounded-3 shadow-lg p-5" style={{ opacity: 0.9 }}>
              <FaHeadphones className="text-primary mb-3" size={80} />
              <h4 className="text-dark">Audio Wellness Library</h4>
              <p className="text-muted">Access curated meditation and wellness content</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FaStethoscope size={40} />,
      title: 'Health Monitoring',
      description: 'Track your wellness progress with intuitive tools and insights.'
    },
    {
      icon: <FaHeadphones size={40} />,
      title: 'Audio Content',
      description: 'Access guided meditations and wellness audio materials.'
    },
    {
      icon: <FaBook size={40} />,
      title: 'Wellness Blog',
      description: 'Stay informed with our curated wellness and health articles.'
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: 'Mobile First',
      description: 'Seamless experience across all your devices.'
    },
    {
      icon: <FaUserMd size={40} />,
      title: 'Expert Guidance',
      description: 'Connect with wellness professionals and practitioners.'
    },
    {
      icon: <FaCalendarCheck size={40} />,
      title: 'Appointment Booking',
      description: 'Schedule consultations and track your appointments easily.'
    }
  ];

  return (
    <section id="services" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Our Services</h2>
          <p className="lead text-muted">Comprehensive wellness solutions tailored to your needs</p>
        </div>
        <Row>
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm hover-shadow">
                <Card.Body className="text-center p-4">
                  <div className="text-primary mb-3">{service.icon}</div>
                  <Card.Title className="mb-3">{service.title}</Card.Title>
                  <Card.Text className="text-muted">{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h2 className="display-5 fw-bold mb-4">About Health Clinic</h2>
            <p className="lead mb-4">
              We're committed to providing a modern, user-centric digital experience 
              for your wellness journey.
            </p>
            <p className="text-muted mb-4">
              Our platform combines cutting-edge technology with wellness expertise 
              to create an accessible, calming environment where you can focus on 
              your personal development and health goals.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">✓ User-friendly interface with intuitive navigation</li>
              <li className="mb-2">✓ Comprehensive content library</li>
              <li className="mb-2">✓ Mobile-first responsive design</li>
              <li className="mb-2">✓ Accessibility-focused development</li>
            </ul>
          </Col>
          <Col lg={6}>
            <div className="bg-white rounded-3 shadow-lg p-5">
              <div className="mb-4">
                <h5 className="text-primary mb-3">Our Mission</h5>
                <p className="text-muted">
                  To empower individuals on their wellness journey through 
                  innovative digital solutions and compassionate support.
                </p>
              </div>
              <div>
                <h5 className="text-primary mb-3">Our Vision</h5>
                <p className="text-muted">
                  A world where everyone has access to the tools and resources 
                  they need for holistic health and personal growth.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      title: 'Getting Started with Mindfulness',
      date: 'February 5, 2026',
      excerpt: 'Discover the basics of mindfulness meditation and how to incorporate it into your daily routine.'
    },
    {
      title: 'The Benefits of Regular Exercise',
      date: 'February 3, 2026',
      excerpt: 'Learn about the physical and mental health benefits of maintaining an active lifestyle.'
    },
    {
      title: 'Nutrition Tips for Wellness',
      date: 'February 1, 2026',
      excerpt: 'Expert advice on maintaining a balanced diet that supports your wellness goals.'
    }
  ];

  return (
    <section id="blog" className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Latest from Our Blog</h2>
          <p className="lead text-muted">Insights and tips for your wellness journey</p>
        </div>
        <Row>
          {blogPosts.map((post, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-muted small mb-2">{post.date}</div>
                  <Card.Title className="mb-3">{post.title}</Card.Title>
                  <Card.Text className="text-muted">{post.excerpt}</Card.Text>
                  <a href="#" className="text-primary text-decoration-none fw-bold">
                    Read More →
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
          <p className="lead text-muted">We'd love to hear from you</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow">
              <Card.Body className="p-5">
                <form>
                  <Row>
                    <Col md={6} className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Your name" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="your@email.com" />
                    </Col>
                  </Row>
                  <div className="mb-3">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" placeholder="How can we help?" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="5" placeholder="Your message..."></textarea>
                  </div>
                  <Button variant="primary" size="lg" className="w-100">Send Message</Button>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Blog />
      <Contact />
    </>
  );
};

export default HomePage;
