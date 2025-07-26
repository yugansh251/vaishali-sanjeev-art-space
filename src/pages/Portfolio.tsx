import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutGrid, Image, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  interface Work {
    id: number;
    title: string;
    year: string;
    category: 'installation' | 'publication' | 'previous';
    tab: string;
    image: string;
    description: string;
    pdfLink: string;
    galleryImages?: string[];
  }

  // Updated works array with new title, cover image for "'not Still Life'"
  const works: Work[] = [{
    id: 1,
    title: "'not Still Life'",
    year: "2025",
    category: "installation",
    tab: "not-still-life",
    image: "/lovable-uploads/c84db2c7-daea-4da0-9d0d-4b0264511fdd.png",
    description: "'not Still Life'\n\nIn this new series, Vaishali Narkar and Sanjeev Khandekar confront ecological collapse through six multimedia works.\n\nBlending acrylic, watercolour, oil, and etched glass, the pieces distort and fragment vision‚Äîmirroring environmental disarray.\nThe artists critique the CapitalOne, revealing how capitalist greed underpins ecological destruction.\n\nGlass surfaces blur the line between art and urgency, between beauty and breakdown.\nA dark pun on the genre, not Still Life resists stasis, insisting life is anything but still.\nIt is a call to see, and to act, before stillness becomes silence.",
    pdfLink: "https://drive.google.com/file/d/example10",
    galleryImages: ["/lovable-uploads/53aa1696-e63c-4ed2-add5-40d8a8ba7bd8.png", "/lovable-uploads/689fdfc3-04d0-4b81-8d3b-c72ca92423b3.png", "/lovable-uploads/cb7854e9-5297-4154-b0c6-8d9347b8bea3.png", "/lovable-uploads/2b8a82a6-8b2f-45d0-99fc-6bf151d63abc.png"]
  }, {
    id: 2,
    title: "Honey, I shrunk my Tongue",
    year: "2017",
    category: "installation",
    tab: "honey",
    image: "/lovable-uploads/1f76b3c3-15e5-4bdb-8b89-0790ec4baa27.png",
    description: "\"Honey, I Shrunk My Tongue\" is a site-specific ceramic installation exploring the profound versatility of the tongue. From solitary forms to a multitude, these objects weave a visual poem, deciphering the enigma of language itself. The artwork invites a journey into this mysterious organ, a voice that embodies good and bad, freedom and constraint. It's a meditation on the tongue as a word, a language, and the very essence of free expression.",
    pdfLink: "https://drive.google.com/file/d/example1",
    galleryImages: ["/lovable-uploads/89c24c64-f73f-4c57-8683-b0563afa008d.png", "/lovable-uploads/808c2591-a15a-4d88-891f-d87fadd02a06.png", "/lovable-uploads/b429ad94-288f-4d60-9e72-a3720220fbfe.png", "/lovable-uploads/fae9fa8d-7dbe-41ec-aee8-760fff7b1cc1.png", "/lovable-uploads/4ed46357-a461-4b4b-b8d2-b65a4e71db98.png", "/lovable-uploads/92909206-10d1-43e4-b2b2-cfda696dad24.png", "/lovable-uploads/6056b8bf-a252-4a94-bdaf-ba223e27a824.png", "/lovable-uploads/194653c1-6bab-4915-96c9-bddd2459333a.png", "/lovable-uploads/fd29bbd8-23d6-4bb1-bcb5-60186273dd41.png", "/lovable-uploads/843ba233-4f04-4c47-a5bf-834ef49a4f17.png", "/lovable-uploads/1a69328e-baaf-4d6b-929a-ec2b822df547.png"]
  }, {
    id: 3,
    title: "Ragamala song of Anthropocene",
    year: "2019",
    category: "installation",
    tab: "ragamala",
    image: "/lovable-uploads/4e1daee6-d911-4bd7-9f32-f3cfb6cf7fcc.png",
    description: "A provocative exploration of environmental changes and their impact on cultural narratives.",
    pdfLink: "https://drive.google.com/file/d/example2",
    galleryImages: ["/lovable-uploads/64f8a533-ee8b-4073-9d72-2142f2234a4d.png", "/lovable-uploads/864784db-1b0e-46fc-bff8-7243bd6cc358.png", "/lovable-uploads/1908a2b3-0c8c-4d95-97c9-715e51f5cec4.png", "/lovable-uploads/886c1773-365c-45fb-b455-d5ef379298c0.png", "/lovable-uploads/2519c2d8-c673-44fd-a702-8e5e09a7d5c2.png", "/lovable-uploads/98a28317-35cc-48b1-9071-d986698a4797.png", "/lovable-uploads/c270f8b5-0e68-4027-8336-65e02b6c5dfb.png", "/lovable-uploads/dfcb89ed-58fb-4695-9934-f1cb16eb8bb8.png", "/lovable-uploads/922ca9e4-64f7-49d1-8ded-2ac2df56ed8e.png", "/lovable-uploads/15af7be3-407c-405e-b1da-6bd15a115395.png"]
  }, {
    id: 4,
    title: "Triumph of market",
    year: "2003",
    category: "installation",
    tab: "triumph",
    image: "/lovable-uploads/4e7bef34-8e17-4669-98b1-6f322daf9352.png",
    description: "A critical examination of late capitalism and market forces shaping contemporary society.",
    pdfLink: "https://drive.google.com/file/d/example3",
    galleryImages: ["/lovable-uploads/35204abb-322d-4efe-8e1b-f484af6ddbc1.png", "/lovable-uploads/72225803-63bf-433c-a2ed-ab81c1ca1a30.png", "/lovable-uploads/c4d0e4a3-2c7e-4ea1-9a22-35a854ac588c.png", "/lovable-uploads/7d316407-acf2-4b78-a11e-a63fe874a323.png", "/lovable-uploads/7912a760-0f0c-491c-9bb4-e5b76e60093d.png", "/lovable-uploads/66495f3a-b212-47d2-8375-3075c08bc863.png", "/lovable-uploads/3bed6638-6fb4-48e4-b1d4-573e7f4e7512.png", "/lovable-uploads/88edba5a-f260-404d-a7e2-62f1069debbb.png", "/lovable-uploads/1c1b5939-bbfd-4336-bd2a-bb90851fd3ad.png", "/lovable-uploads/30beef8c-33c0-4979-842d-6c3985cfd755.png"]
  }, {
    id: 5,
    title: "I am so angry, I made this sign",
    year: "2012",
    category: "publication",
    tab: "angry",
    image: "/lovable-uploads/8b08c4ea-c9a1-4a8a-83b6-1ce3fbf9dd46.png",
    description: "A provocative publication exploring themes of protest, expression, and the politics of anger.",
    pdfLink: "https://drive.google.com/file/d/example9",
    galleryImages: ["/lovable-uploads/bf837c31-1c23-4239-b9f4-e6ec1b8d7a9d.png", "/lovable-uploads/1c9ac1ff-bc1f-4de7-8417-21362a48c6d3.png", "/lovable-uploads/e5bee9ae-b94f-46b2-9e7c-61a9a4fb3aea.png", "/lovable-uploads/e45c502d-d713-4db7-8db7-e758427ed598.png", "/lovable-uploads/b036f9e8-7fb9-43c3-9538-8c1bf7cb65be.png", "/lovable-uploads/3b0cc10d-d36d-45d2-8ede-d949ec678eed.png", "/lovable-uploads/c8f9bae4-0288-437e-ae26-e53ee5c57418.png", "/lovable-uploads/c4c9e781-7a6b-44d4-b46d-2f14254fe294.png", "/lovable-uploads/0cdd834f-4996-4754-857d-be00a430a307.png", "/lovable-uploads/d133528e-90e3-4b59-8a28-34791fe70e8c.png"]
  }, {
    id: 6,
    title: "by gorge",
    year: "2024",
    category: "installation",
    tab: "by-gorge",
    image: "/lovable-uploads/4bb13448-46c8-4540-b4a9-6cc301abb3fa.png",
    description: "An exploration of natural formations and their impact on human perception.",
    pdfLink: "https://drive.google.com/file/d/example13",
    galleryImages: ["/lovable-uploads/473155fa-9c37-4d9e-bd23-ab649eefcbcc.png"]
  }, {
    id: 7,
    title: "Imp in the garden and other fairy tales",
    year: "2010",
    category: "publication",
    tab: "imp-in-the-garden",
    image: "/lovable-uploads/d62b2b77-ccc9-41ac-af51-d432713d2bad.png",
    description: "A collection of reimagined fairy tales that question our relationship with nature and mythology.",
    pdfLink: "https://drive.google.com/file/d/example4",
    galleryImages: ["/lovable-uploads/9f5b2043-524b-428b-bfa1-31a5f4ba713a.png", "/lovable-uploads/79e8a1a1-3e2d-404e-89a1-967a257a3788.png", "/lovable-uploads/a1cc57b8-1413-44d1-afc8-f42e5bfb39d3.png", "/lovable-uploads/d93f6096-ef32-4549-a101-fce72a9750a5.png", "/lovable-uploads/655db54e-497a-4240-a044-655fa8f34f5c.png", "/lovable-uploads/657aeb3b-06e9-4f88-bb8a-ce4cc6045d43.png", "/lovable-uploads/da39a3dc-4d24-418c-817b-47b1b51b64d1.png", "/lovable-uploads/1cd02643-590d-4308-979b-398567fd2ac9.png", "/lovable-uploads/ad5ed47c-151f-491d-884d-c8515b97737e.png", "/lovable-uploads/a3f3c915-2e01-41cd-a526-1293d0f58427.png", "/lovable-uploads/c9a5f239-44b3-431b-b796-d8b647865bc0.png", "/lovable-uploads/0e1ca16a-0c79-43af-9bef-840c0c9d8add.png", "/lovable-uploads/30e3eccd-bb6e-4e7b-bf44-7b6113de4d37.png"]
  }, {
    id: 8,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock I",
    year: "2008",
    category: "installation",
    tab: "bad-breath",
    image: "/lovable-uploads/96cd1cd0-9b23-4ccd-90e2-d498e501aa93.png",
    description: "A surreal investigation into social anxieties and cinematic suspense through multimedia installation.",
    pdfLink: "https://drive.google.com/file/d/example11",
    galleryImages: ["/lovable-uploads/65d53b44-9072-4180-9127-3914fc010097.png", "/lovable-uploads/bc7a0d11-895f-497a-9aac-adc1e5c9a818.png", "/lovable-uploads/75a43fb3-d44a-49ea-a4b5-156e1d63f9b8.png", "/lovable-uploads/bebb639b-ed4f-4733-bace-014d0772084d.png", "/lovable-uploads/bedb5860-1c39-409b-998e-f052a93df528.png", "/lovable-uploads/73582b7e-295b-4682-a5ec-28740ab2daa5.png", "/lovable-uploads/5af0482a-23b8-452e-9588-a7dc60f22fb1.png", "/lovable-uploads/e8ea11fa-c807-45e6-8b5b-dbd95efa139f.png", "/lovable-uploads/9e5c1c9a-aba0-407e-9a27-a3331a155dda.png", "/lovable-uploads/7a53be69-cace-49a6-9409-35b5bd282496.png"]
  }, {
    id: 9,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock III",
    year: "2010",
    category: "installation",
    tab: "bad-breath-iii",
    image: "/lovable-uploads/079476cf-8bc6-43b6-bd37-4b829527ba34.png",
    description: "A continuation of the surreal investigation into social anxieties and cinematic suspense.",
    pdfLink: "https://drive.google.com/file/d/example14",
    galleryImages: ["/lovable-uploads/456b0f58-3fce-4a4c-8150-d120ea05d919.png"]
  }, {
    id: 10,
    title: "Acquire, Merge or Collaborate...!",
    year: "2011",
    category: "publication",
    tab: "acquire-merge",
    image: "/lovable-uploads/358afbc9-c4e1-427f-a622-e73021db9465.png",
    description: "An exploration of corporate language and collaborative practices in the contemporary art world.",
    pdfLink: "https://drive.google.com/file/d/example5",
    galleryImages: ["/lovable-uploads/1bbf09c9-ecef-4bc8-8a86-9ece6f65398a.png", "/lovable-uploads/18158514-d4ff-45c2-825a-e3d561ef1722.png", "/lovable-uploads/e3dc8223-1ae9-43cb-811c-e11d855dae11.png", "/lovable-uploads/3a3fcdaa-f4d9-4cf5-adf5-3a7ff20f0346.png", "/lovable-uploads/12e19b04-0ae1-496e-b72d-e86f0e25ff65.png"]
  }, {
    id: 11,
    title: "What do I love when I love you, my God",
    year: "2006",
    category: "installation",
    tab: "what-do-i-love",
    image: "/lovable-uploads/4cb1d480-a7f6-4631-aa6b-efc3bfbdc547.png",
    description: "A spiritual exploration of love, devotion, and the divine through multimedia elements.",
    pdfLink: "https://drive.google.com/file/d/example6",
    galleryImages: ["/lovable-uploads/2f7d6175-ee60-4d18-be20-a27258f97671.png", "/lovable-uploads/8350fb86-e421-4443-9eca-f640c9c33a13.png", "/lovable-uploads/9f8d9411-985c-443e-b608-68d9d6efe9c2.png", "/lovable-uploads/6c6585ff-1693-41ef-97fb-15f25476b883.png", "/lovable-uploads/7488508b-8ed8-475f-8168-9639939d413d.png", "/lovable-uploads/81d0dad3-8a0e-4691-b3e7-e0b4c054b708.png", "/lovable-uploads/3a3c485e-8d49-41ad-ad03-78f428071ba6.png", "/lovable-uploads/5252a848-fa9c-4e1d-93af-e482bda6be65.png", "/lovable-uploads/2cdcfd33-699e-4dc8-ad3b-fee502d64469.png", "/lovable-uploads/5f4e7d8c-daae-4936-a127-576ab3bb3b1b.png", "/lovable-uploads/31928965-9efa-44bb-b005-76006cc0afef.png", "/lovable-uploads/99ad75dc-7b9c-48c9-baba-81bfd3c960e2.png"]
  }, {
    id: 12,
    title: "la peau de chagrin (who is afraid of shrinking skin)",
    year: "2005",
    category: "installation",
    tab: "peau-de-chagrin",
    image: "/lovable-uploads/40425b36-d58c-4f4b-a590-2c6af0027e70.png",
    description: "A meditation on aging, vanity, and the passage of time inspired by Balzac's literary work.",
    pdfLink: "https://drive.google.com/file/d/example12",
    galleryImages: ["/lovable-uploads/9c9b9bfd-dbb3-484a-baa5-3d2ed18b5dda.png", "/lovable-uploads/38c6fa43-c446-48b1-9e3a-986fe9d70eed.png", "/lovable-uploads/9f42976c-de88-4a88-b11a-151fc34fa2c4.png", "/lovable-uploads/d331a953-4a1e-4fd4-aaf5-6d0265740ee2.png", "/lovable-uploads/4ae1d5fc-524f-4d96-8d35-8c8104cda10d.png", "/lovable-uploads/0e6b1aa7-e585-4ee5-bf7e-4f76ac15732c.png", "/lovable-uploads/6ed957a0-eef9-4ea0-8ead-354080331d15.png", "/lovable-uploads/b3159f35-952c-41a1-a65f-ee76a735682f.png", "/lovable-uploads/96e9892a-c368-4cff-a731-bb1cddd7459d.png", "/lovable-uploads/f89125dd-f991-4ddd-9d2c-356a687d15cf.png", "/lovable-uploads/f352d503-46f3-4f26-9a1d-f8c8e539fbf1.png", "/lovable-uploads/9c39a54d-8d5c-4e1e-988b-1b3bd3d1b739.png", "/lovable-uploads/bdf24ba5-5056-4fb7-bc40-81b785213b13.png", "/lovable-uploads/07215d40-3644-4fc8-ad49-65885054a025.png", "/lovable-uploads/b346acf0-9313-41fc-b40a-2aed13db28d2.png", "/lovable-uploads/89a92525-033b-44e4-b5d1-fb66311eea92.png", "/lovable-uploads/097e2871-764c-4f58-a09e-49582300e79c.png", "/lovable-uploads/f8dd84cc-637c-47b1-81e4-0d7183db1d92.png"]
  }, {
    id: 13,
    title: "Tits Clits n Elephant Dick",
    year: "2022",
    category: "installation",
    tab: "tits-clits-elephant-dick",
    image: "/lovable-uploads/8df44c5d-384c-4688-910b-1ac57b0e8e93.png",
    description: "A provocative exploration of sexuality, identity, and societal taboos through multimedia art.",
    pdfLink: "https://drive.google.com/file/d/example15",
    galleryImages: ["/lovable-uploads/4a7337fb-450a-4399-aff8-48ad13210fac.png"]
  }, {
    id: 14,
    title: "Kegel exercise",
    year: "2007",
    category: "installation",
    tab: "kegel-exercise",
    image: "/lovable-uploads/1deba9e5-600c-43bc-9f37-88056fb2a2ff.png",
    description: "An installation connecting traditional practices with contemporary body awareness and control.",
    pdfLink: "https://drive.google.com/file/d/example7",
    galleryImages: ["/lovable-uploads/3efc3c4b-25e0-440f-a6ca-fa7eeca4e1cf.png", "/lovable-uploads/aa70c8e7-f5c9-4679-9106-66b19d520666.png", "/lovable-uploads/c083ad26-b3f4-4f9c-82f6-a70c40ecf9e1.png", "/lovable-uploads/a27a7482-d9bf-44af-a451-0a4c96c1c1a7.png", "/lovable-uploads/f9277a79-2790-490d-8ad3-a2669171be9a.png", "/lovable-uploads/c8547811-e08c-49f9-8075-774b011d7cc0.png", "/lovable-uploads/856a72e7-7684-4fe3-ba79-1e0262729219.png", "/lovable-uploads/29dc11f4-2ea3-4364-9698-63d819f72d74.png", "/lovable-uploads/b74a9022-ad8a-406f-8ccb-f3804d75a0ab.png", "/lovable-uploads/13663bf7-3117-4631-b565-6eca71516167.png"]
  }, {
    id: 15,
    title: "All that I wanna do",
    year: "2005",
    category: "previous",
    tab: "all-that-i-wanna-do",
    image: "/lovable-uploads/f7f18ae0-9713-40a3-b7e0-1db832fa7509.png",
    description: "An immersive installation reflecting on personal desires and societal expectations.",
    pdfLink: "https://drive.google.com/file/d/example8",
    galleryImages: ["/lovable-uploads/df0856ca-0e2c-4d02-a420-125d3b2be5e8.png", "/lovable-uploads/7b556376-4ae7-4f73-ad41-e5bc4b14cdcb.png", "/lovable-uploads/ac61c46a-3a39-460f-83c8-743bd00aa375.png", "/lovable-uploads/8b6d5cff-57bc-43c8-ae08-12f1d2b9986b.png", "/lovable-uploads/5661b49f-63f6-41ff-a66a-e08fe09259cc.png", "/lovable-uploads/06eb1035-e5f5-4545-a4a7-7b208ebd9ffc.png", "/lovable-uploads/1b70bf12-0f01-4ceb-8f85-43028b1b9640.png", "/lovable-uploads/c3f039b0-9efa-45e7-a9b9-e219d11b0dfd.png", "/lovable-uploads/88badd08-5682-4ac1-a56a-833d05f0757f.png", "/lovable-uploads/0e5b3236-2f23-40f6-9a42-ea217808cb82.png"]
  }];

  // Filter works based on selected category
  const filteredWorks = works.filter(work => selectedCategory === 'all' || work.category === selectedCategory);

  // Functions to handle gallery navigation
  const openGalleryImage = (imageUrl: string, galleryImages: string[]) => {
    const index = galleryImages.indexOf(imageUrl);
    setCurrentGalleryIndex(index);
    setSelectedGalleryImage(imageUrl);
  };
  const navigateGallery = (direction: 'prev' | 'next') => {
    if (!selectedWork?.galleryImages) return;
    const galleryImages = selectedWork.galleryImages;
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentGalleryIndex > 0 ? currentGalleryIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentGalleryIndex < galleryImages.length - 1 ? currentGalleryIndex + 1 : 0;
    }
    setCurrentGalleryIndex(newIndex);
    setSelectedGalleryImage(galleryImages[newIndex]);
  };
  return <Layout>
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
                <Button variant={selectedCategory === 'previous' ? 'default' : 'outline'} onClick={() => setSelectedCategory('previous')} className={selectedCategory === 'previous' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
                  Previous Art Works
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

            {viewMode === 'grid' ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map(work => <Card key={work.id} className="gallery-item overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
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
                  </Card>)}
              </div> : <div className="flex flex-col space-y-6">
                {filteredWorks.map(work => <Card key={work.id} className="gallery-item overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="md:col-span-1 h-full cursor-pointer" onClick={() => setSelectedWork(work)}>
                        <AspectRatio ratio={1 / 1} className="h-full">
                          <img src={work.image} alt={work.title} className="w-full h-full object-contain image-hover" />
                        </AspectRatio>
                      </div>
                      <div className="md:col-span-2 p-6 flex flex-col">
                        <div className="cursor-pointer flex-shrink-0" onClick={() => setSelectedWork(work)}>
                          <span className="text-sm text-portfolio-blue font-medium capitalize">
                            {work.category === 'installation' ? 'Art Works' : work.category === 'previous' ? 'Previous Art Works' : work.category} • {work.year}
                          </span>
                          <h3 className="text-xl font-serif font-semibold mt-2">{work.title}</h3>
                        </div>
                        <div className="flex-1 mt-3">
                          <ScrollArea className="h-64 pr-4">
                            <div className="cursor-pointer" onClick={() => setSelectedWork(work)}>
                              <p className="text-gray-600 whitespace-pre-line">{work.description}</p>
                            </div>
                          </ScrollArea>
                        </div>
                        <div className="mt-4 flex justify-end flex-shrink-0">
                          <a href={work.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-portfolio-blue hover:text-portfolio-darkBlue">
                            <Download size={14} className="mr-1" />
                            Download PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>)}
              </div>}
          </div>

          {/* Gallery Image Dialog with Navigation */}
          <Dialog open={!!selectedGalleryImage} onOpenChange={() => setSelectedGalleryImage(null)}>
            <DialogContent className="max-w-none max-h-none w-screen h-screen p-0 border-0 bg-white shadow-none">
              <button onClick={() => setSelectedGalleryImage(null)} className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 rounded-full bg-gray-800/70 p-2 sm:p-3 text-white hover:bg-gray-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/50">
                <X className="h-4 w-4 sm:h-6 sm:w-6" />
                <span className="sr-only">Close</span>
              </button>
              
              {/* Navigation Arrows */}
              {selectedWork?.galleryImages && selectedWork.galleryImages.length > 1 && <>
                  <button onClick={() => navigateGallery('prev')} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-gray-800/70 p-2 sm:p-3 text-white hover:bg-gray-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/50">
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
                    <span className="sr-only">Previous image</span>
                  </button>
                  <button onClick={() => navigateGallery('next')} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-gray-800/70 p-2 sm:p-3 text-white hover:bg-gray-800/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400/50">
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
                    <span className="sr-only">Next image</span>
                  </button>
                </>}

              {selectedGalleryImage && <div className="w-full h-full flex items-center justify-center p-4 sm:p-8">
                  <img src={selectedGalleryImage} alt="Gallery artwork" className="object-contain" style={{
                maxWidth: 'calc(100vw - 2rem)',
                maxHeight: 'calc(100vh - 2rem)',
                width: 'auto',
                height: 'auto'
              }} />
                </div>}
            </DialogContent>
          </Dialog>

          {/* Work Details Dialog */}
          <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
            <DialogContent className="max-w-6xl p-0 overflow-hidden">
              {selectedWork && <div className="max-h-[90vh] overflow-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
                    <div className="h-full min-h-[400px] md:min-h-[500px]">
                      <img src={selectedWork.image} alt={selectedWork.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="p-6 md:p-8 h-full min-h-[400px] md:min-h-[500px] flex flex-col">
                      <span className="text-sm text-portfolio-blue font-medium capitalize">
                        {selectedWork.category === 'installation' ? 'Art Works' : selectedWork.category} • {selectedWork.year}
                      </span>
                      <h2 className="text-2xl font-serif font-bold mt-2 mb-4">{selectedWork.title}</h2>
                      
                      <ScrollArea className="flex-1 pr-4">
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedWork.description}
                        </div>
                      </ScrollArea>
                      
                      <a href={selectedWork.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue mt-6">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Download size={16} />
                          Download PDF
                        </Button>
                      </a>
                    </div>
                  </div>
                  
                  {/* Gallery Images Section */}
                  {selectedWork.galleryImages && selectedWork.galleryImages.length > 0 && <div className="border-t border-gray-200 p-6">
                      <h4 className="text-lg font-semibold mb-4">Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedWork.galleryImages.map((image, index) => <div key={index} className="aspect-square cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition-opacity" onClick={() => openGalleryImage(image, selectedWork.galleryImages!)}>
                            <img src={image} alt={`${selectedWork.title} gallery ${index + 1}`} className="w-full h-full object-contain" />
                          </div>)}
                      </div>
                    </div>}
                </div>}
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </Layout>;
};
export default Portfolio;