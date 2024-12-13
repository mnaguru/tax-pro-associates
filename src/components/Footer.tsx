import React from 'react';
import { Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Building2 className="h-6 w-6" />
            <span className="text-xl font-bold">TaxPro Associates</span>
          </div>
          <div className="text-sm">
            © {new Date().getFullYear()} TaxPro Associates. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}