
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

const About = () => {
  const achievements = [
    { year: '1990-1995', title: 'Environmental journalism and NGO work with Sujan magazine' },
    { year: '2001', title: 'Published "Kavita" poetry collection' },
    { year: '2003', title: 'Art Installation: "Rumour of the Truth"' },
    { year: '2004', title: 'Art Installation: "FLEX - The Fluid Less Sex"' },
    { year: '2005', title: 'Published "All That I Wanna Do"' },
    { year: '2006', title: 'Art Installation: "Tits n Clits n Elephant Dick"' },
    { year: '2007', title: 'Art Installation: "Kegel Exercises (Aswani Mudra)"' },
    { year: '2008', title: 'Art Installation: "In Everything You Ever Wanted to Know about Bad Breath"' },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 px-6 bg-portfolio-lightGray">
        <div className="portfolio-container">
          <SectionTitle 
            title="About Vaishali Sanjeev" 
            centered
          />
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <img 
                src="/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png" 
                alt="Vaishali Sanjeev in studio" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-serif font-semibold mb-6">Writer & Visual Artist</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Vaishali Sanjeev (Sanjeev Khandekar) is a renowned Marathi writer and visual artist based in Mumbai, India. 
                  With a career spanning over three decades, he has made significant contributions to Marathi literature and 
                  the contemporary art scene in India.
                </p>
                
                <p>
                  His literary works include notable poetry collections such as "Kavita," "Search Engine," "All That I Wanna Do," 
                  "Mutatis Mutandis," "Two Poems," "1,2,3... Happy Galaxy," and "Smiles." His edited work, "Sankalp," received 
                  recognition and was awarded by the prestigious Marathi Sahitya Parishad.
                </p>
                
                <p>
                  Beyond his literary pursuits, Vaishali has been actively involved in environmental journalism and NGO work, 
                  particularly with the Sujan magazine from 1990 to 1995. His professional journey also encompasses senior 
                  management roles across various international projects, showcasing his versatility and adaptability.
                </p>
                
                <p>
                  As a visual artist, his installations have been exhibited in various galleries and art spaces. His art explores 
                  themes of identity, sexuality, spirituality, and the human condition, often blurring the boundaries between 
                  different mediums and challenging conventional artistic expressions.
                </p>
                
                <p>
                  Through his dual role as a writer and visual artist, Vaishali Sanjeev continues to push the boundaries of 
                  creative expression, contributing significantly to the cultural landscape of India and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 bg-white">
        <div className="portfolio-container">
          <SectionTitle 
            title="Career Timeline" 
            subtitle="Key milestones and achievements throughout my creative journey."
            centered
          />
          
          <div className="relative">
            {/* Timeline Stem */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-portfolio-blue/30"></div>
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 p-4">
                    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } border-portfolio-blue`}>
                      <span className="text-sm text-portfolio-blue font-bold">{achievement.year}</span>
                      <h4 className="text-xl font-serif font-medium mt-2">{achievement.title}</h4>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-6 w-6 h-6 rounded-full bg-portfolio-blue border-4 border-white"></div>
                  
                  <div className="md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
