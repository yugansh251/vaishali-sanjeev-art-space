
import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const InterviewVideos = () => {
  const [activeTab, setActiveTab] = useState("video1");
  
  const videos = [
    {
      id: "video1",
      title: "Artist Statement: Origins and Inspirations",
      description: "Vaishali & Sanjeev discuss their collaborative journey and sources of inspiration.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video embed URL
    },
    {
      id: "video2",
      title: "Process and Philosophy",
      description: "An inside look at the studio practices and philosophical underpinnings of their work.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video embed URL
    },
    {
      id: "video3",
      title: "Installation Walkthrough",
      description: "A guided tour of their latest exhibition with commentary on key pieces.",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video embed URL
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="portfolio-container">
        <SectionTitle
          title="Artist Interviews"
          subtitle="Gain deeper insight into the artists' practice, philosophy, and journey"
          centered
        />
        
        <div className="mt-10">
          <Tabs defaultValue="video1" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-1 md:grid-cols-3 w-full mb-8">
              {videos.map(video => (
                <TabsTrigger key={video.id} value={video.id} className="text-center py-3">
                  {video.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {videos.map(video => (
              <TabsContent key={video.id} value={video.id}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                      <iframe 
                        className="w-full h-full"
                        src={video.embedUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  
                  <div className="bg-portfolio-lightGray p-6 rounded-lg">
                    <h3 className="text-xl font-serif font-bold mb-4">{video.title}</h3>
                    <p className="text-gray-700">
                      {video.description}
                    </p>
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Topics Covered:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Collaborative artistic process</li>
                        <li>Material exploration and experimentation</li>
                        <li>Conceptual frameworks</li>
                        <li>Historical and cultural contexts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default InterviewVideos;
