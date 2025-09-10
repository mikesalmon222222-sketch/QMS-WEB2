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
    <div className="py-20 bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Get in touch with our leadership team for procurement solutions, technology development, or partnership opportunities.
          </p>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Leadership Team
          </h2>
          
          <div className="space-y-8">
            {contacts.map((contact, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-secondary-50 rounded-xl">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-secondary-900">
                    {contact.name}
                  </h3>
                  <p className="text-primary-600 font-medium">
                    {contact.title}
                  </p>
                  {contact.email && (
                    <p className="text-secondary-600 mt-1">
                      {contact.email}
                    </p>
                  )}
                </div>
                {contact.email && (
                  <div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="btn-primary"
                    >
                      Send Email
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Phone Number */}
          <div className="mt-8 p-6 bg-primary-50 rounded-xl text-center">
            <div className="flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="text-lg font-semibold text-secondary-900">
                Phone
              </h3>
            </div>
            <p className="text-xl font-medium text-primary-600">
              +1 859-287-2983
            </p>
          </div>
        </div>

        {/* Request Quote Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Request a quote for your procurement needs or schedule a consultation for our development services. Our team is ready to help you succeed.
          </p>
          <a
            href="mailto:Joe.root@quantumsrv.com?subject=Quote%20Request"
            className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-lg px-8 py-4 shadow-xl"
          >
            Request a Quote
          </a>
        </div>

        {/* Business Hours & Additional Info */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 border border-secondary-200">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-secondary-900">
                Business Hours
              </h3>
            </div>
            <div className="space-y-2 text-secondary-600">
              <p>Monday - Friday: 8:00 AM - 6:00 PM EST</p>
              <p>Saturday: 9:00 AM - 2:00 PM EST</p>
              <p>Sunday: Closed</p>
              <p className="text-sm mt-3 text-primary-600 font-medium">
                Emergency support available 24/7 for existing clients
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-secondary-200">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-primary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-secondary-900">
                Service Areas
              </h3>
            </div>
            <div className="space-y-2 text-secondary-600">
              <p>Nationwide procurement services</p>
              <p>Government contracts across all 50 states</p>
              <p>Remote development services worldwide</p>
              <p className="text-sm mt-3 text-primary-600 font-medium">
                Specialized in federal and state government procurement
              </p>
            </div>
          </div>
        </div>

        {/* Response Time Information */}
        <div className="mt-8 bg-secondary-100 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-secondary-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-secondary-900">
              Response Time
            </h3>
          </div>
          <p className="text-secondary-600">
            We typically respond to all inquiries within 2-4 business hours. 
            For urgent procurement needs, please call our direct line at +1 859-287-2983.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;