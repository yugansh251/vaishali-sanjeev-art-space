import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { ExternalLink } from 'lucide-react';

const pressLinks = [
  {
    title: "Discomfort zones",
    source: "The Economic Times",
    url: "https://economictimes.indiatimes.com"
  },
  {
    title: "The idea of freshness in today's world",
    source: "The Economic Times",
    url: "https://economictimes.indiatimes.com"
  },
  {
    title: "Songs of Anthropocene: Sanjeev Khandekar and Vaishali Narkar",
    source: "हाकारा | hākārā",
    url: "https://hakara.in"
  },
  {
    title: "A new art show poses questions at genetic engineering",
    source: "The Economic Times",
    url: "https://economictimes.indiatimes.com"
  },
  {
    title: "Sanjeev Khandekar translated by Abhay Sardesai",
    source: "Portside Review",
    url: "https://portsidereview.com"
  }
];

const Press = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="portfolio-container max-w-5xl">
          <SectionTitle title="Press" centered />
          
          {/* Featured Article */}
          <article className="mb-16 bg-portfolio-lightGray rounded-lg overflow-hidden shadow-md">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="/images/press/raga-sarang.jpg" 
                  alt="Raga Sarang - Silk on silk artwork by Sanjeev and Vaishali"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <span className="text-sm uppercase tracking-wider text-gray-500 font-medium">Review</span>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">Apocalypse Now</h2>
                <p className="text-gray-600 italic mb-4">
                  Sanjeev Khandekar and Vaishali Narkar's textile works frame a cautionary note about tomorrow's dystopia today, finds Azra Bhagat.
                </p>
                <p className="text-sm text-gray-500">
                  Art India: The Art News Magazine of India
                </p>
              </div>
            </div>
            
            <div className="p-8 border-t border-gray-200">
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  Sanjeev Khandekar and Vaishali Narkar contemplate disasterscapes in <em>Ragmala Songs of Anthropocene</em> (Part 1) at Sakshi Salon Mumbai. Using silk on silk and creating distinct visual zones in every artwork, they explore the global crisis engendered by climate change and consumerist culture. Man in his concrete jungle with his selfish greed is bent on destroying nature. The food we eat is genetically modified, waste threatens to clog the waterways, rivers dry up, the number of endangered species rises, and the icecaps slowly begin their meltdown. Sanjeev and Vaishali frame a cautionary note in work after work.
                </p>
                <p className="mb-4">
                  In <em>All that I Wanna Do</em> (2005) Sanjeev had installed innards, organs, and severed limbs made out of acrylic in a gallery in Mumbai. The current exhibition seems to be a more considered and dressed up aftermath of this carnage depicted 13 years ago. The dystopia has been his favourite hunting ground—as a poet in Marathi, Sanjeev has cleverly plumbed sinister situations and futurescapes. The darker truth of our existence is offset by the imbalance created by the act of beautification seen in the works on display. Are we photoshopping the issues around us? Why do we resist accepting the messy truth?
                </p>
                <p className="mb-4">
                  Each artwork comes across as a jigsaw puzzle with various images gathered, arranged, and often stitched together. They purport to reflect the intensity of specific ragas—carcasses in an abattoir, a Bisleri bottle, a hyper-hirsute man among other presences try to drive home the deadly details of a devastatingly mutating world. The formidable Bhairav astride his bull makes an appearance in <em>Dawn</em> for instance. In <em>Raga Sarang</em> there is a scary ram-horned monster with goggly eyes chomping on an animal's head, sitting in a sea of dead fish.
                </p>
                <p className="mb-4">
                  Against a wall of text in the gallery sits a sculpture in a vitrine. Made out of waste material taken from a landfill, it is a portentous object composed of sludge, plastic, leather, fishbones, dung, metal bits, and other detritus. One of the less gross but more terrifying images is the one presented in <em>Undead: Raga Basant</em>—musicians belonging to a religious sect are shown gathered in a circle and as they welcome the spring through their performance, we see maps of the most precious commodity, land, flanking them and a huge urban sprawl in the background.
                </p>
                <p>
                  There is something eerie about the scene—real estate wars and encroachments, the targeting of reason-based science and the exploitation of consumer-happy technology, the disregard for the environment and the endless hunger for spaces, the growth of gated communities and ordered landscapes—all in the presence of robot-like musicians.
                </p>
              </div>
              <p className="mt-6 text-sm text-gray-500 italic">
                Image: Sanjeev and Vaishali, <em>Raga Sarang</em>, Silk on silk, 72" x 44", 2016. Image courtesy the artists and Sakshi Salon.
              </p>
            </div>
          </article>

          {/* Press Links Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">Press Links</h2>
            <div className="grid gap-4">
              {pressLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-gray-300 transition-all duration-300"
                >
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-portfolio-accent transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{link.source}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-portfolio-accent transition-colors flex-shrink-0 ml-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Press;
