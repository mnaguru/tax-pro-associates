import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface TaxBusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TaxBusinessModal({ isOpen, onClose }: TaxBusinessModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg max-w-[800px] w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-in-out"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
            Tax Business Start-Up Requirements & Costs
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Educational Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bachelor's degree in Accounting, Finance, or related field</li>
              <li>Enrolled Agent (EA) Certification: <span className="font-semibold">$600-$800</span></li>
              <li>CPE Requirements: <span className="font-semibold">$500-$1,000 annually</span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Legal Requirements</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Business Registration: <span className="font-semibold">$100-$500</span></li>
              <li>Professional Liability Insurance: <span className="font-semibold">$500-$3,000 annually</span></li>
              <li>PTIN Registration: <span className="font-semibold">$35.95 annually</span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Technology & Software</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Professional Tax Software: <span className="font-semibold">$1,000-$2,000 annually</span></li>
              <li>Computer Equipment: <span className="font-semibold">$2,000-$3,000</span></li>
              <li>Office Software Suite: <span className="font-semibold">$150-$300 annually</span></li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Office Setup</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Office Space Rental: <span className="font-semibold">$500-$2,000 monthly</span></li>
              <li>Office Furniture: <span className="font-semibold">$2,000-$5,000</span></li>
              <li>Marketing Materials: <span className="font-semibold">$1,000-$3,000</span></li>
            </ul>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Enrolled Agent Salary Information</h3>
            <p className="text-gray-700">
              Average Annual Salary Range: <span className="font-semibold">$50,000 - $100,000</span><br />
              Experienced EAs can earn: <span className="font-semibold">$100,000+</span> annually
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}