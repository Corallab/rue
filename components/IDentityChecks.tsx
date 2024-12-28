'use client';

// import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, MapPin, CreditCard, Users, Globe, Search, User, Shield, BarChart } from 'lucide-react'; // Importing icons
// import Image from 'next/image';
import Link from 'next/link';

export default function IDentityChecks() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-100 via-purple-100 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Comprehensive Compliance Coverage</h2>
          <p className="mt-4 text-lg text-gray-600">
            Accelerate document verification, due diligence, AML screening, and more with a cutting-edge AI-driven compliance suite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Cards with Icons */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Incorporation Documents</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <FileText className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Ownership Documents</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Proof of Address</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <User className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Government ID</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Business Due Diligence</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <BarChart className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Tax Identification Number</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <CreditCard className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Merchant Category Code</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <Search className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Adverse Media</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <Globe className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">High Risk Countries</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <Globe className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">High Risk Industries</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <Shield className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Sanctions & Watchlists</h3>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl text-gray-700">
                <User className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Politically Exposed Person</h3>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-500 transition duration-300"
          >
            Get In Touch <ArrowRight className="ml-2 inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
}
