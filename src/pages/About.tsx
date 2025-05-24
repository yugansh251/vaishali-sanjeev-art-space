import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
const About = () => {
  const videos = [{
    id: 1,
    title: "Artist Statement: Origins and Inspirations",
    description: "Vaishali & Sanjeev discuss their collaborative journey and sources of inspiration.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video embed URL
  }, {
    id: 2,
    title: "Process and Philosophy",
    description: "An inside look at the studio practices and philosophical underpinnings of their work.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video embed URL
  }];
  return <Layout>
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="portfolio-container max-w-5xl">
          <SectionTitle title="About Vaishali & Sanjeev" centered />
          
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="md:w-1/3">
              <img src="/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png" alt="Vaishali & Sanjeev in studio" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed text-gray-800 mb-6">
                Artistic collaboration, while not novel, rarely sustains itself as a primary mode of practice. For two decades, 
                Vaishali & Sanjeev have defied this norm, forging a dynamic partnership that has yielded a diverse and compelling 
                body of work that dissects the complexities of the 21st century.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-800">
                Through large-scale installations, intricate marble inlays, expansive embroideries, and sculptural forms, 
                Vaishali & Sanjeev function as visual analysts, charting the anomalies and deviations of the present.
              </p>
            </div>
          </div>

          {/* Professional Biodata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            
            
            
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            
            
            
          </div>

          {/* Video Interviews Section */}
          <SectionTitle title="Artist Interviews" subtitle="Insight into process, philosophy and artistic journey" centered className="mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {videos.map(video => <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe className="w-full h-full" src={video.embedUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold font-serif">{video.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;