
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
      <section className="pt-32 pb-16 px-4 md:px-6 bg-white">
        <div className="portfolio-container max-w-5xl">
          <SectionTitle title="About Vaishali & Sanjeev" centered />
          
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16">
            <div className="lg:w-1/3">
              <img src="/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png" alt="Vaishali & Sanjeev in studio" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            
            <div className="lg:w-2/3">
              <h3 className="text-xl md:text-2xl font-bold mb-6">The Uncommon Alliance: Narkar and Khandekar's Shared Canvas</h3>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                Artistic collaboration, while not novel, rarely sustains itself as a primary mode of practice. For two decades, Sanjeev Khandekar and Vaishali Narkar have defied this norm, forging a dynamic partnership that has yielded a diverse and compelling body of work; that dissects the complexities of the 21st century.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                Sanjeev Khandekar's multifaceted persona extends beyond the visual arts, -a polymath with credentials in literature and activism, brings a critical lens to their visual output. (He is a respected poet, writer, social activist, and passionate gardener) Narkar, a formally trained artist from Sir J.J. College of Art, provides technical and aesthetic rigor.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                Their recent production design, jointly produced, for Netflix's "Cobalt Blue" demonstrated their ability to translate painterly vision into cinematic form, garnering critical acclaim.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                Known for their fearless exploration of diverse mediums, Narkar and Khandekar consistently challenge conventional artistic boundaries. Their collaborative work is notable for its exploration of diverse mediums and its thematic breadth. From environmental degradation and genetic manipulation to the ascendancy of finance and the virtualization of reality, their output reflects a sustained engagement with contemporary anxieties. Unconventional motifs – stock tickers, microscopic photographs modified into a new imagery, urban detritus – and even bodily fluids,- are deployed to expose the often-obscured realities of the biosocial sphere. These elements serve as powerful visual metaphors, highlighting the often-overlooked realities of our contemporary landscape.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                Through large-scale installations, intricate marble inlays, expensive embroideries, and sculptural forms including ceramic objects and paintings interfaced with another screen in between, Narkar and Khandekar function as visual analysts, charting the anomalies and deviations of the present. Their work, documented in this compilation, serves as a testament to the enduring power of collaborative inquiry in an era of rapid transformation. And this PDF offers a glimpse into the breadth and depth of their collaborative work, spanning two decades of artistic exploration.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                Vaishali & Sanjeev ; in their output, frequently confront the viewer with uncomfortable realities, those typically obscured or sanitized. This penchant for unvarnished depiction courts peril in a market favoring the facile and ostensibly uplifting which sometimes might prove even risky.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">
                The very substance of their work—its motifs and subject matter—often diverges sharply from prevailing aesthetic norms. Bodily effluvia, financial data streams, microbial cultures, or electronically magnified biological imagery of internal organs, malignancy, and fragmentation: these are the constituent elements of their oeuvre. Such materials, undeniably, can evoke visceral revulsion. Yet, this very reaction, the disquiet they inspire, is often a hallmark of significant artistic endeavor, a deliberate provocation that challenges complacent perception.
              </p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800">
                More importantly their works are characterized by meticulous execution, complex, multi-layered visual narratives, a considered diversity of media, and an unambiguous articulation of their underlying themes. These attributes, combined, ensure a sustained impact, leaving a lingering impression on the observer.
              </p>
            </div>
          </div>

          {/* CV Section */}
          <SectionTitle title="CV" centered className="mb-12" />
          
          {/* Selected Exhibitions */}
          <div className="mb-12 overflow-x-auto">
            <h3 className="text-xl md:text-2xl font-sans font-semibold mb-6">Selected Exhibitions</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 md:w-20">Year</TableHead>
                  <TableHead>Exhibition</TableHead>
                  <TableHead className="hidden md:table-cell">Location</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {exhibitions.map((exhibition, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-sm md:text-base">{exhibition.year}</TableCell>
                    <TableCell className="text-sm md:text-base">
                      <div>{exhibition.title}</div>
                      <div className="md:hidden text-xs text-gray-600 mt-1">{exhibition.location}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{exhibition.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Collections */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-sans font-semibold mb-6">Collections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              {collections.map((collection, index) => (
                <div key={index} className="text-gray-800 text-sm md:text-base">
                  {collection}
                </div>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mb-16 overflow-x-auto">
            <h3 className="text-xl md:text-2xl font-sans font-semibold mb-6">Awards & Recognition</h3>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 md:w-20">Year</TableHead>
                  <TableHead>Award</TableHead>
                  <TableHead className="hidden md:table-cell">Organization</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {awards.map((award, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-sm md:text-base">{award.year}</TableCell>
                    <TableCell className="text-sm md:text-base">
                      <div>{award.award}</div>
                      <div className="md:hidden text-xs text-gray-600 mt-1">{award.organization}</div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{award.organization}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Video Interviews Section */}
          <SectionTitle title="Artist Interviews" subtitle="Insight into process, philosophy and artistic journey" centered className="mb-8" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
            {videos.map(video => (
              <div key={video.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="aspect-video w-full">
                  <iframe className="w-full h-full" src={video.embedUrl} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-semibold font-sans">{video.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm mt-1">{video.description}</p>
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
