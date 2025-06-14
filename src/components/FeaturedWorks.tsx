
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedWorks = () => {
  // Selected works for the tiles with standardized formats
  const featuredWorks = [
    {
      id: 1,
      image: "/lovable-uploads/e1d1f217-f7db-4297-9207-382c8f9cf6a3.png",
      title: "Honey i Shank",
      medium: "Installation",
      year: "2008",
    },
    {
      id: 2,
      image: "/lovable-uploads/615c0d19-bded-478d-b322-998f93ad689d.png",
      title: "Kegel Exercise",
      medium: "Installation",
      year: "2010",
    },
    {
      id: 3,
      image: "/lovable-uploads/4e0ca9d1-da46-454d-86d8-8a328a3b3f11.png",
      title: "Ragamala",
      medium: "Songs of The Anthropocene",
      year: "2021",
    },
    {
      id: 4,
      image: "/lovable-uploads/a40d1089-dada-4a57-9b7a-5317b4d1a1d5.png",
      title: "Sign",
      medium: "Mixed Media",
      year: "2015",
    },
    {
      id: 5,
      image: "/lovable-uploads/c5dcf8d9-2317-41fb-8b87-dc21a7f07f75.png",
      title: "Ceiling View",
      medium: "Installation Detail",
      year: "2018",
    },
    {
      id: 6,
      image: "/lovable-uploads/c55e8c35-44dc-4bab-b3a8-d0dce4d957c4.png",
      title: "Abstract Mosaic",
      medium: "Mixed Media",
      year: "2019",
    },
  ];

  return (
    <section className="section-padding bg-portfolio-lightGray">
      <div className="portfolio-container">
        <SectionTitle
          title="Featured Works"
          subtitle="Exploring the boundaries of contemporary art through provocative installations and mixed media"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {featuredWorks.map((work) => (
            <div key={work.id} className="group overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl bg-white">
              <Link to={`/portfolio/${work.id}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={`${work.title} – ${work.medium} – ${work.year}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-serif font-medium text-gray-900">{work.title}</h3>
                  <p className="text-gray-600 mt-1">{work.medium} – {work.year}</p>
                </div>
              </Link>
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
