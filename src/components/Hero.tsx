
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [api, setApi] = useState<any>(null);

  // New gallery images for the carousel with the uploaded images
  const artworkImages = [{
    id: 1,
    image: "/lovable-uploads/4381022f-d369-4f4f-99b1-9038711e08e6.png",
    title: "I'm So Angry",
    medium: "Installation",
    year: "2010"
  }, {
    id: 2,
    image: "/lovable-uploads/935f9be8-635d-41fc-8aa2-ff6be27db293.png",
    title: "All That I Wanna Do",
    medium: "Mixed Media Installation",
    year: "2016"
  }, {
    id: 3,
    image: "/lovable-uploads/07759e31-278f-475e-8804-d9b157b22ca2.png",
    title: "Passage",
    medium: "Installation",
    year: "2014"
  }, {
    id: 4,
    image: "/lovable-uploads/f0d0a5e3-2d59-4a2a-8a1b-d0a708f5871b.png",
    title: "Exhibit Room",
    medium: "Installation View",
    year: "2019"
  }, {
    id: 5,
    image: "/lovable-uploads/e6fbe28e-4e85-4953-bec0-cdb64e70963b.png",
    title: "Triumph of Market",
    medium: "Marble and Mixed Media",
    year: "2018"
  }, {
    id: 6,
    image: "/lovable-uploads/180a9067-0319-4c53-ac25-6d442b498de9.png",
    title: "Triumph of Market",
    medium: "Acrylic on Canvas",
    year: "2015"
  }, {
    id: 7,
    image: "/lovable-uploads/594cb0c5-09c8-4e08-815f-9eb39b532757.png",
    title: "Blossom",
    medium: "Installation",
    year: "2017"
  }, {
    id: 8,
    image: "/lovable-uploads/56831ccd-2b26-4648-9d46-aac87185726b.png",
    title: "Maha Basant",
    medium: "Embroidery on Silk",
    year: "2014"
  }, {
    id: 9,
    image: "/lovable-uploads/30d5a406-7f20-4ba7-b503-dc5a918a68b1.png",
    title: "Hung in an Abattoir",
    medium: "Ragini Todi - Songs of Anthropocene",
    year: "2019"
  }, {
    id: 10,
    image: "/lovable-uploads/67115418-f7ae-451c-94fe-01e2fc7f0545.png",
    title: "Marble Inlay",
    medium: "Mixed Media",
    year: "2016"
  }, {
    id: 11,
    image: "/lovable-uploads/786b6fe6-fbe1-43d1-b92c-754872af3757.png",
    title: "Idiopathic Craniofacial Erythema",
    medium: "Mixed Media",
    year: "2018"
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
