import Link from "next/link";
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };
    return (
      <footer className="w-full bg-brown text-center py-6 font-[VT323] tracking-wider text-xl text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="line border-t border-white "></div>
        {/* Responsive footer nav */}
        <ul className="footer-nav flex justify-center flex-col lg:flex-row">
          <li className="mx-6" onClick={() => handleNavigation('/aboutUs')}>
            <a href="#" className="text-white hover:text-blobPink">
              About Us
            </a>
          </li>
          <li className="mx-6" onClick={() => handleNavigation('/tos')}>
            <a href="#" className="text-white hover:text-blobPink">
              Terms Of Service
            </a>
          </li>
          <li className="mx-6" onClick={() => handleNavigation('/privacy')}>
            <a href="#" className="text-white hover:text-blobPink">
              Privacy
            </a>
          </li>
          <li className="mx-6" onClick={() => handleNavigation('/contactUs')}>
            <a href="#" className="text-white hover:text-blobPink">
              Contact Us
            </a>
          </li>
          <span className="mx-6">Copyright@2024.All rights reserved</span>
        </ul>
      </div>
      </footer>
    );
  };
  
  export default Footer;
  