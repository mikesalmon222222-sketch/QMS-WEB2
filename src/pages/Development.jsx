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
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl mb-6 shadow-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Website & Software
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
              Development
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-300 mb-12 max-w-4xl mx-auto">
            Cutting-edge software and application development for businesses and government clients. 
            Transform your digital vision into powerful, scalable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Development%20Consultation%20Request"
              className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-primary-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Request Development Consultation
            </a>
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Project%20Portfolio%20Request"
              className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-200"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Core Development Offerings
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Comprehensive development services designed to meet the unique needs of modern businesses and government organizations.
            </p>
          </div>

          <div className="space-y-12">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mr-4">
                        {offering.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {offering.title}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {offering.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-secondary-300 text-lg leading-relaxed mb-6">
                      {offering.description}
                    </p>
                    <a
                      href={`mailto:Joe.root@quantumsrv.com?subject=${offering.title}%20Consultation`}
                      className="inline-block bg-gradient-to-r from-primary-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:from-primary-600 hover:to-purple-600 transition-all duration-200"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                      <ul className="space-y-3">
                        {offering.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-secondary-300">
                            <svg className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 bg-white/5 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Modern Technology Stack
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold">
                  {tech}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary-600 to-purple-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Vision?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Partner with our expert development team to create innovative solutions that drive your business forward. From concept to deployment, we're here to make your vision a reality.
            </p>
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Development%20Consultation%20Request"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors duration-200 shadow-xl"
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