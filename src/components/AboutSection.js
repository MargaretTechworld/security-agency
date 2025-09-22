import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaAward, FaUsers, FaClock, FaChevronRight, FaUser } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import '../styles/AboutSection.css';
const aboutImage = '/assets/images/about_img1.jpg';
const aboutImage1 = '/assets/images/about_img11.jpg';
const aboutImage2 = '/assets/images/about_img12.jpg';
const aboutImage3 = '/assets/images/about_img13.jpg';
const aboutImage4 = '/assets/images/about_img14.jpg';
const aboutImage5 = '/assets/images/about_img16.jpg';
const staff1 = '/assets/images/staff/1.jpg';
const staff2 = '/assets/images/staff/2.jpg';
const staff3 = '/assets/images/staff/3.jpg'
const staff4 = '/assets/images/staff/4.jpg'


const AboutSection = ({ expanded = false }) => {
  // Carousel images
  const carouselImages = [
    {
      src: aboutImage,
      alt: 'Professional security team',
    },
    {
      src: aboutImage1,
      alt: 'Security Operations Center',
    },
    {
      src: aboutImage2,
      alt: 'Security Training',
    },
    {
      src: aboutImage3,
      alt: 'Client Consultation',
    },
    {
      src: aboutImage4,
      alt: 'Client Consultation',
    },
    {
      src: aboutImage5,
      alt: 'Client Consultation',
    }
  ];

  // Company achievements data
  const achievements = [
    {
      id: 1,
      title: '15+ Years Experience',
      description: 'Providing top-notch security solutions since 2010',
      icon: <FaClock className="achievement-icon" />
    },
    {
      id: 2,
      title: '200+ Clients',
      description: 'Trusted by businesses and individuals nationwide',
      icon: <FaUsers className="achievement-icon" />
    },
    {
      id: 3,
      title: 'Award Winning',
      description: 'Recognized for excellence in security services',
      icon: <FaAward className="achievement-icon" />
    },
    {
      id: 4,
      title: 'Certified Team',
      description: 'Fully licensed and vetted professionals',
      icon: <FaShieldAlt className="achievement-icon" />
    }
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Mr Osman Tejan Kamara',
      role: 'CEO / Managing Director',
      bio: `The CEO of Elite Security Specialist SL Limited 
I have worked within the security industry for over 20 years in England, with various role, and responsibilities from supervising role to management level, award winning base on training, enthusiasm and leadership qualities`,
      image: staff2
    },
    {
      id: 2,
      name: 'Mr Sailue Kargbo',
      role: 'Operations Manager',
      bio: `Mr Kargo has been in the security industry for 10 years now and has successfully managed operations in various security companies in Sierra Leone he’s 
An outstanding operations manager and performance all around is excellent.
He can work in short notice  with good leadership qualities with the team he managed and bring good results at the end of every task`,
      image: staff1
    },
    {
      id: 3,
      name: 'Ms Mariama Kanneh',
      role: 'Secretary',
      bio: 'Dedicated and detail-oriented professional with experience in administration, data entry, and secretarial support. Skilled in office management, computer opertions, and maintaining confidentiality in high-level environments.',
      image: staff3
    },
    {
      id: 4,
      name: 'Mr Theodore Browning',
      role: 'Logistics Manager',
      bio: 'Coordinates all logistical operations to ensure efficient deployment of security personnel and resources.',
      image: staff4
    }
  ];

  // Community initiatives
  const communityInitiatives = [
    { id: 1, title: 'Neighborhood Watch Programs', description: 'Partnering with local communities' },
    { id: 2, title: 'Security Awareness Workshops', description: 'Educating businesses and individuals' },
    { id: 3, title: 'Veteran Employment', description: 'Hiring and training veterans' },
  ];

  if (!expanded) {
    return (
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            {/* Left Column - Image Carousel */}
            <div className="about-image-container">
              <ImageCarousel
                images={carouselImages}
                autoPlay={true}
                interval={5000}
                showArrows={true}
                showIndicators={true}
              />
            </div>

            {/* Right Column - Content */}
            <div className="about-content">

              {/* Company History */}
              <div className="content-block">
                <h3>Our Story</h3>
                <p>
                  Founded in 2010, Elite Security has grown from a small local security firm to a nationally recognized leader in comprehensive security services. Our journey has been marked by a steadfast commitment to excellence and a passion for protecting what matters most to our clients.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="achievements-grid">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="achievement-item">
                    <div className="achievement-icon-wrapper">
                      {achievement.icon}
                    </div>
                    <div className="achievement-text">
                      <h4>{achievement.title}</h4>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="cta-container">
                <Link to="/services" className="cta-button">
                  Learn More About Our Services
                  <FaChevronRight className="cta-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Expanded version for the full About page
  return (
    <div className="about-page">
      <div className="about-page-content">
        <div className="container">
          <section className="page-section">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Elite Security began as a small team of security professionals with a shared vision: to provide exceptional security services that prioritize client safety and satisfaction. Over the years, we've grown into a nationally recognized firm, but we've never lost sight of our core values and commitment to excellence.
            </p>
            <p>
              Our journey has been marked by continuous growth, innovation, and a relentless focus on delivering the highest standard of security solutions. From our humble beginnings to becoming an industry leader, we've remained true to our founding principles while adapting to the evolving security landscape.
            </p>
          </section>

          <section className="page-section mission-section">
            <div className="mission-content">
              <div>
            <h3>Mission Statement</h3>
              <div className="mission-statement">
                <p>
                  To deliver <strong>unparalleled security solutions</strong> through innovation, integrity, and excellence, ensuring peace of mind for our clients and the communities we serve.
                </p>
              </div>
              </div>
              <div className="core-values">
                <h3>Core Values</h3>
                <ul>
                  <li><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.</li>
                  <li><strong>Excellence:</strong> We strive for the highest standards in everything we do.</li>
                  <li><strong>Innovation:</strong> We embrace new technologies and strategies to stay ahead of threats.</li>
                  <li><strong>Client Focus:</strong> Our clients' safety and satisfaction are our top priorities.</li>
                  <li><strong>Community:</strong> We're committed to making our communities safer for everyone.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="page-section team-section">
            <h2>Meet Our Leadership Team</h2>
            <div className={`team-grid ${teamMembers.length === 1 ? 'single-card' : ''}`}>
              {teamMembers.map(member => (
                <div key={member.id} className="team-member">
                  <div className="member-image">
                    {member.image ? (
                      <img src={member.image} alt={member.name} />
                    ) : (
                      <div className="member-image-default">
                        <FaUser size={40} />
                      </div>
                    )}
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Community Involvement */}
          <section className="page-section community-section">
            <h2>Community Involvement</h2>
            <p>
              At SecureShield, we believe in giving back to the communities we serve. Our commitment to safety extends beyond our clients to the neighborhoods and cities we call home.
            </p>
            <div className="initiatives-grid">
              {communityInitiatives.map(initiative => (
                <div key={initiative.id} className="initiative-card">
                  <h3>{initiative.title}</h3>
                  <p>{initiative.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="page-section cta-section">
            <h2>Ready to Experience the SecureShield Difference?</h2>
            <p>
              Contact us today to discuss your security needs and discover how we can help protect what matters most to you.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Security Assessment
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Our Services
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;