const Contact = () => {
  const contacts = [
    {
      name: 'Fareed M Khan',
      title: 'CEO',
    },
    {
      name: 'Jack Baker',
      title: 'Director of Operations',
      email: 'Jack.baker@quantumsrv.com',
    },
    {
      name: 'Joe Root',
      title: 'Manager Procurement',
      email: 'Joe.root@quantumsrv.com',
    },
  ];

  return (
    <div className="contact">
      {/* Hero Section with Office Background */}
      <section className="contact__hero">
        <div className="contact__hero-overlay">
          <div className="contact__hero-container">
            <h1 className="contact__hero-title">
              Contact Us
            </h1>
            <p className="contact__hero-description">
              Get in touch with our leadership team for procurement solutions, technology development, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      <div className="contact__container">
        {/* Leadership Team */}
        <div className="contact__leadership">
          <h2 className="contact__leadership-title">
            Leadership Team
          </h2>
          
          <div className="contact__team-list">
            {contacts.map((contact, index) => (
              <div key={index} className="team-member">
                <div className="team-member__info">
                  <h3 className="team-member__name">
                    {contact.name}
                  </h3>
                  <p className="team-member__title">
                    {contact.title}
                  </p>
                  {contact.email && (
                    <p className="team-member__email">
                      {contact.email}
                    </p>
                  )}
                </div>
                {contact.email && (
                  <div className="team-member__action">
                    <a
                      href={`mailto:${contact.email}`}
                      className="btn btn-primary"
                    >
                      Send Email
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone Section */}
          <div className="contact__phone">
            <div className="contact__phone-header">
              <svg className="contact__phone-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="contact__phone-label">
                Phone
              </h3>
            </div>
            <p className="contact__phone-number">
              +1 859-287-2983
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact__cta">
          <div className="contact__cta-content">
            <h2 className="contact__cta-title">
              Ready to Get Started?
            </h2>
            <p className="contact__cta-description">
              Request a quote for your procurement needs or schedule a consultation for our development services. Our team is ready to help you succeed.
            </p>
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Quote%20Request"
              className="btn btn-lg contact__cta-button"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Info Cards */}
        <div className="contact__info-grid">
          <div className="info-card">
            <div className="info-card__header">
              <svg className="info-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="info-card__title">
                Business Hours
              </h3>
            </div>
            <div className="info-card__content">
              <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
              <p>Saturday: 9:00 AM - 2:00 PM EST</p>
              <p>Sunday: Closed</p>
              <p className="info-card__highlight">
                Emergency support available 24/7 for existing clients
              </p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-card__header">
              <svg className="info-card__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="info-card__title">
                Service Areas
              </h3>
            </div>
            <div className="info-card__content">
              <p>Nationwide procurement services</p>
              <p>Government contracts across all 50 states</p>
              <p>Remote development services worldwide</p>
              <p className="info-card__highlight">
                Specialized in federal and state government procurement
              </p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="contact__response">
          <div className="contact__response-header">
            <svg className="contact__response-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="contact__response-title">
              Response Time
            </h3>
          </div>
          <p className="contact__response-text">
            We typically respond to all inquiries within 2-4 business hours. 
            For urgent procurement needs, please call our direct line at +1 859-287-2983.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;