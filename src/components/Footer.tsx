import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-orange-500">picoCTF</span>
            <p className="mt-4 text-gray-400">
              A free computer security education platform with original content built on a capture-the-flag framework created by security and privacy experts at Carnegie Mellon University.
            </p>
            <div className="mt-4 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Learning Guides</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-300 hover:text-white">Code of Conduct</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} picoCTF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}