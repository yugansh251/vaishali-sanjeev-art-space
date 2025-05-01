
import { useState } from 'react';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  interface Work {
    id: number;
    title: string;
    year: string;
    category: 'installation' | 'publication';
    image: string;
    description: string;
  }

  const works: Work[] = [
    {
      id: 1,
      title: "Rumour of the Truth",
      year: "2003",
      category: "installation",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "An interactive installation exploring the nature of truth and perception in contemporary society."
    },
    {
      id: 2,
      title: "FLEX - The Fluid Less Sex",
      year: "2004",
      category: "installation",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      description: "A provocative exploration of gender fluidity and the constraints of societal norms around sexuality."
    },
    {
      id: 3,
      title: "All That I Wanna Do",
      year: "2005",
      category: "installation",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "An immersive installation reflecting on personal desires and societal expectations."
    },
    {
      id: 4,
      title: "Tits n Clits n Elephant Dick",
      year: "2006",
      category: "installation",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "A bold examination of the human body, sexuality, and the taboos surrounding explicit language and imagery."
    },
    {
      id: 5,
      title: "What do I love when I love you, my God?",
      year: "2006",
      category: "installation",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      description: "A spiritual exploration of love, devotion, and the divine through multimedia elements."
    },
    {
      id: 6,
      title: "Kegel Exercises (Aswani Mudra)",
      year: "2007",
      category: "installation",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      description: "An installation connecting traditional practices with contemporary body awareness and control."
    },
    {
      id: 7,
      title: "Kavita",
      year: "2001",
      category: "publication",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "A seminal collection of poetry exploring themes of identity and modernity in the Marathi context."
    },
    {
      id: 8,
      title: "Search Engine",
      year: "2004",
      category: "publication",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "A poetic inquiry into the digital age and how technology shapes our quest for meaning and information."
    },
    {
      id: 9,
      title: "Mutatis Mutandis",
      year: "2010",
      category: "publication",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      description: "A collection examining change and transformation in personal and societal contexts."
    },
    {
      id: 10,
      title: "Smiles",
      year: "2015",
      category: "publication",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      description: "A reflective work on joy, resilience, and the subtle expressions of human emotion."
    }
  ];

  const filteredWorks = selectedCategory === 'all' 
    ? works 
    : works.filter(work => work.category === selectedCategory);

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="portfolio-container">
          <SectionTitle 
            title="Portfolio" 
            subtitle="Explore my work across installations and publications."
            centered
          />

          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className={selectedCategory === 'all' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
              >
                All Works
              </Button>
              <Button
                variant={selectedCategory === 'installation' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('installation')}
                className={selectedCategory === 'installation' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
              >
                Installations
              </Button>
              <Button
                variant={selectedCategory === 'publication' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('publication')}
                className={selectedCategory === 'publication' ? 'bg-portfolio-blue hover:bg-portfolio-darkBlue' : ''}
              >
                Publications
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <div 
                key={work.id} 
                className="gallery-item bg-white rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedWork(work)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title} 
                    className="w-full h-full object-cover image-hover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-portfolio-blue font-medium capitalize">
                    {work.category} • {work.year}
                  </span>
                  <h3 className="text-xl font-serif font-semibold mt-2">{work.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
            <DialogContent className="max-w-3xl p-0 overflow-hidden">
              {selectedWork && (
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
                    <p className="text-gray-700">
                      {selectedWork.description}
                    </p>
                  </div>
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
