const Services = () => {
  const services = [
    {
      title: 'Office Supplies',
      description: 'Complete range of office supplies including stationery, paper products, writing instruments, and organizational tools to keep your business running smoothly.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: 'Office Furniture',
      description: 'Professional office furniture solutions including desks, chairs, storage systems, and ergonomic workstations designed for productivity and comfort.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
        </svg>
      ),
    },
    {
      title: 'Cleaning & Janitorial Products',
      description: 'Comprehensive cleaning and janitorial supplies to maintain clean, safe, and healthy work environments for your employees and visitors.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: 'Technology Products',
      description: 'Cutting-edge technology solutions including computers, networking equipment, software licenses, and IT infrastructure to power your digital operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Quantum Concierge Services offers comprehensive procurement solutions across multiple categories, serving both government agencies and private corporations with reliable, efficient service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-200">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Need Something Specific?
            </h2>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Our procurement specialists can source virtually any product or service your organization needs. From specialized equipment to bulk supplies, we have the network and expertise to deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:Joe.root@quantumsrv.com?subject=Custom%20Procurement%20Request"
                className="btn-primary text-lg px-8 py-4"
              >
                Request Custom Quote
              </a>
              <a
                href="mailto:Joe.root@quantumsrv.com?subject=General%20Inquiry"
                className="btn-secondary text-lg px-8 py-4"
              >
                General Inquiry
              </a>
            </div>
          </div>
        </div>

        {/* Additional Service Features */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-secondary-900 text-center mb-12">
            Service Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-secondary-600">
                Efficient logistics and nationwide distribution network ensure timely delivery of your orders.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-secondary-600">
                Rigorous quality control processes and partnerships with trusted suppliers guarantee product excellence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-secondary-600">
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