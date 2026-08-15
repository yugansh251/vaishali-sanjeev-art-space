import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import notStillLife1 from '@/assets/not-still-life-1.jpg';
import notStillLife2 from '@/assets/not-still-life-2-new.jpg';
import notStillLife3 from '@/assets/not-still-life-3-new.jpg';
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
import ragmala7 from '@/assets/ragmala-7-new.jpg';
import ragmala8 from '@/assets/ragmala-8-new.jpg';
import ragmala9 from '@/assets/ragmala-9-new.jpg';
import ragmala10 from '@/assets/ragmala-10-new.jpg';
import ragmala11 from '@/assets/ragmala-11-new.jpg';
import ragmala12 from '@/assets/ragmala-12-new.jpg';
import ragmala13 from '@/assets/ragmala-13-new.jpg';
import ragmala14 from '@/assets/ragmala-14-new.jpg';
import ragmala15 from '@/assets/ragmala-15-new.jpg';
import triumph1 from '@/assets/triumph-new-1.jpg';
import triumph2 from '@/assets/triumph-new-2.jpg';
import triumph3 from '@/assets/triumph-new-3.jpg';
import triumph4 from '@/assets/triumph-new-4.jpg';
import triumph5 from '@/assets/triumph-new-5.jpg';
import triumph6 from '@/assets/triumph-new-6.jpg';
import triumph7 from '@/assets/triumph-new-7.jpg';
import triumph8 from '@/assets/triumph-new-8.jpg';
import triumph9 from '@/assets/triumph-new-9.jpg';
import triumph10 from '@/assets/triumph-new-10.jpg';
import triumph11 from '@/assets/triumph-new-11.jpg';
import triumph12 from '@/assets/triumph-new-12.jpg';
import triumph13 from '@/assets/triumph-new-13.jpg';
import triumph14 from '@/assets/triumph-new-14.jpg';
import angry1 from '@/assets/angry-1-new.jpg';
import angry2 from '@/assets/angry-2-new.jpg';
import angry3 from '@/assets/angry-3-new.jpg';
import angry4 from '@/assets/angry-4-new.jpg';
import angry5 from '@/assets/angry-5-new.jpg';
import angry6 from '@/assets/angry-6-new.jpg';
import angrySignCover from '@/assets/angry-sign-cover-new.png';
import acquireMergeCover from '@/assets/acquire-merge-cover.png';
import badBreathCover from '@/assets/bad-breath-cover.png';
import angry7 from '@/assets/angry-7-new.jpg';
import angry8 from '@/assets/angry-8-new.jpg';
import angry9 from '@/assets/angry-9-new.jpg';
import angry10 from '@/assets/angry-10-new.jpg';
import angry11 from '@/assets/angry-11-new.jpg';
import george1 from '@/assets/george-1.jpg';
import george2 from '@/assets/george-2.jpg';
import george3 from '@/assets/george-3.jpg';
import imp1 from '@/assets/imp-garden-1-new.jpg';
import imp2 from '@/assets/imp-garden-2-new.jpg';
import imp3 from '@/assets/imp-garden-3-new.jpg';
import imp4 from '@/assets/imp-garden-4-new.jpg';
import imp5 from '@/assets/imp-garden-5-new.jpg';
import imp6 from '@/assets/imp-garden-6-new.jpg';
import imp7 from '@/assets/imp-garden-7-new.jpg';
import imp8 from '@/assets/imp-garden-8-new.jpg';
import imp9 from '@/assets/imp-garden-9-new.jpg';
import imp10 from '@/assets/imp-garden-10-new.jpg';
import imp11 from '@/assets/imp-11.jpg';
import imp12 from '@/assets/imp-12.jpg';
import hitchcock1 from '@/assets/hitchcock-1.jpg';
import hitchcock2 from '@/assets/hitchcock-2.jpg';
import hitchcock3 from '@/assets/hitchcock-3.jpg';
import hitchcock4 from '@/assets/hitchcock-4.jpg';
import hitchcock5 from '@/assets/hitchcock-5.jpg';
import hitchcock6 from '@/assets/hitchcock-6.jpg';
import hitchcock7 from '@/assets/hitchcock-7.jpg';
import hitchcock8 from '@/assets/hitchcock-8.jpg';
import hitchcock9 from '@/assets/hitchcock-9.jpg';
import hitchcock10 from '@/assets/hitchcock-10.jpg';
import hitchcock11 from '@/assets/hitchcock-11.jpg';
import hitchcock12 from '@/assets/hitchcock-12.jpg';
import hitchcock13 from '@/assets/hitchcock-13.jpg';
import hitchcock3_1 from '@/assets/hitchcock3-1.jpg';
import hitchcock3_2 from '@/assets/hitchcock3-2.jpg';
import hitchcock3_3 from '@/assets/hitchcock3-3.jpg';
import whatdoilove1 from '@/assets/whatdoilove-1.jpg';
import whatdoilove2 from '@/assets/whatdoilove-2.jpg';
import whatdoilove3 from '@/assets/whatdoilove-3.jpg';
import whatdoilove4 from '@/assets/whatdoilove-4.jpg';
import whatdoilove5 from '@/assets/whatdoilove-5.jpg';
import whatdoilove6 from '@/assets/whatdoilove-6.jpg';
import whatdoilove7 from '@/assets/whatdoilove-7.jpg';
import whatdoilove8 from '@/assets/whatdoilove-8.jpg';
import whatdoilove9 from '@/assets/whatdoilove-9.jpg';
import whatdoilove10 from '@/assets/whatdoilove-10.jpg';
import whatdoilove11 from '@/assets/whatdoilove-11.jpg';
import whatdoilove12 from '@/assets/whatdoilove-12.jpg';
import whatdoilove13 from '@/assets/whatdoilove-13.jpg';
import lapeaudechagrin1 from '@/assets/lapeau-1-new.jpg';
import lapeaudechagrin2 from '@/assets/lapeau-2-new.jpg';
import lapeaudechagrin3 from '@/assets/lapeau-3-new.jpg';
import lapeaudechagrin4 from '@/assets/lapeau-4-new.jpg';
import lapeaudechagrin5 from '@/assets/lapeau-5-new.jpg';
import lapeaudechagrin6 from '@/assets/lapeau-6-new.jpg';
import lapeaudechagrin7 from '@/assets/lapeau-7-new.jpg';
import lapeaudechagrin8 from '@/assets/lapeau-8-new.jpg';
import lapeaudechagrin9 from '@/assets/lapeau-9-new.jpg';
import lapeaudechagrin10 from '@/assets/lapeau-10-new.jpg';
import lapeaudechagrin11 from '@/assets/lapeau-11-new.jpg';
import lapeaudechagrin12 from '@/assets/lapeau-12-new.jpg';
import tcedGallery1 from '@/assets/tced-gallery-1.jpg';
import tcedGallery2 from '@/assets/tced-gallery-2.jpg';
import tcedGallery3 from '@/assets/tced-gallery-3.jpg';
import tcedGallery4 from '@/assets/tced-gallery-4.jpg';
import tcedGallery5 from '@/assets/tced-gallery-5.jpg';
import tcedGallery6 from '@/assets/tced-gallery-6.jpg';
import tcedGallery7 from '@/assets/tced-gallery-7.jpg';
import tcedGallery8 from '@/assets/tced-gallery-8.jpg';
import tcedGallery9 from '@/assets/tced-gallery-9.jpg';
import tcedGallery10 from '@/assets/tced-gallery-10.jpg';
import tcedGallery11 from '@/assets/tced-gallery-11.jpg';
import tcedGallery12 from '@/assets/tced-gallery-12.jpg';
import tcedGallery13 from '@/assets/tced-gallery-13.jpg';
import tcedGallery14 from '@/assets/tced-gallery-14.jpg';
import tcedGallery15 from '@/assets/tced-gallery-15.jpg';
import tcedGallery16 from '@/assets/tced-gallery-16.jpg';
import kegel1 from '@/assets/kegel-1.jpg';
import kegel2 from '@/assets/kegel-2.jpg';
import kegel3 from '@/assets/kegel-3.jpg';
import kegel4 from '@/assets/kegel-4.jpg';
import kegel5 from '@/assets/kegel-5.jpg';
import kegel6 from '@/assets/kegel-6.jpg';
import allthatwanna1 from '@/assets/allthatwanna-1.jpg';
import allthatwanna2 from '@/assets/allthatwanna-2.jpg';
import allthatwanna3 from '@/assets/allthatwanna-3.jpg';
import allthatwanna4 from '@/assets/allthatwanna-4.jpg';
import allthatwanna5 from '@/assets/allthatwanna-5.jpg';
import allthatwanna6 from '@/assets/allthatwanna-6.jpg';
import allthatwanna7 from '@/assets/allthatwanna-7.jpg';
import allthatwanna8 from '@/assets/allthatwanna-8.jpg';
import allthatwanna9 from '@/assets/allthatwanna-9.jpg';
import allthatwanna10 from '@/assets/allthatwanna-10.jpg';
import allthatwanna11 from '@/assets/allthatwanna-11.jpg';
import allthatwanna12 from '@/assets/allthatwanna-12.jpg';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { LayoutGrid, Image, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
// Additional PDFs data
const additionalPdfs = [
  { id: 1, title: "'Kristallnacht' – night of a broken glass", pdfLink: "/pdfs/Kristallnacht-2.pdf", thumbnail: "/images/thumbnails/kristallnacht.png" },
  { id: 2, title: "Bad Breath", pdfLink: "/pdfs/bad-breath.pdf", thumbnail: "/images/thumbnails/bad-breath.png" },
  { id: 3, title: "Freedom in the Cloud", pdfLink: "/pdfs/freedom-in-the-cloud.pdf", thumbnail: "/images/thumbnails/freedom-in-the-cloud.png" },
  { id: 4, title: "Let's Have a Fair Game", pdfLink: "/pdfs/lets-have-a-fair-game.pdf", thumbnail: "/images/thumbnails/lets-have-a-fair-game.png" },
  { id: 6, title: "Prayer For Peace", pdfLink: "/pdfs/prayer-for-peace.pdf", thumbnail: "/images/thumbnails/prayer-for-peace.png" },
  { id: 7, title: "Rx", pdfLink: "/pdfs/rx.pdf", thumbnail: "/images/thumbnails/rx.png" },
  { id: 8, title: "Third Life", pdfLink: "/pdfs/third-life.pdf", thumbnail: "/images/thumbnails/third-life.png" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('installation');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState<string | null>(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const isMobile = useIsMobile();
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
    italicTitle?: boolean;
    subtitle?: string;
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
      description: "In this new series, Vaishali Narkar and Sanjeev Khandekar confront ecological collapse through six multimedia works. Blending acrylic, watercolour, oil, and etched glass, the pieces distort and fragment vision‚ mirroring environmental disarray. The artists critique the Capitalocene, revealing how capitalist greed underpins ecological destruction. Glass surfaces blur the line between art and urgency, between beauty and breakdown. A dark pun on the genre, not Still Life resists stasis, insisting life is anything but still. It is a call to see, and to act, before stillness becomes silence.",
      pdfLink: "/pdfs/not-still-life.pdf",
      galleryImages: [notStillLife1, notStillLife2, notStillLife3],
      italicTitle: true
    },
    {
      id: 2,
      title: "\"Honey, I Shrunk My Tongue\"",
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
      title: "Ragmala The Songs Of Anthropocene",
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
      title: "TRIUMPH OF MARKET",
      year: "2008",
      category: "installation",
      tab: "triumph",
      image: "/lovable-uploads/0961b586-5aca-42d8-89eb-63fa92309a7f.png",
      description: "Long before Yale University's research on hormonal fluctuations in men and women engaged in stock market trading, Sanjeev Khandekar was already probing this terrain through his art. In his poetry and water colors, Khandekar pioneered a distinctive visual and conceptual vocabulary ‚using financial capital as both symbol and structure to map the shifting contours of contemporary global society.\nIn their collaborative works, Vaishali and Sanjeev Khandekar extend this exploration further. Their acrylic-on-canvas paintings and intricate marble inlay pieces transform stock market imagery into abstracted 'Moneyscapes'.These works fuse aesthetic innovation with social critique, confronting the ways in which financialization ‚once a tool- has become a dominating, often destructive, force.\nThe artists employ the stock market ticker- ubiquitous, frenetic, and laden with meaning-alongside the traditionally opulent medium of marble inlay, re-contextualizing both to unveil the intimate entanglements of trading, desire, and the normalization of excess in late-capitalist culture.",
      pdfLink: "/pdfs/Triumph-of-market.pdf",
      galleryImages: [triumph1, triumph2, triumph3, triumph4, triumph5, triumph6, triumph7, triumph8, triumph9, triumph10, triumph11, triumph12, triumph13, triumph14]
    },
    {
      id: 5,
      title: "I am so angry, I made this sign",
      year: "2012",
      category: "installation",
      tab: "angry",
      image: angrySignCover,
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
      galleryImages: [george1, george2, george3],
      italicTitle: true
    },
    {
      id: 7,
      title: "Imp In The Garden and Other Fairy Tales",
      year: "2010",
      category: "installation",
      tab: "imp-in-the-garden",
      image: "/lovable-uploads/87ca6839-77e3-463a-a35d-bbb022447dfa.png",
      description: "Histograms of an Anxious Present: 'Imp in the Garden and Other Fairy Tales'\nAll of us inherently seek a sense of everyday normality to navigate life's demands. Yet, perfection, beauty, and even horror represent hazardous departures from this norm, capable of plunging us into fantasia or nightmare. Vaishali & Sanjeev confront these extremes head-on in their mixed-media works, 'Imp in the Garden and Other Fairy Tales', creating captivating entanglements of beauty and mutancy. Through the traditional art of embroidery, they weave intricate narratives that allude to the human costs of ecological catastrophe, genetic manipulation, and biological warfare. Their work serves as a Zen koan, shocking us into a deep awareness of the complexities underlying our current historical moment.",
      pdfLink: "/pdfs/imp-in-the-garden.pdf",
      galleryImages: [imp1, imp2, imp3, imp4, imp5, imp6, imp7, imp8, imp9, imp10, imp11, imp12]
    },
    {
      id: 8,
      title: "Everything You Wanted to Know About Bad Breath, But Were Afraid to Ask Alfred Hitchcock part I",
      year: "2008",
      category: "installation",
      tab: "bad-breath",
      image: badBreathCover,
      description: "This spectacular show of paintings and a sculpture deftly tackles pressing global issues by weaving together critical crises and widely circulated memes ( common societal narratives, cultural references, and popular understandings ) to construct powerful visual arguments. In his exhibition, \"Everything You Ever Wanted to Know about Bad Breath but were Afraid to Ask Alfred Hitchcock (Part I)\", the elegant white test tube orchid is employed as a central motif. These tissue cultured orchids symbolize the broader challenges of environmental degradation and the complex dilemmas arising from the genetic modification of organisms. Through a fusion of contentious subject matter and noir cinema aesthetics, Khandekar creates a captivating and thought-provoking experience, akin to a perfect double bill for the discerning viewer.",
      pdfLink: "/pdfs/bad-breath-hitchcock.pdf",
      galleryImages: [hitchcock1, hitchcock2, hitchcock3, hitchcock4, hitchcock5, hitchcock6, hitchcock7, hitchcock8, hitchcock9, hitchcock10, hitchcock11, hitchcock12, hitchcock13],
      italicTitle: true
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
      galleryImages: [hitchcock3_1, hitchcock3_2, hitchcock3_3],
      italicTitle: true
    },
    {
      id: 10,
      title: "Acquire, Merge or Collaborate..!",
      year: "2007",
      category: "installation",
      tab: "acquire-merge",
      image: acquireMergeCover,
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
      pdfLink: "/pdfs/what-do-i-love.pdf",
      galleryImages: [whatdoilove1, whatdoilove2, whatdoilove3, whatdoilove4, whatdoilove5, whatdoilove6, whatdoilove7, whatdoilove8, whatdoilove9, whatdoilove10, whatdoilove11, whatdoilove12, whatdoilove13]
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
      galleryImages: [lapeaudechagrin1, lapeaudechagrin2, lapeaudechagrin3, lapeaudechagrin4, lapeaudechagrin5, lapeaudechagrin6, lapeaudechagrin7, lapeaudechagrin8, lapeaudechagrin9, lapeaudechagrin10, lapeaudechagrin11, lapeaudechagrin12]
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
      galleryImages: [tcedGallery1, tcedGallery2, tcedGallery3, tcedGallery4, tcedGallery5, tcedGallery6, tcedGallery7, tcedGallery8, tcedGallery9, tcedGallery10, tcedGallery11, tcedGallery12, tcedGallery13, tcedGallery14, tcedGallery15, tcedGallery16]
    },
    {
      id: 14,
      title: "Kegel Exercise",
      year: "2007",
      category: "installation",
      tab: "kegel-exercise-2007",
      image: "/lovable-uploads/2e898325-4e7e-4a20-a896-100a15bef676.png",
      description: "The exhibition, \"The Kegel Exercises: Aswani Mudra,\" (2007)  delves into the unsettling realities of late multicultural capitalism, where the idealism gives way to the follies of recklessness and petulance. Through a powerful confluence of art and societal critique, it explores how the relentless pursuit of financialization morphs into a destructive force. The show is an example of the use of the ubiquitous stock market ticker and the unique and intricate medium of marble inlay as potent symbols, demonstrating how the artists harnesse them to expose the interwoven dramas of trading, sexuality, and the unsettling normalization of insatiable  desires in our contemporary world.\n\n( Download pdf to read an essay by Gitanjali Dang)",
      pdfLink: "/pdfs/kegel-exercise.pdf",
      galleryImages: [kegel1, kegel2, kegel3, kegel4, kegel5, kegel6],
      subtitle: "Aswani Mudra"
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
      galleryImages: [allthatwanna1, allthatwanna2, allthatwanna3, allthatwanna4, allthatwanna5, allthatwanna6, allthatwanna7, allthatwanna8, allthatwanna9, allthatwanna10, allthatwanna11, allthatwanna12],
      italicTitle: true
    },
    
    // Publications Category
    {
      id: 101,
      title: "Tits Clits & Elephant Dick",
      year: "2007",
      category: "publication",
      tab: "tits-clits-publication",
      image: "/images/publications/tits-clits-elephant-dick.jpg",
      description: "Catalogue with colour plates of the works and essay by Kumar Ketkar and Gitanjali Dang. Published by Ashish Balram Nagpal Galleries, 2007. Hard Cover. Accompanied by a CD of the two watercolours books exhibited at the show.",
      pdfLink: "/pdfs/tits-clits-publication.pdf"
    },
    {
      id: 102,
      title: "Kegel Exercise (Ashwani Mudra)",
      year: "2007",
      category: "publication",
      tab: "kegel-publication",
      image: "/images/publications/kegel-exercise.jpg",
      description: "Catalogue with colour plates of the works and essay by Gitanjali Dang. Published by Pundole Art Gallery, 2007.",
      pdfLink: "/pdfs/kegel-publication.pdf"
    },
    {
      id: 103,
      title: "La Peau De Chagrin: Who Is Afraid Of The Shrinking Skin",
      year: "2005",
      category: "publication",
      tab: "la-peau-publication",
      image: "/images/publications/la-peau-de-chagrin.jpg",
      description: "Catalogue with colour plates of the works and essay by Kumar Ketkar And Abhay Sardesai. Published by Pundole Art Gallery. 2005.",
      pdfLink: "/pdfs/la-peau-publication.pdf"
    },
    {
      id: 104,
      title: "Everything You Ever Wanted To Know About Bad Breath But Were Afraid To Ask Alfred Hitchcock (Part I)",
      year: "2008",
      category: "publication",
      tab: "bad-breath-publication",
      image: "/images/publications/bad-breath-hitchcock.jpg",
      description: "Catalogue with colour plates of the works and essay by Gitanjali Dang. Published by Bombay Art Gallery, 2008.",
      pdfLink: "/pdfs/bad-breath-publication.pdf"
    },
    {
      id: 105,
      title: "Bad Breath And Fresh Plastic Flowers",
      year: "2010",
      category: "publication",
      tab: "bad-breath-flowers-publication",
      image: "/images/publications/bad-breath-fresh-flowers.jpg",
      description: "Catalogue with colour plates of the works, essay by Gitanjali Dang, Published by Mathew Gallery, 2010.",
      pdfLink: "/pdfs/bad-breath-flowers-publication.pdf"
    },
    {
      id: 106,
      title: "One Two Three … To Happy Galaxy",
      year: "2008",
      category: "publication",
      tab: "happy-galaxy-publication",
      image: "/images/publications/one-two-three-happy-galaxy.jpg",
      description: "A limited edition book, with colour plates of original watercolours. Essay by Gitanjali Dang, Published by Ashish Balram Nagpal Galleries, and Poetrywala, 2008.",
      pdfLink: "/pdfs/happy-galaxy-publication.pdf"
    },
    {
      id: 107,
      title: "Rumour Of The Truth",
      year: "2003",
      category: "publication",
      tab: "rumour-truth-publication",
      image: "/images/publications/rumour-of-truth.jpg",
      description: "Catalogue with colour plates of the works and essay by Arun Sadhu and Ranjit Hoskote, In-house Publication, 2003.",
      pdfLink: "/pdfs/rumour-truth-publication.pdf"
    },
    {
      id: 108,
      title: "All That I Wanna Do",
      year: "2005",
      category: "publication",
      tab: "all-wanna-do-publication",
      image: "/images/publications/all-that-i-wanna-do.jpg",
      description: "Catalogue with colour plates of the works and essay by Kumar Ketkar And Abhay Sardesai. Published In-house, 2005.",
      pdfLink: "/pdfs/all-wanna-do-publication.pdf"
    },
    {
      id: 109,
      title: "Acquire, Merge Or Collaborate",
      year: "2007",
      category: "publication",
      tab: "acquire-merge-publication",
      image: "/images/publications/acquire-merge-collaborate.jpg",
      description: "Catalogue with colour plates of the works and essay by Dilip Chitre and Gitanjali Dang. Accompanied by a reprint of the article by Robin Blackburn. Published by Ashish Balram Nagpal Galleries, 2007.",
      pdfLink: "/pdfs/acquire-merge-publication.pdf"
    },
    {
      id: 110,
      title: "Imp In The Garden And Other Fairy Tales",
      year: "2010",
      category: "publication",
      tab: "imp-garden-publication",
      image: "/images/publications/imp-in-garden.jpg",
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
      <section className="pt-32 pb-16 px-4 sm:px-6">
        <div className="portfolio-container max-w-7xl mx-auto">
          <SectionTitle title="Portfolio" centered />

          <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
              <div className="flex overflow-x-auto no-scrollbar rounded-md shadow-sm w-full sm:w-auto sm:inline-flex" role="group">
                <Button variant={selectedCategory === 'installation' ? 'default' : 'outline'} onClick={() => setSelectedCategory('installation')} className={`min-h-[44px] whitespace-nowrap shrink-0 ${selectedCategory === 'installation' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}`}>
                  Art Works
                </Button>
                <Button variant={selectedCategory === 'publication' ? 'default' : 'outline'} onClick={() => setSelectedCategory('publication')} className={`min-h-[44px] whitespace-nowrap shrink-0 ${selectedCategory === 'publication' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}`}>
                  Publications
                </Button>
                <Button variant={selectedCategory === 'additional-pdfs' ? 'default' : 'outline'} onClick={() => setSelectedCategory('additional-pdfs')} className={`min-h-[44px] whitespace-nowrap shrink-0 ${selectedCategory === 'additional-pdfs' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}`}>
                  Additional PDFs
                </Button>
              </div>
              
              <div className="hidden md:flex gap-2 shrink-0">
                <Button aria-label="Grid view" variant={viewMode === 'grid' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('grid')} className={`h-11 w-11 ${viewMode === 'grid' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}`}>
                  <LayoutGrid size={18} />
                </Button>
                <Button aria-label="List view" variant={viewMode === 'list' ? 'default' : 'outline'} size="icon" onClick={() => setViewMode('list')} className={`h-11 w-11 ${viewMode === 'list' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}`}>
                  <Image size={18} />
                </Button>
              </div>
            </div>

            {selectedCategory === 'additional-pdfs' ? (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="border-b border-gray-200 bg-gray-50 px-4 sm:px-6 py-3 grid grid-cols-[auto_1fr_auto] gap-4 items-center">
                  <span className="text-sm font-medium text-gray-600 w-8"></span>
                  <span className="text-sm font-medium text-gray-600">Name</span>
                  <span className="text-sm font-medium text-gray-600">Download file</span>
                </div>
                {additionalPdfs.map(pdf => (
                  <div key={pdf.id} className="border-b border-gray-100 last:border-b-0 px-4 sm:px-6 py-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center hover:bg-gray-50 transition-colors">
                    <div className="w-16 h-12 rounded overflow-hidden flex-shrink-0">
                      <img src={pdf.thumbnail} alt={pdf.title} className="w-full h-full object-cover"  loading="lazy" decoding="async" />
                    </div>
                    <span className="text-sm text-gray-700 truncate">{pdf.title}</span>
                    <a 
                      href={pdf.pdfLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 text-sm text-white bg-portfolio-blue hover:bg-portfolio-darkBlue py-2 px-4 rounded transition-colors"
                    >
                      <Download size={14} />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            ) : ((viewMode === 'grid' || isMobile) && selectedCategory !== 'publication') ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredWorks.map(work => <Card key={work.id} className="gallery-item overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
                    <div className="h-64 overflow-hidden cursor-pointer" onClick={() => setSelectedWork(work)}>
                      <AspectRatio ratio={16 / 9}>
                        <img src={work.image} alt={work.title} className="w-full h-full object-contain image-hover"  loading="lazy" decoding="async" />
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
                          <img src={work.image} alt={work.title} className="w-full h-full object-contain image-hover"  loading="lazy" decoding="async" />
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
                        {work.category !== 'publication' && (
                          <div className="mt-4 flex justify-end flex-shrink-0">
                            <a href={work.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-portfolio-blue hover:text-portfolio-darkBlue">
                              <Download size={14} className="mr-1" />
                              Download PDF
                            </a>
                          </div>
                        )}
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
              }}  loading="lazy" decoding="async" />
                </div>}
            </DialogContent>
          </Dialog>

          {/* Work Details Dialog */}
          <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
            <DialogContent className="max-w-6xl p-0 overflow-hidden">
              {selectedWork && <div className="max-h-[90vh] overflow-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-auto">
                    <div className="h-full min-h-[400px] md:min-h-[500px]">
                      <img src={selectedWork.image} alt={selectedWork.title} className="w-full h-full object-contain"  loading="lazy" decoding="async" />
                    </div>
                    <div className="p-6 md:p-8 h-full min-h-[400px] md:min-h-[500px] flex flex-col">
                      <h2 className={`text-2xl font-serif font-bold ${selectedWork.subtitle ? 'mb-1' : 'mb-4'} ${selectedWork.italicTitle ? "italic" : ""}`}>{selectedWork.title}</h2>
                      {selectedWork.subtitle && <p className="text-xl font-serif italic mb-4">{selectedWork.subtitle}</p>}
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
                      
                      {selectedWork.category !== 'publication' && (
                        <a href={selectedWork.pdfLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-portfolio-blue hover:text-portfolio-darkBlue mt-6">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download size={16} />
                            Download PDF
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Gallery Images Section */}
                  {selectedWork.galleryImages && selectedWork.galleryImages.length > 0 && <div className="border-t border-gray-200 p-6">
                      <h4 className="text-lg font-semibold mb-4">Gallery</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {selectedWork.galleryImages.map((image, index) => <div key={index} className="aspect-square cursor-pointer rounded-lg overflow-hidden hover:opacity-80 transition-opacity" onClick={() => openGalleryImage(image, selectedWork.galleryImages!)}>
                            <img src={image} alt={`${selectedWork.title} gallery ${index + 1}`} className="w-full h-full object-contain"  loading="lazy" decoding="async" />
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