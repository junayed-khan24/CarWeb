import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-green-500">
              CarRental
            </h2>
            <p className="mt-4 text-gray-300 text-sm">
              We provide reliable and affordable car rental services with
              transparent pricing and excellent customer support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a className="hover:text-green-500 cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 cursor-pointer">
                  Cars
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-green-500 cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Car Rental</li>
              <li>Long Term Rental</li>
              <li>Corporate Service</li>
              <li>Airport Pickup</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>📍 Dhaka, Bangladesh</li>
              <li>📞 +880 1234-567890</li>
              <li>✉️ support@carrental.com</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-green-500">CarRental</span>. All rights reserved.
          </p>

          <div className="flex gap-4 text-gray-400 text-xl">
            <a className="hover:text-green-500 cursor-pointer">🌐</a>
            <a className="hover:text-green-500 cursor-pointer">📘</a>
            <a className="hover:text-green-500 cursor-pointer">📸</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
