
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import Biography from '@/components/Biography';
import FeaturedWorks from '@/components/FeaturedWorks';
import InterviewVideos from '@/components/InterviewVideos';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Biography />
      <FeaturedWorks />
      <InterviewVideos />
    </Layout>
  );
};

export default Index;
