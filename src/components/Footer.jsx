import { Link } from 'react-router-dom';

const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Core Values', href: '/core-values' },
    { name: 'Development', href: '/development' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__company">
            <Link to="/" className="footer__logo">
              <div className="footer__logo-text">
                Quantum Concierge Services
              </div>
            </Link>
            <p className="footer__description">
              Your trusted partner in procurement and technology solutions, delivering excellence across the United States for government agencies and corporate clients.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="footer__nav-link"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Partner Logos */}
        <div className="footer__partners">
          <h4 className="footer__partners-title">Trusted Partners & Certifications</h4>
          <div className="footer__partners-grid">
            {/* BBB Logo */}
            <a
              href="https://www.bbb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__partner-logo"
              aria-label="Better Business Bureau"
            >
              <div className="footer__partner-content">
                <span className="footer__partner-text">BBB</span>
                <span className="footer__partner-label">Better Business Bureau</span>
              </div>
            </a>

            {/* LinkedIn Logo */}
            <a
              href="https://www.linkedin.com/company/quantum-concierge-services"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__partner-logo"
              aria-label="LinkedIn Company Page"
            >
              <div className="footer__partner-content">
                <span className="footer__partner-text">in</span>
                <span className="footer__partner-label">LinkedIn</span>
              </div>
            </a>

            {/* D-U-N-S & Bradstreet Logo */}
            <a
              href="https://www.dnb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__partner-logo"
              aria-label="Dun & Bradstreet"
            >
              <div className="footer__partner-content">
                <span className="footer__partner-text">D&B</span>
                <span className="footer__partner-label">D-U-N-S & Bradstreet</span>
              </div>
            </a>

            {/* GovTribe Logo */}
            <a
              href="https://govtribe.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__partner-logo"
              aria-label="GovTribe"
            >
              <div className="footer__partner-content">
                <span className="footer__partner-text">GT</span>
                <span className="footer__partner-label">GovTribe</span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Quantum Concierge Services LLC. All rights reserved.
          </p>
          <div className="footer__social-links">
            <a
              href="mailto:Joe.root@quantumsrv.com"
              className="footer__social-link"
              aria-label="Email us"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="tel:+18592872983"
              className="footer__social-link"
              aria-label="Call us"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;