
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Press', href: '/press' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'} py-3 md:py-4 px-4 md:px-6`}>
      <div className="portfolio-container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img alt="Vaishali & Sanjeev" className="h-10 md:h-12 lg:h-14" src="/lovable-uploads/4b3c8fa8-c761-4828-85fc-07591ac1b0f8.jpg" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {links.map(link => (
            <Link key={link.name} to={link.href} className="text-gray-800 hover:text-portfolio-blue transition-colors font-medium text-sm xl:text-base">
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-3">
            {links.map(link => (
              <Link key={link.name} to={link.href} className="text-gray-800 hover:text-portfolio-blue transition-colors text-base font-medium py-2" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
