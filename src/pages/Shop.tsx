
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const Shop = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 px-6">
        <div className="portfolio-container">
          <SectionTitle 
            title="Shop" 
            centered
          />
          
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <div className="bg-portfolio-lightGray p-12 rounded-lg shadow-md max-w-md">
              <h2 className="text-2xl font-sans font-semibold mb-4 text-gray-900">
                Under Construction
              </h2>
              <p className="text-gray-600 mb-6">
                We're working hard to bring you an amazing shopping experience. 
                Please check back soon!
              </p>
              <div className="text-6xl mb-4">🚧</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
