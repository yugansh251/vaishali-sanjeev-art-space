
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedWorks = () => {
  // Gallery images with captions
  const artworkImages = [
    {
      id: 1,
      image: "/lovable-uploads/e1d1f217-f7db-4297-9207-382c8f9cf6a3.png",
      caption: "Installation view of 'Honey i Shank' (2008)"
    },
    {
      id: 2,
      image: "/lovable-uploads/f27b430a-cc25-475a-8e80-2a8f2fbcf17e.png",
      caption: "A View: All that i wanna do with mirror image"
    },
    {
      id: 3,
      image: "/lovable-uploads/615c0d19-bded-478d-b322-998f93ad689d.png",
      caption: "Installation view of 'Kegel exercise' (2010)"
    },
    {
      id: 4,
      image: "/lovable-uploads/a40d1089-dada-4a57-9b7a-5317b4d1a1d5.png",
      caption: "I'm so angry, I made this sign"
    },
    {
      id: 5,
      image: "/lovable-uploads/3e11c915-5c02-4510-b3d3-6ee8ce0ec715.png",
      caption: "Sculptural installation"
    },
    {
      id: 6,
      image: "/lovable-uploads/a202d7d5-3993-4b56-a730-71ecc6bcce28.png",
      caption: "A Hymen intact: details"
    },
    {
      id: 7,
      image: "/lovable-uploads/c5dcf8d9-2317-41fb-8b87-dc21a7f07f75.png",
      caption: "A Section of ceiling view"
    },
    {
      id: 8,
      image: "/lovable-uploads/c55e8c35-44dc-4bab-b3a8-d0dce4d957c4.png",
      caption: "Abstract mosaic artwork"
    },
    {
      id: 9,
      image: "/lovable-uploads/9f34f9b5-7b3e-46e4-b885-40d23d96993a.png",
      caption: "Collection of preserved specimens"
    },
    {
      id: 10,
      image: "/lovable-uploads/b0b5d297-9ba6-4d7d-9516-fd713c00facc.png",
      caption: "Undead - Raga Basant From the series 'Ragamala - Songs Of The Anthropocene'"
    }
  ];

  return (
    <section className="section-padding bg-portfolio-lightGray">
      <div className="portfolio-container">
        <SectionTitle
          title="Featured Works"
          subtitle="Exploring the boundaries of contemporary art through provocative installations and mixed media"
          centered
        />

        <div className="relative my-10 px-4 md:px-12 lg:px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {artworkImages.map((artwork) => (
                <CarouselItem key={artwork.id} className="md:basis-2/3 lg:basis-1/2 xl:basis-1/3">
                  <Card className="border-none">
                    <CardContent className="p-1">
                      <div className="overflow-hidden rounded-xl">
                        <div className="aspect-[4/3] relative">
                          <img 
                            src={artwork.image} 
                            alt={artwork.caption}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <div className="bg-black bg-opacity-75 text-white p-3 text-sm text-center">
                          {artwork.caption}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-4 md:right-8 bg-white/80 hover:bg-white" />
          </Carousel>
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
