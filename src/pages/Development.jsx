const Development = () => {
  const offerings = [
    {
      title: 'Website Development',
      subtitle: 'Modern, responsive, SEO-ready websites',
      description: 'Create stunning, high-performance websites that engage your audience and drive results. Our web development services include responsive design, content management systems, e-commerce solutions, and search engine optimization.',
      features: [
        'Responsive Design for All Devices',
        'Content Management Systems',
        'E-commerce Integration',
        'SEO Optimization',
        'Performance Analytics',
        'Security & SSL Implementation',
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      subtitle: 'iOS and Android applications',
      description: 'Transform your business ideas into powerful mobile applications. We develop native and cross-platform apps that deliver exceptional user experiences and drive engagement across iOS and Android platforms.',
      features: [
        'Native iOS & Android Development',
        'Cross-Platform Solutions',
        'User Experience Design',
        'App Store Optimization',
        'Push Notifications',
        'Analytics & Performance Tracking',
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'System Software for Windows and Mac',
      subtitle: 'Custom software solutions for operational efficiency',
      description: 'Develop tailored software solutions that streamline your business operations and boost productivity. From desktop applications to enterprise systems, we create software that perfectly fits your workflow and requirements.',
      features: [
        'Desktop Application Development',
        'Cross-Platform Compatibility',
        'Database Integration',
        'Automated Workflow Solutions',
        'System Integration & APIs',
        'Maintenance & Support',
      ],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="development">
      {/* Hero Section with Background Image */}
      <section className="development__hero">
        <div className="development__hero-overlay">
          <div className="development__hero-container">
            <div className="development__hero-content">
              <div className="development__hero-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h1 className="development__hero-title">
                Website & Software
                <span className="development__hero-subtitle">Development</span>
              </h1>
              <p className="development__hero-description">
                Cutting-edge software and application development for businesses and government clients. 
                Transform your digital vision into powerful, scalable solutions.
              </p>
              <div className="development__hero-actions">
                <a
                  href="mailto:Joe.root@quantumsrv.com?subject=Development%20Consultation%20Request"
                  className="btn btn-primary btn-xl"
                >
                  Request Development Consultation
                </a>
                <a
                  href="mailto:Joe.root@quantumsrv.com?subject=Project%20Portfolio%20Request"
                  className="btn btn-secondary btn-xl"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="development__offerings">
        <div className="development__container">
          <div className="development__offerings-header">
            <h2 className="development__offerings-title">
              Core Development Offerings
            </h2>
            <p className="development__offerings-description">
              Comprehensive development services designed to meet the unique needs of modern businesses and government organizations.
            </p>
          </div>

          <div className="development__offerings-list">
            {offerings.map((offering, index) => (
              <div key={index} className="development-offering">
                <div className="development-offering__content">
                  <div className="development-offering__header">
                    <div className="development-offering__icon">
                      {offering.icon}
                    </div>
                    <div className="development-offering__info">
                      <h3 className="development-offering__title">
                        {offering.title}
                      </h3>
                      <p className="development-offering__subtitle">
                        {offering.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="development-offering__description">
                    {offering.description}
                  </p>
                  <a
                    href={`mailto:Joe.root@quantumsrv.com?subject=${offering.title}%20Consultation`}
                    className="btn btn-primary development-offering__cta"
                  >
                    Get Started
                  </a>
                </div>
                <div className="development-offering__features">
                  <h4 className="development-offering__features-title">Key Features:</h4>
                  <ul className="development-offering__features-list">
                    {offering.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="development-offering__feature">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="development__tech-stack">
        <div className="development__container">
          <div className="development__tech-header">
            <h2 className="development__tech-title">
              Modern Technology Stack
            </h2>
            <p className="development__tech-description">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="development__tech-grid">
            {[
              'React & Next.js',
              'Node.js & Python',
              'Cloud Infrastructure',
              'Mobile Development',
              'Database Solutions',
              'API Integration',
              'Security & DevOps',
              'AI & Machine Learning',
            ].map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-item__icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="tech-item__title">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="development__cta">
        <div className="development__container">
          <div className="development__cta-card">
            <h2 className="development__cta-title">
              Ready to Transform Your Digital Vision?
            </h2>
            <p className="development__cta-description">
              Partner with our expert development team to create innovative solutions that drive your business forward. From concept to deployment, we're here to make your vision a reality.
            </p>
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Development%20Consultation%20Request"
              className="btn btn-secondary btn-xl"
            >
              Request Development Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;