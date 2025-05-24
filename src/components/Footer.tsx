import { Instagram, Twitter, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="portfolio-container grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          
          
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
      
      <div className="portfolio-container mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Vaishali Sanjeev. All rights reserved.</p>
      </div>
    </footer>;
};
export default Footer;