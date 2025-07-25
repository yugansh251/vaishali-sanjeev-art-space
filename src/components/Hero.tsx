
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);

  // Updated gallery images for the carousel
  const artworkImages = [{
    id: 1,
    image: "/lovable-uploads/3d10e7f2-0137-44cd-b138-9c02fb9bb9c4.png",
    title: "Mixed Media Collage",
    medium: "Mixed Media",
    year: "2024"
  }, {
    id: 2,
    image: "/lovable-uploads/3ae3933c-441c-4416-ae84-38fca458ee06.png",
    title: "Hanuman Plaka",
    medium: "Traditional Art",
    year: "2024"
  }, {
    id: 3,
    image: "/lovable-uploads/9b993336-697f-4c47-b351-8834d1d1f4ba.png",
    title: "Gallery Exhibition",
    medium: "Installation View",
    year: "2024"
  }, {
    id: 4,
    image: "/lovable-uploads/5f040730-08ee-4299-b7db-13d54ca351e3.png",
    title: "Abstract Flow",
    medium: "Mixed Media",
    year: "2024"
  }, {
    id: 5,
    image: "/lovable-uploads/92a74895-2643-46d4-8f67-70e0ae10f9f6.png",
    title: "Angry Installation",
    medium: "Wire Installation",
    year: "2024"
  }, {
    id: 6,
    image: "/lovable-uploads/4bb2c394-8f2e-4c36-a655-7f0396733506.png",
    title: "Dark Installation",
    medium: "Installation View",
    year: "2024"
  }, {
    id: 7,
    image: "/lovable-uploads/93625121-b432-4c0f-b39f-aacb6097d78b.png",
    title: "Blue Passage",
    medium: "Installation",
    year: "2024"
  }, {
    id: 8,
    image: "/lovable-uploads/70dbf97f-90e4-4fb6-83ce-b7ac7caadc22.png",
    title: "Meditation Space",
    medium: "Installation",
    year: "2024"
  }, {
    id: 9,
    image: "/lovable-uploads/e8011005-0bc6-4252-a4e1-2bcb6038d597.png",
    title: "Traditional Art Exhibition",
    medium: "Installation View",
    year: "2024"
  }, {
    id: 10,
    image: "/lovable-uploads/d09945f2-a0e4-4a8f-9a8b-74f5482b079d.png",
    title: "Suspended Installation",
    medium: "Mixed Media Installation",
    year: "2024"
  }, {
    id: 11,
    image: "/lovable-uploads/839007b4-0811-4fd4-b5b8-0210d4cffecd.png",
    title: "Corn Dreams",
    medium: "Mixed Media Collage",
    year: "2024"
  }, {
    id: 12,
    image: "/lovable-uploads/6d386457-14ed-4b2b-a627-e94ef4b2f179.png",
    title: "Perfect Kludge",
    medium: "Mixed Media Installation",
    year: "2024"
  }, {
    id: 13,
    image: "/lovable-uploads/e01e3819-1b87-4716-acaf-3be209da4d75.png",
    title: "Red Installation",
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
