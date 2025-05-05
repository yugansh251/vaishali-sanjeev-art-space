
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);
  
  // Gallery images for the carousel
  const artworkImages = [
    {
      id: 1,
      image: "/lovable-uploads/e1d1f217-f7db-4297-9207-382c8f9cf6a3.png"
    },
    {
      id: 2,
      image: "/lovable-uploads/f27b430a-cc25-475a-8e80-2a8f2fbcf17e.png"
    },
    {
      id: 3,
      image: "/lovable-uploads/615c0d19-bded-478d-b322-998f93ad689d.png"
    },
    {
      id: 4,
      image: "/lovable-uploads/a40d1089-dada-4a57-9b7a-5317b4d1a1d5.png"
    },
    {
      id: 5,
      image: "/lovable-uploads/3e11c915-5c02-4510-b3d3-6ee8ce0ec715.png"
    },
    {
      id: 6,
      image: "/lovable-uploads/a202d7d5-3993-4b56-a730-71ecc6bcce28.png"
    },
    {
      id: 7,
      image: "/lovable-uploads/c5dcf8d9-2317-41fb-8b87-dc21a7f07f75.png"
    },
    {
      id: 8,
      image: "/lovable-uploads/c55e8c35-44dc-4bab-b3a8-d0dce4d957c4.png"
    },
    {
      id: 9,
      image: "/lovable-uploads/9f34f9b5-7b3e-46e4-b885-40d23d96993a.png"
    },
    {
      id: 10,
      image: "/lovable-uploads/b0b5d297-9ba6-4d7d-9516-fd713c00facc.png"
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
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-white">
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
                        alt="Artwork" 
                        className="w-full h-full object-cover"
                      />
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
