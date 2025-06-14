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
  
  // Updated works array with new gallery images
  const works: Work[] = [{
    id: 1,
    title: "Not still life",
    year: "2005",
    category: "installation",
    tab: "not-still-life",
    image: "/lovable-uploads/d840ae56-4f78-4389-813f-c3d7433318ea.png",
    description: "An exploration of the dynamic nature of life through unconventional still life compositions.",
    pdfLink: "https://drive.google.com/file/d/example10",
    galleryImages: [
      "/lovable-uploads/af5dcae7-993a-4c09-b292-617220b44e2a.png",
      "/lovable-uploads/d7b66ced-7927-4a37-b942-9f1146f42441.png",
      "/lovable-uploads/929eafe6-697e-4b78-9b6f-e2db1e30154c.png",
      "/lovable-uploads/7ed7c71e-0fc4-4ec9-8445-1a9d64e17f26.png",
      "/lovable-uploads/78ba5192-482e-4259-b084-e95185bdbb80.png"
    ]
  }, {
    id: 2,
    title: "Honey, I shrunk my Tongue",
    year: "2017",
    category: "installation",
    tab: "honey",
    image: "/lovable-uploads/d5f03b39-25c4-4642-8476-9a6371431261.png",
    description: "An interactive installation exploring the nature of truth and perception in contemporary society.",
    pdfLink: "https://drive.google.com/file/d/example1",
    galleryImages: [
      "/lovable-uploads/fb3d2ed9-5405-40dc-a36c-db400bba2816.png",
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
    id: 3,
    title: "Ragamala song of Anthropocene",
    year: "2019",
    category: "installation",
    tab: "ragamala",
    image: "/lovable-uploads/cdf4a79d-66a6-4411-9326-b2324d0344ad.png",
    description: "A provocative exploration of environmental changes and their impact on cultural narratives.",
    pdfLink: "https://drive.google.com/file/d/example2",
    galleryImages: [
      "/lovable-uploads/88db819d-f4f8-4473-af2c-eb344ee66c11.png",
      "/lovable-uploads/998deae4-b3af-423a-a4de-843f3782ca74.png",
      "/lovable-uploads/97b2deb1-f75c-4ce0-a06e-bd1af8a72c1d.png",
      "/lovable-uploads/aed3d2ee-4bbc-4686-b055-2640984a52eb.png",
      "/lovable-uploads/aba91c3a-268b-4b71-a250-bc31e6bf3c86.png",
      "/lovable-uploads/3793a105-ebfc-447e-bff2-3dfdaaa6a552.png",
      "/lovable-uploads/a7f3ad5c-4281-41ca-b491-d48b5b1260e7.png",
      "/lovable-uploads/4e8fb196-d68c-46ec-a65c-087e374a07d3.png",
      "/lovable-uploads/1b2a828d-d604-443d-973a-2e1a27d7d9f3.png",
      "/lovable-uploads/2fbb9d4d-e115-4ab3-859b-eadd5fd9ed0a.png"
    ]
  }, {
    id: 4,
    title: "Triumph of market",
    year: "2003",
    category: "installation",
    tab: "triumph",
    image: "/lovable-uploads/337f1345-3709-4f18-bf6d-f2fda48b4368.png",
    description: "A critical examination of late capitalism and market forces shaping contemporary society.",
    pdfLink: "https://drive.google.com/file/d/example3",
    galleryImages: [
      "/lovable-uploads/35204abb-322d-4efe-8e1b-f484af6ddbc1.png",
      "/lovable-uploads/72225803-63bf-433c-a2ed-ab81c1ca1a30.png",
      "/lovable-uploads/c4d0e4a3-2c7e-4ea1-9a22-35a854ac588c.png",
      "/lovable-uploads/7d316407-acf2-4b78-a11e-a63fe874a323.png",
      "/lovable-uploads/7912a760-0f0c-491c-9bb4-e5b76e60093d.png",
      "/lovable-uploads/66495f3a-b212-47d2-8375-3075c08bc863.png",
      "/lovable-uploads/3bed6638-6fb4-48e4-b1d4-573e7f4e7512.png",
      "/lovable-uploads/88edba5a-f260-404d-a7e2-62f1069debbb.png",
      "/lovable-uploads/1c1b5939-bbfd-4336-bd2a-bb90851fd3ad.png",
      "/lovable-uploads/30beef8c-33c0-4979-842d-6c3985cfd755.png"
    ]
  }, {
    id: 5,
    title: "I am so angry, I made this sign",
    year: "2012",
    category: "publication",
    tab: "angry",
    image: "/lovable-uploads/b11607ac-d5b2-4cfb-80fc-04bebd3f77a3.png",
    description: "A provocative publication exploring themes of protest, expression, and the politics of anger.",
    pdfLink: "https://drive.google.com/file/d/example9",
    galleryImages: [
      "/lovable-uploads/1c9ac1ff-bc1f-4de7-8417-21362a48c6d3.png",
      "/lovable-uploads/e5bee9ae-b94f-46b2-9e7c-61a9a4fb3aea.png",
      "/lovable-uploads/e45c502d-d713-4db7-8db7-e758427ed598.png",
      "/lovable-uploads/b036f9e8-7fb9-43c3-9538-8c1bf7cb65be.png",
      "/lovable-uploads/3b0cc10d-d36d-45d2-8ede-d949ec678eed.png",
      "/lovable-uploads/c8f9bae4-0288-437e-ae26-e53ee5c57418.png",
      "/lovable-uploads/c4c9e781-7a6b-44d4-b46d-2f14254fe294.png",
      "/lovable-uploads/0cdd834f-4996-4754-857d-be00a430a307.png",
      "/lovable-uploads/d133528e-90e3-4b59-8a28-34791fe70e8c.png"
    ]
  }, {
    id: 6,
    title: "Imp in the garden and other fairy tales",
    year: "2010",
    category: "publication",
    tab: "imp-in-the-garden",
    image: "/lovable-uploads/a91861a5-473b-4243-b453-d366e98b241c.png",
    description: "A collection of reimagined fairy tales that question our relationship with nature and mythology.",
    pdfLink: "https://drive.google.com/file/d/example4",
    galleryImages: ["/lovable-uploads/c743c7e9-92b7-46b8-961b-b7d5beddb3f2.png", "/lovable-uploads/7f7bf8a6-51fd-4fa9-a4f8-f9e810b95fe7.png", "/lovable-uploads/7f58e499-2f93-49c6-93a6-ffff13c6a43c.png", "/lovable-uploads/ba7c889f-0191-4209-b637-8b09968a8966.png", "/lovable-uploads/b9f0a7da-62ac-4c83-bcd8-59b9432545dd.png"]
  }, {
    id: 7,
    title: "Everything you wanted to know about bad breath but afraid to ask alfred hitchcock",
    year: "2008",
    category: "installation",
    tab: "bad-breath",
    image: "/lovable-uploads/79ce5de6-7394-4c01-9f45-995a6c9d75cf.png",
    description: "A surreal investigation into social anxieties and cinematic suspense through multimedia installation.",
    pdfLink: "https://drive.google.com/file/d/example11"
  }, {
    id: 8,
    title: "Acquire merge collaborate",
    year: "2011",
    category: "publication",
    tab: "acquire-merge",
    image: "/lovable-uploads/25c3eedf-5270-4e68-b77c-565421716d09.png",
    description: "An exploration of corporate language and collaborative practices in the contemporary art world.",
    pdfLink: "https://drive.google.com/file/d/example5",
    galleryImages: ["/lovable-uploads/4a7337fb-450a-4399-aff8-48ad13210fac.png", "/lovable-uploads/473155fa-9c37-4d9e-bd23-ab649eefcbcc.png", "/lovable-uploads/e7cd1d05-243f-4bd8-88d2-34e55dbc0735.png", "/lovable-uploads/3610b2b6-791e-45f3-ab1d-9bb8b6a95716.png"]
  }, {
    id: 9,
    title: "What do I love when I love you, my God",
    year: "2006",
    category: "installation",
    tab: "what-do-i-love",
    image: "/lovable-uploads/c2c372a6-45a1-4e66-ade2-71fa4e2ad07b.png",
    description: "A spiritual exploration of love, devotion, and the divine through multimedia elements.",
    pdfLink: "https://drive.google.com/file/d/example6",
    galleryImages: ["/lovable-uploads/18cb5d75-2ed1-4d5e-a560-511501cc5119.png", "/lovable-uploads/61cf713e-51d6-4078-88dd-b96f4eaf3e9a.png", "/lovable-uploads/cac87070-3bbc-418d-8232-b0d2fbffb969.png", "/lovable-uploads/ab0a41d1-db1c-4290-a24d-c1bd078cf3d7.png", "/lovable-uploads/1c7cb1e8-84c9-4838-88ce-0d9f17e7fe9e.png"]
  }, {
    id: 10,
    title: "la peau de chagrin (who is afraid of shrinking skin)",
    year: "2005",
    category: "installation",
    tab: "peau-de-chagrin",
    image: "/lovable-uploads/2c628a6f-49d2-4fd2-a7c9-2794d5c6dc6c.png",
    description: "A meditation on aging, vanity, and the passage of time inspired by Balzac's literary work.",
    pdfLink: "https://drive.google.com/file/d/example12"
  }, {
    id: 11,
    title: "Kegel exercise",
    year: "2007",
    category: "installation",
    tab: "kegel-exercise",
    image: "/lovable-uploads/36aacf01-310c-41d2-b778-7460f45bec1a.png",
    description: "An installation connecting traditional practices with contemporary body awareness and control.",
    pdfLink: "https://drive.google.com/file/d/example7",
    galleryImages: ["/lovable-uploads/41bcbf6f-1666-4f38-a039-3b34561005d1.png", "/lovable-uploads/04e66781-7727-423f-b19b-9a1d9800cfa8.png", "/lovable-uploads/2b83f081-a1cc-4462-9b36-1c2c8095affc.png", "/lovable-uploads/01f9c78b-3075-495e-9329-d25855a10286.png", "/lovable-uploads/41bc3d09-1e12-4a1a-b5bf-b33473cda432.png"]
  }, {
    id: 12,
    title: "All that I wanna do",
    year: "2005",
    category: "installation",
    tab: "all-that-i-wanna-do",
    image: "/lovable-uploads/650c0882-fe96-42f9-8efb-5acc29ceca1f.png",
    description: "An immersive installation reflecting on personal desires and societal expectations.",
    pdfLink: "https://drive.google.com/file/d/example8"
  }];

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
                <Button variant={selectedCategory === 'all' ? 'default' : 'outline'} onClick={() => setSelectedCategory('all')} className={selectedCategory === 'all' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
                  Art Works
                </Button>
                <Button variant={selectedCategory === 'installation' ? 'default' : 'outline'} onClick={() => setSelectedCategory('installation')} className={selectedCategory === 'installation' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
                  Publications
                </Button>
              </div>
              
              <div className="flex gap-2">
                <Button variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
                  <LayoutGrid size={18} />
                </Button>
                <Button variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
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
                        <img src={work.image} alt={work.title} className="w-full h-full object-contain image-hover" />
                      </AspectRatio>
                    </div>
                    <CardContent className="p-6" onClick={() => setSelectedWork(work)}>
                      <h3 className="text-xl font-serif font-semibold">{work.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{work.year}</p>
                    </CardContent>
                    <CardFooter className="px-6 py-3 pt-0 border-t border-gray-100 flex justify-end">
                      
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
                          <img src={work.image} alt={work.title} className="w-full h-full object-contain image-hover" />
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
                          <a href={work.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-portfolio-blue hover:text-portfolio-darkBlue">
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
            <DialogContent className="max-w-none max-h-none w-auto h-auto p-0 border-0 bg-black/90 shadow-none">
              {selectedGalleryImage && (
                <div className="w-auto h-auto">
                  <img src={selectedGalleryImage} alt="Gallery artwork" className="max-w-[90vw] max-h-[90vh] object-contain" />
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
                      <img src={selectedWork.image} alt={selectedWork.title} className="w-full h-full object-contain" />
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
                      <a href={selectedWork.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue mb-6">
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
                          <div key={index} className="aspect-square cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition-opacity" onClick={() => setSelectedGalleryImage(image)}>
                            <img src={image} alt={`${selectedWork.title} gallery ${index + 1}`} className="w-full h-full object-contain" />
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
