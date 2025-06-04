import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import Contact from '@/components/Contact';
const ContactPage = () => {
  return <Layout>
      <section className="pt-32 pb-16">
        <div className="portfolio-container px-6">
          <div className="mb-8 flex justify-center">
            
          </div>
          
          <SectionTitle title="Contact Me" subtitle="Reach out for inquiries, collaborations, or just to say hello." centered />
          
          <Contact />
        </div>
      </section>
    </Layout>;
};
export default ContactPage;