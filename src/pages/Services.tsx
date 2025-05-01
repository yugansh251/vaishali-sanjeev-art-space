
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const books = [
    {
      id: 1,
      title: "Kavita",
      year: "2001",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      price: "₹599",
      available: true
    },
    {
      id: 2,
      title: "Search Engine",
      year: "2004",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      price: "₹699",
      available: true
    },
    {
      id: 3,
      title: "All That I Wanna Do",
      year: "2005",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      price: "₹749",
      available: true
    },
    {
      id: 4,
      title: "Mutatis Mutandis",
      year: "2010",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      price: "₹799",
      available: false
    }
  ];

  const artworks = [
    {
      id: 1,
      title: "Untitled #1",
      medium: "Mixed Media on Canvas",
      dimensions: "36 x 48 inches",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      price: "₹45,000",
      available: true
    },
    {
      id: 2,
      title: "Contemplation",
      medium: "Acrylic on Paper",
      dimensions: "24 x 30 inches",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      price: "₹32,000",
      available: true
    },
    {
      id: 3,
      title: "Urban Rhythm #3",
      medium: "Digital Print",
      dimensions: "18 x 24 inches, Limited Edition of 10",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
      price: "₹15,000",
      available: true
    },
    {
      id: 4,
      title: "Fragmented Reality",
      medium: "Mixed Media Installation",
      dimensions: "Variable Dimensions",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      price: "Price on Request",
      available: true
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="portfolio-container">
          <SectionTitle 
            title="Books for Sale" 
            subtitle="Explore my published collections of poetry and written works."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {books.map((book) => (
              <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={book.image} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{book.year}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{book.price}</span>
                    {book.available ? (
                      <Button size="sm" className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
                        Purchase
                      </Button>
                    ) : (
                      <span className="text-sm text-gray-500">Out of Stock</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <SectionTitle 
            title="Artwork for Sale" 
            subtitle="Original artworks and limited edition prints available for collection."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                <div className="md:w-1/2">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title} 
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-semibold">{artwork.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{artwork.medium}</p>
                    <p className="text-sm text-gray-600">{artwork.dimensions}</p>
                    <p className="font-medium text-lg mt-4">{artwork.price}</p>
                  </div>
                  {artwork.available && (
                    <Button className="mt-6 bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
                      Inquire About Purchase <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-portfolio-lightGray rounded-lg text-center">
            <h3 className="text-2xl font-serif font-semibold mb-4">Custom Commissions</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Interested in commissioning a custom artwork or discussing potential collaborations? 
              I'm open to creating unique pieces tailored to your space and vision.
            </p>
            <Button asChild className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
              <a href="/contact">Contact for Inquiries</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
