import { 
  Facebook, 
  Instagram, 
  Linkedin,
  Video,
  Heart,
  Building,
  Factory,
  MapPin,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white">
      {/* Top Banner */}
      <div className="bg-gray-100 rounded-lg mx-4 mt-6 mb-4 p-3">
        <div className="flex items-center justify-between">
          <div className="text-gray-700 font-medium text-sm">
            EXCITED? US TOO. LET'S GET MOVING.
          </div>
          <button className="bg-[#5BA142] hover:bg-[#4a8a35] text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 text-sm">
            <span>SCHEDULE A CALL</span>
            <Video className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Block - Branding/Logo */}
          <div className="bg-[#5BA142] rounded-lg p-6 flex flex-col items-center justify-center text-white">
            <div className="text-center">
              {/* Marble Magik Logo */}
              <div className="w-100 h-80 bg-white rounded-lg flex items-center justify-center mx-auto p-4">
                <img 
                  src="/mmc logo.png" 
                  alt="Marble Magik Corporation Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Middle Block - Navigation Links */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-[#5BA142] font-bold text-sm mb-3 uppercase tracking-wide">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                HOME
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                ABOUT US
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                CONTACT US
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                BLOGS
              </Link>
              <Link to="/categories/stone-care" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                STONE CARE
              </Link>
              <Link to="/categories/stone-adhesive" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                STONE ADHESIVE
              </Link>
              <Link to="/categories/construction-chemical" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                CONSTRUCTION CHEMICAL
              </Link>
              <Link to="/privacy" className="text-gray-700 hover:text-[#5BA142] transition-colors">
                PRIVACY POLICY
              </Link>
            </div>
            
                         {/* Contact Section */}
             <div className="mt-4">
               <h3 className="text-[#5BA142] font-bold text-sm mb-3 uppercase tracking-wide">Contact</h3>
               <div className="space-y-2">
                 <div className="flex items-center space-x-2 text-xs">
                   <Phone className="h-3 w-3 text-[#5BA142] flex-shrink-0" />
                   <div>
                     <div className="font-semibold text-gray-800">CUSTOMER CARE NO</div>
                     <div className="text-gray-600">9099988272</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-2 text-xs">
                   <Mail className="h-3 w-3 text-[#5BA142] flex-shrink-0" />
                   <div>
                     <div className="font-semibold text-gray-800">EMAIL</div>
                     <div className="text-gray-600">info@marblemagik.com</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center space-x-2 text-xs">
                   <MessageCircle className="h-3 w-3 text-[#5BA142] flex-shrink-0" />
                   <div>
                     <div className="font-semibold text-gray-800">WhatsApp</div>
                     <div className="text-gray-600">9099988272</div>
                   </div>
                 </div>
               </div>
             </div>
          </div>

          {/* Right Block - Office Addresses */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-[#5BA142] font-bold text-sm mb-3 uppercase tracking-wide">Our Offices</h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <Building className="h-3 w-3 text-[#5BA142] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Corporate Office</div>
                  <div className="text-gray-600">418, Happy Hallmark Shoppers, Vesu-Abhava Road, Surat, Gujarat -395017</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Factory className="h-3 w-3 text-[#5BA142] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Manufacturing Office</div>
                  <div className="text-gray-600">C-5/4, Hojiwala Industrial Estate, Road No. 8, Susml, Sachin-alsana Road, Surat, Gujarat -394230</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 text-[#5BA142] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Delhi Office</div>
                  <div className="text-gray-600">Plot No 155, Ground Floor, Kh. No. 13/25, Udey Vihar Nilothi Extn. Near Manoj Shokin Farm House, Delhi-110041</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 text-[#5BA142] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Bengaluru Office</div>
                  <div className="text-gray-600">304/26 Ground Floor, Omkar Nilaya, 7th Main Road, Near Swastik Marble Lakkasandra Extension, Bengaluru, Karnataka - 560030</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 text-[#5BA142] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-800">Hyderabad Office</div>
                  <div className="text-gray-600">Shop no 11-5-198/1, Bhavani Nagar, Hyderabad, Telangana - 500081</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="grid grid-cols-4 gap-3 mt-4">
          <a 
            href="https://www.facebook.com/MarbleMagikCorporation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-100 rounded-lg p-3 flex items-center justify-center hover:bg-[#5BA142] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Facebook className="h-5 w-5 text-[#5BA142] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </a>
          <a 
            href="https://www.instagram.com/marblemagik/?igshid=MjAxZDBhZDhlNA%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-100 rounded-lg p-3 flex items-center justify-center hover:bg-[#5BA142] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Instagram className="h-5 w-5 text-[#5BA142] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/company/marble-magik-corporations/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-100 rounded-lg p-3 flex items-center justify-center hover:bg-[#5BA142] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Linkedin className="h-5 w-5 text-[#5BA142] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </a>
          <a 
            href="https://www.youtube.com/@marblemagikcorporation3188" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-gray-100 rounded-lg p-3 flex items-center justify-center hover:bg-[#5BA142] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <Video className="h-5 w-5 text-[#5BA142] group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>

        {/* Bottom Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600 mt-4 pt-4 border-t border-gray-200">
          <div>© {currentYear} Marble Magik Corporation. All rights reserved.</div>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-[#5BA142] transition-colors">TERMS OF USE</a>
            <a href="#" className="hover:text-[#5BA142] transition-colors">PRIVACY STATEMENT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;