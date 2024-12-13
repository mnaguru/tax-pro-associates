import React from 'react';
import { FileCheck2, CheckCircle } from 'lucide-react';

export default function LeadMagnet() {
  return (
    <section id="lead-magnet" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <FileCheck2 className="h-16 w-16 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Get Our Free Guide to Generating Organic Leads
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn proven strategies to attract and convert high-quality leads without relying on expensive purchased lists.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">What You'll Learn:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'Content marketing strategies',
                'Social media optimization',
                'Email nurture campaigns',
                'Lead conversion techniques'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}