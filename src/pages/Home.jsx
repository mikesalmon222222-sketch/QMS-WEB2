import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
          <div className="hero__content">
            <div className="hero__logo-container">
              <div className="hero__logo">
                <span className="hero__logo-text">Quantum</span>
              </div>
            </div>
            <h1 className="hero__title">
              Quantum Concierge Services
            </h1>
            <p className="hero__subtitle">
              Your Trusted Partner in Procurement & Technology Solutions
            </p>
            <div className="hero__actions">
              <a
                href="mailto:Joe.root@quantumsrv.com?subject=Quote%20Request"
                className="btn btn-primary btn-xl hero__cta-primary"
              >
                Request a Quote
              </a>
              <Link
                to="/services"
                className="btn btn-secondary btn-xl hero__cta-secondary"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">
          <div className="features__header">
            <h2 className="features__title">
              Why Choose Quantum Concierge Services?
            </h2>
            <p className="features__description">
              We combine reliability, trust, and extensive experience to deliver exceptional procurement and technology solutions for businesses and government agencies nationwide.
            </p>
          </div>

          <div className="features__content">
            <div className="features__list">
              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="feature-item__content">
                  <h3 className="feature-item__title">
                    Reliable Nationwide Procurement Partner
                  </h3>
                  <p className="feature-item__description">
                    Count on our proven track record of delivering quality products and services across the United States. We understand the unique challenges of procurement and provide consistent, dependable solutions.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="feature-item__content">
                  <h3 className="feature-item__title">
                    Government & Corporate Contract Ready
                  </h3>
                  <p className="feature-item__description">
                    Fully equipped to handle complex government contracts and corporate procurement processes. Our team ensures compliance, transparency, and efficiency in every engagement.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-item__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="feature-item__content">
                  <h3 className="feature-item__title">
                    Technology & Innovation Focus
                  </h3>
                  <p className="feature-item__description">
                    Beyond traditional procurement, we offer cutting-edge technology solutions including custom software development, mobile applications, and digital transformation services.
                  </p>
                </div>
              </div>
            </div>

            <div className="features__cta-card">
              <h3 className="features__cta-title">
                Experience the Quantum Difference
              </h3>
              <ul className="features__cta-list">
                <li className="features__cta-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Comprehensive procurement solutions
                </li>
                <li className="features__cta-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom technology development
                </li>
                <li className="features__cta-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Nationwide service coverage
                </li>
                <li className="features__cta-item">
                  <svg fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Government contract expertise
                </li>
              </ul>
              <Link
                to="/contact"
                className="btn features__cta-button"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;