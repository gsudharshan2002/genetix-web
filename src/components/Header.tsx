import { url } from "inspector";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl px-6 py-4 flex items-center justify-between  shadow-md backdrop-blur-md bg-white/30 rounded-full "
      
    >

      <Link href="/" className="flex w-[100px] h-[20px] items-center space-x-2">
        <Image
          src="/genetixlogo-removebg-preview.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </Link>
        
      
      <nav className="hidden md:flex items-center justify-center space-x-6 font-semibold text-sm text-black py-3 ">
        
        
        <Link href="/" className="hover:text-green-600 transition">Features</Link>
        <Link href="/" className="hover:text-green-600 transition">Industries</Link>
        <Link href="/services" className="hover:text-green-600 transition">Resources</Link>
        <Link href="/projects" className="hover:text-green-600 transition">Company</Link>
      </nav>
      <div>
        <Link href="/contact">
          <button className="text-md bg-green-500  hover:bg-black text-white p-3 rounded-full transition duration-200 shadow-md">
            Request a Demo
          </button>
        </Link>
      </div>
      
    </header>
  );
};

export default Header;
