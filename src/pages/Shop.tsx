import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const products = [
  {
    id: 1,
    title: "Triumph of Market...",
    image: "/images/shop/triumph-of-market-1.jpg",
    medium: "Makrana White Marble, Italian Black Marble, Jade, Blue Onyx, Badal Stone, Lapis Lazuli, Quartz, Labradorite and Coloured Marble Dust",
    size: '15" × 15"',
    year: "2013"
  },
  {
    id: 2,
    title: "Triumph of Market...",
    image: "/images/shop/triumph-of-market-2.jpg",
    medium: "Makrana White Marble, Italian Black Marble, Jade, Blue Onyx, Lapis Lazuli, Labradorite and Coloured Marble Dust",
    size: '15" × 15"',
    year: "2013"
  },
  {
    id: 3,
    title: "Untitled",
    image: "/images/shop/untitled-1.jpg",
    medium: "Water colour on paper",
    size: '10" × 7"',
    year: "2007"
  },
  {
    id: 4,
    title: "Untitled",
    image: "/images/shop/untitled-2.jpg",
    medium: "Water colour on paper",
    size: '15.5" × 12"',
    year: "2007"
  }
];

const Shop = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="portfolio-container">
          <SectionTitle 
            title="Shop" 
            centered
          />
          
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Original artworks available for acquisition. Each piece is unique and comes with a certificate of authenticity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square overflow-hidden bg-portfolio-lightGray mb-6">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.medium}</p>
                  <p className="text-sm text-gray-500">
                    {product.size} • {product.year}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-block mt-4 px-6 py-2 border border-gray-900 text-gray-900 text-sm uppercase tracking-wider hover:bg-gray-900 hover:text-white transition-colors duration-300"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
