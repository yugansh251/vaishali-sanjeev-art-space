
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedWorks = () => {
  const featuredWorks = [
    {
      id: 1,
      title: "Rumour of the Truth",
      year: "2003",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      category: "Installation"
    },
    {
      id: 2,
      title: "FLEX - The Fluid Less Sex",
      year: "2004",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      category: "Installation"
    },
    {
      id: 3,
      title: "All That I Wanna Do",
      year: "2005",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      category: "Installation"
    },
    {
      id: 4,
      title: "Kavita",
      year: "2001",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Publication"
    }
  ];

  return (
    <section className="section-padding bg-portfolio-lightGray">
      <div className="portfolio-container">
        <SectionTitle
          title="Featured Works"
          subtitle="A selection of notable installations and publications that represent key moments in my creative journey."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuredWorks.map((work) => (
            <div key={work.id} className="gallery-item bg-white rounded-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover image-hover"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-portfolio-blue font-medium">{work.category} • {work.year}</span>
                <h3 className="text-xl font-serif font-semibold mt-2">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="default" className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
            <Link to="/portfolio">
              View All Works <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
