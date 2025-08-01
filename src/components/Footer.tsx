import { 
  Facebook, 
  Twitter, 
  Linkedin,
  Video,
  Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Top Banner */}
      <div className="bg-gray-100 rounded-lg mx-4 mt-8 mb-6 p-4">
        <div className="flex items-center justify-between">
          <div className="text-gray-700 font-medium text-sm">
            EXCITED? US TOO. LET'S GET MOVING.
          </div>
          <button className="bg-[#5BA142] hover:bg-[#4a8a35] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2">
            <span>SCHEDULE A CALL</span>
            <Video className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Block - Branding/Logo */}
          <div className="bg-[#5BA142] rounded-lg p-8 flex flex-col items-center justify-center text-white">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-2">MMC</h2>
              <p className="text-lg font-medium">Marketing & Media Company</p>
            </div>
          </div>

          {/* Right Block - Navigation/Information */}
          <div className="bg-gray-100 rounded-lg p-8">

                         {/* Navigation Links */}
             <div className="mb-8">
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-3">
                   <Link to="/services" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     SERVICES
                   </Link>
                   <Link to="/projects" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     PROJECTS
                   </Link>
                   <Link to="/blog" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     BLOG
                   </Link>
                   <Link to="/contact" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     CONTACT
                   </Link>
                 </div>
                 <div className="space-y-3">
                   <Link to="/about" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     ABOUT
                   </Link>
                   <Link to="/testimonials" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     TESTIMONIALS
                   </Link>
                   <Link to="/docs" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     DOCS
                   </Link>
                   <Link to="/tutorials" className="block text-gray-700 font-semibold text-sm hover:text-[#5BA142] transition-colors">
                     TUTORIALS
                   </Link>
                 </div>
               </div>
             </div>

                         {/* Bottom Legal Links */}
             <div className="flex justify-between items-center text-xs text-gray-600">
               <div>© {currentYear} MMC Marketing & Media Company. All rights reserved.</div>
               <div className="flex space-x-4">
                 <a href="#" className="hover:text-[#5BA142] transition-colors">TERMS</a>
                 <a href="#" className="hover:text-[#5BA142] transition-colors">PRIVACY</a>
               </div>
             </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
            <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
            <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
            <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
              {/* Dribbble-like basketball icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </a>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
            <a href="#" className="text-[#5BA142] hover:text-[#4a8a35] transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;