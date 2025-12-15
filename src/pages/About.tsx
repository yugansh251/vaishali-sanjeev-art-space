import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
const About = () => {
  const videos = [{
    id: 1,
    title: "Artist Statement: Origins and Inspirations",
    description: "Vaishali & Sanjeev discuss their collaborative journey and sources of inspiration.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }, {
    id: 2,
    title: "Process and Philosophy",
    description: "An inside look at the studio practices and philosophical underpinnings of their work.",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }];
  return <Layout>
      <section className="pt-32 pb-16 px-4 md:px-6 bg-white">
        <div className="portfolio-container max-w-5xl">
          <SectionTitle title="Vaishali & Sanjeev" centered />
          
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16">
            <div className="lg:w-1/3">
              <img src="/lovable-uploads/d6a85c10-f953-4e90-97dc-872aab45e9ac.png" alt="Vaishali & Sanjeev in studio" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            
            <div className="lg:w-2/3">
              
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">Artistic collaboration, while not novel, rarely sustains itself as a primary mode of practice. For two decades, Vaishali Narkar and Sanjeev Khandekar have defied this norm, forging a dynamic partnership that has yielded a diverse and compelling body of work that dissects the complexities of the 21st century.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">Sanjeev Khandekar's multifaceted persona extends beyond the visual arts - a polymath with credentials in literature and activism, he brings a critical lens to their visual output. He is a respected poet, writer, social activist, and passionate gardener. Vaishali Narkar who is a formally trained artist from Sir J.J. College of Art, provides the technical and aesthetic rigor.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">Known for their fearless exploration of diverse mediums, Vaishali and Sanjeev consistently challenge conventional artistic boundaries. Their collaborative work is notable for its exploration of diverse mediums and its thematic breadth. From environmental degradation and genetic manipulation to the ascendancy of finance and the virtualisation of reality, their output reflects a sustained engagement with contemporary anxieties. Unconventional motifs – stock tickers, microscopic photographs modified into a new imagery, urban detritus, and even bodily fluids, are deployed to expose the often obscured realities of the biosocial sphere. These elements serve as powerful visual metaphors, highlighting the often overlooked realities of our contemporary landscape.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">Through large scale installations, intricate marble inlays, expansive embroideries, sculptural forms including ceramic objects and paintings interfaced with screens in between, Vaishali and Sanjeev function as visual analysts, charting the anomalies and deviations of the present times. Their work, documented in this compilation, serves as a testament to the enduring power of collaborative inquiry in an era of rapid transformation. And this PDF offers a glimpse into the breadth and depth of their collaborative work, spanning two decades of artistic exploration.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">Through their output, Vaishali & Sanjeev frequently confront the viewer with uncomfortable realities - obscured or sanitised. This penchant for unvarnished depiction courts peril in a market favouring the facile and ostensibly uplifting, yet they refuse to compromise on the integrity of their expressions.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">The very substance of their work, its motifs and subject matter, often diverges sharply from prevailing aesthetic norms. Bodily effluvia, financial data streams, microbial cultures, and electronically magnified biological imagery of internal organs, malignancy, and fragmentation, are the constituent elements of their oeuvre. Such materials can undeniably evoke visceral revulsion. Yet, this very reaction, the disquiet they inspire, is often a hallmark of significant artistic endeavour, a deliberate provocation that challenges complacent perception.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800 mb-6">More importantly their works are characterised by meticulous execution, complex, multi-layered visual narratives, a considered diversity of media, and an unambiguous articulation of their underlying themes. These combined attributes ensure a sustained impact, leaving a lingering impression on the observer.</p>
              
              <p className="text-base md:text-lg leading-relaxed text-gray-800">Masters of versatility - the duo's recent production design for Netflix's film "Cobalt Blue" demonstrated their ability to translate painterly vision into cinematic form, garnering critical acclaim.</p>
            </div>
          </div>

          {/* CV Section */}
          <SectionTitle title="Bio-Data" centered className="mb-12" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* Vaishali CV - on left */}
            <div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold mb-4 text-center">Vaishali Narkar</h3>
              
              {/* Vaishali Profile Image */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/2036d42a-1aa5-454d-a7fd-d85d8a61cc56.png" 
                  alt="Vaishali Narkar" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Solo Shows:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>2002: '…Towards Window Of freedom. Jahangir Art Gallery, Mumbai.</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Collaborations with Sanjeev Khandekar:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>2006: 'Tits, Clits, n Elephant Dick' Jahangir Art Gallery, Mumbai.</p>
                  <p>2007: A group show 'Post Visual' curated by Gitanjali Dang. Priyashri Art Gallery, Mumbai.</p>
                  <p>2008: A group show 'Third Life' curated by Gitanjali Dang</p>
                  <p>2010: A group show 'By George..' curated by Gitanjali Dang Alliance Francaise de Delhi.</p>
                  <p>2010: 'Bad Breath', Matthieu Foss Gallery, Mumbai.</p>
                  <p>2010: 'Imp In The Garden & Other Fairy Tales' embroidery on silk. Pundole Art Gallery, Mumbai,</p>
                  <p>2011: 'Imp In The Garden & Other Fairy Tales' embroidery on silk. Su-Darshan Art Gallery, Pune.</p>
                  <p>2012: "I'm so angery….", A public space installation, on Marina beach, Chennai.</p>
                  <p>2012: "De-Stressed Sale" An installation at UAF, Delhi</p>
                  <p>2015: Triumph Of Market: Moneyscapes: Installation at Museum Of Goa. Goa.</p>
                  <p>2018: "Ragmala: Songs Of Anthropocene" embroideries. Sakshi Gallery, Mumbai.</p>
                  <p>2018: "Under The Stars" series of paintings, embroidery and sculptures at Slanic Moldova, Romania for 'In Context' residency.</p>
                  <p>2019: "Ragmala: Songs Of Anthropocene" embroideries. Sakshi Gallery, at India Art Fair, Delhi.</p>
                  <p>2020: "Everything You Ever Wanted To Know About Your Bad Breath, But Afraid To Ask Alfred Hitchcock" Part of a large installation was shown by Sakshi Gallery, at India Art Fair, Delhi.</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Projects:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>2021-22 Head, Production Design for feature film 'Cobalt Blue' by Netflix.</p>
                  <p>2011: Mumbai Air Port Art Project, "Moneyscapes" A Large Marble Inlay Installation with A large Acrylic Painting</p>
                  <p>2014: At IIT Kanpur, Workshop Design & Execution 'art enhanced'</p>
                  <p>2014: With Toy Foundation, India, an NGO working for slum children, an installation & a film was made titled "Let's Have A Fair Play"</p>
                  <p>2015: 15 installations were created for 'Coro India' Mumbai, an NGO working for variety of social upliftment causes including women, downtrodden, & environment.</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Group Shows:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>2024: 'Entwined' At Saran Apparao Gallery, Chennai & Delhi</p>
                </div>
              </div>
            </div>

            {/* Sanjeev CV - on right */}
            <div>
              <h3 className="text-2xl md:text-3xl font-sans font-bold mb-4 text-center">Sanjeev Khandekar</h3>
              
              {/* Sanjeev Profile Image */}
              <div className="flex justify-center mb-8">
                <img 
                  src="/lovable-uploads/97cfcbc4-e9a8-441c-bade-487681f8066e.png" 
                  alt="Sanjeev Khandekar" 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                />
              </div>
              
              <div className="mb-6 text-center">
                <p className="text-base md:text-lg font-medium text-gray-800">Visual Artist, Poet, Writer</p>
                <p className="text-sm md:text-base text-gray-600">Date of Birth: 14 February 1958</p>
                <p className="text-sm md:text-base text-gray-600">Mumbai, Maharashtra, India – 400074</p>
                <p className="text-sm md:text-base text-gray-600">Email: sanjeev.khandekar@gmail.com</p>
              </div>
              
              <p className="text-sm md:text-base text-gray-800 mb-8 leading-relaxed">Sanjeev Khandekar is a visual artist, poet and writer known for his incisive explorations of environmental, ecological, and socio-political issues within the contexts of markets, globalization, and neoliberal culture. His works often investigate the intersections of consumerism, nature, and the human condition through mixed media, installations, and text.</p>
              
              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Solo Exhibitions:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• 2003 – Apparao Art Gallery, Chennai; Triveni Gallery, Delhi</p>
                  <p>• 2003 – Rumours of the Truth, Jehangir Art Gallery, Mumbai</p>
                  <p>• 2005 – All That I Wanna Do, Museum Art Gallery, Mumbai</p>
                  <p>• 2005 – La Peau de Chagrin, Pundole Art Gallery, Mumbai</p>
                  <p>• 2006 – What Do I Love When I Love You, My God? (Forbidden Entices), Kitab Mahal, Mumbai</p>
                  <p>• 2007 – Kegel Exercises, Pundole Art Gallery, Mumbai</p>
                  <p>• 2007 – Acquire, Merge or Collaborate, ABN Gallery, Mumbai</p>
                  <p>• 2008 – Rx, Sudarshan Art Gallery, Pune</p>
                  <p>• 2008 – Everything You Wanted to Know About Bad Breath, Bombay Art Gallery, Mumbai</p>
                  <p>• 2010 – Rx, Birla Academy, Kolkata</p>
                  <p>• 2013 – Triumph of Market, Selma Feriani Gallery, London</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Collaborations with Vaishali Narkar:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• 2006 – Tits, Clits, n Elephant Dick, Jehangir Art Gallery, Mumbai</p>
                  <p>• 2007 – Post Visual, Priyadarshani / Priyasri Art Gallery, Mumbai — curated by Gitanjali Dang *</p>
                  <p>• 2008 – Third Life, Bombay Art Gallery, Mumbai — curated by Gitanjali Dang *</p>
                  <p>• 2010 – By George…, Alliance Française de Delhi — curated by Gitanjali Dang *</p>
                  <p>• 2010 – Bad Breath, Matthieu Foss Gallery, Mumbai</p>
                  <p>• 2010 – Imp in the Garden & Other Fairy Tales, embroidery on silk, Pundole Art Gallery, Mumbai</p>
                  <p>• 2011 – Imp in the Garden & Other Fairy Tales, embroidery on silk, Su-Darshan Art Gallery, Pune</p>
                  <p>• 2012 – I'm So Angry…, public installation, Marina Beach, Chennai *</p>
                  <p>• 2012 – De-Stressed Sale, installation, United Art Fair, Delhi</p>
                  <p>• 2015 – Triumph of Market: Moneyscapes, installation, Museum of Goa, Goa</p>
                  <p>• 2018 – Ragmala: Songs of Anthropocene, embroideries, Sakshi Gallery, Mumbai</p>
                  <p>• 2018 – Under the Stars, paintings, embroideries and sculptures, 'In Context' Residency, Slănic Moldova, Romania *</p>
                  <p>• 2019 – Ragmala: Songs of Anthropocene, Sakshi Art Gallery, India Art Fair, Delhi *</p>
                  <p>• 2020 – Everything You Ever Wanted to Know About Your Bad Breath, But Were Afraid to Ask Alfred Hitchcock, Sakshi Gallery, India Art Fair, Delhi *</p>
                  <p>• 2021 – night of broken glass, Srishti Art, Hyderabad *</p>
                  <p>• 2024 – Embroidery, Apparao Gallery, Chennai *</p>
                  <p>• 2025 – Entwined, by Apparao Gallery at Bikaner House, Delhi *</p>
                  <p className="text-xs text-gray-500 mt-2">* denotes group show.</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Projects:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• 2011 – Moneyscapes, marble inlay and acrylic painting, Mumbai Airport Art Project</p>
                  <p>• 2012 – I Am So Angry That I Made This Sign, 1.5 km long, 150 ft tall public installation, Art Chennai — curated by Kaumudi Patil</p>
                  <p>• 2014 – Art Enhanced, Workshop Design & Execution, IIT Kanpur</p>
                  <p>• 2014 – Let's Have a Fair Play, installation and a short film 'Disquieting Innocence' with Toy Foundation, India</p>
                  <p>• 2015 – Fifteen public installations for Coro India, Mumbai (women's empowerment, environment, social upliftment)</p>
                  <p>• 2021–22 – Head of Production Design, feature film Cobalt Blue, Netflix</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Group Shows:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• 2004 – Flex: The Fluid Less Sex, Apparao Gallery, New Delhi</p>
                  <p>• 2007 – Mumbai, Art & Soul Gallery, Mumbai</p>
                  <p>• 2007 – Keep Drawing, curated by Chintan Upadhyaya, Pundole Art Gallery, Mumbai</p>
                  <p>• 2007 – Rebel Graffiti, Open Eyed Dreams Gallery, Kochi</p>
                  <p>• 2007 – Contemporary Indian Art, Zurab Tsereteli Art Gallery, Moscow</p>
                  <p>• 2007–08 – Miniature Format Show, Sans Tache Gallery, Mumbai</p>
                  <p>• 2008 – Keep Drawing, Gallery Espass, New Delhi</p>
                  <p>• 2009 – Tihar Jail Project, curated by Anubhav Nath, New Delhi</p>
                  <p>• 2009 – Spectrum, curated by Saryu Doshi, Abu Dhabi Art Fair, UAE</p>
                  <p>• 2010 – Print Making, Priyasri Art Gallery, Jehangir Art Gallery, Mumbai</p>
                  <p>• 2010 – Summer Group Show, Matthieu Foss Gallery, Mumbai</p>
                  <p>• 2011 – Annual Show, Birla Institute of Art & Culture, Kolkata</p>
                  <p>• 2011 – (M)other India, Galerie du Jour, Agnès b., Paris</p>
                  <p>• 2011 – Caution: Children at Work, curated by Gitanjali Dang</p>
                  <p>• 2015 – Morphology of Archive: Connected Histories of Goa, curated by Sabitha T.P. & Lina Vincent</p>
                  <p>• 2018 – Group show, National Museum, Bucharest, Romania</p>
                  <p>• 2020 – Entwined, Shrishti Art Gallery, Hyderabad</p>
                  <p>• 2020 – Speaking Gandhiana: Visual Journeys of Gandhi @150 & Beyond, Birla Academy of Art & Culture, Kolkata</p>
                  <p>• 2023 – Rhizome: Tracing Ecocultural Identities, CSMVS Museum, Mumbai</p>
                  <p>• 2024 – Saran Apparao Gallery, Chennai & Delhi</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Books:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• Sankalp (1982) – History of social movements in Maharashtra, Marathi, Granthali</p>
                  <p>• Ashant Parv (1992) – Novel on industrial Mumbai, Marathi, Granthali</p>
                  <p>• Kavita (1993) – Poetry collection, Marathi, Granthali</p>
                  <p>• Fucking Mad (2003), Abhidanantar</p>
                  <p>• Search Engine (2004), Marathi, Granthali</p>
                  <p>• Smiles (2007), Marathi & English, Abhidanantar</p>
                  <p>• Mutatis Mutandis (2007), Marathi & English, Abhidanantar</p>
                  <p>• 1, 2, 3,…Happy Galaxy (2008), graphic book with Vaishali Narkar, Abhidanantar</p>
                  <p>• Sanshayaspad Tippane (2009), Marathi, Granthali</p>
                  <p>• Bimb (2018), Paperwall</p>
                  <p>• Smiles (Expanded edition, 2018), Marathi & English, Paperwall</p>
                  <p>• Rutusanhar (2019), essays, Lokvangmay Griha</p>
                  <p>• Popatpanchi Chaturki Jaan, Suno Parvati Shiri Bhagwan (2025), Varnamudra</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Catalogs:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• Rumour of the Truth (2003)</p>
                  <p>• All That I Wanna Do (2005)</p>
                  <p>• Who Is Afraid of a Shrinking Skin? (2005) – Pundole Art Gallery</p>
                  <p>• Tits, Clits, & Elephant Dick (2006) – ABN Gallery, Mumbai</p>
                  <p>• Kegel Exercises (2007) – Pundole Art Gallery</p>
                  <p>• Acquire, Merge or Collaborate (2007) – ABN Gallery, Mumbai</p>
                  <p>• Rx (2008) – Sudarshan Art Gallery, Pune</p>
                  <p>• Everything You Wanted to Know About Bad Breath, But Were Afraid to Ask Alfred Hitchcock (2008) – Bombay Art Gallery</p>
                  <p>• Bad Breath (2010) – Matthieu Foss Gallery, Mumbai</p>
                  <p>• Imp in the Garden & Other Fairy Tales (2011) – Pundole Art Gallery, Mumbai</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg md:text-xl font-sans font-semibold mb-4">Columns & Articles:</h4>
                <div className="text-sm md:text-base text-gray-800 space-y-1">
                  <p>• Sunday Observer & Inside Outside Magazine: Tropical gardens, environment, and landscape</p>
                  <p>• The Economic Times: Art, politics, and ecology</p>
                  <p>• Loksatta Daily: Art, politics, and environmental commentary</p>
                  <p>• Numerous Marathi journals: Poetry, environmental, and cultural criticism</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>;
};
export default About;
