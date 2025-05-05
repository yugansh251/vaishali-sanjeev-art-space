
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
    },
    // Adding the newly uploaded images
    {
      id: 11,
      image: "/lovable-uploads/2077b157-543b-4081-b8db-c6d971b5871f.png"
    },
    {
      id: 12,
      image: "/lovable-uploads/9a664e3e-e2c6-435d-92a6-2864531ce8ca.png"
    },
    {
      id: 13,
      image: "/lovable-uploads/b15963b3-00d3-4fc5-abec-7a98a48a8650.png"
    },
    {
      id: 14,
      image: "/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png"
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
      {/* Introduction Text */}
      <div className="w-full max-w-5xl mx-auto px-6 mb-12 md:mb-16">
        <div className="text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
            The Uncommon Alliance
          </h1>
          <p className="font-serif text-lg md:text-xl lg:text-2xl italic leading-relaxed text-gray-800 max-w-4xl mx-auto">
            Unconventional motifs – stock tickers, microscopic photographs modified into a new imagery, 
            urban detritus – <span className="font-medium">and even bodily fluids</span> – are deployed to expose 
            the often-obscured realities of the biosocial sphere. These elements serve as powerful 
            visual metaphors, highlighting the often-overlooked realities of our contemporary landscape.
          </p>
        </div>
      </div>

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
