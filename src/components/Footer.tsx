
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="portfolio-container grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4 text-portfolio-blue">Vaishali Sanjeev</h3>
          <p className="text-gray-600 mb-4">
            Writer and Visual Artist based in Mumbai, India
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-blue transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">Navigate</h3>
          <div className="grid grid-cols-1 gap-2">
            <Link to="/" className="text-gray-600 hover:text-portfolio-blue transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-portfolio-blue transition-colors">About</Link>
            <Link to="/portfolio" className="text-gray-600 hover:text-portfolio-blue transition-colors">Portfolio</Link>
            <Link to="/services" className="text-gray-600 hover:text-portfolio-blue transition-colors">Services</Link>
            <Link to="/contact" className="text-gray-600 hover:text-portfolio-blue transition-colors">Contact</Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">Contact</h3>
          <p className="text-gray-600">Mumbai, India</p>
          <p className="text-gray-600 mt-2">Email: contact@vaishalisanjeev.com</p>
        </div>
      </div>
      
      <div className="portfolio-container mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Vaishali Sanjeev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
