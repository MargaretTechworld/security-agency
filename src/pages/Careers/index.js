import React from 'react';
import { FaFileDownload, FaUserTie, FaShieldAlt, FaUsers, FaChartLine } from 'react-icons/fa';
import '../../styles/Careers.css';

const Careers = () => {
  // const openPositions = [
  //   {
  //     id: 1,
  //     title: 'Security Officer',
  //     type: 'Full-time',
  //     location: 'New York, NY',
  //     description: 'We are seeking experienced security officers to join our team.'
  //   },
  //   {
  //     id: 2,
  //     title: 'Cybersecurity Specialist',
  //     type: 'Full-time',
  //     location: 'Remote',
  //     description: 'Join our cybersecurity team to protect our clients from digital threats.'
  //   },
  //   {
  //     id: 3,
  //     title: 'Security Consultant',
  //     type: 'Contract',
  //     location: 'Multiple Locations',
  //     description: 'Work with clients to assess and improve their security measures.'
  //   },
  // ];

  const benefits = [
    {
      icon: <FaUserTie />,
      title: 'Career Growth',
      description: 'Opportunities for professional development and advancement'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Training',
      description: 'Comprehensive training and certification programs'
    },
    {
      icon: <FaUsers />,
      title: 'Team Environment',
      description: 'Work with a supportive and professional team'
    },
    {
      icon: <FaChartLine />,
      title: 'Competitive Pay',
      description: 'Attractive compensation and benefits package'
    }
  ];

  return (
    <section className="careers">
      <div className="container">
        <div className="careers-content">
          <div className="careers-intro">
            <h2>Why Work With Us?</h2>
            <p>
              At Elite Security, we believe our employees are our greatest asset. We're committed to 
              creating a supportive and inclusive work environment where you can grow your career 
              while making a real difference in people's lives.
            </p>
            
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="open-positions">
            <h2>Current Openings</h2>
            <div className="positions-list">
              {openPositions.map(position => (
                <div key={position.id} className="position-card">
                  <div className="position-info">
                    <h3>{position.title}</h3>
                    <div className="position-meta">
                      <span>{position.type}</span>
                      <span>{position.location}</span>
                    </div>
                    <p>{position.description}</p>
                  </div>
                  <a 
                    href="/documents/application-form.pdf" 
                    className="apply-btn"
                    download="EliteSecurity-Application-Form.pdf"
                  >
                    <FaFileDownload /> Apply Now
                  </a>
                </div>
              ))}
            </div>
          </div> */}

          <div className="application-process">
            <h2>How to Apply</h2>
            <ol className="process-steps">
              <li>
                <h3>Download the Application</h3>
                <p>Fill out our standard application form</p>
                <a 
                  href="/documents/application-form.pdf" 
                  className="download-link"
                  download="SecureShield-Application-Form.pdf"
                >
                  <FaFileDownload /> Download Application Form
                </a>
              </li>
              <li>
                <h3>Prepare Your Documents</h3>
                <p>Gather your resume, certifications, and any relevant documents</p>
              </li>
              <li>
                <h3>Submit Your Application</h3>
                <p>Email your completed application and documents to: <a href="mailto:eliteprotection25@gmail.com">eliteprotection25@gmail.com</a></p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
