
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import FeaturedWorks from '@/components/FeaturedWorks';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Biography />
      <FeaturedWorks />
      <Contact />
    </Layout>
  );
};

export default Index;
