
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden bg-white">
      <div className="portfolio-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <div className="mb-8 md:mb-10 hidden md:block">
            <img 
              src="/lovable-uploads/9a664e3e-e2c6-435d-92a6-2864531ce8ca.png" 
              alt="Vaishali Sanjeev"
              className="h-20"
            />
          </div>
          <h2 className="text-xl md:text-2xl text-portfolio-gray mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Writer & Visual Artist
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg animate-slide-in" style={{ animationDelay: '0.4s' }}>
            Exploring the intricacies of human experience through Marathi literature and contemporary visual art. Based in Mumbai, creating works that bridge traditional and modern expressions.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '0.6s' }}>
            <Button asChild className="bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white">
              <Link to="/portfolio">
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-[#1EAEDB] text-[#1EAEDB] hover:bg-[#33C3F0]/10">
              <Link to="/about">
                About Me
              </Link>
            </Button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-[#1EAEDB]/10 animate-pulse"></div>
            <img 
              src="/lovable-uploads/2077b157-543b-4081-b8db-c6d971b5871f.png"
              alt="Vaishali Sanjeev"
              className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-white shadow-xl"
            />
          </div>
          <h3 className="text-3xl font-serif font-bold text-gray-900 mt-6 text-center">The Uncommon Alliance</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
