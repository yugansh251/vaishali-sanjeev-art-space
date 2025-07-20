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
    category: 'installation' | 'publication';
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
    description: "Vaishali Narkar and Sanjeev Khandekar, have presented a new series of works \"not Still Life\", that continues their two-decade-long exploration of ecological anxieties.\nComprising six multimedia works on canvas, this collection, primarily executed in acrylic, watercolour, and occasional oil, transcends traditional painting by incorporating and interfacing a fragmented, etched, and sandblasted glass. This innovative approach creates a visual experience of blurring, distortion, magnification, and convergence, effectively mirroring the disorienting nature of our contemporary environmental crisis.\nFor Narkar and Khandekar, the Anthropocene is more accurately understood as the Capitalocene, a term that underscores their belief that insatiable capitalist greed lies at the root of our planet's degradation.\nTheir works, therefore, delve into the complex politics embedded within the daily unfolding of environmental catastrophes, tackling issues ranging from global warming and extinction to fossil fuel dependence and genetically modified foods.\nTheir artistic practice is characterized by its versatility. Over the years, they have seamlessly transitioned between various mediums, from marble inlay and embroidery to large-scale installations and videography, always driven by their commitment to expressing their environmental concerns. This new series, however, marks a distinct departure with its integration of glass, creating a layered visual narrative that reflects the fragmented and fractured reality of our relationship with nature. The title itself, \"not Still Life\", is a deliberate play on words, a subversive twist on the traditional genre of still life painting. While still life typically depicts inanimate objects arranged for aesthetic pleasure, Narkar and Khandekar's \"not Still Life\" vehemently asserts that their focus is on the dynamic, precarious state of life itself. The word \"still,\" connoting inactivity and silence, is juxtaposed with the urgent reality of a planet in flux, creating a dark humour that underscores the gravity of the situation. Their statement, \"Not Still (life),\" emphasizes that their art is a direct reflection of the living world and our place within it. Sanjeev Khandekar's multifaceted background as a poet, writer, and avid gardener profoundly influences their collaborative work. His writings, often centred on environmental themes, and his long-standing engagement with tropical gardening, provide a rich source of inspiration. Gardening, for him, is an act of hope, a testament to the resilience of life. This personal connection to nature is evident in their another watercolour series, \"Household Roses, Lemongrass and Jasmines in the Cement Jungle of Mumbai,\" which captures the delicate beauty of nature kept alive amidst urban sprawl by the common people. In \"not Still Life\", Narkar and Khandekar have crafted a powerful visual commentary on the Capitalocene, using distorted lenses to reflect the distorted reality of our environmental crisis. Their work serves as a poignant reminder that the \"stillness\" we perceive is a dangerous illusion, and that urgent action is required to address the profound changes reshaping our world.",
    pdfLink: "https://drive.google.com/file/d/example10",
    galleryImages: ["/lovable-uploads/53aa1696-e63c-4ed2-add5-40d8a8ba7bd8.png", "/lovable-uploads/689fdfc3-04d0-4b81-8d3b-c72ca92423b3.png", "/lovable-uploads/cb7854e9-5297-4154-b0c6-8d9347b8bea3.png", "/lovable-uploads/2b8a82a6-8b2f-45d0-99fc-6bf151d63abc.png"]
  }, {
    id: 2,
    title: "Honey, I shrunk my Tongue",
    year: "2017",
    category: "installation",
    tab: "honey",
    image: "/lovable-uploads/d5f03b39-25c4-4642-8476-9a6371431261.png",
    description: "An interactive installation exploring the nature of truth and perception in contemporary society.",
    pdfLink: "https://drive.google.com/file/d/example1",
    galleryImages: ["/lovable-uploads/fb3d2ed9-5405-40dc-a36c-db400bba2816.png", "/lovable-uploads/68697f75-08be-4508-bb08-8c293644c582.png", "/lovable-uploads/dbfae489-0738-4dc8-87b4-1c0666bedd23.png", "/lovable-uploads/7851707d-7430-4786-b440-682533e18446.png", "/lovable-uploads/1abce420-e34e-4ba1-ac05-714f5f5c8656.png", "/lovable-uploads/14006748-ead5-4e14-9c8f-6b283eeca1c2.png", "/lovable-uploads/c1a93e0c-2551-485b-b5f9-a8d30835b23e.png", "/lovable-uploads/b8843983-09b9-47be-9985-c0ec3adf24c0.png", "/lovable-uploads/235926d9-632a-4b48-b293-512d9a4270c0.png", "/lovable-uploads/629bc411-445a-451b-9e76-46da081736d4.png"]
  }, {
    id: 3,
    title: "Ragamala song of Anthropocene",
    year: "2019",
    category: "installation",
    tab: "ragamala",
    image: "/lovable-uploads/4e0ca9d1-da46-454d-86d8-8a328a3b3f11.png",
    description: "A provocative exploration of environmental changes and their impact on cultural narratives.",
    pdfLink: "https://drive.google.com/file/d/example2",
    galleryImages: ["/lovable-uploads/88db819d-f4f8-4473-af2c-eb344ee66c11.png", "/lovable-uploads/998deae4-b3af-423a-a4de-843f3782ca74.png", "/lovable-uploads/97b2deb1-f75c-4ce0-a06e-bd1af8a72c1d.png", "/lovable-uploads/aed3d2ee-4bbc-4686-b055-2640984a52eb.png", "/lovable-uploads/aba91c3a-268b-4b71-a250-bc31e6bf3c86.png", "/lovable-uploads/3793a105-ebfc-447e-bff2-3dfdaaa6a552.png", "/lovable-uploads/a7f3ad5c-4281-41ca-b491-d48b5b1260e7.png", "/lovable-uploads/4e8fb196-d68c-46ec-a65c-087e374a07d3.png", "/lovable-uploads/1b2a828d-d604-443d-973a-2e1a27d7d9f3.png", "/lovable-uploads/2fbb9d4d-e115-4ab3-859b-eadd5fd9ed0a.png"]
  }, {
    id: 4,
    title: "Triumph of market",
    year: "2003",
    category: "installation",
    tab: "triumph",
    image: "/lovable-uploads/337f1345-3709-4f18-bf6d-f2fda48b4368.png",
    description: "A critical examination of late capitalism and market forces shaping contemporary society.",
    pdfLink: "https://drive.google.com/file/d/example3",
    galleryImages: ["/lovable-uploads/35204abb-322d-4efe-8e1b-f484af6ddbc1.png", "/lovable-uploads/72225803-63bf-433c-a2ed-ab81c1ca1a30.png", "/lovable-uploads/c4d0e4a3-2c7e-4ea1-9a22-35a854ac588c.png", "/lovable-uploads/7d316407-acf2-4b78-a11e-a63fe874a323.png", "/lovable-uploads/7912a760-0f0c-491c-9bb4-e5b76e60093d.png", "/lovable-uploads/66495f3a-b212-47d2-8375-3075c08bc863.png", "/lovable-uploads/3bed6638-6fb4-48e4-b1d4-573e7f4e7512.png", "/lovable-uploads/88edba5a-f260-404d-a7e2-62f1069debbb.png", "/lovable-uploads/1c1b5939-bbfd-4336-bd2a-bb90851fd3ad.png", "/lovable-uploads/30beef8c-33c0-4979-842d-6c3985cfd755.png"]
  }, {
    id: 5,
    title: "I am so angry, I made this sign",
    year: "2012",
    category: "publication",
    tab: "angry",
    image: "/lovable-uploads/b11607ac-d5b2-4cfb-80fc-04bebd3f77a3.png",
    description: "A provocative publication exploring themes of protest, expression, and the politics of anger.",
    pdfLink: "https://drive.google.com/file/d/example9",
    galleryImages: ["/lovable-uploads/bf837c31-1c23-4239-b9f4-e6ec1b8d7a9d.png", "/lovable-uploads/1c9ac1ff-bc1f-4de7-8417-21362a48c6d3.png", "/lovable-uploads/e5bee9ae-b94f-46b2-9e7c-61a9a4fb3aea.png", "/lovable-uploads/e45c502d-d713-4db7-8db7-e758427ed598.png", "/lovable-uploads/b036f9e8-7fb9-43c3-9538-8c1bf7cb65be.png", "/lovable-uploads/3b0cc10d-d36d-45d2-8ede-d949ec678eed.png", "/lovable-uploads/c8f9bae4-0288-437e-ae26-e53ee5c57418.png", "/lovable-uploads/c4c9e781-7a6b-44d4-b46d-2f14254fe294.png", "/lovable-uploads/0cdd834f-4996-4754-857d-be00a430a307.png", "/lovable-uploads/d133528e-90e3-4b59-8a28-34791fe70e8c.png"]
  }, {
    id: 6,
    title: "by gorge",
    year: "2024",
    category: "installation",
    tab: "by-gorge",
    image: "/lovable-uploads/473155fa-9c37-4d9e-bd23-ab649eefcbcc.png",
    description: "An exploration of natural formations and their impact on human perception.",
    pdfLink: "https://drive.google.com/file/d/example13",
    galleryImages: ["/lovable-uploads/473155fa-9c37-4d9e-bd23-ab649eefcbcc.png"]
  }, {
    id: 7,
    title: "Imp in the garden and other fairy tales",
    year: "2010",
    category: "publication",
    tab: "imp-in-the-garden",
    image: "/lovable-uploads/a91861a5-473b-4243-b453-d366e98b241c.png",
    description: "A collection of reimagined fairy tales that question our relationship with nature and mythology.",
    pdfLink: "https://drive.google.com/file/d/example4",
    galleryImages: ["/lovable-uploads/9f5b2043-524b-428b-bfa1-31a5f4ba713a.png", "/lovable-uploads/79e8a1a1-3e2d-404e-89a1-967a257a3788.png", "/lovable-uploads/a1cc57b8-1413-44d1-afc8-f42e5bfb39d3.png", "/lovable-uploads/d93f6096-ef32-4549-a101-fce72a9750a5.png", "/lovable-uploads/655db54e-497a-4240-a044-655fa8f34f5c.png", "/lovable-uploads/657aeb3b-06e9-4f88-bb8a-ce4cc6045d43.png", "/lovable-uploads/da39a3dc-4d24-418c-817b-47b1b51b64d1.png", "/lovable-uploads/1cd02643-590d-4308-979b-398567fd2ac9.png", "/lovable-uploads/ad5ed47c-151f-491d-884d-c8515b97737e.png", "/lovable-uploads/a3f3c915-2e01-41cd-a526-1293d0f58427.png", "/lovable-uploads/c9a5f239-44b3-431b-b796-d8b647865bc0.png", "/lovable-uploads/0e1ca16a-0c79-43af-9bef-840c0c9d8add.png", "/lovable-uploads/30e3eccd-bb6e-4e7b-bf44-7b6113de4d37.png"]
  }, {
    id: 8,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock I",
    year: "2008",
    category: "installation",
    tab: "bad-breath",
    image: "/lovable-uploads/79ce5de6-7394-4c01-9f45-995a6c9d75cf.png",
    description: "A surreal investigation into social anxieties and cinematic suspense through multimedia installation.",
    pdfLink: "https://drive.google.com/file/d/example11",
    galleryImages: ["/lovable-uploads/65d53b44-9072-4180-9127-3914fc010097.png", "/lovable-uploads/bc7a0d11-895f-497a-9aac-adc1e5c9a818.png", "/lovable-uploads/75a43fb3-d44a-49ea-a4b5-156e1d63f9b8.png", "/lovable-uploads/bebb639b-ed4f-4733-bace-014d0772084d.png", "/lovable-uploads/bedb5860-1c39-409b-998e-f052a93df528.png", "/lovable-uploads/73582b7e-295b-4682-a5ec-28740ab2daa5.png", "/lovable-uploads/5af0482a-23b8-452e-9588-a7dc60f22fb1.png", "/lovable-uploads/e8ea11fa-c807-45e6-8b5b-dbd95efa139f.png", "/lovable-uploads/9e5c1c9a-aba0-407e-9a27-a3331a155dda.png", "/lovable-uploads/7a53be69-cace-49a6-9409-35b5bd282496.png"]
  }, {
    id: 9,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock III",
    year: "2023",
    category: "installation",
    tab: "bad-breath-iii",
    image: "/lovable-uploads/456b0f58-3fce-4a4c-8150-d120ea05d919.png",
    description: "A continuation of the surreal investigation into social anxieties and cinematic suspense.",
    pdfLink: "https://drive.google.com/file/d/example14",
    galleryImages: ["/lovable-uploads/456b0f58-3fce-4a4c-8150-d120ea05d919.png"]
  }, {
    id: 15,
    title: "Acquire, Merge or Collaborate...!",
    year: "2011",
    category: "publication",
    tab: "acquire-merge",
    image: "/lovable-uploads/25c3eedf-5270-4e68-b77c-565421716d09.png",
    description: "An exploration of corporate language and collaborative practices in the contemporary art world.",
    pdfLink: "https://drive.google.com/file/d/example5",
    galleryImages: ["/lovable-uploads/1bbf09c9-ecef-4bc8-8a86-9ece6f65398a.png", "/lovable-uploads/18158514-d4ff-45c2-825a-e3d561ef1722.png", "/lovable-uploads/e3dc8223-1ae9-43cb-811c-e11d855dae11.png", "/lovable-uploads/3a3fcdaa-f4d9-4cf5-adf5-3a7ff20f0346.png", "/lovable-uploads/12e19b04-0ae1-496e-b72d-e86f0e25ff65.png"]
  }, {
    id: 10,
    title: "What do I love when I love you, my God",
    year: "2023",
    category: "installation",
    tab: "bad-breath-iii",
    image: "/lovable-uploads/456b0f58-3fce-4a4c-8150-d120ea05d919.png",
    description: "A continuation of the surreal investigation into social anxieties and cinematic suspense.",
    pdfLink: "https://drive.google.com/file/d/example14",
    galleryImages: ["/lovable-uploads/456b0f58-3fce-4a4c-8150-d120ea05d919.png"]
  }, {
    id: 10,
    title: "What do I love when I love you, my God",
    year: "2006",
    category: "installation",
    tab: "what-do-i-love",
    image: "/lovable-uploads/c2c372a6-45a1-4e66-ade2-71fa4e2ad07b.png",
    description: "A spiritual exploration of love, devotion, and the divine through multimedia elements.",
    pdfLink: "https://drive.google.com/file/d/example6",
    galleryImages: ["/lovable-uploads/2f7d6175-ee60-4d18-be20-a27258f97671.png", "/lovable-uploads/8350fb86-e421-4443-9eca-f640c9c33a13.png", "/lovable-uploads/9f8d9411-985c-443e-b608-68d9d6efe9c2.png", "/lovable-uploads/6c6585ff-1693-41ef-97fb-15f25476b883.png", "/lovable-uploads/7488508b-8ed8-475f-8168-9639939d413d.png", "/lovable-uploads/81d0dad3-8a0e-4691-b3e7-e0b4c054b708.png", "/lovable-uploads/3a3c485e-8d49-41ad-ad03-78f428071ba6.png", "/lovable-uploads/5252a848-fa9c-4e1d-93af-e482bda6be65.png", "/lovable-uploads/2cdcfd33-699e-4dc8-ad3b-fee502d64469.png", "/lovable-uploads/5f4e7d8c-daae-4936-a127-576ab3bb3b1b.png", "/lovable-uploads/31928965-9efa-44bb-b005-76006cc0afef.png", "/lovable-uploads/99ad75dc-7b9c-48c9-baba-81bfd3c960e2.png"]
  }, {
    id: 11,
    title: "la peau de chagrin (who is afraid of shrinking skin)",
    year: "2005",
    category: "installation",
    tab: "peau-de-chagrin",
    image: "/lovable-uploads/2c628a6f-49d2-4fd2-a7c9-2794d5c6dc6c.png",
    description: "A meditation on aging, vanity, and the passage of time inspired by Balzac's literary work.",
    pdfLink: "https://drive.google.com/file/d/example12",
    galleryImages: ["/lovable-uploads/9c9b9bfd-dbb3-484a-baa5-3d2ed18b5dda.png", "/lovable-uploads/38c6fa43-c446-48b1-9e3a-986fe9d70eed.png", "/lovable-uploads/9f42976c-de88-4a88-b11a-151fc34fa2c4.png", "/lovable-uploads/d331a953-4a1e-4fd4-aaf5-6d0265740ee2.png", "/lovable-uploads/4ae1d5fc-524f-4d96-8d35-8c8104cda10d.png", "/lovable-uploads/0e6b1aa7-e585-4ee5-bf7e-4f76ac15732c.png", "/lovable-uploads/6ed957a0-eef9-4ea0-8ead-354080331d15.png", "/lovable-uploads/b3159f35-952c-41a1-a65f-ee76a735682f.png", "/lovable-uploads/96e9892a-c368-4cff-a731-bb1cddd7459d.png", "/lovable-uploads/f89125dd-f991-4ddd-9d2c-356a687d15cf.png", "/lovable-uploads/f352d503-46f3-4f26-9a1d-f8c8e539fbf1.png", "/lovable-uploads/9c39a54d-8d5c-4e1e-988b-1b3bd3d1b739.png", "/lovable-uploads/bdf24ba5-5056-4fb7-bc40-81b785213b13.png", "/lovable-uploads/07215d40-3644-4fc8-ad49-65885054a025.png", "/lovable-uploads/b346acf0-9313-41fc-b40a-2aed13db28d2.png", "/lovable-uploads/89a92525-033b-44e4-b5d1-fb66311eea92.png", "/lovable-uploads/097e2871-764c-4f58-a09e-49582300e79c.png", "/lovable-uploads/f8dd84cc-637c-47b1-81e4-0d7183db1d92.png"]
  }, {
    id: 12,
    title: "Tits Clits n Elephant Dick",
    year: "2022",
    category: "installation",
    tab: "tits-clits-elephant-dick",
    image: "/lovable-uploads/4a7337fb-450a-4399-aff8-48ad13210fac.png",
    description: "A provocative exploration of sexuality, identity, and societal taboos through multimedia art.",
    pdfLink: "https://drive.google.com/file/d/example15",
    galleryImages: ["/lovable-uploads/4a7337fb-450a-4399-aff8-48ad13210fac.png"]
  }, {
    id: 13,
    title: "Kegel exercise",
    year: "2007",
    category: "installation",
    tab: "kegel-exercise",
    image: "/lovable-uploads/36aacf01-310c-41d2-b778-7460f45bec1a.png",
    description: "An installation connecting traditional practices with contemporary body awareness and control.",
    pdfLink: "https://drive.google.com/file/d/example7",
    galleryImages: ["/lovable-uploads/3efc3c4b-25e0-440f-a6ca-fa7eeca4e1cf.png", "/lovable-uploads/aa70c8e7-f5c9-4679-9106-66b19d520666.png", "/lovable-uploads/c083ad26-b3f4-4f9c-82f6-a70c40ecf9e1.png", "/lovable-uploads/a27a7482-d9bf-44af-a451-0a4c96c1c1a7.png", "/lovable-uploads/f9277a79-2790-490d-8ad3-a2669171be9a.png", "/lovable-uploads/c8547811-e08c-49f9-8075-774b011d7cc0.png", "/lovable-uploads/856a72e7-7684-4fe3-ba79-1e0262729219.png", "/lovable-uploads/29dc11f4-2ea3-4364-9698-63d819f72d74.png", "/lovable-uploads/b74a9022-ad8a-406f-8ccb-f3804d75a0ab.png", "/lovable-uploads/13663bf7-3117-4631-b565-6eca71516167.png"]
  }, {
    id: 14,
    title: "All that I wanna do",
    year: "2005",
    category: "installation",
    tab: "all-that-i-wanna-do",
    image: "/lovable-uploads/650c0882-fe96-42f9-8efb-5acc29ceca1f.png",
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
                            {work.category === 'installation' ? 'Art Works' : work.category} • {work.year}
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
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{selectedWork.description}</p>
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
