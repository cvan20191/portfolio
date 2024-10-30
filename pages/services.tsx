import React from 'react';
import Layout from '../components/Layout';

const services = [
  {
    title: 'Web Development',
    description: 'Full-stack web development using modern technologies like React, Next.js, and Node.js',
    icon: '💻',
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile app development using React Native',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with modern design principles',
    icon: '🎨',
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Services</h1>
          <p className="mt-4 text-xl text-gray-600">
            Here are the services I offer to help bring your ideas to life
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage; 