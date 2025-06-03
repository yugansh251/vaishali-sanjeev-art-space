
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12 px-4 md:px-6">
      <div className="portfolio-container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="flex flex-col items-center md:items-start">
          <img 
            alt="Vaishali & Sanjeev" 
            className="h-10 md:h-12 mb-4" 
            src="/lovable-uploads/4b3c8fa8-c761-4828-85fc-07591ac1b0f8.jpg" 
          />
          
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="portfolio-container mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200 text-center text-gray-500">
        <p className="text-sm md:text-base">© {new Date().getFullYear()} Vaishali Sanjeev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
