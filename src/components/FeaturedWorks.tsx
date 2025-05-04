
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedWorks = () => {
  const featuredWorks = [
    {
      id: 1,
      title: "Honey i Shank",
      year: "2008",
      image: "/lovable-uploads/b15963b3-00d3-4fc5-abec-7a98a48a8650.png",
      category: "Installation"
    },
    {
      id: 2,
      title: "Kegel exercise",
      year: "2010",
      image: "/lovable-uploads/e87df256-96e2-4d35-8a5f-3d07be9c2ceb.png",
      category: "Installation"
    },
    {
      id: 3,
      title: "Ragamala song of Anthropocene",
      year: "2015",
      image: "/lovable-uploads/5f23c33d-cc44-4b38-acb1-3e8b8a4ac597.png",
      category: "Mixed Media"
    },
    {
      id: 4,
      title: "imp in the garden",
      year: "2012",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Installation"
    },
    {
      id: 5,
      title: "Third life",
      year: "2018",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131",
      category: "Digital Art"
    },
    {
      id: 6,
      title: "Toy bank",
      year: "2020",
      image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634",
      category: "Installation"
    }
  ];

  return (
    <section className="section-padding bg-portfolio-lightGray">
      <div className="portfolio-container">
        <SectionTitle
          title="Featured Works"
          subtitle="A selection of notable installations and publications that represent key moments in our creative journey."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
