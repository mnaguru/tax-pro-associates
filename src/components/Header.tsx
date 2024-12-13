import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-navy-900 bg-gradient-to-br from-[#0a192f] to-[#112a4e]">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">TaxPro Associates</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
            <a href="#benefits" className="text-gray-300 hover:text-white transition">Benefits</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition">Testimonials</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Elevate Your Practice with Expert Tax Outsourcing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Seamlessly integrate comprehensive tax services into your wealth management practice. Focus on growing your business while we handle the complexities.
            </p>
            <a href="#lead-magnet" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition">
              Get Free Lead Generation Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
              alt="Professional tax services"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
}