import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { LayoutGrid, Image, Download, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  interface Work {
    id: number;
    title: string;
    year: string;
    category: 'installation' | 'publication';
    tab: string;
    image: string;
    description: string;
    pdfLink: string;
    galleryImages?: string[];
  }

  const works: Work[] = [
    {
      id: 1,
      title: "Honey, I shrunk my Tongue",
      year: "2003",
      category: "installation",
      tab: "honey",
      image: "/lovable-uploads/d5f03b39-25c4-4642-8476-9a6371431261.png",
      description: "An interactive installation exploring the nature of truth and perception in contemporary society.",
      pdfLink: "https://drive.google.com/file/d/example1",
      galleryImages: [
        "/lovable-uploads/68697f75-08be-4508-bb08-8c293644c582.png",
        "/lovable-uploads/dbfae489-0738-4dc8-87b4-1c0666bedd23.png",
        "/lovable-uploads/7851707d-7430-4786-b440-682533e18446.png",
        "/lovable-uploads/1abce420-e34e-4ba1-ac05-714f5f5c8656.png",
        "/lovable-uploads/14006748-ead5-4e14-9c8f-6b283eeca1c2.png",
        "/lovable-uploads/c1a93e0c-2551-485b-b5f9-a8d30835b23e.png",
        "/lovable-uploads/b8843983-09b9-47be-9985-c0ec3adf24c0.png",
        "/lovable-uploads/235926d9-632a-4b48-b293-512d9a4270c0.png",
        "/lovable-uploads/629bc411-445a-451b-9e76-46da081736d4.png"
      ]
    }, {
      id: 2,
      title: "Ragamala song of Anthropocene",
      year: "2004",
      category: "installation",
      tab: "ragamala",
      image: "/lovable-uploads/cdf4a79d-66a6-4411-9326-b2324d0344ad.png",
      description: "A provocative exploration of environmental changes and their impact on cultural narratives.",
      pdfLink: "https://drive.google.com/file/d/example2"
    }, {
      id: 3,
      title: "Triumph of market",
      year: "2005",
      category: "installation",
      tab: "triumph",
      image: "/lovable-uploads/e4c1b905-86c4-47e0-b479-1034fe1b2cd8.png",
      description: "A critical examination of late capitalism and market forces shaping contemporary society.",
      pdfLink: "https://drive.google.com/file/d/example3"
    }, {
      id: 4,
      title: "Imp in the garden and other fairy tales",
      year: "2006",
      category: "publication",
      tab: "imp-in-the-garden",
      image: "/lovable-uploads/a91861a5-473b-4243-b453-d366e98b241c.png",
      description: "A collection of reimagined fairy tales that question our relationship with nature and mythology.",
      pdfLink: "https://drive.google.com/file/d/example4"
    }, {
      id: 5,
      title: "Acquire merge collaborate",
      year: "2007",
      category: "publication",
      tab: "acquire-merge",
      image: "/lovable-uploads/041c323c-d28a-4be2-a05f-2ce076a6bce0.png",
      description: "An exploration of corporate language and collaborative practices in the contemporary art world.",
      pdfLink: "https://drive.google.com/file/d/example5"
    }, {
      id: 6,
      title: "What do I love when I love you, my God",
      year: "2008",
      category: "installation",
      tab: "what-do-i-love",
      image: "/lovable-uploads/c2c372a6-45a1-4e66-ade2-71fa4e2ad07b.png",
      description: "A spiritual exploration of love, devotion, and the divine through multimedia elements.",
      pdfLink: "https://drive.google.com/file/d/example6"
    }, {
      id: 7,
      title: "Kegel exercise",
      year: "2009",
      category: "installation",
      tab: "kegel-exercise",
      image: "/lovable-uploads/36aacf01-310c-41d2-b778-7460f45bec1a.png",
      description: "An installation connecting traditional practices with contemporary body awareness and control.",
      pdfLink: "https://drive.google.com/file/d/example7"
    }, {
      id: 8,
      title: "All that I wanna do",
      year: "2010",
      category: "installation",
      tab: "all-that-i-wanna-do",
      image: "/lovable-uploads/650c0882-fe96-42f9-8efb-5acc29ceca1f.png",
      description: "An immersive installation reflecting on personal desires and societal expectations.",
      pdfLink: "https://drive.google.com/file/d/example8"
    }, {
      id: 9,
      title: "I am so angry, I made this sign",
      year: "2011",
      category: "publication",
      tab: "angry",
      image: "/lovable-uploads/b11607ac-d5b2-4cfb-80fc-04bebd3f77a3.png",
      description: "A provocative publication exploring themes of protest, expression, and the politics of anger.",
      pdfLink: "https://drive.google.com/file/d/example9"
    }
  ];

  // Filter works based on selected category
  const filteredWorks = works.filter(work => selectedCategory === 'all' || work.category === selectedCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="portfolio-container max-w-7xl mx-auto">
          <SectionTitle title="Portfolio" centered />

          <div className="mb-10">
            <div className="flex justify-between items-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <Button 
                  variant={selectedCategory === 'all' ? 'default' : 'outline'} 
                  onClick={() => setSelectedCategory('all')} 
                  className={selectedCategory === 'all' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
                >
                  Art Works
                </Button>
                <Button 
                  variant={selectedCategory === 'installation' ? 'default' : 'outline'} 
                  onClick={() => setSelectedCategory('installation')} 
                  className={selectedCategory === 'installation' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
                >
                  Publications
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={viewMode === 'grid' ? 'default' : 'outline'} 
                  size="icon" 
                  onClick={() => setViewMode('grid')} 
                  className={viewMode === 'grid' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
                >
                  <LayoutGrid size={18} />
                </Button>
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'outline'} 
                  size="icon" 
                  onClick={() => setViewMode('list')} 
                  className={viewMode === 'list' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
                >
                  <Image size={18} />
                </Button>
              </div>
            </div>

            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map(work => (
                  <Card key={work.id} className="gallery-item overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedWork(work)}>
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src={work.image} 
                          alt={work.title} 
                          className="w-full h-full object-cover image-hover" 
                        />
                      </AspectRatio>
                    </div>
                    <CardContent className="p-6" onClick={() => setSelectedWork(work)}>
                      <span className="text-sm text-portfolio-blue font-medium capitalize">
                        {work.category} • {work.year}
                      </span>
                      <h3 className="text-xl font-serif font-semibold mt-2">{work.title}</h3>
                    </CardContent>
                    <CardFooter className="px-6 py-3 pt-0 border-t border-gray-100 flex justify-end">
                      <a 
                        href={work.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-sm text-portfolio-blue hover:text-portfolio-darkBlue"
                      >
                        <Download size={14} className="mr-1" />
                        Download PDF
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col space-y-6">
                {filteredWorks.map(work => (
                  <Card key={work.id} className="gallery-item overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1 h-full cursor-pointer" onClick={() => setSelectedWork(work)}>
                        <AspectRatio ratio={1 / 1} className="h-full">
                          <img 
                            src={work.image} 
                            alt={work.title} 
                            className="w-full h-full object-cover image-hover" 
                          />
                        </AspectRatio>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="cursor-pointer" onClick={() => setSelectedWork(work)}>
                          <span className="text-sm text-portfolio-blue font-medium capitalize">
                            {work.category} • {work.year}
                          </span>
                          <h3 className="text-xl font-serif font-semibold mt-2">{work.title}</h3>
                          <p className="mt-3 text-gray-600 line-clamp-3">{work.description}</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                          <a 
                            href={work.pdfLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-sm text-portfolio-blue hover:text-portfolio-darkBlue"
                          >
                            <Download size={14} className="mr-1" />
                            Download PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Gallery Image Dialog */}
          <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
            <DialogContent className="max-w-5xl p-0 overflow-hidden">
              {selectedGalleryImage && (
                <div className="w-full">
                  <img 
                    src={selectedGalleryImage} 
                    alt="Gallery artwork"
                    className="w-full h-auto object-contain max-h-[90vh]" 
                  />
                </div>
              )}
            </DialogContent>
          </Dialog>

          {/* Work Details Dialog */}
          <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
            <DialogContent className="max-w-6xl p-0 overflow-hidden">
              {selectedWork && (
                <div className="max-h-[90vh] overflow-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-full">
                      <img 
                        src={selectedWork.image} 
                        alt={selectedWork.title} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <span className="text-sm text-portfolio-blue font-medium capitalize">
                        {selectedWork.category} • {selectedWork.year}
                      </span>
                      <h3 className="text-2xl font-serif font-semibold mt-2 mb-4">
                        {selectedWork.title}
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {selectedWork.description}
                      </p>
                      <a 
                        href={selectedWork.pdfLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue mb-6"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download size={16} />
                          Download PDF
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  {/* Gallery Images Section */}
                  {selectedWork.galleryImages && selectedWork.galleryImages.length > 0 && (
                    <div className="border-t border-gray-200 p-6">
                      <h4 className="text-lg font-semibold mb-4">Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedWork.galleryImages.map((image, index) => (
                          <div 
                            key={index}
                            className="aspect-square cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition-opacity"
                            onClick={() => setSelectedGalleryImage(image)}
                          >
                            <img 
                              src={image} 
                              alt={`${selectedWork.title} gallery ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
