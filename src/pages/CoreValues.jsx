const CoreValues = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'Honest and transparent procurement practices',
      details: 'We conduct all business with unwavering integrity, ensuring transparent communication, honest dealings, and ethical practices in every procurement process. Our clients can trust that we prioritize their interests and maintain the highest standards of professional conduct.',
      image: '/images/core-values/integrity.svg',
      imageAlt: 'Professional handshake representing business integrity and trust',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'var(--color-corporate-blue-600)',
      bgColor: 'var(--color-corporate-blue-50)',
      textColor: 'var(--color-corporate-blue-600)',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving sourcing and delivery',
      details: 'We embrace innovation in every aspect of our operations, from leveraging cutting-edge technology for efficient sourcing to developing creative solutions that meet evolving client needs. Our commitment to continuous improvement ensures we stay ahead of industry trends and deliver exceptional value.',
      image: '/images/core-values/innovation.svg',
      imageAlt: 'Futuristic technology and innovation concepts with AI and digital elements',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'var(--color-primary-600)',
      bgColor: 'var(--color-primary-50)',
      textColor: 'var(--color-primary-600)',
    },
    {
      title: 'Customer-Centric',
      description: 'Dedicated to client success and timely fulfillment',
      details: 'Our clients are at the heart of everything we do. We are committed to understanding their unique needs, exceeding expectations, and ensuring timely fulfillment of all commitments. Every decision we make is guided by how it will impact and benefit our valued clients.',
      image: '/images/core-values/customer-centric.svg',
      imageAlt: 'Customer service excellence with professional support and satisfaction',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'var(--color-accent-gold-600)',
      bgColor: 'var(--color-accent-gold-50)',
      textColor: 'var(--color-accent-gold-600)',
    },
  ];

  return (
    <div className="core-values">
      <div className="core-values__container">
        <div className="core-values__header">
          <h1 className="core-values__title">
            Our Core Values
          </h1>
          <p className="core-values__description">
            These fundamental principles guide every aspect of our business, from client relationships to procurement processes, ensuring we deliver exceptional service with unwavering commitment.
          </p>
        </div>

        <div className="core-values__grid">
          {values.map((value, index) => (
            <div key={index} className="core-value-card">
              <div className="core-value-card__image">
                <img 
                  src={value.image} 
                  alt={value.imageAlt}
                  className="core-value-card__img"
                  loading="lazy"
                />
                <div className="core-value-card__overlay">
                  <div className="core-value-card__icon" style={{ backgroundColor: value.color }}>
                    {value.icon}
                  </div>
                </div>
              </div>
              <div className="core-value-card__content">
                <h3 className="core-value-card__title">
                  {value.title}
                </h3>
                <p className="core-value-card__description" style={{ color: value.textColor }}>
                  {value.description}
                </p>
                <p className="core-value-card__details">
                  {value.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action Section */}
        <div className="core-values__action-section">
          <div className="core-values__action-header">
            <h2 className="core-values__action-title">
              Our Values in Action
            </h2>
            <p className="core-values__action-description">
              See how our core values translate into tangible benefits for our clients and partners across all our services and interactions.
            </p>
          </div>

          <div className="core-values__action-grid">
            <div className="action-item">
              <div className="action-item__icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="action-item__title">Transparent Pricing</h3>
              <p className="action-item__description">No hidden costs or surprise charges in our procurement processes.</p>
            </div>

            <div className="action-item">
              <div className="action-item__icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="action-item__title">Rapid Response</h3>
              <p className="action-item__description">Quick turnaround times and innovative solutions to meet urgent needs.</p>
            </div>

            <div className="action-item">
              <div className="action-item__icon">
                <svg fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="action-item__title">Success Partnership</h3>
              <p className="action-item__description">We measure our success by the success of our clients and their satisfaction.</p>
            </div>
          </div>

          <div className="core-values__action-cta">
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Partnership%20Inquiry"
              className="btn btn-secondary btn-lg"
            >
              Partner With Us Today
            </a>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="core-values__commitment">
          <div className="core-values__commitment-content">
            <h2 className="core-values__commitment-title">
              Our Commitment to Excellence
            </h2>
            <p className="core-values__commitment-description">
              At Quantum Concierge Services, these values are not just words on a page—they are the foundation of our culture and the driving force behind every decision we make. We are committed to upholding these principles in all our interactions, ensuring that our clients receive not just products and services, but a partnership built on trust, innovation, and mutual success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;