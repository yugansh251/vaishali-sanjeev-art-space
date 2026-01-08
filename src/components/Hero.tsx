
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);

  // Updated gallery images for the carousel
  const artworkImages = [{
    id: 1,
    image: "/lovable-uploads/18518eb0-251c-406d-934c-ed0f7f8ea060.png",
    title: "Embroidered Corn",
    medium: "Embroidery on Fabric",
    year: "2024"
  }, {
    id: 2,
    image: "/lovable-uploads/0f228dd1-cfd1-4816-aa26-e93302415215.png",
    title: "Gallery Installation View",
    medium: "Installation View",
    year: "2024"
  }, {
    id: 3,
    image: "/lovable-uploads/f9eedba1-56e0-4c9f-aaf5-ee331eae7682.png",
    title: "Sacred Installation",
    medium: "Mixed Media Installation",
    year: "2024"
  }, {
    id: 4,
    image: "/lovable-uploads/ad30908b-39f3-4226-b8df-538c4c500091.png",
    title: "I'm So Angry I Made This Sign",
    medium: "Wire and Light Installation",
    year: "2024"
  }, {
    id: 5,
    image: "/lovable-uploads/f3f37476-c2d3-4c8e-9e07-1f9406e55037.png",
    title: "Suspended Forms",
    medium: "Hanging Installation",
    year: "2024"
  }, {
    id: 6,
    image: "/lovable-uploads/110b639f-2453-4c76-aa4f-811fa1f1878a.png",
    title: "Market Flow",
    medium: "Acrylic on Canvas",
    year: "2024"
  }, {
    id: 7,
    image: "/lovable-uploads/d1af2c71-eb00-4f5d-98a8-be62fb21a8a2.png",
    title: "Gallery Wall",
    medium: "Exhibition View",
    year: "2024"
  }, {
    id: 8,
    image: "/lovable-uploads/e349fc1b-7f0d-4a7b-9996-61a39646120e.png",
    title: "Hanuman Vijay Palka",
    medium: "Mixed Media on Canvas",
    year: "2024"
  }, {
    id: 9,
    image: "/lovable-uploads/4662465a-3afe-4dbf-872f-41ea48d7ec88.png",
    title: "Abstract Collage",
    medium: "Mixed Media Collage",
    year: "2024"
  }, {
    id: 10,
    image: "/lovable-uploads/7996dcae-22d3-43f8-85ce-c4cedba15740.png",
    title: "Perfect Kludge",
    medium: "Mixed Media Installation",
    year: "2024"
  }, {
    id: 11,
    image: "/lovable-uploads/8b6068de-fa71-4bd8-bc85-9b6c329c0606.png",
    title: "Gallery Installation",
    medium: "Installation View",
    year: "2024"
  }];

  // Set up auto-scroll for the carousel
  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 3 seconds
    const autoScrollInterval = setInterval(() => {
      api.scrollNext();
    }, 3000);

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
                <Card className="border-none shadow-none">
                  <CardContent className="flex flex-col items-center p-0">
                    <div className="w-full flex justify-center">
                      <div className="max-w-4xl w-full overflow-hidden">
                        <img 
                          src={artwork.image} 
                          alt={artwork.title} 
                          loading={artwork.id === 1 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-[50vh] md:h-[70vh] object-contain object-center mx-auto" 
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
