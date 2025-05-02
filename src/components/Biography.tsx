
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';

const Biography = () => {
  return (
    <section className="section-padding bg-white">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionTitle 
              title="About Vaishali Sanjeev" 
              className="mb-6"
            />
            
            <p className="text-gray-700 mb-4">
              Vaishali Sanjeev (Sanjeev Khandekar) and Vaishali Narkar have forged a dynamic artistic partnership spanning two decades, 
              creating a diverse and compelling body of work that dissects the complexities of the 21st century.
            </p>
            
            <p className="text-gray-700 mb-4">
              Their collaborative work is notable for its exploration of diverse mediums and thematic breadth. 
              From environmental degradation and genetic manipulation to the ascendancy of finance and the virtualisation of reality, 
              their output reflects a sustained engagement with contemporary anxieties.
            </p>
            
            <p className="text-gray-700 mb-6">
              Through large-scale installations, intricate marble inlays, expansive embroideries, and sculptural forms, 
              Narkar and Khandekar function as visual analysts, charting the anomalies and deviations of the present.
            </p>
            
            <Button asChild variant="default" className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
              <Link to="/about">
                Read Full Biography
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png" 
              alt="Vaishali Sanjeev in studio" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
