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
    <div className="py-24 bg-gradient-to-br from-secondary-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-bold text-secondary-900 mb-8">
            Contact Us
          </h1>
          <div className="section-divider mb-8"></div>
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto font-light leading-relaxed">
            Get in touch with our leadership team for procurement solutions, technology development, or partnership opportunities.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="bg-gradient-to-br from-white to-primary-50 rounded-3xl shadow-xl border border-primary-100 p-12 mb-16">
          <h2 className="font-bold text-secondary-900 mb-12 text-center">
            Leadership Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="service-card text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {contact.name}
                </h3>
                <p className="text-primary-600 font-semibold text-lg mb-4">
                  {contact.title}
                </p>
                {contact.email && (
                  <>
                    <p className="text-secondary-600 mb-6">
                      {contact.email}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="btn-primary"
                    >
                      Send Email
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Phone & CTA Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Phone Contact */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-secondary-100 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Direct Phone
            </h3>
            <p className="text-3xl font-bold text-primary-600 mb-2">
              +1 859-287-2983
            </p>
            <p className="text-secondary-600">
              Call for immediate assistance
            </p>
          </div>

          {/* Ready to Get Started */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-95 mb-8 leading-relaxed">
              Request a quote for your procurement needs or schedule a consultation for our development services.
            </p>
            <a
              href="mailto:Joe.root@quantumsrv.com?subject=Quote%20Request"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 hover:shadow-lg transition-all duration-300 text-lg"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Business Information Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Business Hours */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-6">
              Business Hours
            </h3>
            <div className="space-y-3 text-secondary-600 text-lg">
              <p><strong>Monday - Friday:</strong><br />8:00 AM - 6:00 PM EST</p>
              <p><strong>Saturday:</strong><br />9:00 AM - 2:00 PM EST</p>
              <p><strong>Sunday:</strong> Closed</p>
              <p className="text-sm mt-4 text-primary-600 font-semibold">
                24/7 emergency support for existing clients
              </p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-6">
              Service Areas
            </h3>
            <div className="space-y-3 text-secondary-600 text-lg">
              <p>Nationwide procurement services</p>
              <p>Government contracts across all 50 states</p>
              <p>Remote development services worldwide</p>
              <p className="text-sm mt-4 text-primary-600 font-semibold">
                Federal & state government specialist
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div className="service-card text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-6">
              Response Time
            </h3>
            <div className="text-secondary-600 text-lg leading-relaxed">
              <p className="mb-4">
                <strong>Standard Response:</strong><br />
                2-4 business hours
              </p>
              <p className="text-sm text-primary-600 font-semibold">
                For urgent needs, call directly for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;