
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
            title="The Uncommon Alliance: Narkar and Khandekar's Shared Canvas" 
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
              <h3 className="text-2xl font-serif font-semibold mb-6">Artistic Collaborators</h3>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  Artistic collaboration, while not novel, rarely sustains itself as a primary mode of practice. For two decades, Sanjeev Khandekar and
                  Vaishali Narkar have defied this norm, forging a dynamic partnership that has yielded a diverse and compelling body of work; that
                  dissects the complexities of the 21st century.
                </p>
                
                <p>
                  Sanjeev Khandekar's multifaceted persona extends beyond the visual arts, -a polymath with credentials in literature and activism,
                  brings a critical lens to their visual output. (He is a respected poet, writer, social activist, and passionate gardener) Narkar, a formally
                  trained artist from Sir J.J. College of Art, provides technical and aesthetic rigor.
                </p>
                
                <p>
                  Their recent production design, jointly produced, for Netflix's "Cobalt Blue" demonstrated their ability to translate painterly vision into
                  cinematic form, garnering critical acclaim.
                </p>
                
                <p>
                  Known for their fearless exploration of diverse mediums, Narkar and Khandekar consistently challenge conventional artistic boundaries.
                  Their collaborative work is notable for its exploration of diverse mediums and its thematic breadth. From environmental degradation
                  and genetic manipulation to the ascendancy of finance and the virtualisation of reality, their output reflects a sustained engagement
                  with contemporary anxieties.
                </p>
                
                <p>
                  Unconventional motifs – stock tickers, microscopic photographs modified into a new imagery, urban detritus – and even bodily fluids,- are deployed to expose the often-obscured realities of the biosocial sphere. These elements serve as
                  powerful visual metaphors, highlighting the often-overlooked realities of our contemporary landscape.
                </p>
                
                <p>
                  Through large-scale installations, intricate marble inlays, expansive embroideries, and sculptural forms including ceramic objects and
                  paintings interfaced with another screen in between, Narkar and Khandekar function as visual analysts, charting the anomalies and
                  deviations of the present. Their work, documented in this compilation, serves as a testament to the enduring power of collaborative
                  inquiry in an era of rapid transformation.
                </p>
                
                <p>
                  Vaishali & Sanjeev; in their output, frequently confront the viewer with uncomfortable realities, those typically obscured or sanitised.
                  This penchant for unvarnished depiction courts peril in a market favouring the facile and ostensibly uplifting which sometimes might
                  prove even risky.
                </p>
                
                <p>
                  The very substance of their work—its motifs and subject matter—often diverges sharply from prevailing aesthetic norms. Bodily
                  effluvia, financial data streams, microbial cultures, or electronically magnified biological imagery of internal organs, malignancy, and
                  fragmentation: these are the constituent elements of their oeuvre. Such materials, undeniably, can evoke visceral revulsion. Yet, this
                  very reaction, the disquiet they inspire, is often a hallmark of significant artistic endeavour, a deliberate provocation that challenges
                  complacent perception.
                </p>
                
                <p>
                  More importantly their works are characterised by meticulous execution, complex, multi-layered visual narratives, a considered diversity
                  of media, and an unambiguous articulation of their underlying themes. These attributes, combined, ensure a sustained impact, leaving
                  a lingering impression on the observer.
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
