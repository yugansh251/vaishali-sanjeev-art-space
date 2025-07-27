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

  const works: Work[] = [{
    id: 1,
    title: "'not Still Life'",
    year: "2025",
    category: "installation",
    tab: "not-still-life",
    image: "/lovable-uploads/fb1b2917-ec0f-4359-a331-fd91151e5c18.png",
    description: "'not Still Life'\n\nIn this new series, Vaishali Narkar and Sanjeev Khandekar confront ecological collapse through six multimedia works.\n\nBlending acrylic, watercolour, oil, and etched glass, the pieces distort and fragment vision‚Äîmirroring environmental disarray.\nThe artists critique the CapitalOne, revealing how capitalist greed underpins ecological destruction.\n\nGlass surfaces blur the line between art and urgency, between beauty and breakdown.\nA dark pun on the genre, not Still Life resists stasis, insisting life is anything but still.\nIt is a call to see, and to act, before stillness becomes silence.",
    pdfLink: "/pdfs/not-still-life.pdf",
    galleryImages: ["/lovable-uploads/ad84b9d8-e465-420c-a01f-53b2b7f96f48.png", "/lovable-uploads/f86bf603-4eb8-49c5-96ec-4d7294bcc2f3.png", "/lovable-uploads/589924fb-06ce-4371-9ca2-7c1b8205f1e0.png"]
  }, {
    id: 2,
    title: "Honey, I shrunk my Tongue",
    year: "2024",
    category: "installation",
    tab: "honey",
    image: "/lovable-uploads/f50d6400-2aa7-4746-91b2-c20ea760f4c5.png",
    description: "\"Honey, I Shrunk My Tongue\" is a site-specific ceramic installation exploring the profound versatility of the tongue. From solitary forms to a multitude, these objects weave a visual poem, deciphering the enigma of language itself. The artwork invites a journey into this mysterious organ, a voice that embodies good and bad, freedom and constraint. It's a meditation on the tongue as a word, a language, and the very essence of free expression.",
    pdfLink: "/pdfs/honey-i-shrunk-my-tongue.pdf",
    galleryImages: ["/lovable-uploads/a9323ad9-d4a1-4ba9-b0c9-c40b84b992bc.png", "/lovable-uploads/c830c14f-0d1f-4b96-95c6-f08a295b15c2.png", "/lovable-uploads/883bd5af-30be-4b05-a1c9-fac9e9175687.png", "/lovable-uploads/e3a33e56-232e-413f-ba9d-ee1fa28cb9b7.png", "/lovable-uploads/c49dca00-cac2-4717-a92c-2eae0c0b2416.png", "/lovable-uploads/91f65cd2-5cab-4865-acc5-cb2d90e99255.png", "/lovable-uploads/5b41c3ba-2292-4346-bfe1-ac395acc81b3.png", "/lovable-uploads/4b701644-3308-463d-8498-c9e80ddcd2d0.png", "/lovable-uploads/460cbdc6-22a7-4797-aa64-65154f278cc6.png", "/lovable-uploads/6dad66be-8cd2-476c-851b-83a1ccca0f93.png", "/lovable-uploads/026660fd-72da-4fd4-9842-053113326a24.png"]
  }, {
    id: 3,
    title: "Ragmala song of Anthropocene",
    year: "2018",
    category: "installation",
    tab: "ragamala",
    image: "/lovable-uploads/6ed4ab63-954b-4aea-87c7-b4e863a4aca7.png",
    description: "\"Ragmala - The Songs Of Anthropocene\" is a series of embroideries that delve into the profound impact of the Anthropocene era. These works explore themes of environmental degradation, free economy, and the changing Earth. They serve as a visual response to the \"new music\" of our planet, born from geological shifts and the alarming loss of species. By connecting with the historical practice of Ragmala paintings, these embroideries decode the hidden messages within Earth's evolving sounds, transforming traditional iconography to reflect our altered world.",
    pdfLink: "/pdfs/ragmala-song-of-anthropocene.pdf",
    galleryImages: ["/lovable-uploads/7f20ed4b-2581-4721-957e-78e40226ce49.png", "/lovable-uploads/db834c45-f4ea-448c-a063-dab8fcafcf1f.png", "/lovable-uploads/9eac1a0e-c569-4205-bd68-831a76f6a1f1.png", "/lovable-uploads/18f31a19-b97d-4fdc-bed1-04b29e8e305c.png", "/lovable-uploads/b6cd1319-2845-4116-b4df-20a2b3686811.png", "/lovable-uploads/5cf01c45-3c40-4035-9744-635f036b9518.png", "/lovable-uploads/487379aa-f2f5-4745-9507-a7d40817f999.png", "/lovable-uploads/38c24930-2f08-497b-b61c-46dd090e9e52.png", "/lovable-uploads/0770ec45-a8fe-4a87-aa0a-4ce2b6347e17.png", "/lovable-uploads/975353f7-0c88-4973-92a5-dcd29cfbb34b.png", "/lovable-uploads/c9a9513b-faac-4212-8d7b-2c90ff47321d.png", "/lovable-uploads/af2ae132-313c-4fb2-9452-4df3e3b84b53.png", "/lovable-uploads/cd046d91-5e26-43d0-84d6-b6f5e5db832f.png", "/lovable-uploads/91dd55a8-08dc-4e0c-8f2e-cb8a5b6907f2.png", "/lovable-uploads/8210ed97-acfb-4988-9cbd-8d76c8b623e2.png"]
  }, {
    id: 4,
    title: "Triumph of market",
    year: "2008",
    category: "installation",
    tab: "triumph",
    image: "/lovable-uploads/0961b586-5aca-42d8-89eb-63fa92309a7f.png",
    description: "Long before Yale University's research on hormonal fluctuations in men and women engaged in stock market trading, Sanjeev Khandekar was already probing this terrain through his art. In his poetry and water colors, Khandekar pioneered a distinctive visual and conceptual vocabulary ‚using financial capital as both symbol and structure to map the shifting contours of contemporary global society.\nIn their collaborative works, Vaishali and Sanjeev Khandekar extend this exploration further. Their acrylic-on-canvas paintings and intricate marble inlay pieces transform stock market imagery into abstracted 'Moneyscapes'.These works fuse aesthetic innovation with social critique, confronting the ways in which financialization ‚once a tool- has become a dominating, often destructive, force.\nThe artists employ the stock market ticker- ubiquitous, frenetic, and laden with meaning-alongside the traditionally opulent medium of marble inlay, re-contextualizing both to unveil the intimate entanglements of trading, desire, and the normalization of excess in late-capitalist culture.",
    pdfLink: "/pdfs/triumph-of-market.pdf",
    galleryImages: ["/lovable-uploads/33ff03c3-ccae-4291-8334-69142df938b8.png", "/lovable-uploads/d8e91d54-1e37-4ce5-866e-3f4a05181bda.png", "/lovable-uploads/35fe502a-670c-47bf-b361-911356c1b1b6.png", "/lovable-uploads/86ea1bbe-89cd-4a23-8665-f499b7eea521.png", "/lovable-uploads/a1987850-5d5a-4ab6-9882-89d0e3d69505.png", "/lovable-uploads/9c9ba9b0-4826-4586-b180-ccb32e8f86a9.png", "/lovable-uploads/8b6dc1c0-5afb-4a8b-bcb1-275ed7fcf638.png", "/lovable-uploads/d1006d1c-40fa-403c-895a-2b94fee2e0de.png", "/lovable-uploads/1c09e774-aa00-4096-b31c-dba74a35f642.png", "/lovable-uploads/cc24a0ed-205e-415b-a4f0-161793ad823e.png", "/lovable-uploads/a998fa3a-218d-4192-9517-1844088f2761.png", "/lovable-uploads/80f0776a-0e43-447a-8339-fec0ed0fd068.png"]
  }, {
    id: 5,
    title: "I am so angry, I made this sign",
    year: "2012",
    category: "publication",
    tab: "angry",
    image: "/lovable-uploads/d3d6d114-c4d4-49c8-b3af-2ca1b78fc56a.png",
    description: "Set against Chennai‚ Marina Beach, ‚\"I'm So Angry, I Made This Sign\"‚ by Vaishali & Sanjeev transforms a protest phrase into a vast, immersive installation.\nStretching across 1.5 km, the work uses flags, bamboo, terracotta, and glowing ceramics to evoke both rage and reflection.\nBorrowed from a 2011 Occupy Wall Street placard, the phrase becomes a mass chorus of dissent and irony.\nBy repeating this line across thousands of fluttering signs, the artists stage a meditation on protest, emotion, and spectacle.\nThe installation blurs sincerity and satire, inviting public engagement while critiquing the aesthetics of outrage. Its glowing elements at night turn protest into a dreamlike vigil, a field of quiet resistance. Referencing thinkers like Žižek , the work questions whether expressive anger can truly disrupt power.\nMore than a political act, it is a haunting, poetic gesture ‚ fragile, fleeting, yet impossible to ignore.",
    pdfLink: "/pdfs/i-am-so-angry-i-made-this-sign.pdf",
    galleryImages: ["/lovable-uploads/a61f672b-5f6a-4797-9cce-2b1b550ea8bb.png", "/lovable-uploads/f61bdf02-8796-46c1-89fb-799f781ded7b.png", "/lovable-uploads/1aaa701e-e08a-42cb-a2be-76def0111fd4.png", "/lovable-uploads/e01e7d30-4c4c-423d-bd76-085c215b4174.png", "/lovable-uploads/9fa1a743-2852-4b84-bfed-ca65c42639fb.png", "/lovable-uploads/1fc730d8-5a33-4b1f-a54b-b5ac4db73a31.png", "/lovable-uploads/1a5a7ab0-b4e6-450d-89f3-8322caadede2.png", "/lovable-uploads/36c7e15a-a628-434a-89a8-5145ebec6cab.png", "/lovable-uploads/9012650f-528f-4335-a39b-b21401d97ed6.png", "/lovable-uploads/7e92fa4f-f5b0-4c0a-895d-900479cd9a5c.png"]
  }, {
    id: 6,
    title: "By George",
    year: "2010",
    category: "installation",
    tab: "by-gorge",
    image: "/lovable-uploads/4bb13448-46c8-4540-b4a9-6cc301abb3fa.png",
    description: "' By George '  (2008)\nCurated by Gitanjali Dang and featuring works by Vaishali Narkar & Sanjeev Khandekar, By George explores the creeping omnipresence of surveillance in contemporary life. Drawing from Orwellian allegories and real-world digital paranoia, the show interrogates how the gaze—technological, institutional, and social—shapes our subjectivities. With references ranging from Jeremy Bentham to Mark Zuckerberg, the works deploy mixed media and sandblasted glass to stage questions of privacy, perception, and power. Originally exhibited in 2008, the show remains uncannily prescient.\nHere, transparency is seductive, and observation is never neutral.\nWe are seen. We see.\nAnd nothing remains quite the same.",
    pdfLink: "/pdfs/by-george.pdf",
    galleryImages: ["/lovable-uploads/63b597b2-ca37-4329-9dca-51f1d4d18c54.png", "/lovable-uploads/c151d70d-e511-4fc4-98e1-685a19692f57.png", "/lovable-uploads/e0fb3a47-8cc4-470c-8174-0b87623c0987.png"]
  }, {
    id: 7,
    title: "Imp in the garden and other fairy tales",
    year: "2010",
    category: "publication",
    tab: "imp-in-the-garden",
    image: "/lovable-uploads/87ca6839-77e3-463a-a35d-bbb022447dfa.png",
    description: "Histograms of an Anxious Present: 'Imp in the Garden and Other Fairy Tales'\nAll of us inherently seek a sense of everyday normality to navigate life's demands. Yet, perfection, beauty, and even horror represent hazardous departures from this norm, capable of plunging us into fantasia or nightmare. Vaishali & Sanjeev confront these extremes head-on in their mixed-media works, 'Imp in the Garden and Other Fairy Tales', creating captivating entanglements of beauty and mutancy. Through the traditional art of embroidery, they weave intricate narratives that allude to the human costs of ecological catastrophe, genetic manipulation, and biological warfare. Their work serves as a Zen koan, shocking us into a deep awareness of the complexities underlying our current historical moment.",
    pdfLink: "/pdfs/imp-in-the-garden-and-other-fairy-tales.pdf",
    galleryImages: ["/lovable-uploads/a8481db4-b3fd-419b-8c9f-2571621c8fd8.png", "/lovable-uploads/8becb175-9f80-4277-bfc8-7476f8ef862e.png", "/lovable-uploads/05d6b360-2a34-4847-ba30-42975917511a.png", "/lovable-uploads/fac0c969-4060-4866-b5b5-77cb6e653a24.png", "/lovable-uploads/48853142-555c-48d7-8de3-293c35cafc5a.png", "/lovable-uploads/84b645d3-533b-4539-9734-6181e4ec6502.png", "/lovable-uploads/cd762c82-8484-4f74-9e4a-0fe87285c6ee.png", "/lovable-uploads/331d7574-1b73-49ac-970a-a90ceba4b5b6.png", "/lovable-uploads/e313efab-5e2c-4f37-bd66-e89dabfac518.png", "/lovable-uploads/06529053-3205-4119-a866-380b629cf5c7.png", "/lovable-uploads/6656f110-8d44-4dca-8596-31cb68f923f8.png", "/lovable-uploads/cee8a708-ab31-49b5-b5db-97cbab9e94a8.png", "/lovable-uploads/409157c6-20f6-40bd-a38f-cd2d43182df3.png"]
  }, {
    id: 8,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock I",
    year: "2008",
    category: "installation",
    tab: "bad-breath",
    image: "/lovable-uploads/6b9b5761-09b1-4db0-a085-aa36efca12ad.png",
    description: "This spectacular show of paintings and a sculpture deftly tackles pressing global issues by weaving together critical crises and widely circulated memes ( common societal narratives, cultural references, and popular understandings ) to construct powerful visual arguments. In his exhibition, \"Everything You Ever Wanted to Know about Bad Breath but were Afraid to Ask Alfred Hitchcock (Part I)\", the elegant white test tube orchid is employed as a central motif. These tissue cultured orchids symbolize the broader challenges of environmental degradation and the complex dilemmas arising from the genetic modification of organisms. Through a fusion of contentious subject matter and noir cinema aesthetics, Khandekar creates a captivating and thought-provoking experience, akin to a perfect double bill for the discerning viewer.",
    pdfLink: "/pdfs/everything-you-wanted-to-know-about-bad-breath-i.pdf",
    galleryImages: ["/lovable-uploads/e76eba54-48ae-4e95-899f-fe998b40ec66.png", "/lovable-uploads/0825279d-9f55-4e9b-b7d8-817bf11c883f.png", "/lovable-uploads/12586681-b881-4bf4-a51d-acfe9edb1972.png", "/lovable-uploads/525afd2a-1299-4fd6-bc33-c1746c17f157.png", "/lovable-uploads/4a37921f-173f-473c-96d6-dc1700e26abd.png", "/lovable-uploads/0866b3f9-6897-441c-a4e6-9a05169acd21.png", "/lovable-uploads/b10cee3c-f3e0-43d4-9bad-802121318a20.png", "/lovable-uploads/5ffc91b4-f2c7-4c48-a8c9-4d6c67e6a615.png", "/lovable-uploads/9536a6b3-23d9-42c4-a3b8-587cf54c833a.png", "/lovable-uploads/a98a9e83-46c8-4d7e-ab95-a708b42ef2ad.png", "/lovable-uploads/1f06a0dc-3a66-4e99-809e-3da2eb7560a5.png", "/lovable-uploads/ead60ce9-a7cf-4ccc-9260-6359d537d53e.png", "/lovable-uploads/597c2d16-fc40-4d24-9312-212691fb7412.png"]
  }, {
    id: 9,
    title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock III",
    year: "2020",
    category: "installation",
    tab: "bad-breath-iii",
    image: "/lovable-uploads/ffa15fc4-84cd-4238-b7a9-ec02a3b8c959.png",
    description: "Everything You Wanted to Know About (Your) Bad Breath, but Were Afraid to Ask Alfred Hitchcock  III\nIn this ongoing series, Vaishali and Sanjeev confront the ecological violence of capitalism.\nA recurring motif—the refrigerator—embodies frozen nature and unchecked consumerist greed.\nTheir sculptural refrigerator doors bear images of drought, mangroves, coral, and protest, tracing systemic ruin.\nThe works reflect a world cooling its interiors while burning its commons.\nThis is the Necrocene: capital as extinction event.",
    pdfLink: "/pdfs/everything-you-wanted-to-know-about-bad-breath-iii.pdf",
    galleryImages: ["/lovable-uploads/e83a0e09-48c6-40b7-ae3d-aba4fe3b21d3.png", "/lovable-uploads/3a831afe-d6be-4735-9583-7b7078bb834d.png", "/lovable-uploads/797a04c1-6150-49cf-ba6a-72f31464f03c.png"]
  }, {
    id: 10,
    title: "Acquire, Merge or Collaborate...!",
    year: "2007",
    category: "publication",
    tab: "acquire-merge",
    image: "/lovable-uploads/c97400af-b7b0-4338-84ce-d73b829b9ca3.png",
    description: "Long before Yale University published its findings on hormonal changes in men and women actively involved in stock market investments, Sanjeev Khandekar was already exploring this intersection through his art. In his poems and watercolours, he had pioneered a unique imagery of financial capital, using it as a motif to depict the evolving landscape of contemporary global societies.\nVaishali & Sanjeev 's  acrylic-on-canvas paintings, including the series \"acquire, merge or collaborate\"(2007)  and subsequent \"triumph of market\" series of works, visually integrate stock market motifs onto further abstracted electronic microscopic images of internal body organs. The exhibition also featured a significant installation titled \"time pass,\" which offered a satirical commentary on how market forces influence various aspects of life, from relationships and spirituality to consumerism.",
    pdfLink: "/pdfs/acquire-merge-or-collaborate.pdf",
    galleryImages: ["/lovable-uploads/c70b5427-f5ee-4faf-8c41-da2f168febe7.png", "/lovable-uploads/47abba0c-d814-4804-9c3f-652549f959f3.png", "/lovable-uploads/a6e6d89a-6b54-4543-b99e-4f6649229bc8.png", "/lovable-uploads/a258eb38-a8f2-43cf-948d-3b8788f253bf.png", "/lovable-uploads/089282ce-c070-48e1-b7a7-b512f10091d8.png", "/lovable-uploads/c1c66bef-688c-4826-a7fb-56c51609aaab.png", "/lovable-uploads/c7438809-5818-4887-99f0-ebc5088d8423.png", "/lovable-uploads/9738f1a0-2cea-4218-8c94-a21779dcb520.png"]
  }, {
    id: 11,
    title: "What do I love when I love you, my God",
    year: "2007",
    category: "installation",
    tab: "what-do-i-love",
    image: "/lovable-uploads/70d90f65-aca3-4f2e-8462-deb036cdf30e.png",
    description: "To christen, What do I love when I love you, my god?\",( 2006)  delves into the unsettling power dynamics of contemporary multinational capitalism. Drawing inspiration from St. Augustine, this exhibition exposes an unsettling truth: in a world driven by a \"shining beast of capitalism,\" little is truly cherished and everything feels encroachable. It critiques how world leaders, through rampant propaganda, co-opt religious faith to serve political and economic agendas, highlighting a pervasive \"androgynous, amorphous and amphibious faith.\" Through a compelling suite of paintings, sculptures, and installations,the exhibition  distinctive use of coagulated, blistering watercolors and meticulously designed cabinets enshrining Hindu deities, challenges viewers to confront the rapid dissipation of values in our modern milieu. This exhibition, with its layered symbolism and enigmatic text, invites a multifaceted engagement, probing the insidious influence of market forces and the blurring lines between spirituality and material desire.                             ( download pdf to read essay by Gitanjali Dang )",
    pdfLink: "/pdfs/what-do-i-love-when-i-love-you-my-god.pdf",
    galleryImages: ["/lovable-uploads/70d90f65-aca3-4f2e-8462-deb036cdf30e.png", "/lovable-uploads/ae62bf06-b327-43a6-a9d8-c42007f28d36.png", "/lovable-uploads/63f8b6cf-9112-4dcf-ab8d-6be4207a8b7f.png", "/lovable-uploads/1a7ef6e9-90c4-4497-a28e-6d1b3050f473.png", "/lovable-uploads/ce506b96-838f-4a06-af03-fe7e5dc54656.png", "/lovable-uploads/66814bcf-4af1-4abc-a1cf-2e9557c858f2.png", "/lovable-uploads/74390791-cafd-4875-9f16-f31d40cebba0.png", "/lovable-uploads/1bde07be-f597-42ca-bbdd-adcf495499c5.png", "/lovable-uploads/7a92dc25-7cd5-46df-ac90-ef6558b321cd.png", "/lovable-uploads/42cc2075-d4b1-4e3f-bf4e-6dd1af908272.png", "/lovable-uploads/9ae30672-e3c6-486d-b059-ced7d2ff71cd.png", "/lovable-uploads/b99fbbbd-9574-48b8-a901-59657bd95863.png", "/lovable-uploads/0b97843d-73fe-4dd6-b350-2a3c7746d319.png"]
  }, {
    id: 16,
    title: "la peau de chagrin (who is afraid of shrinking skin)",
    year: "2005",
    category: "previous",
    tab: "peau-de-chagrin-2005",
    image: "/lovable-uploads/ed416c2b-f69c-4e0f-846a-2e513859a0b5.png",
    description: "\"La Peau de Chagrin\": An Exploration of Reality. ( 2005 ) \nThis installation, \"La Peau de Chagrin\" (Who is afraid of shrinking skin) Is an  extraordinary work that challenged notions of virtual reality by employing hundreds of mirrors as a ceiling, creating an infinite vertical space filled with numerous sculptures.\nThe installation served as a portrait of contemporary life, depicting an artist perpetually in motion, driving a \"turbo engine\" to traverse the globe. Its evocative title was drawn from Honoré de Balzac's renowned novel, a work that famously captivated Sigmund Freud in his final months.\nA striking and unique feature of \"La Peau de Chagrin\" was the presence of approximately 20,000 tiny insect sculptures seemingly crawling across the walls. These walls were intricately designed with hundreds of holes, as if meticulously crafted by the very insects themselves.\n( to read essays by Abhay Sardesai and Kumar Ketkar please download the pdf )",
    pdfLink: "/pdfs/La-peu-de-chagrin.pdf",
    galleryImages: ["/lovable-uploads/e189487f-b583-4d8a-a631-34472c9369a1.png", "/lovable-uploads/50da74a2-75da-44b0-9f11-be0554e54e39.png", "/lovable-uploads/e74cd2d0-c499-4c49-8708-5f722dbfd0a4.png", "/lovable-uploads/f5f83fbb-7da7-472e-9c54-ca941f24ef35.png", "/lovable-uploads/01a1bf17-ff8b-4439-95d3-4302920fb17b.png", "/lovable-uploads/44a6f5e2-c8e8-4d99-a031-b536fa93a034.png", "/lovable-uploads/c0820862-3cfd-4088-a2b5-b171ac4cb95a.png", "/lovable-uploads/b78fcf08-2758-4d7a-96aa-51651fd4bf73.png", "/lovable-uploads/31c828ca-5a2b-4fdc-a3e0-57a2468a2004.png", "/lovable-uploads/f060e91b-cf10-4efb-80b4-3021052b31fc.png", "/lovable-uploads/55c104df-1533-4ff7-a299-cdbd540267d3.png", "/lovable-uploads/5c17b99a-6c80-493a-9c8f-231fee74da73.png"]
  }, {
    id: 17,
    title: "Tits Clits n Elephant Dick",
    year: "2006",
    category: "previous",
    tab: "tits-clits-elephant-dick-2006",
    image: "/lovable-uploads/cd623adc-fd53-477c-b5fe-74dac1341434.png",
    description: "Ideology of the Market\nIn today's market-driven world, sex has outpaced traditional ideologies, seeking new meanings amidst gadgets, pleasure, and utility.\nHappiness has become pleasure; relationships reduced to networking.\nThis shift leaves us in a strange existential limbo, where neither science nor art can fully grasp the change.\nVaishali Narkar and Sanjeev Khandekar explore this crisis through daring, thought-provoking installations.\nTheir work challenges us to question, rather than accept.\nIn doing so, they probe a mystery deeper than body—rooted in the mind.",
    pdfLink: "/pdfs/tits-clits-elephant-dick.pdf",
    galleryImages: ["/lovable-uploads/103a15e5-907d-451d-8bb3-292e60874acc.png", "/lovable-uploads/42a70101-86d3-4056-8dc4-a6d4242cf3c8.png", "/lovable-uploads/febe5c60-1901-4071-b1d7-5ddf2fd74113.png", "/lovable-uploads/52e30f1c-726d-4360-a363-8dd8dcab9410.png", "/lovable-uploads/c8ea21cb-7679-4303-8d16-8127fe4c85c0.png", "/lovable-uploads/d6743159-f7da-4cd8-a743-0ef1e7ebec70.png", "/lovable-uploads/3d92acb9-ab8c-4a40-a1f5-b6f24b5cf36b.png", "/lovable-uploads/161d1c3d-1363-4d04-bbd4-59e8b9ceb537.png", "/lovable-uploads/43f2752c-82c9-4385-8f12-ee11dcb8d7ea.png", "/lovable-uploads/65337fcd-9cdf-4eda-acd6-2670bc685715.png", "/lovable-uploads/a5ce2828-9881-42cf-a2f8-9222d5ff061b.png", "/lovable-uploads/36eabf1f-00c8-4eb7-a51c-3da23abf9466.png", "/lovable-uploads/078ec730-fa98-4435-8b79-222f21d78231.png", "/lovable-uploads/09b55fa7-d2c9-42b0-833b-c1383b6c984d.png", "/lovable-uploads/37b34952-0959-49fe-9291-0c588030056e.png", "/lovable-uploads/f9317439-7f4f-4582-b8f3-076af30e33d0.png"]
  }, {
    id: 18,
    title: "Kegel exercise",
    year: "2007",
    category: "previous",
    tab: "kegel-exercise-2007",
    image: "/lovable-uploads/2e898325-4e7e-4a20-a896-100a15bef676.png",
    description: "The exhibition, \"The Kegel Exercises: Aswani Mudra,\" (2007)  delves into the unsettling realities of late multicultural capitalism, where the idealism gives way to the follies of recklessness and petulance. Through a powerful confluence of art and societal critique, it explores how the relentless pursuit of financialization morphs into a destructive force. The show is an example of the use of the ubiquitous stock market ticker and the unique and intricate medium of marble inlay as potent symbols, demonstrating how the artists harnesse them to expose the interwoven dramas of trading, sexuality, and the unsettling normalization of insatiable  desires in our contemporary world.\n\n( Download pdf to read an essay by Gitanjali Dang)",
    pdfLink: "/pdfs/kegel-exercise.pdf",
    galleryImages: ["/lovable-uploads/9b6f8c8d-d23d-429f-bfd1-05141f8ae788.png", "/lovable-uploads/e3c3dc28-3fc8-4b80-8c19-b1d1ff06cc9b.png", "/lovable-uploads/0e5f73a4-832b-416e-b415-dde46aa7c0c0.png", "/lovable-uploads/0204c141-90f2-4e17-b1e3-1bd36c86e811.png", "/lovable-uploads/1f5a0acc-453c-4d8a-963b-fa594a983826.png", "/lovable-uploads/8ba1d8f0-fefb-4891-8ae0-d6471d55d519.png"]
  }, {
    id: 19,
    title: "All that I wanna do",
    year: "2005",
    category: "previous",
    tab: "all-that-i-wanna-do-2005",
    image: "/lovable-uploads/67df2a58-b3de-4df9-b9aa-c05532478d41.png",
    description: "\"All That I Wanna Do,\" a massive and exceptionally large installation from 2005, featured hundreds of sculptures and large mirrors to craft an infinite horizontal space. This visually striking display offered a kaleidoscopic perspective of objects, creating a mysterious and captivating experience.\nArtists Vaishali and Sanjeev created a poignant portrait of contemporary man alienated from himself, entangled in an unquenchable web of surplus desires. The installation's title, borrowed from a long poem written by Sanjeev in the same year, is considered a milestone in Marathi poetry. A particularly striking element of the installation was its novel use of stock market ticker tape imagery.\n\n( to read essays by Abhay Sardesai and Kumar Ketkar please download the pdf )",
    pdfLink: "/pdfs/all-that-i-wanna-do.pdf",
    galleryImages: ["/lovable-uploads/9d363ef4-ae7f-409c-bab8-1d15a1b7cc59.png", "/lovable-uploads/179dc95f-93b6-4b03-8e95-6ceb022d900f.png", "/lovable-uploads/c47deaef-15d4-492f-877c-c4e45676d56a.png", "/lovable-uploads/12131ea7-e672-4bed-8725-f4876c205095.png", "/lovable-uploads/db39f60c-0ddf-415a-aacf-4567bd13eff3.png", "/lovable-uploads/8936f780-f10c-4703-8489-f51297b9313e.png", "/lovable-uploads/11d68ef1-ddf7-4c01-8bc5-3418c1857dcc.png", "/lovable-uploads/c7ccfc85-c495-472b-a5bc-b1f67bcfa68c.png", "/lovable-uploads/0128647a-98ba-46ee-b25e-9173742ab626.png", "/lovable-uploads/a651269d-946e-4aea-92dc-c8f01cdf8c07.png", "/lovable-uploads/0e347106-d2bd-41f3-b56f-11cf29261adb.png", "/lovable-uploads/e0757729-0594-445a-be51-7f2224aaf593.png"]
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