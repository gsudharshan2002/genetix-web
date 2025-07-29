import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white  px-6 py-4 flex items-center justify-between w-full ">
      
      <div className="w-15 h-15 md:w-12 md:h-12 rounded-full flex items-center">
        <Image
          src="/Genetix.png" 
          alt="Genetix Logo"
          width={50}
          height={50}
          className="object-contain rounded-full"
        />
        
      </div>
      
      <nav className="hidden md:flex items-center justify-center space-x-6 font-semibold text-sm text-white bg-gradient-to-r from-green-500 to-purple-600 rounded-full px-6 py-3 shadow-lg transition-all duration-300 hover:text-green-600 hover:bg-white hover:border hover:border-green-500">
        
        <Link href="/about" className="hover:text-green-600 transition">About Us</Link>
        <Link href="/about" className="hover:text-green-600 transition">About Us</Link>
        <Link href="/services" className="hover:text-black transition">Services</Link>
        <Link href="/projects" className="hover:text-green-600 transition">Projects</Link>
        <Link href="/careers" className="hover:text-green-600 transition">Careers</Link>
        <Link href="/case-studies" className="hover:text-green-600 transition">Case Studies</Link>
      </nav>
      <div>
        <Link href="/contact">
          <button className="text-md bg-green-500  hover:bg-black text-white p-3 rounded-full transition duration-200 shadow-md">
            Contact Us
          </button>
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
