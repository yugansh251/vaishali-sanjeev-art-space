
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const Hero = () => {
  // Gallery images with captions for the carousel
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
    <section className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden bg-white">
      <div className="portfolio-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-xl md:text-2xl text-portfolio-blue mb-6 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            The Uncommon Alliance
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg animate-slide-in" style={{ animationDelay: '0.4s' }}>
            Narkar and Khandekar's Shared Canvas
            Artistic collaboration, while not novel, rarely sustains itself as a primary mode of practice. For two decades, Sanjeev Khandekar and
            Vaishali Narkar have defied this norm, forging a dynamic partnership that has yielded a diverse and compelling body of work; that
            dissects the complexities of the 21st century.
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
        <div className="order-1 lg:order-2 animate-fade-in">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {artworkImages.map((artwork) => (
                <CarouselItem key={artwork.id} className="md:basis-3/4">
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
            <CarouselPrevious className="left-2 md:left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 md:right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Hero;
