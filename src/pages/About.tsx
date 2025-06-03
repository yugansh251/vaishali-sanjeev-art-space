
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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

  const exhibitions = [
    { year: "2024", title: "Contemporary Visions", location: "Museum of Modern Art, New York" },
    { year: "2023", title: "Collaborative Futures", location: "Tate Modern, London" },
    { year: "2022", title: "Cultural Intersections", location: "Centre Pompidou, Paris" },
    { year: "2021", title: "Artistic Dialogues", location: "National Gallery, Delhi" },
    { year: "2020", title: "Beyond Boundaries", location: "Guggenheim Museum, New York" }
  ];

  const collections = [
    "Museum of Modern Art, New York",
    "Tate Modern, London",
    "Centre Pompidou, Paris",
    "National Gallery of Modern Art, Delhi",
    "Guggenheim Museum, New York"
  ];

  const awards = [
    { year: "2023", award: "International Art Prize", organization: "Global Arts Foundation" },
    { year: "2022", award: "Excellence in Collaboration", organization: "Contemporary Art Institute" },
    { year: "2021", award: "Cultural Heritage Award", organization: "UNESCO" }
  ];

  return (
    <Layout>
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

          {/* CV Section */}
          <SectionTitle title="Curriculum Vitae" centered className="mb-12" />
          
          {/* Selected Exhibitions */}
          <div className="mb-12">
            <h3 className="text-2xl font-sans font-semibold mb-6">Selected Exhibitions</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Year</TableHead>
                  <TableHead>Exhibition</TableHead>
                  <TableHead>Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exhibitions.map((exhibition, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{exhibition.year}</TableCell>
                    <TableCell>{exhibition.title}</TableCell>
                    <TableCell>{exhibition.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Collections */}
          <div className="mb-12">
            <h3 className="text-2xl font-sans font-semibold mb-6">Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {collections.map((collection, index) => (
                <div key={index} className="text-gray-800">
                  {collection}
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16">
            <h3 className="text-2xl font-sans font-semibold mb-6">Awards & Recognition</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Year</TableHead>
                  <TableHead>Award</TableHead>
                  <TableHead>Organization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {awards.map((award, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{award.year}</TableCell>
                    <TableCell>{award.award}</TableCell>
                    <TableCell>{award.organization}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Video Interviews Section */}
          <SectionTitle title="Artist Interviews" subtitle="Insight into process, philosophy and artistic journey" centered className="mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {videos.map(video => (
              <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe className="w-full h-full" src={video.embedUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold font-sans">{video.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
