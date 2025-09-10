const Services = () => {
  const services = [
    {
      title: 'Office Supplies',
      description: 'Complete range of office supplies including stationery, paper products, writing instruments, and organizational tools to keep your business running smoothly.',
      image: '/images/services/office-supplies.svg',
      imageAlt: 'Professional office workspace with modern supplies and equipment',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: 'Office Furniture',
      description: 'Professional office furniture solutions including desks, chairs, storage systems, and ergonomic workstations designed for productivity and comfort.',
      image: '/images/services/office-furniture.svg',
      imageAlt: 'Modern corporate office furniture setup with professional seating and conference table',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
        </svg>
      ),
    },
    {
      title: 'Cleaning & Janitorial Products',
      description: 'Comprehensive cleaning and janitorial supplies to maintain clean, safe, and healthy work environments for your employees and visitors.',
      image: '/images/services/cleaning-services.svg',
      imageAlt: 'Professional cleaning equipment and supplies for commercial janitorial services',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Technology Products',
      description: 'Cutting-edge technology solutions including computers, networking equipment, software licenses, and IT infrastructure to power your digital operations.',
      image: '/images/services/technology-products.svg',
      imageAlt: 'High-tech server infrastructure and modern IT equipment setup',
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="services">
      <div className="services__container">
        <div className="services__header">
          <h1 className="services__title">
            Our Services
          </h1>
          <p className="services__description">
            Quantum Concierge Services offers comprehensive procurement solutions across multiple categories, serving both government agencies and private corporations with reliable, efficient service.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card__image">
                <img 
                  src={service.image} 
                  alt={service.imageAlt}
                  className="service-card__img"
                  loading="lazy"
                />
                <div className="service-card__overlay">
                  <div className="service-card__icon">
                    {service.icon}
                  </div>
                </div>
              </div>
              <div className="service-card__content">
                <div className="service-card__text">
                  <h3 className="service-card__title">
                    {service.title}
                  </h3>
                  <p className="service-card__description">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services__cta">
          <div className="services__cta-card">
            <div className="services__cta-content">
              <h2 className="services__cta-title">
                Need Something Specific?
              </h2>
              <p className="services__cta-description">
                Our procurement specialists can source virtually any product or service your organization needs. From specialized equipment to bulk supplies, we have the network and expertise to deliver.
              </p>
              <div className="services__cta-buttons">
                <a
                  href="mailto:Joe.root@quantumsrv.com?subject=Custom%20Procurement%20Request"
                  className="btn btn-primary btn-lg"
                >
                  Request Custom Quote
                </a>
                <a
                  href="mailto:Joe.root@quantumsrv.com?subject=General%20Inquiry"
                  className="btn btn-secondary btn-lg"
                >
                  General Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Excellence */}
        <div className="services__excellence">
          <h2 className="services__excellence-title">
            Service Excellence
          </h2>
          <div className="services__excellence-grid">
            <div className="excellence-item">
              <div className="excellence-item__icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="excellence-item__title">
                Fast Delivery
              </h3>
              <p className="excellence-item__description">
                Efficient logistics and nationwide distribution network ensure timely delivery of your orders.
              </p>
            </div>
            <div className="excellence-item">
              <div className="excellence-item__icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="excellence-item__title">
                Quality Assurance
              </h3>
              <p className="excellence-item__description">
                Rigorous quality control processes and partnerships with trusted suppliers guarantee product excellence.
              </p>
            </div>
            <div className="excellence-item">
              <div className="excellence-item__icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                </svg>
              </div>
              <h3 className="excellence-item__title">
                24/7 Support
              </h3>
              <p className="excellence-item__description">
                Dedicated customer service team available around the clock to address your needs and concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;