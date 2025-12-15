import { useState } from 'react';
import notStillLife1 from '@/assets/not-still-life-1.jpg';
import notStillLife2 from '@/assets/not-still-life-2.jpg';
import notStillLife3 from '@/assets/not-still-life-3.jpg';
import honeyTongue1 from '@/assets/honey-tongue-1.jpg';
import honeyTongue2 from '@/assets/honey-tongue-2.jpg';
import honeyTongue3 from '@/assets/honey-tongue-3.jpg';
import honeyTongue4 from '@/assets/honey-tongue-4.jpg';
import honeyTongue5 from '@/assets/honey-tongue-5.jpg';
import honeyTongue6 from '@/assets/honey-tongue-6.jpg';
import honeyTongue7 from '@/assets/honey-tongue-7.jpg';
import honeyTongue8 from '@/assets/honey-tongue-8.jpg';
import honeyTongue9 from '@/assets/honey-tongue-9.jpg';
import honeyTongue10 from '@/assets/honey-tongue-10.jpg';
import ragmala1 from '@/assets/ragmala-1.jpg';
import ragmala2 from '@/assets/ragmala-2.jpg';
import ragmala3 from '@/assets/ragmala-3.jpg';
import ragmala4 from '@/assets/ragmala-4.jpg';
import ragmala5 from '@/assets/ragmala-5.jpg';
import ragmala6 from '@/assets/ragmala-6.jpg';
import ragmala7 from '@/assets/ragmala-7.jpg';
import ragmala8 from '@/assets/ragmala-8.jpg';
import ragmala9 from '@/assets/ragmala-9.jpg';
import ragmala10 from '@/assets/ragmala-10.jpg';
import ragmala11 from '@/assets/ragmala-11.jpg';
import ragmala12 from '@/assets/ragmala-12.jpg';
import ragmala13 from '@/assets/ragmala-13.jpg';
import ragmala14 from '@/assets/ragmala-14.jpg';
import ragmala15 from '@/assets/ragmala-15.jpg';
import triumph1 from '@/assets/triumph-1.jpg';
import triumph2 from '@/assets/triumph-2.jpg';
import triumph3 from '@/assets/triumph-3.jpg';
import triumph4 from '@/assets/triumph-4.jpg';
import triumph5 from '@/assets/triumph-5.jpg';
import triumph6 from '@/assets/triumph-6.jpg';
import triumph7 from '@/assets/triumph-7.jpg';
import triumph8 from '@/assets/triumph-8.jpg';
import triumph9 from '@/assets/triumph-9.jpg';
import triumph10 from '@/assets/triumph-10.jpg';
import triumph11 from '@/assets/triumph-11.jpg';
import triumph12 from '@/assets/triumph-12.jpg';
import triumph13 from '@/assets/triumph-13.jpg';
import triumph14 from '@/assets/triumph-14.jpg';
import triumph15 from '@/assets/triumph-15.jpg';
import angry1 from '@/assets/angry-1.jpg';
import angry2 from '@/assets/angry-2.jpg';
import angry3 from '@/assets/angry-3.jpg';
import angry4 from '@/assets/angry-4.jpg';
import angry5 from '@/assets/angry-5.jpg';
import angry6 from '@/assets/angry-6.jpg';
import angry7 from '@/assets/angry-7.jpg';
import angry8 from '@/assets/angry-8.jpg';
import angry9 from '@/assets/angry-9.jpg';
import angry10 from '@/assets/angry-10.jpg';
import angry11 from '@/assets/angry-11.jpg';
import george1 from '@/assets/george-1.jpg';
import george2 from '@/assets/george-2.jpg';
import george3 from '@/assets/george-3.jpg';
import imp1 from '@/assets/imp-1.jpg';
import imp2 from '@/assets/imp-2.jpg';
import imp3 from '@/assets/imp-3.jpg';
import imp4 from '@/assets/imp-4.jpg';
import imp5 from '@/assets/imp-5.jpg';
import imp6 from '@/assets/imp-6.jpg';
import imp7 from '@/assets/imp-7.jpg';
import imp8 from '@/assets/imp-8.jpg';
import imp9 from '@/assets/imp-9.jpg';
import imp10 from '@/assets/imp-10.jpg';
import imp11 from '@/assets/imp-11.jpg';
import imp12 from '@/assets/imp-12.jpg';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutGrid, Image, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('installation');
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

  const works: Work[] = [
    // Art Works (Installation Category)
    {
      id: 1,
      title: "'not Still Life'",
      year: "2025",
      category: "installation",
      tab: "not-still-life",
      image: "/lovable-uploads/fb1b2917-ec0f-4359-a331-fd91151e5c18.png",
      description: "In this new series, Vaishali Narkar and Sanjeev Khandekar confront ecological collapse through six multimedia works. Blending acrylic, watercolour, oil, and etched glass, the pieces distort and fragment vision‚ mirroring environmental disarray. The artists critique the CapitalOne, revealing how capitalist greed underpins ecological destruction. Glass surfaces blur the line between art and urgency, between beauty and breakdown. A dark pun on the genre, not Still Life resists stasis, insisting life is anything but still. It is a call to see, and to act, before stillness becomes silence.",
      pdfLink: "/pdfs/not-still-life.pdf",
      galleryImages: [notStillLife1, notStillLife2, notStillLife3]
    },
    {
      id: 2,
      title: "\"Honey, I shrunk my Tongue\"",
      year: "2024",
      category: "installation",
      tab: "honey",
      image: "/lovable-uploads/f50d6400-2aa7-4746-91b2-c20ea760f4c5.png",
      description: "\"Honey, I Shrunk My Tongue\" is a site-specific ceramic installation exploring the profound versatility of the tongue. From solitary forms to a multitude, these objects weave a visual poem, deciphering the enigma of language itself. The artwork invites a journey into this mysterious organ, a voice that embodies good and bad, freedom and constraint. It's a meditation on the tongue as a word, a language, and the very essence of free expression.",
      pdfLink: "/pdfs/honey-i-shrunk-my-tongue.pdf",
      galleryImages: [honeyTongue1, honeyTongue2, honeyTongue3, honeyTongue4, honeyTongue5, honeyTongue6, honeyTongue7, honeyTongue8, honeyTongue9, honeyTongue10]
    },
    {
      id: 3,
      title: "Ragmala song of Anthropocene",
      year: "2018",
      category: "installation",
      tab: "ragamala",
      image: "/lovable-uploads/6ed4ab63-954b-4aea-87c7-b4e863a4aca7.png",
      description: "\"Ragmala - The Songs Of Anthropocene\" is a series of embroideries that delve into the profound impact of the Anthropocene era. These works explore themes of environmental degradation, free economy, and the changing Earth. They serve as a visual response to the \"new music\" of our planet, born from geological shifts and the alarming loss of species. By connecting with the historical practice of Ragmala paintings, these embroideries decode the hidden messages within Earth's evolving sounds, transforming traditional iconography to reflect our altered world.",
      pdfLink: "/pdfs/ragmala-song-of-anthropocene.pdf",
      galleryImages: [ragmala1, ragmala2, ragmala3, ragmala4, ragmala5, ragmala6, ragmala7, ragmala8, ragmala9, ragmala10, ragmala11, ragmala12, ragmala13, ragmala14, ragmala15]
    },
    {
      id: 4,
      title: "Triumph of market",
      year: "2008",
      category: "installation",
      tab: "triumph",
      image: "/lovable-uploads/0961b586-5aca-42d8-89eb-63fa92309a7f.png",
      description: "Long before Yale University's research on hormonal fluctuations in men and women engaged in stock market trading, Sanjeev Khandekar was already probing this terrain through his art. In his poetry and water colors, Khandekar pioneered a distinctive visual and conceptual vocabulary ‚using financial capital as both symbol and structure to map the shifting contours of contemporary global society.\nIn their collaborative works, Vaishali and Sanjeev Khandekar extend this exploration further. Their acrylic-on-canvas paintings and intricate marble inlay pieces transform stock market imagery into abstracted 'Moneyscapes'.These works fuse aesthetic innovation with social critique, confronting the ways in which financialization ‚once a tool- has become a dominating, often destructive, force.\nThe artists employ the stock market ticker- ubiquitous, frenetic, and laden with meaning-alongside the traditionally opulent medium of marble inlay, re-contextualizing both to unveil the intimate entanglements of trading, desire, and the normalization of excess in late-capitalist culture.",
      pdfLink: "/pdfs/triumph-of-market.pdf",
      galleryImages: [triumph1, triumph2, triumph3, triumph4, triumph5, triumph6, triumph7, triumph8, triumph9, triumph10, triumph11, triumph12, triumph13, triumph14, triumph15]
    },
    {
      id: 5,
      title: "I am so angry, I made this sign",
      year: "2012",
      category: "installation",
      tab: "angry",
      image: "/lovable-uploads/d3d6d114-c4d4-49c8-b3af-2ca1b78fc56a.png",
      description: "Set against Chennai‚ Marina Beach, ‚\"I'm So Angry, I Made This Sign\"‚ by Vaishali & Sanjeev transforms a protest phrase into a vast, immersive installation.\nStretching across 1.5 km, the work uses flags, bamboo, terracotta, and glowing ceramics to evoke both rage and reflection.\nBorrowed from a 2011 Occupy Wall Street placard, the phrase becomes a mass chorus of dissent and irony.\nBy repeating this line across thousands of fluttering signs, the artists stage a meditation on protest, emotion, and spectacle.\nThe installation blurs sincerity and satire, inviting public engagement while critiquing the aesthetics of outrage. Its glowing elements at night turn protest into a dreamlike vigil, a field of quiet resistance. Referencing thinkers like Žižek , the work questions whether expressive anger can truly disrupt power.\nMore than a political act, it is a haunting, poetic gesture ‚ fragile, fleeting, yet impossible to ignore.",
      pdfLink: "/pdfs/i-am-so-angry-i-made-this-sign.pdf",
      galleryImages: [angry1, angry2, angry3, angry4, angry5, angry6, angry7, angry8, angry9, angry10, angry11]
    },
    {
      id: 6,
      title: "By George",
      year: "2010",
      category: "installation",
      tab: "by-gorge",
      image: "/lovable-uploads/4bb13448-46c8-4540-b4a9-6cc301abb3fa.png",
      description: "Curated by Gitanjali Dang and featuring works by Vaishali Narkar & Sanjeev Khandekar, By George explores the creeping omnipresence of surveillance in contemporary life. Drawing from Orwellian allegories and real-world digital paranoia, the show interrogates how the gaze—technological, institutional, and social—shapes our subjectivities. With references ranging from Jeremy Bentham to Mark Zuckerberg, the works deploy mixed media and sandblasted glass to stage questions of privacy, perception, and power. Originally exhibited in 2010, the show remains uncannily prescient. Here, transparency is seductive, and observation is never neutral. We are seen. We see. And nothing remains quite the same.",
      pdfLink: "/pdfs/by-george.pdf",
      galleryImages: [george1, george2, george3]
    },
    {
      id: 7,
      title: "Imp in the garden and other fairy tales",
      year: "2010",
      category: "installation",
      tab: "imp-in-the-garden",
      image: "/lovable-uploads/87ca6839-77e3-463a-a35d-bbb022447dfa.png",
      description: "Histograms of an Anxious Present: 'Imp in the Garden and Other Fairy Tales'\nAll of us inherently seek a sense of everyday normality to navigate life's demands. Yet, perfection, beauty, and even horror represent hazardous departures from this norm, capable of plunging us into fantasia or nightmare. Vaishali & Sanjeev confront these extremes head-on in their mixed-media works, 'Imp in the Garden and Other Fairy Tales', creating captivating entanglements of beauty and mutancy. Through the traditional art of embroidery, they weave intricate narratives that allude to the human costs of ecological catastrophe, genetic manipulation, and biological warfare. Their work serves as a Zen koan, shocking us into a deep awareness of the complexities underlying our current historical moment.",
      pdfLink: "/pdfs/imp-in-the-garden-and-other-fairy-tales.pdf",
      galleryImages: [imp1, imp2, imp3, imp4, imp5, imp6, imp7, imp8, imp9, imp10, imp11, imp12]
    },
    {
      id: 8,
      title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock part I",
      year: "2008",
      category: "installation",
      tab: "bad-breath",
      image: "/lovable-uploads/6b9b5761-09b1-4db0-a085-aa36efca12ad.png",
      description: "This spectacular show of paintings and a sculpture deftly tackles pressing global issues by weaving together critical crises and widely circulated memes ( common societal narratives, cultural references, and popular understandings ) to construct powerful visual arguments. In his exhibition, \"Everything You Ever Wanted to Know about Bad Breath but were Afraid to Ask Alfred Hitchcock (Part I)\", the elegant white test tube orchid is employed as a central motif. These tissue cultured orchids symbolize the broader challenges of environmental degradation and the complex dilemmas arising from the genetic modification of organisms. Through a fusion of contentious subject matter and noir cinema aesthetics, Khandekar creates a captivating and thought-provoking experience, akin to a perfect double bill for the discerning viewer.",
      pdfLink: "/pdfs/everything-you-wanted-to-know-about-bad-breath-i.pdf",
      galleryImages: ["/lovable-uploads/e76eba54-48ae-4e95-899f-fe998b40ec66.png", "/lovable-uploads/0825279d-9f55-4e9b-b7d8-817bf11c883f.png", "/lovable-uploads/12586681-b881-4bf4-a51d-acfe9edb1972.png", "/lovable-uploads/525afd2a-1299-4fd6-bc33-c1746c17f157.png", "/lovable-uploads/4a37921f-173f-473c-96d6-dc1700e26abd.png", "/lovable-uploads/0866b3f9-6897-441c-a4e6-9a05169acd21.png", "/lovable-uploads/b10cee3c-f3e0-43d4-9bad-802121318a20.png", "/lovable-uploads/5ffc91b4-f2c7-4c48-a8c9-4d6c67e6a615.png", "/lovable-uploads/9536a6b3-23d9-42c4-a3b8-587cf54c833a.png", "/lovable-uploads/a98a9e83-46c8-4d7e-ab95-a708b42ef2ad.png", "/lovable-uploads/1f06a0dc-3a66-4e99-809e-3da2eb7560a5.png", "/lovable-uploads/ead60ce9-a7cf-4ccc-9260-6359d537d53e.png", "/lovable-uploads/597c2d16-fc40-4d24-9312-212691fb7412.png"]
    },
    {
      id: 9,
      title: "Everything You Wanted to Know About Bad Breath but were Afraid to Ask Alfred Hitchcock part III",
      year: "2020",
      category: "installation",
      tab: "bad-breath-iii",
      image: "/lovable-uploads/ffa15fc4-84cd-4238-b7a9-ec02a3b8c959.png",
      description: "Everything You Wanted to Know About (Your) Bad Breath, but Were Afraid to Ask Alfred Hitchcock  III\nIn this ongoing series, Vaishali and Sanjeev confront the ecological violence of capitalism.\nA recurring motif—the refrigerator—embodies frozen nature and unchecked consumerist greed.\nTheir sculptural refrigerator doors bear images of drought, mangroves, coral, and protest, tracing systemic ruin.\nThe works reflect a world cooling its interiors while burning its commons.\nThis is the Necrocene: capital as extinction event.",
      pdfLink: "/pdfs/everything-you-wanted-to-know-about-bad-breath-iii.pdf",
      galleryImages: ["/lovable-uploads/e83a0e09-48c6-40b7-ae3d-aba4fe3b21d3.png", "/lovable-uploads/3a831afe-d6be-4735-9583-7b7078bb834d.png", "/lovable-uploads/797a04c1-6150-49cf-ba6a-72f31464f03c.png"]
    },
    {
      id: 10,
      title: "Acquire, Merge or Collaborate...!",
      year: "2007",
      category: "installation",
      tab: "acquire-merge",
      image: "/lovable-uploads/c97400af-b7b0-4338-84ce-d73b829b9ca3.png",
      description: "Long before Yale University published its findings on hormonal changes in men and women actively involved in stock market investments, Sanjeev Khandekar was already exploring this intersection through his art. In his poems and watercolours, he had pioneered a unique imagery of financial capital, using it as a motif to depict the evolving landscape of contemporary global societies.\nVaishali & Sanjeev 's  acrylic-on-canvas paintings, including the series \"acquire, merge or collaborate\"(2007)  and subsequent \"triumph of market\" series of works, visually integrate stock market motifs onto further abstracted electronic microscopic images of internal body organs. The exhibition also featured a significant installation titled \"time pass,\" which offered a satirical commentary on how market forces influence various aspects of life, from relationships and spirituality to consumerism.",
      pdfLink: "/pdfs/acquire-merge-or-collaborate.pdf",
      galleryImages: ["/lovable-uploads/c70b5427-f5ee-4faf-8c41-da2f168febe7.png", "/lovable-uploads/47abba0c-d814-4804-9c3f-652549f959f3.png", "/lovable-uploads/a6e6d89a-6b54-4543-b99e-4f6649229bc8.png", "/lovable-uploads/a258eb38-a8f2-43cf-948d-3b8788f253bf.png", "/lovable-uploads/089282ce-c070-48e1-b7a7-b512f10091d8.png", "/lovable-uploads/c1c66bef-688c-4826-a7fb-56c51609aaab.png", "/lovable-uploads/c7438809-5818-4887-99f0-ebc5088d8423.png", "/lovable-uploads/9738f1a0-2cea-4218-8c94-a21779dcb520.png"]
    },
    {
      id: 11,
      title: "What do I love when I love you, my God",
      year: "2007",
      category: "installation",
      tab: "what-do-i-love",
      image: "/lovable-uploads/d787b554-259f-4672-89f0-9299a2bf17d9.png",
      description: "To christen, What do I love when I love you, my god?\",( 2006)  delves into the unsettling power dynamics of contemporary multinational capitalism. Drawing inspiration from St. Augustine, this exhibition exposes an unsettling truth: in a world driven by a \"shining beast of capitalism,\" little is truly cherished and everything feels encroachable. It critiques how world leaders, through rampant propaganda, co-opt religious faith to serve political and economic agendas, highlighting a pervasive \"androgynous, amorphous and amphibious faith.\" Through a compelling suite of paintings, sculptures, and installations,the exhibition  distinctive use of coagulated, blistering watercolors and meticulously designed cabinets enshrining Hindu deities, challenges viewers to confront the rapid dissipation of values in our modern milieu. This exhibition, with its layered symbolism and enigmatic text, invites a multifaceted engagement, probing the insidious influence of market forces and the blurring lines between spirituality and material desire.                             ( download pdf to read essay by Gitanjali Dang )",
      pdfLink: "/pdfs/what-do-i-love-my-god.pdf",
      galleryImages: ["/lovable-uploads/70d90f65-aca3-4f2e-8462-deb036cdf30e.png", "/lovable-uploads/ae62bf06-b327-43a6-a9d8-c42007f28d36.png", "/lovable-uploads/63f8b6cf-9112-4dcf-ab8d-6be4207a8b7f.png", "/lovable-uploads/1a7ef6e9-90c4-4497-a28e-6d1b3050f473.png", "/lovable-uploads/ce506b96-838f-4a06-af03-fe7e5dc54656.png", "/lovable-uploads/66814bcf-4af1-4abc-a1cf-2e9557c858f2.png", "/lovable-uploads/74390791-cafd-4875-9f16-f31d40cebba0.png", "/lovable-uploads/1bde07be-f597-42ca-bbdd-adcf495499c5.png", "/lovable-uploads/7a92dc25-7cd5-46df-ac90-ef6558b321cd.png", "/lovable-uploads/42cc2075-d4b1-4e3f-bf4e-6dd1af908272.png", "/lovable-uploads/9ae30672-e3c6-486d-b059-ced7d2ff71cd.png", "/lovable-uploads/b99fbbbd-9574-48b8-a901-59657bd95863.png", "/lovable-uploads/0b97843d-73fe-4dd6-b350-2a3c7746d319.png"]
    },
    {
      id: 12,
      title: "la peau de chagrin (who is afraid of shrinking skin)",
      year: "2005",
      category: "installation",
      tab: "peau-de-chagrin-2005",
      image: "/lovable-uploads/ed416c2b-f69c-4e0f-846a-2e513859a0b5.png",
      description: "\"La Peau de Chagrin\": An Exploration of Reality. ( 2005 ) This installation, \"La Peau de Chagrin\" (Who is afraid of shrinking skin) Is an extraordinary work that challenged notions of virtual reality by employing hundreds of mirrors as a ceiling, creating an infinite vertical space filled with numerous sculptures. The installation served as a portrait of contemporary life, depicting an artist perpetually in motion, driving a \"turbo engine\" to traverse the globe. Its evocative title was drawn from Honoré de Balzac's renowned novel, a work that famously captivated Sigmund Freud in his final months. A striking and unique feature of \"La Peau de Chagrin\" was the presence of approximately 20,000 tiny insect sculptures seemingly crawling across the walls. These walls were intricately designed with hundreds of holes, as if meticulously crafted by the very insects themselves.\n (To read essays by Abhay Sardesai and Kumar Ketkar please download the pdf)",
      pdfLink: "/pdfs/La-peu-de-chagrin.pdf",
      galleryImages: ["/lovable-uploads/ddc62016-38d5-4f54-949f-2dc259533d14.png", "/lovable-uploads/2cc304c6-a6a1-4508-a0c5-bbce36dd1874.png", "/lovable-uploads/9ff5a54b-3cb1-4b14-aa79-12a1318973af.png", "/lovable-uploads/98183ffb-9f4f-43a0-a8c2-baae24ecd7b1.png", "/lovable-uploads/2805ad2c-9d3c-49ce-9075-56f48403b739.png", "/lovable-uploads/320166df-5619-40f6-9928-3b827175eb99.png", "/lovable-uploads/bdd6d563-409c-406a-88d5-e98f8132348f.png", "/lovable-uploads/bb63d04f-771c-4e01-96b9-35948b646bc6.png", "/lovable-uploads/ef0bfc3e-eb5b-4f11-a8b1-84d3e3875c81.png", "/lovable-uploads/3811d0f1-1a49-4890-8b2d-bbead0970399.png", "/lovable-uploads/8daaf2db-aa70-44bd-95a0-21f7ae8469f2.png", "/lovable-uploads/9a44a966-99d4-454f-9537-60400fc74e0f.png"]
    },
    {
      id: 13,
      title: "Tits Clits n Elephant Dick",
      year: "2006",
      category: "installation",
      tab: "tits-clits-elephant-dick-2006",
      image: "/lovable-uploads/cd623adc-fd53-477c-b5fe-74dac1341434.png",
      description: "Ideology of the Market\nIn today's market-driven world, sex has outpaced traditional ideologies, seeking new meanings amidst gadgets, pleasure, and utility.\nHappiness has become pleasure; relationships reduced to networking.\nThis shift leaves us in a strange existential limbo, where neither science nor art can fully grasp the change.\nVaishali Narkar and Sanjeev Khandekar explore this crisis through daring, thought-provoking installations.\nTheir work challenges us to question, rather than accept.\nIn doing so, they probe a mystery deeper than body—rooted in the mind.",
      pdfLink: "/pdfs/tits-clits-dick.pdf",
      galleryImages: ["/lovable-uploads/103a15e5-907d-451d-8bb3-292e60874acc.png", "/lovable-uploads/42a70101-86d3-4056-8dc4-a6d4242cf3c8.png", "/lovable-uploads/febe5c60-1901-4071-b1d7-5ddf2fd74113.png", "/lovable-uploads/52e30f1c-726d-4360-a363-8dd8dcab9410.png", "/lovable-uploads/c8ea21cb-7679-4303-8d16-8127fe4c85c0.png", "/lovable-uploads/d6743159-f7da-4cd8-a743-0ef1e7ebec70.png", "/lovable-uploads/3d92acb9-ab8c-4a40-a1f5-b6f24b5cf36b.png", "/lovable-uploads/161d1c3d-1363-4d04-bbd4-59e8b9ceb537.png", "/lovable-uploads/43f2752c-82c9-4385-8f12-ee11dcb8d7ea.png", "/lovable-uploads/65337fcd-9cdf-4eda-acd6-2670bc685715.png", "/lovable-uploads/a5ce2828-9881-42cf-a2f8-9222d5ff061b.png", "/lovable-uploads/36eabf1f-00c8-4eb7-a51c-3da23abf9466.png", "/lovable-uploads/078ec730-fa98-4435-8b79-222f21d78231.png", "/lovable-uploads/09b55fa7-d2c9-42b0-833b-c1383b6c984d.png", "/lovable-uploads/37b34952-0959-49fe-9291-0c588030056e.png", "/lovable-uploads/f9317439-7f4f-4582-b8f3-076af30e33d0.png"]
    },
    {
      id: 14,
      title: "Kegel exercise",
      year: "2007",
      category: "installation",
      tab: "kegel-exercise-2007",
      image: "/lovable-uploads/2e898325-4e7e-4a20-a896-100a15bef676.png",
      description: "The exhibition, \"The Kegel Exercises: Aswani Mudra,\" (2007)  delves into the unsettling realities of late multicultural capitalism, where the idealism gives way to the follies of recklessness and petulance. Through a powerful confluence of art and societal critique, it explores how the relentless pursuit of financialization morphs into a destructive force. The show is an example of the use of the ubiquitous stock market ticker and the unique and intricate medium of marble inlay as potent symbols, demonstrating how the artists harnesse them to expose the interwoven dramas of trading, sexuality, and the unsettling normalization of insatiable  desires in our contemporary world.\n\n( Download pdf to read an essay by Gitanjali Dang)",
      pdfLink: "/pdfs/kegel.pdf",
      galleryImages: ["/lovable-uploads/9b6f8c8d-d23d-429f-bfd1-05141f8ae788.png", "/lovable-uploads/e3c3dc28-3fc8-4b80-8c19-b1d1ff06cc9b.png", "/lovable-uploads/0e5f73a4-832b-416e-b415-dde46aa7c0c0.png", "/lovable-uploads/0204c141-90f2-4e17-b1e3-1bd36c86e811.png", "/lovable-uploads/1f5a0acc-453c-4d8a-963b-fa594a983826.png", "/lovable-uploads/8ba1d8f0-fefb-4891-8ae0-d6471d55d519.png"]
    },
    {
      id: 15,
      title: "All that I wanna do",
      year: "2005",
      category: "installation",
      tab: "all-that-i-wanna-do-2005",
      image: "/lovable-uploads/67df2a58-b3de-4df9-b9aa-c05532478d41.png",
      description: "\"All That I Wanna Do,\" a massive and exceptionally large installation from 2005, featured hundreds of sculptures and large mirrors to craft an infinite horizontal space. This visually striking display offered a kaleidoscopic perspective of objects, creating a mysterious and captivating experience.\nArtists Vaishali and Sanjeev created a poignant portrait of contemporary man alienated from himself, entangled in an unquenchable web of surplus desires. The installation's title, borrowed from a long poem written by Sanjeev in the same year, is considered a milestone in Marathi poetry. A particularly striking element of the installation was its novel use of stock market ticker tape imagery.\n\n( to read essays by Abhay Sardesai and Kumar Ketkar please download the pdf )",
      pdfLink: "/pdfs/all-that-i-wanna.pdf",
      galleryImages: ["/lovable-uploads/9d363ef4-ae7f-409c-bab8-1d15a1b7cc59.png", "/lovable-uploads/179dc95f-93b6-4b03-8e95-6ceb022d900f.png", "/lovable-uploads/c47deaef-15d4-492f-877c-c4e45676d56a.png", "/lovable-uploads/12131ea7-e672-4bed-8725-f4876c205095.png", "/lovable-uploads/db39f60c-0ddf-415a-aacf-4567bd13eff3.png", "/lovable-uploads/8936f780-f10c-4703-8489-f51297b9313e.png", "/lovable-uploads/11d68ef1-ddf7-4c01-8bc5-3418c1857dcc.png", "/lovable-uploads/c7ccfc85-c495-472b-a5bc-b1f67bcfa68c.png", "/lovable-uploads/0128647a-98ba-46ee-b25e-9173742ab626.png", "/lovable-uploads/a651269d-946e-4aea-92dc-c8f01cdf8c07.png", "/lovable-uploads/0e347106-d2bd-41f3-b56f-11cf29261adb.png", "/lovable-uploads/e0757729-0594-445a-be51-7f2224aaf593.png"]
    },
    
    // Publications Category
    {
      id: 101,
      title: "Tits Clits & Elephant Dick",
      year: "2007",
      category: "publication",
      tab: "tits-clits-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Kumar Ketkar and Gitanjali Dang. Published by Ashish Balram Nagpal Galleries, 2007. Hard Cover. Accompanied by a CD of the two watercolours books exhibited at the show.",
      pdfLink: "/pdfs/tits-clits-publication.pdf"
    },
    {
      id: 102,
      title: "Kegel Exercise (Ashwani Mudra)",
      year: "2007",
      category: "publication",
      tab: "kegel-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Gitanjali Dang. Published by Pundole Art Gallery, 2007.",
      pdfLink: "/pdfs/kegel-publication.pdf"
    },
    {
      id: 103,
      title: "La Peau De Changrin : Who Is Afraid Of The Shrinking Skin",
      year: "2005",
      category: "publication",
      tab: "la-peau-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Kumar Ketkar And Abhay Sardesai. Published by Pundole Art Gallery. 2005.",
      pdfLink: "/pdfs/la-peau-publication.pdf"
    },
    {
      id: 104,
      title: "Everything You Ever Wanted To Know About Bad Breath But Were Afraid To Ask Alfred Hitchcock (part I)",
      year: "2008",
      category: "publication",
      tab: "bad-breath-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Gitanjali Dang. Published by Bombay Art Gallery, 2008.",
      pdfLink: "/pdfs/bad-breath-publication.pdf"
    },
    {
      id: 105,
      title: "Bad Breath And Fresh Plastic Flowers",
      year: "2010",
      category: "publication",
      tab: "bad-breath-flowers-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works, essay by Gitanjali Dang, Published by Mathew Gallery, 2010.",
      pdfLink: "/pdfs/bad-breath-flowers-publication.pdf"
    },
    {
      id: 106,
      title: "One Two Three … To Happy Galaxy",
      year: "2008",
      category: "publication",
      tab: "happy-galaxy-publication",
      image: "/placeholder.svg",
      description: "A limited edition book, with colour plates of original watercolours. Essay by Gitanjali Dang, Published by Ashish Balram Nagpal Galleries, and Poetrywala, 2008.",
      pdfLink: "/pdfs/happy-galaxy-publication.pdf"
    },
    {
      id: 107,
      title: "Rumour Of The Truth",
      year: "2003",
      category: "publication",
      tab: "rumour-truth-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Arun Sadhu and Ranjit Hoskote, In-house Publication, 2003.",
      pdfLink: "/pdfs/rumour-truth-publication.pdf"
    },
    {
      id: 108,
      title: "All That I Wanna Do",
      year: "2005",
      category: "publication",
      tab: "all-wanna-do-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Kumar Ketkar And Abhay Sardesai. Published In-house, 2005.",
      pdfLink: "/pdfs/all-wanna-do-publication.pdf"
    },
    {
      id: 109,
      title: "Acquire, Merge Or Collaborate",
      year: "2007",
      category: "publication",
      tab: "acquire-merge-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Dilip Chitre and Gitanjali Dang. Accompanied by a reprint of the article by Robin Blackburn. Published by Ashish Balram Nagpal Galleries, 2007.",
      pdfLink: "/pdfs/acquire-merge-publication.pdf"
    },
    {
      id: 110,
      title: "Imp In The Garden And Other Fairy Tales",
      year: "2010",
      category: "publication",
      tab: "imp-garden-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works and essay by Ranjit Hoskote. Published by Pundole Art Gallery, 2010.",
      pdfLink: "/pdfs/imp-garden-publication.pdf"
    },
    {
      id: 111,
      title: "Rx",
      year: "2008",
      category: "publication",
      tab: "rx-publication",
      image: "/placeholder.svg",
      description: "Catalogue with colour plates of the works, essay by Gitanjali Dang, In-house publication, 2008.",
      pdfLink: "/pdfs/rx-publication.pdf"
    },
    {
      id: 112,
      title: "Sick Paintings",
      year: "2011",
      category: "publication",
      tab: "sick-paintings-publication",
      image: "/placeholder.svg",
      description: "A special publication of colour plates of the works and poetry by Franck Andrè Jamme. Published by Poetrywala, 2011.",
      pdfLink: "/pdfs/sick-paintings-publication.pdf"
    }
  ];

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
                <Button variant={selectedCategory === 'installation' ? 'default' : 'outline'} onClick={() => setSelectedCategory('installation')} className={selectedCategory === 'installation' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
                  All Works
                </Button>
                <Button variant={selectedCategory === 'publication' ? 'default' : 'outline'} onClick={() => setSelectedCategory('publication')} className={selectedCategory === 'publication' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}>
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
                      <h2 className={`text-2xl font-serif font-bold mt-2 mb-4 ${selectedWork.title === "la peau de chagrin (who is afraid of shrinking skin)" ? "italic" : ""}`}>{selectedWork.title}</h2>
                      
                      <ScrollArea className="flex-1 pr-4">
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedWork.description
                            .split(/(\bLa Peau de Chagrin\b|\bla peau de chagrin\b|\bAswani Mudra\b)/g)
                            .map((part, index) => {
                              if (part === 'La Peau de Chagrin' || part === 'la peau de chagrin' || part === 'Aswani Mudra') {
                                return <em key={index}>{part}</em>;
                              }
                              return part;
                            })}
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