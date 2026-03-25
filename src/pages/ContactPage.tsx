import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-birch min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <h1 className="font-serif text-5xl md:text-8xl text-forest mb-8">Contact Us</h1>
          <p className="text-forest/60 max-w-2xl mx-auto font-sans tracking-wide text-lg">
            Have a question about our products, sustainability practices, or just want to say hello? We'd love to hear from you.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="font-serif text-3xl text-forest mb-8 text-left">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-moss group-hover:text-white transition-all duration-500">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-2">Email</h3>
                    <p className="text-forest/70 font-sans tracking-wide">hello@lesnik.eco</p>
                    <p className="text-forest/40 text-xs mt-1">We typically respond within 24 hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-moss group-hover:text-white transition-all duration-500">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-2">Phone</h3>
                    <p className="text-forest/70 font-sans tracking-wide">+1 (555) 123-4567</p>
                    <p className="text-forest/40 text-xs mt-1">Mon-Fri, 9am - 5pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-moss group-hover:text-white transition-all duration-500">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs uppercase tracking-widest text-moss mb-2">Studio</h3>
                    <p className="text-forest/70 font-sans tracking-wide">
                      123 Sustainable Way<br />
                      Forest Park, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-forest mb-6 text-left">Follow Our Journey</h2>
              <div className="flex gap-4">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm hover:bg-moss hover:text-white hover:-translate-y-1 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-stone/20"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-moss/10 text-moss rounded-full flex items-center justify-center mb-8">
                  <Send className="w-10 h-10" />
                </div>
                <h2 className="font-serif text-3xl text-forest mb-4">Message Sent</h2>
                <p className="text-forest/60 font-sans tracking-wide mb-8">
                  Thank you for reaching out. A member of our team will get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-moss font-bold uppercase tracking-widest text-xs hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-moss ml-1">Full Name</label>
                    <input 
                      required
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-birch/50 border border-stone/30 rounded-2xl px-6 py-4 text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-moss transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-moss ml-1">Email Address</label>
                    <input 
                      required
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-birch/50 border border-stone/30 rounded-2xl px-6 py-4 text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-moss transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-moss ml-1">Subject</label>
                  <select 
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full bg-birch/50 border border-stone/30 rounded-2xl px-6 py-4 text-forest focus:outline-none focus:ring-2 focus:ring-moss transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Order Support">Order Support</option>
                    <option value="Sustainability">Sustainability Questions</option>
                    <option value="Partnership">Partnership Opportunities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-moss ml-1">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full bg-birch/50 border border-stone/30 rounded-2xl px-6 py-6 text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-moss transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-forest text-white hover:bg-moss py-5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
