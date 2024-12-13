import React, { useState } from 'react';
import {
  Building2,
  Clock,
  FileCheck2,
  BarChart3,
  Shield,
  CheckCircle,
  Users,
} from 'lucide-react';
import Header from './components/Header';
import LeadMagnet from './components/LeadMagnet';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import TaxBusinessModal from './components/TaxBusinessModal';
import GlowingButton from './components/GlowingButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Comprehensive Tax Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileCheck2 className="h-10 w-10 text-blue-600" />,
                title: "Tax Planning Integration",
                description: "Strategic tax planning seamlessly integrated with your wealth management services."
              },
              {
                icon: <BarChart3 className="h-10 w-10 text-blue-600" />,
                title: "Outsourced Tax Preparation",
                description: "Professional tax preparation services with meticulous attention to detail."
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: "White-Label Solutions",
                description: "Branded tax services that maintain your firm's identity and relationship."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            Why Choose TaxPro Associates?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Clock className="h-6 w-6 text-blue-600" />,
                title: "Save Valuable Time",
                description: "Reclaim 15+ hours per client during tax season."
              },
              {
                icon: <Users className="h-6 w-6 text-blue-600" />,
                title: "Scale Your Practice",
                description: "Grow your practice organically utilizing an outsourced value proposition."
              },
              {
                icon: <Shield className="h-6 w-6 text-blue-600" />,
                title: "Reduce Risk",
                description: "Expert review process ensures compliance and accuracy."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
                title: "Enhance Client Service",
                description: "Provide comprehensive wealth management solutions."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Glowing Button */}
          <div className="text-center">
            <GlowingButton onClick={() => setIsModalOpen(true)} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "TaxPro Associates has transformed how we handle tax services. Our clients love the seamless integration.",
                author: "Sarah C.",
                position: "Managing Director"
              },
              {
                quote: "The white-label solution allows us to maintain our brand while providing expert tax services. It's been a game-changer.",
                author: "Michael R.",
                position: "Partner"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-gray-600 italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactInfo />
      <Footer />
      
      <TaxBusinessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;