import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ImageWithSkeleton from '@/components/ui/image-with-skeleton';

const Biography = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 xl:px-16 bg-white">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle title="Vaishali & Sanjeev" className="mb-6" />
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4 md:text-base leading-relaxed text-sm font-normal">Artistic collaboration, while not novel, rarely sustains itself as a primary mode of practice. For two decades, Vaishali Narkar and Sanjeev Khandekar have defied this norm, forging a dynamic partnership that has yielded a diverse and compelling body of work that dissects the complexities of the 21st century.</p>
            </div>
            
            <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">Known for their fearless exploration of diverse mediums, Vaishali and Sanjeev consistently challenge conventional artistic boundaries. Their collaborative work is notable for its exploration of diverse mediums and its thematic breadth. From environmental degradation and genetic manipulation to the ascendancy of finance and the virtualisation of reality, their output reflects a sustained engagement with contemporary anxieties. Unconventional motifs – stock tickers, microscopic photographs modified into a new imagery, urban detritus, and even bodily fluids, are deployed to expose the often obscured realities of the biosocial sphere. These elements serve as powerful visual metaphors, highlighting the often overlooked realities of our contemporary landscape.</p>
            
            <Button asChild variant="default" className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white w-full sm:w-auto">
              <Link to="/about">
                Read more
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <ImageWithSkeleton 
              src="/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png" 
              alt="Vaishali & Sanjeev in studio" 
              loading="lazy" 
              decoding="async" 
              className="rounded-lg shadow-xl w-full h-auto" 
              skeletonClassName="rounded-lg aspect-[4/3] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
