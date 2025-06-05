import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { Button } from '@/components/ui/button';
import { Instagram, Twitter, Linkedin, Mail, Phone } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  return <section className="section-padding bg-white" id="contact">
      <div className="portfolio-container">
        <SectionTitle title="Get in Touch" subtitle="Feel free to reach out for collaborations, inquiries, or just to say hello." centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-portfolio-blue mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">vaishaliandsanjeev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-portfolio-blue mt-1" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-gray-600">+91 123 456 7890</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif font-semibold mt-12 mb-6">Follow Me</h3>
            
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-portfolio-blue/20">
                <Instagram className="w-5 h-5 text-portfolio-blue" />
              </a>
              
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-portfolio-blue/20">
                <Twitter className="w-5 h-5 text-portfolio-blue" />
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-portfolio-blue/20">
                <Linkedin className="w-5 h-5 text-portfolio-blue" />
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-portfolio-lightGray p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea id="message" name="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent" />
              </div>
              
              <Button type="submit" className="w-full bg-portfolio-blue hover:bg-portfolio-darkBlue text-white" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              {submitSuccess && <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                  Message sent successfully!
                </div>}
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;