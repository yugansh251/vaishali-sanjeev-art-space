
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
              Vaishali Sanjeev (Sanjeev Khandekar) is a reputed Marathi writer and visual artist based in Mumbai. 
              With a career spanning several decades, his work traverses the boundaries of literature and visual expression.
            </p>
            
            <p className="text-gray-700 mb-4">
              Known for his significant contributions to Marathi literature, his poetry collections include 
              "Kavita," "Search Engine," "All That I Wanna Do," and "Mutatis Mutandis." His edited work, "Sankalp," 
              was awarded by the prestigious Marathi Sahitya Parishad.
            </p>
            
            <p className="text-gray-700 mb-6">
              Beyond literature, his visual art installations have been exhibited across notable galleries, 
              exploring themes of identity, sexuality, and human experience through various mediums.
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
