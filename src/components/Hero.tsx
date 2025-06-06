import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);

  // Updated gallery images for the carousel with the new uploaded images
  const artworkImages = [{
    id: 1,
    image: "/lovable-uploads/32f61955-ff24-4219-af5e-78228b6dfbac.png",
    title: "Gallery Exhibition",
    medium: "Installation View",
    year: "2024"
  }, {
    id: 2,
    image: "/lovable-uploads/776b00b5-0aed-4545-ab6e-6c9b39216d13.png",
    title: "Abstract Flow",
    medium: "Mixed Media",
    year: "2024"
  }, {
    id: 3,
    image: "/lovable-uploads/d405758f-a4d8-4ab4-bc9a-c94422d37b7d.png",
    title: "Corn Dreams",
    medium: "Mixed Media Installation",
    year: "2024"
  }, {
    id: 4,
    image: "/lovable-uploads/3145eaff-0d94-4420-98df-e43d82b672dc.png",
    title: "Market Flows",
    medium: "Mixed Media",
    year: "2024"
  }, {
    id: 5,
    image: "/lovable-uploads/8cae8a10-b702-4229-9d8e-b9cc90f6a7fb.png",
    title: "Hanuman Palaka",
    medium: "Traditional Art",
    year: "2024"
  }, {
    id: 6,
    image: "/lovable-uploads/9c056c71-d125-441b-b4e4-e7ef259d16fe.png",
    title: "Dark Installation",
    medium: "Installation View",
    year: "2024"
  }, {
    id: 7,
    image: "/lovable-uploads/4b411ef6-b061-40c1-8e0a-814e1a45b341.png",
    title: "Blue Passage",
    medium: "Installation",
    year: "2024"
  }, {
    id: 8,
    image: "/lovable-uploads/c37a9098-60d0-4649-aec7-dbef12cd9c05.png",
    title: "Protest Signs",
    medium: "Public Installation",
    year: "2024"
  }, {
    id: 9,
    image: "/lovable-uploads/5e85e357-74a8-432b-a335-10d4e79cecfe.png",
    title: "Embroidered Skeleton",
    medium: "Embroidery on Silk",
    year: "2024"
  }, {
    id: 10,
    image: "/lovable-uploads/2c766e8b-4692-4fd8-a5d1-8e619919f4bc.png",
    title: "Suspended Installation",
    medium: "Mixed Media Installation",
    year: "2024"
  }];

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
    <section className="min-h-screen flex flex-col items-center justify-start pt-16 md:pt-20 relative overflow-hidden bg-white py-4 md:py-6 px-4 md:px-16">
      {/* Carousel */}
      <div className="w-full max-w-7xl mx-auto">
        <Carousel 
          opts={{
            align: "center",
            loop: true
          }} 
          setApi={setApi} 
          className="w-full"
        >
          <CarouselContent>
            {artworkImages.map(artwork => (
              <CarouselItem key={artwork.id} className="basis-full">
                <Card className="border-none">
                  <CardContent className="flex flex-col items-center p-0">
                    <div className="w-full flex justify-center">
                      <div className="max-w-4xl w-full overflow-hidden">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title} 
                          className="w-full h-[50vh] md:h-[70vh] object-cover object-center mx-auto" 
                        />
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
