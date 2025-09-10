import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Core Values', href: '/core-values' },
    { name: 'Development', href: '/development' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__inner">
          {/* Logo */}
          <div className="header__logo-wrapper">
            <Link to="/" className="header__logo">
              <img 
                src="/logo.svg" 
                alt="Quantum Concierge Services - Your trusted partner in procurement & technology solutions" 
                className="header__logo-image"
                width="250"
                height="75"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <ul className="header__nav-menu">
              {navigation.map((item) => (
                <li key={item.name} className="header__nav-item">
                  <Link
                    to={item.href}
                    className={`header__nav-link ${
                      isActive(item.href) ? 'header__nav-link--active' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Quote%20Request"
              className="btn btn-primary header__cta-button"
            >
              Request a Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`header__mobile-toggle ${isMenuOpen ? 'header__mobile-toggle--open' : ''}`}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`header__mobile-menu ${isMenuOpen ? 'header__mobile-menu--open' : ''}`}>
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navigation.map((item) => (
                <li key={item.name} className="header__mobile-nav-item">
                  <Link
                    to={item.href}
                    className={`header__mobile-nav-link ${
                      isActive(item.href) ? 'header__mobile-nav-link--active' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="header__mobile-cta">
              <a
                href="mailto:Joe.root@quantumsrv.com?subject=Quote%20Request"
                className="btn btn-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Quote
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;