
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);
  
  // Gallery images for the carousel with standardized format
  const artworkImages = [
    {
      id: 1,
      image: "/lovable-uploads/e1d1f217-f7db-4297-9207-382c8f9cf6a3.png",
      title: "Honey i Shank",
      medium: "Installation",
      year: "2008"
    },
    {
      id: 2,
      image: "/lovable-uploads/f27b430a-cc25-475a-8e80-2a8f2fbcf17e.png",
      title: "Abstract Forms",
      medium: "Mixed Media",
      year: "2012"
    },
    {
      id: 3,
      image: "/lovable-uploads/615c0d19-bded-478d-b322-998f93ad689d.png",
      title: "Kegel Exercise",
      medium: "Installation",
      year: "2010"
    },
    {
      id: 4,
      image: "/lovable-uploads/a40d1089-dada-4a57-9b7a-5317b4d1a1d5.png",
      title: "Sign",
      medium: "Mixed Media",
      year: "2015"
    },
    {
      id: 5,
      image: "/lovable-uploads/3e11c915-5c02-4510-b3d3-6ee8ce0ec715.png",
      title: "Conceptual Piece",
      medium: "Mixed Media",
      year: "2014"
    },
    {
      id: 6,
      image: "/lovable-uploads/a202d7d5-3993-4b56-a730-71ecc6bcce28.png",
      title: "Urban Fragments",
      medium: "Installation",
      year: "2016"
    },
    {
      id: 7,
      image: "/lovable-uploads/c5dcf8d9-2317-41fb-8b87-dc21a7f07f75.png",
      title: "Ceiling View",
      medium: "Installation Detail",
      year: "2018"
    },
    {
      id: 8,
      image: "/lovable-uploads/c55e8c35-44dc-4bab-b3a8-d0dce4d957c4.png",
      title: "Abstract Mosaic",
      medium: "Mixed Media",
      year: "2019"
    },
    {
      id: 9,
      image: "/lovable-uploads/9f34f9b5-7b3e-46e4-b885-40d23d96993a.png",
      title: "Untitled",
      medium: "Mixed Media",
      year: "2020"
    },
    {
      id: 10,
      image: "/lovable-uploads/b0b5d297-9ba6-4d7d-9516-fd713c00facc.png",
      title: "Ragamala",
      medium: "Songs of The Anthropocene",
      year: "2021"
    }
  ];

  // Set up auto-scroll for the carousel
  useEffect(() => {
    if (!api) return;
    
    // Auto-scroll every 5 seconds
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    // Clean up interval on unmount
    return () => clearInterval(autoScrollInterval);
  }, [api]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-start pt-16 relative overflow-hidden bg-white">
      {/* Carousel */}
      <div className="w-full">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent>
            {artworkImages.map((artwork) => (
              <CarouselItem key={artwork.id} className="basis-full">
                <Card className="border-none">
                  <CardContent className="p-0">
                    <div className="aspect-[16/9] w-screen">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-white">
                        <h3 className="text-lg font-serif">{artwork.title} – {artwork.medium} – {artwork.year}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
