const CoreValues = () => {
  const values = [
    {
      title: 'Integrity',
      description: 'Honest and transparent procurement practices',
      details: 'We conduct all business with unwavering integrity, ensuring transparent communication, honest dealings, and ethical practices in every procurement process. Our clients can trust that we prioritize their interests and maintain the highest standards of professional conduct.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving sourcing and delivery',
      details: 'We embrace innovation in every aspect of our operations, from leveraging cutting-edge technology for efficient sourcing to developing creative solutions that meet evolving client needs. Our commitment to continuous improvement ensures we stay ahead of industry trends and deliver exceptional value.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      title: 'Customer-Centric',
      description: 'Dedicated to client success and timely fulfillment',
      details: 'Our clients are at the heart of everything we do. We are committed to understanding their unique needs, exceeding expectations, and ensuring timely fulfillment of all commitments. Every decision we make is guided by how it will impact and benefit our valued clients.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Core Values
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            These fundamental principles guide every aspect of our business, from client relationships to procurement processes, ensuring we deliver exceptional service with unwavering commitment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className={`${value.bgColor} rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 ${value.color} rounded-2xl text-white mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                  {value.title}
                </h3>
                <p className={`text-lg font-medium ${value.textColor} mb-4`}>
                  {value.description}
                </p>
                <p className="text-secondary-600 leading-relaxed">
                  {value.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action Section */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Values in Action
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              See how our core values translate into tangible benefits for our clients and partners across all our services and interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Transparent Pricing</h3>
              <p className="opacity-90">No hidden costs or surprise charges in our procurement processes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
              <p className="opacity-90">Quick turnaround times and innovative solutions to meet urgent needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Success Partnership</h3>
              <p className="opacity-90">We measure our success by the success of our clients and their satisfaction.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Partnership%20Inquiry"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200"
            >
              Partner With Us Today
            </a>
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Our Commitment to Excellence
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed">
              At Quantum Concierge Services, these values are not just words on a page—they are the foundation of our culture and the driving force behind every decision we make. We are committed to upholding these principles in all our interactions, ensuring that our clients receive not just products and services, but a partnership built on trust, innovation, and mutual success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;