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
    <footer className="bg-gradient-to-br from-secondary-900 to-secondary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            {/* Logo */}
            <div className="mb-8 lg:mb-0">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Quantum Concierge Services
              </div>
              <p className="text-secondary-400 mt-2 text-lg">
                Your Trusted Partner in Procurement & Technology
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-secondary-300 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-secondary-700 pt-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-secondary-300 mb-2">Trusted Partners & Certifications</h3>
              <div className="section-divider"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {/* BBB Logo */}
              <a
                href="https://www.bbb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-2xl flex items-center justify-center mb-3 group-hover:from-secondary-600 group-hover:to-secondary-700 group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <span className="text-lg font-bold">BBB</span>
                  </div>
                  <span className="text-sm font-medium">Better Business Bureau</span>
                </div>
              </a>

              {/* LinkedIn Logo */}
              <a
                href="https://www.linkedin.com/company/quantum-concierge-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-3 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">LinkedIn</span>
                </div>
              </a>

              {/* D-U-N-S & Bradstreet Logo */}
              <a
                href="https://www.dnb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-2xl flex items-center justify-center mb-3 group-hover:from-secondary-600 group-hover:to-secondary-700 group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <span className="text-sm font-bold">D&B</span>
                  </div>
                  <span className="text-sm font-medium">D-U-N-S & Bradstreet</span>
                </div>
              </a>

              {/* GovTribe Logo */}
              <a
                href="https://govtribe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-all duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary-700 to-secondary-800 rounded-2xl flex items-center justify-center mb-3 group-hover:from-secondary-600 group-hover:to-secondary-700 group-hover:scale-105 transition-all duration-300 shadow-lg">
                    <span className="text-sm font-bold">GT</span>
                  </div>
                  <span className="text-sm font-medium">GovTribe</span>
                </div>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-700 pt-8">
            <p className="text-center text-secondary-400 text-lg">
              © {currentYear} Quantum Concierge Services LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;