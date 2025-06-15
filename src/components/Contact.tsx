
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Facebook, Mail, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'vaishaliandsanjeev@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Success!",
        description: "Your message has been sent successfully!",
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-white" id="contact">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-sans font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-portfolio-blue mt-1" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">vaishaliandsanjeev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-portfolio-blue mt-1" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-gray-600">16/a, mihishad chs gulab view lane . Dr. C.g. Road , near cubic mall , Chembur 400074</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-sans font-semibold mt-12 mb-6">Follow Vaishali & Sanjeev</h3>
            
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/p/DKgqXkDthf6lfcM2oRhiDzazVhol3P3r4fFcPI0/?igsh=MWwzZXVyZDg1YnltZw==" target="_blank" rel="noopener noreferrer" className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-portfolio-blue/20">
                <Instagram className="w-5 h-5 text-portfolio-blue" />
              </a>
              
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-portfolio-blue/20">
                <Facebook className="w-5 h-5 text-portfolio-blue" />
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
              
              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm text-blue-800">
                  <strong>Setup Required:</strong> Please replace the EmailJS credentials in the code with your actual Service ID, Template ID, and Public Key from your EmailJS dashboard.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
