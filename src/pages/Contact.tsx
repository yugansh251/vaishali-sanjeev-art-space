
import Layout from '@/components/Layout';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="portfolio-container px-6">
          <div className="mb-8 flex justify-center">
            <h1 className="text-4xl font-sans font-bold text-gray-900">Contact</h1>
          </div>
          
          <Contact />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
