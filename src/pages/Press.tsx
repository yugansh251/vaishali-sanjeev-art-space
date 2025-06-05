import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
const Press = () => {
  const pressItems = [{
    year: "2024",
    title: "Redefining Collaborative Art in the Digital Age",
    publication: "Artforum International",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    description: "An in-depth look at how Vaishali & Sanjeev are pushing the boundaries of artistic collaboration.",
    link: "#"
  }, {
    year: "2024",
    title: "The Power of Two: When Artists Unite",
    publication: "Art in America",
    author: "David Chen",
    date: "January 22, 2024",
    description: "Exploring the unique dynamic between two artists working as one creative force.",
    link: "#"
  }, {
    year: "2023",
    title: "Contemporary Voices: A New Generation of Artists",
    publication: "Frieze Magazine",
    author: "Maria Rodriguez",
    date: "November 8, 2023",
    description: "Featured profile highlighting their innovative approach to traditional craft techniques.",
    link: "#"
  }, {
    year: "2023",
    title: "Breaking Boundaries in Modern Art",
    publication: "The Guardian",
    author: "James Thompson",
    date: "September 3, 2023",
    description: "Review of their latest exhibition exploring themes of cultural identity and globalization.",
    link: "#"
  }, {
    year: "2023",
    title: "Artists to Watch: Rising Stars in Contemporary Art",
    publication: "ARTnews",
    author: "Lisa Park",
    date: "June 12, 2023",
    description: "Annual feature showcasing emerging artists making significant impact in the art world.",
    link: "#"
  }];
  const groupedPress = pressItems.reduce((acc, item) => {
    if (!acc[item.year]) {
      acc[item.year] = [];
    }
    acc[item.year].push(item);
    return acc;
  }, {} as Record<string, typeof pressItems>);
  return <Layout>
      <section className="pt-32 pb-16 px-6 bg-white">
        <div className="portfolio-container max-w-5xl">
          <SectionTitle title="Press" centered />
          
          <div className="mb-8">
            
          </div>

          <div className="space-y-12">
            {Object.entries(groupedPress).sort(([a], [b]) => parseInt(b) - parseInt(a)).map(([year, articles]) => <div key={year}>
                  <h2 className="text-3xl font-sans font-bold mb-6 text-gray-900">{year}</h2>
                  <Separator className="mb-6" />
                  
                  <div className="space-y-6">
                    {articles.map((article, index) => <Card key={index} className="border-l-4 border-l-portfolio-blue">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <CardTitle className="text-xl font-sans text-gray-900 hover:text-portfolio-blue transition-colors">
                              <a href={article.link} className="cursor-pointer">
                                {article.title}
                              </a>
                            </CardTitle>
                            <span className="text-sm text-gray-500 ml-4">{article.date}</span>
                          </div>
                          <CardDescription className="text-base">
                            <span className="font-medium text-gray-700">{article.publication}</span>
                            {article.author && <>
                                <span className="text-gray-500"> by </span>
                                <span className="text-gray-700">{article.author}</span>
                              </>}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-800 leading-relaxed">{article.description}</p>
                        </CardContent>
                      </Card>)}
                  </div>
                </div>)}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              For press inquiries, please contact us at{' '}
              <a href="mailto:press@vaishalisanjeev.com" className="text-portfolio-blue hover:underline">
                press@vaishalisanjeev.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Press;