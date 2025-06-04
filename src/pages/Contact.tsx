
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="portfolio-container px-6">
          <div className="mb-8 flex justify-center">
            <img 
              src="/lovable-uploads/9a664e3e-e2c6-435d-92a6-2864531ce8ca.png" 
              alt="Vaishali Sanjeev"
              className="h-16"
            />
          </div>
          
          <SectionTitle
            title="Contact Me"
            subtitle="Reach out for inquiries, collaborations, or just to say hello."
            centered
          />
          
          <Contact />
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
