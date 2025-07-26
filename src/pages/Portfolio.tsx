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
    galleryImages: ["/lovable-uploads/a9323ad9-d4a1-4ba9-b0c9-c40b84b992bc.png", "/lovable-uploads/c830c14f-0d1f-4b96-95c6-f08a295b15c2.png", "/lovable-uploads/883bd5af-30be-4b05-a1c9-fac9e9175687.png", "/lovable-uploads/e3a33e56-232e-413f-ba9d-ee1fa28cb9b7.png", "/lovable-uploads/c49dca00-cac2-4717-a92c-2eae0c0b2416.png", "/lovable-uploads/91f65cd2-5cab-4865-acc5-cb2d90e99255.png", "/lovable-uploads/5b41c3ba-2292-4346-bfe1-ac395acc81b3.png", "/lovable-uploads/4b701644-3308-463d-8498-c9e80ddcd2d0.png", "/lovable-uploads/460cbdc6-22a7-4797-aa64-65154f278cc6.png", "/lovable-uploads/6dad66be-8cd2-476c-851b-83a1ccca0f93.png", "/lovable-uploads/026660fd-72da-4fd4-9842-053113326a24.png"]
  }, {
    id: 3,
    title: "Ragamala song of Anthropocene",
    year: "2019",
    category: "installation",
    tab: "ragamala",
    image: "/lovable-uploads/4e1daee6-d911-4bd7-9f32-f3cfb6cf7fcc.png",
    description: "\"Ragmala - The Songs Of Anthropocene\" is a series of embroideries that delve into the profound impact of the Anthropocene era. These works explore themes of environmental degradation, free economy, and the changing Earth. They serve as a visual response to the \"new music\" of our planet, born from geological shifts and the alarming loss of species. By connecting with the historical practice of Ragmala paintings, these embroideries decode the hidden messages within Earth's evolving sounds, transforming traditional iconography to reflect our altered world.",
    pdfLink: "https://drive.google.com/file/d/example2",
    galleryImages: ["/lovable-uploads/7f20ed4b-2581-4721-957e-78e40226ce49.png", "/lovable-uploads/db834c45-f4ea-448c-a063-dab8fcafcf1f.png", "/lovable-uploads/9eac1a0e-c569-4205-bd68-831a76f6a1f1.png", "/lovable-uploads/18f31a19-b97d-4fdc-bed1-04b29e8e305c.png", "/lovable-uploads/b6cd1319-2845-4116-b4df-20a2b3686811.png", "/lovable-uploads/5cf01c45-3c40-4035-9744-635f036b9518.png", "/lovable-uploads/487379aa-f2f5-4745-9507-a7d40817f999.png", "/lovable-uploads/38c24930-2f08-497b-b61c-46dd090e9e52.png", "/lovable-uploads/0770ec45-a8fe-4a87-aa0a-4ce2b6347e17.png", "/lovable-uploads/975353f7-0c88-4973-92a5-dcd29cfbb34b.png", "/lovable-uploads/c9a9513b-faac-4212-8d7b-2c90ff47321d.png", "/lovable-uploads/af2ae132-313c-4fb2-9452-4df3e3b84b53.png", "/lovable-uploads/cd046d91-5e26-43d0-84d6-b6f5e5db832f.png", "/lovable-uploads/91dd55a8-08dc-4e0c-8f2e-cb8a5b6907f2.png", "/lovable-uploads/8210ed97-acfb-4988-9cbd-8d76c8b623e2.png"]
  }, {
    id: 4,
    title: "Triumph of market",
    year: "2003",
    category: "installation",
    tab: "triumph",
    image: "/lovable-uploads/4e7bef34-8e17-4669-98b1-6f322daf9352.png",
    description: "Long before Yale University's research on hormonal fluctuations in men and women engaged in stock market trading, Sanjeev Khandekar was already probing this terrain through his art. In his poetry and water colors, Khandekar pioneered a distinctive visual and conceptual vocabulary ‚using financial capital as both symbol and structure to map the shifting contours of contemporary global society.\nIn their collaborative works, Vaishali and Sanjeev Khandekar extend this exploration further. Their acrylic-on-canvas paintings and intricate marble inlay pieces transform stock market imagery into abstracted 'Moneyscapes'.These works fuse aesthetic innovation with social critique, confronting the ways in which financialization ‚once a tool- has become a dominating, often destructive, force.\nThe artists employ the stock market ticker- ubiquitous, frenetic, and laden with meaning-alongside the traditionally opulent medium of marble inlay, re-contextualizing both to unveil the intimate entanglements of trading, desire, and the normalization of excess in late-capitalist culture.",
    pdfLink: "https://drive.google.com/file/d/example3",
    galleryImages: ["/lovable-uploads/33ff03c3-ccae-4291-8334-69142df938b8.png", "/lovable-uploads/d8e91d54-1e37-4ce5-866e-3f4a05181bda.png", "/lovable-uploads/35fe502a-670c-47bf-b361-911356c1b1b6.png", "/lovable-uploads/86ea1bbe-89cd-4a23-8665-f499b7eea521.png", "/lovable-uploads/a1987850-5d5a-4ab6-9882-89d0e3d69505.png", "/lovable-uploads/9c9ba9b0-4826-4586-b180-ccb32e8f86a9.png", "/lovable-uploads/8b6dc1c0-5afb-4a8b-bcb1-275ed7fcf638.png", "/lovable-uploads/d1006d1c-40fa-403c-895a-2b94fee2e0de.png", "/lovable-uploads/1c09e774-aa00-4096-b31c-dba74a35f642.png", "/lovable-uploads/cc24a0ed-205e-415b-a4f0-161793ad823e.png", "/lovable-uploads/a998fa3a-218d-4192-9517-1844088f2761.png", "/lovable-uploads/80f0776a-0e43-447a-8339-fec0ed0fd068.png"]
  }, {
    id: 5,
    title: "I am so angry, I made this sign",
    year: "2012",
    category: "publication",
    tab: "angry",
    image: "/lovable-uploads/8b08c4ea-c9a1-4a8a-83b6-1ce3fbf9dd46.png",
    description: "Set against Chennai‚ Marina Beach, ‚\"I'm So Angry, I Made This Sign\"‚ by Vaishali & Sanjeev transforms a protest phrase into a vast, immersive installation.\nStretching across 1.5 km, the work uses flags, bamboo, terracotta, and glowing ceramics to evoke both rage and reflection.\nBorrowed from a 2011 Occupy Wall Street placard, the phrase becomes a mass chorus of dissent and irony.\nBy repeating this line across thousands of fluttering signs, the artists stage a meditation on protest, emotion, and spectacle.\nThe installation blurs sincerity and satire, inviting public engagement while critiquing the aesthetics of outrage. Its glowing elements at night turn protest into a dreamlike vigil, a field of quiet resistance. Referencing thinkers like Žižek , the work questions whether expressive anger can truly disrupt power.\nMore than a political act, it is a haunting, poetic gesture ‚ fragile, fleeting, yet impossible to ignore.",
    pdfLink: "https://drive.google.com/file/d/example9",
    galleryImages: ["/lovable-uploads/bf837c31-1c23-4239-b9f4-e6ec1b8d7a9d.png", "/lovable-uploads/1c9ac1ff-bc1f-4de7-8417-21362a48c6d3.png", "/lovable-uploads/e5bee9ae-b94f-46b2-9e7c-61a9a4fb3aea.png", "/lovable-uploads/e45c502d-d713-4db7-8db7-e758427ed598.png", "/lovable-uploads/b036f9e8-7fb9-43c3-9538-8c1bf7cb65be.png", "/lovable-uploads/3b0cc10d-d36d-45d2-8ede-d949ec678eed.png", "/lovable-uploads/c8f9bae4-0288-437e-ae26-e53ee5c57418.png", "/lovable-uploads/c4c9e781-7a6b-44d4-b46d-2f14254fe294.png", "/lovable-uploads/0cdd834f-4996-4754-857d-be00a430a307.png", "/lovable-uploads/d133528e-90e3-4b59-8a28-34791fe70e8c.png"]
  }, {
    id: 6,
    title: "by gorge",
    year: "2024",
    category: "installation",
    tab: "by-gorge",
    image: "/lovable-uploads/4bb13448-46c8-4540-b4a9-6cc301abb3fa.png",
    description: "' By George '  (2008)\nCurated by Gitanjali Dang and featuring works by Vaishali Narkar & Sanjeev Khandekar, By George explores the creeping omnipresence of surveillance in contemporary life. Drawing from Orwellian allegories and real-world digital paranoia, the show interrogates how the gaze—technological, institutional, and social—shapes our subjectivities. With references ranging from Jeremy Bentham to Mark Zuckerberg, the works deploy mixed media and sandblasted glass to stage questions of privacy, perception, and power. Originally exhibited in 2008, the show remains uncannily prescient.\nHere, transparency is seductive, and observation is never neutral.\nWe are seen. We see.\nAnd nothing remains quite the same.",
    pdfLink: "https://drive.google.com/file/d/example13",
    galleryImages: ["/lovable-uploads/473155fa-9c37-4d9e-bd23-ab649eefcbcc.png"]
  }, {
    id: 7,
    title: "Imp in the garden and other fairy tales",
    year: "2010",
    category: "publication",
    tab: "imp-in-the-garden",
    image: "/lovable-uploads/d62b2b77-ccc9-41ac-af51-d432713d2bad.png",
    description: "Histograms of an Anxious Present: 'Imp in the Garden and Other Fairy Tales'\nAll of us inherently seek a sense of everyday normality to navigate life's demands. Yet, perfection, beauty, and even horror represent hazardous departures from this norm, capable of plunging us into fantasia or nightmare. Vaishali & Sanjeev confront these extremes head-on in their mixed-media works, 'Imp in the Garden and Other Fairy Tales', creating captivating entanglements of beauty and mutancy. Through the traditional art of embroidery, they weave intricate narratives that allude to the human costs of ecological catastrophe, genetic manipulation, and biological warfare. Their work serves as a Zen koan, shocking us into a deep awareness of the complexities underlying our current historical moment.",
    pdfLink: "https://drive.google.com/file/d/example4",
    galleryImages: ["/lovable-uploads/9f5b2043-524b-428b-bfa1-31a5f4ba713a.png", "/lovable-uploads/79e8a1a1-3e2d-404e-89a1-967a257a3788.png", "/lovable-uploads/a1cc57b8-1413-44d1-afc8-f42e5bfb39d3.png", "/lovable-uploads/d93f6096-ef32-4549-a101-fce72a9750a5.png", "/lovable-uploads/655db54e-497a-4240-a044-655fa8f34f5c.png", "/lovable-uploads/657aeb3b-06e9-4f88-bb8a-ce4cc6045d43.png", "/lovable-uploads/da39a3dc-4d24-418c-817b-47b1b51b64d1.png", "/lovable-uploads/1cd02643-590d-4308-979b-398567fd2ac9.png", "/lovable-uploads/ad5ed47c-151f-491d-884d-c8515b97737e.png", "/lovable-uploads/a3f3c915-2e01-41cd-a526-1293d0f58427.png", "/lovable-uploads/c9a5f239-44b3-431b-b796-d8b647865bc0.png", "/lovable-uploads/0e1ca16a-0c79-43af-9bef-840c0c9d8add.png", "/lovable-uploads/30e3eccd-bb6e-4e7b-bf44-7b6113de4d37.png"]
  }, {
    id: 8,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock I",
    year: "2008",
    category: "installation",
    tab: "bad-breath",
    image: "/lovable-uploads/96cd1cd0-9b23-4ccd-90e2-d498e501aa93.png",
    description: "This spectacular show of paintings and a sculpture deftly tackles pressing global issues by weaving together critical crises and widely circulated memes ( common societal narratives, cultural references, and popular understandings ) to construct powerful visual arguments. In his exhibition, \"Everything You Ever Wanted to Know about Bad Breath but were Afraid to Ask Alfred Hitchcock (Part I)\", the elegant white test tube orchid is employed as a central motif. These tissue cultured orchids symbolize the broader challenges of environmental degradation and the complex dilemmas arising from the genetic modification of organisms. Through a fusion of contentious subject matter and noir cinema aesthetics, Khandekar creates a captivating and thought-provoking experience, akin to a perfect double bill for the discerning viewer.",
    pdfLink: "https://drive.google.com/file/d/example11",
    galleryImages: ["/lovable-uploads/65d53b44-9072-4180-9127-3914fc010097.png", "/lovable-uploads/bc7a0d11-895f-497a-9aac-adc1e5c9a818.png", "/lovable-uploads/75a43fb3-d44a-49ea-a4b5-156e1d63f9b8.png", "/lovable-uploads/bebb639b-ed4f-4733-bace-014d0772084d.png", "/lovable-uploads/bedb5860-1c39-409b-998e-f052a93df528.png", "/lovable-uploads/73582b7e-295b-4682-a5ec-28740ab2daa5.png", "/lovable-uploads/5af0482a-23b8-452e-9588-a7dc60f22fb1.png", "/lovable-uploads/e8ea11fa-c807-45e6-8b5b-dbd95efa139f.png", "/lovable-uploads/9e5c1c9a-aba0-407e-9a27-a3331a155dda.png", "/lovable-uploads/7a53be69-cace-49a6-9409-35b5bd282496.png"]
  }, {
    id: 9,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock III",
    year: "2010",
    category: "installation",
    tab: "bad-breath-iii",
    image: "/lovable-uploads/079476cf-8bc6-43b6-bd37-4b829527ba34.png",
    description: "Everything You Wanted to Know About (Your) Bad Breath, but Were Afraid to Ask Alfred Hitchcock  III\nIn this ongoing series, Vaishali and Sanjeev confront the ecological violence of capitalism.\nA recurring motif—the refrigerator—embodies frozen nature and unchecked consumerist greed.\nTheir sculptural refrigerator doors bear images of drought, mangroves, coral, and protest, tracing systemic ruin.\nThe works reflect a world cooling its interiors while burning its commons.\nThis is the Necrocene: capital as extinction event.",
    pdfLink: "https://drive.google.com/file/d/example14",
    galleryImages: ["/lovable-uploads/456b0f58-3fce-4a4c-8150-d120ea05d919.png"]
  }, {
    id: 10,
    title: "Acquire, Merge or Collaborate...!",
    year: "2011",
    category: "publication",
    tab: "acquire-merge",
    image: "/lovable-uploads/358afbc9-c4e1-427f-a622-e73021db9465.png",
    description: "Long before Yale University published its findings on hormonal changes in men and women actively involved in stock market investments, Sanjeev Khandekar was already exploring this intersection through his art. In his poems and watercolours, he had pioneered a unique imagery of financial capital, using it as a motif to depict the evolving landscape of contemporary global societies.\nVaishali & Sanjeev 's  acrylic-on-canvas paintings, including the series \"acquire, merge or collaborate\"(2007)  and subsequent \"triumph of market\" series of works, visually integrate stock market motifs onto further abstracted electronic microscopic images of internal body organs. The exhibition also featured a significant installation titled \"time pass,\" which offered a satirical commentary on how market forces influence various aspects of life, from relationships and spirituality to consumerism.",
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
    description: "\"La Peau de Chagrin\": An Exploration of Reality. ( 2005 ) \nThis installation, \"La Peau de Chagrin\" (Who is afraid of shrinking skin) Is an  extraordinary work that challenged notions of virtual reality by employing hundreds of mirrors as a ceiling, creating an infinite vertical space filled with numerous sculptures.\nThe installation served as a portrait of contemporary life, depicting an artist perpetually in motion, driving a \"turbo engine\" to traverse the globe. Its evocative title was drawn from Honoré de Balzac's renowned novel, a work that famously captivated Sigmund Freud in his final months.\nA striking and unique feature of \"La Peau de Chagrin\" was the presence of approximately 20,000 tiny insect sculptures seemingly crawling across the walls. These walls were intricately designed with hundreds of holes, as if meticulously crafted by the very insects themselves.\n( to read essays by Abhay Sardesai and Kumar Ketkar please download the pdf )",
    pdfLink: "https://drive.google.com/file/d/example12",
    galleryImages: ["/lovable-uploads/9c9b9bfd-dbb3-484a-baa5-3d2ed18b5dda.png", "/lovable-uploads/38c6fa43-c446-48b1-9e3a-986fe9d70eed.png", "/lovable-uploads/9f42976c-de88-4a88-b11a-151fc34fa2c4.png", "/lovable-uploads/d331a953-4a1e-4fd4-aaf5-6d0265740ee2.png", "/lovable-uploads/4ae1d5fc-524f-4d96-8d35-8c8104cda10d.png", "/lovable-uploads/0e6b1aa7-e585-4ee5-bf7e-4f76ac15732c.png", "/lovable-uploads/6ed957a0-eef9-4ea0-8ead-354080331d15.png", "/lovable-uploads/b3159f35-952c-41a1-a65f-ee76a735682f.png", "/lovable-uploads/96e9892a-c368-4cff-a731-bb1cddd7459d.png", "/lovable-uploads/f89125dd-f991-4ddd-9d2c-356a687d15cf.png", "/lovable-uploads/f352d503-46f3-4f26-9a1d-f8c8e539fbf1.png", "/lovable-uploads/9c39a54d-8d5c-4e1e-988b-1b3bd3d1b739.png", "/lovable-uploads/bdf24ba5-5056-4fb7-bc40-81b785213b13.png", "/lovable-uploads/07215d40-3644-4fc8-ad49-65885054a025.png", "/lovable-uploads/b346acf0-9313-41fc-b40a-2aed13db28d2.png", "/lovable-uploads/89a92525-033b-44e4-b5d1-fb66311eea92.png", "/lovable-uploads/097e2871-764c-4f58-a09e-49582300e79c.png", "/lovable-uploads/f8dd84cc-637c-47b1-81e4-0d7183db1d92.png"]
  }, {
    id: 13,
    title: "Tits Clits n Elephant Dick",
    year: "2022",
    category: "installation",
    tab: "tits-clits-elephant-dick",
    image: "/lovable-uploads/8df44c5d-384c-4688-910b-1ac57b0e8e93.png",
    description: "Ideology of the Market\nIn today's market-driven world, sex has outpaced traditional ideologies, seeking new meanings amidst gadgets, pleasure, and utility.\nHappiness has become pleasure; relationships reduced to networking.\nThis shift leaves us in a strange existential limbo, where neither science nor art can fully grasp the change.\nVaishali Narkar and Sanjeev Khandekar explore this crisis through daring, thought-provoking installations.\nTheir work challenges us to question, rather than accept.\nIn doing so, they probe a mystery deeper than body—rooted in the mind.",
    pdfLink: "https://drive.google.com/file/d/example15",
    galleryImages: ["/lovable-uploads/103a15e5-907d-451d-8bb3-292e60874acc.png", "/lovable-uploads/42a70101-86d3-4056-8dc4-a6d4242cf3c8.png", "/lovable-uploads/febe5c60-1901-4071-b1d7-5ddf2fd74113.png", "/lovable-uploads/52e30f1c-726d-4360-a363-8dd8dcab9410.png", "/lovable-uploads/c8ea21cb-7679-4303-8d16-8127fe4c85c0.png", "/lovable-uploads/d6743159-f7da-4cd8-a743-0ef1e7ebec70.png", "/lovable-uploads/3d92acb9-ab8c-4a40-a1f5-b6f24b5cf36b.png", "/lovable-uploads/161d1c3d-1363-4d04-bbd4-59e8b9ceb537.png", "/lovable-uploads/43f2752c-82c9-4385-8f12-ee11dcb8d7ea.png", "/lovable-uploads/65337fcd-9cdf-4eda-acd6-2670bc685715.png", "/lovable-uploads/a5ce2828-9881-42cf-a2f8-9222d5ff061b.png", "/lovable-uploads/36eabf1f-00c8-4eb7-a51c-3da23abf9466.png", "/lovable-uploads/078ec730-fa98-4435-8b79-222f21d78231.png", "/lovable-uploads/09b55fa7-d2c9-42b0-833b-c1383b6c984d.png", "/lovable-uploads/37b34952-0959-49fe-9291-0c588030056e.png", "/lovable-uploads/f9317439-7f4f-4582-b8f3-076af30e33d0.png"]
  }, {
    id: 14,
    title: "Kegel exercise",
    year: "2007",
    category: "installation",
    tab: "kegel-exercise",
    image: "/lovable-uploads/1deba9e5-600c-43bc-9f37-88056fb2a2ff.png",
    description: "The exhibition, \"The Kegel Exercises: Aswani Mudra,\" (2007)  delves into the unsettling realities of late multicultural capitalism, where the idealism gives way to the follies of recklessness and petulance. Through a powerful confluence of art and societal critique, it explores how the relentless pursuit of financialization morphs into a destructive force. The show is an example of the use of the ubiquitous stock market ticker and the unique and intricate medium of marble inlay as potent symbols, demonstrating how the artists harnesse them to expose the interwoven dramas of trading, sexuality, and the unsettling normalization of insatiable  desires in our contemporary world.\n\n( Download pdf to read an essay by Gitanjali Dang)",
    pdfLink: "https://drive.google.com/file/d/example7",
    galleryImages: ["/lovable-uploads/3efc3c4b-25e0-440f-a6ca-fa7eeca4e1cf.png", "/lovable-uploads/aa70c8e7-f5c9-4679-9106-66b19d520666.png", "/lovable-uploads/c083ad26-b3f4-4f9c-82f6-a70c40ecf9e1.png", "/lovable-uploads/a27a7482-d9bf-44af-a451-0a4c96c1c1a7.png", "/lovable-uploads/f9277a79-2790-490d-8ad3-a2669171be9a.png", "/lovable-uploads/c8547811-e08c-49f9-8075-774b011d7cc0.png", "/lovable-uploads/856a72e7-7684-4fe3-ba79-1e0262729219.png", "/lovable-uploads/29dc11f4-2ea3-4364-9698-63d819f72d74.png", "/lovable-uploads/b74a9022-ad8a-406f-8ccb-f3804d75a0ab.png", "/lovable-uploads/13663bf7-3117-4631-b565-6eca71516167.png"]
  }, {
    id: 15,
    title: "All that I wanna do",
    year: "2005",
    category: "previous",
    tab: "all-that-i-wanna-do",
    image: "/lovable-uploads/f7f18ae0-9713-40a3-b7e0-1db832fa7509.png",
    description: "\"All That I Wanna Do,\" a massive and exceptionally large installation from 2005, featured hundreds of sculptures and large mirrors to craft an infinite horizontal space. This visually striking display offered a kaleidoscopic perspective of objects, creating a mysterious and captivating experience.\nArtists Vaishali and Sanjeev created a poignant portrait of contemporary man alienated from himself, entangled in an unquenchable web of surplus desires. The installation's title, borrowed from a long poem written by Sanjeev in the same year, is considered a milestone in Marathi poetry. A particularly striking element of the installation was its novel use of stock market ticker tape imagery.\n\n( to read essays by Abhay Sardesai and Kumar Ketkar please download the pdf )",
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