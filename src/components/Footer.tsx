import Image from "next/image";
import { FaFacebook, FaInstagram, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-48 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-10 gap-x-16">
          {/* Logo + Social */}
          <div className="col-span-4">
            <h3 className="text-3xl font-semibold mb-8 lg:mb-20"><img src="/genetixlogo-removebg-preview.png" alt="Genetix Logo" className="w-24 h-24 object-contain" /></h3>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaX className="text-2xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div className="col-span-2">
            <p className="text-xl font-bold mb-6">Menu</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline" href="/">Home</a></li>
              <li><a className="text-lg hover:underline" href="/">Popular</a></li>
              <li><a className="text-lg hover:underline" href="/">About</a></li>
              <li><a className="text-lg hover:underline" href="/">Contact</a></li>
            </ul>
          </div>

          {/* Category Links */}
          <div className="col-span-2">
            <p className="text-xl font-bold mb-6">Category</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline" href="/">Design</a></li>
              <li><a className="text-lg hover:underline" href="/">Mockup</a></li>
              <li><a className="text-lg hover:underline" href="/">View All</a></li>
              <li><a className="text-lg hover:underline" href="/">Login</a></li>
            </ul>
          </div>

          {/* Pages */}
          <div className="col-span-2">
            <p className="text-xl font-bold mb-6">Pages</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline" href="/">404</a></li>
              <li><a className="text-lg hover:underline" href="/">Instructions</a></li>
              <li><a className="text-lg hover:underline" href="/">License</a></li>
            </ul>
          </div>

          {/* Others */}
          <div className="col-span-2">
            <p className="text-xl font-bold mb-6">Others</p>
            <ul className="space-y-4">
              <li><a className="text-lg hover:underline" href="/">Styleguide</a></li>
              <li><a className="text-lg hover:underline" href="/">Changelog</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
          <p className="text-center sm:text-left">
            © 2023 Genetix. All rights reserved.
          </p>
          <div className="flex justify-center sm:justify-end gap-6 mt-4 sm:mt-0">
            <a href="/" className="hover:underline">Privacy Policy</a>
            <a href="/" className="hover:underline border-l border-gray-600 pl-4">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
