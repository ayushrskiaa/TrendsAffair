import React, { Component } from 'react';
import './About.css';

export class About extends Component {
  render() {
    return (
      <div className="container about-container my-5">
        <div className="about-header text-center mb-5">
          <h1 className="display-4">About TrendsAffair</h1>
          <div className="divider"></div>
          <p className="lead">Your reliable source for the latest news and trends around the world</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-6">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="News concept" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <div className="about-content">
              <h2>Our Mission</h2>
              <p>
                At TrendsAffair, we believe that staying informed is essential in today's rapidly changing world. 
                Our mission is to provide timely, accurate, and accessible news to everyone, everywhere.
              </p>
              <p>
                We curate content from reliable sources across various categories including business, 
                entertainment, health, science, sports, and technology to ensure you never miss out 
                on what matters to you.
              </p>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 order-md-2">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1584531979583-3f9f9d72ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" 
                alt="Technology concept" 
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
          <div className="col-md-6 order-md-1 d-flex flex-column justify-content-center">
            <div className="about-content">
              <h2>Our Technology</h2>
              <p>
                Built with modern web technologies like React, our platform delivers a seamless 
                and responsive experience across all devices. We utilize the News API to fetch the 
                latest headlines and articles from trusted sources worldwide.
              </p>
              <p>
                Our user-friendly interface allows you to easily navigate between different news 
                categories and search for specific topics that interest you.
              </p>
            </div>
          </div>
        </div>

        <div className="features-section text-center mb-5">
          <h2>Key Features</h2>
          <div className="divider mx-auto mb-4"></div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <i className="fas fa-globe feature-icon"></i>
                <h3>Latest Headlines</h3>
                <p>Stay updated with breaking news and top stories from around the world</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <i className="fas fa-search feature-icon"></i>
                <h3>Powerful Search</h3>
                <p>Find specific news articles with our intuitive search functionality</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="feature-card">
                <i className="fas fa-th-large feature-icon"></i>
                <h3>Categorized News</h3>
                <p>Browse news by categories to find content that matters to you</p>
              </div>
            </div>
          </div>
        </div>

        <div className="team-section text-center">
          <h2>Meet the Developer</h2>
          <div className="divider mx-auto mb-4"></div>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="team-card">
                <div className="developer-image">
                  <img 
                    src="https://avatars.githubusercontent.com/u/0?v=4" 
                    alt="Developer" 
                    className="img-fluid rounded-circle shadow mb-3"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
                    }}
                  />
                </div>
                <h3>Your Name</h3>
                <p className="text-muted">Full Stack Developer</p>
                <p>Passionate about creating clean, user-friendly applications that make a difference.</p>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;