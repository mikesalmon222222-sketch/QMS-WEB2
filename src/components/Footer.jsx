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
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-primary-400">
                Quantum Concierge Services
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-secondary-300 hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Partner Logos */}
          <div className="border-t border-secondary-700 pt-8 mb-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {/* BBB Logo */}
              <a
                href="https://www.bbb.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors duration-200 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-secondary-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-sm font-bold">BBB</span>
                </div>
                <span className="text-xs">Better Business Bureau</span>
              </a>

              {/* LinkedIn Logo */}
              <a
                href="https://www.linkedin.com/company/quantum-concierge-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors duration-200 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-sm font-bold">in</span>
                </div>
                <span className="text-xs">LinkedIn</span>
              </a>

              {/* D-U-N-S & Bradstreet Logo */}
              <a
                href="https://www.dnb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors duration-200 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-secondary-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">D&B</span>
                </div>
                <span className="text-xs">D-U-N-S & Bradstreet</span>
              </a>

              {/* GovTribe Logo */}
              <a
                href="https://govtribe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors duration-200 flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-secondary-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">GT</span>
                </div>
                <span className="text-xs">GovTribe</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-secondary-700 pt-8">
            <p className="text-center text-secondary-300">
              © {currentYear} Quantum Concierge Services LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;