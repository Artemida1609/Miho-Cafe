import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../data/cafeInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-latte-50 to-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-espresso-900 mb-4">
            Kontakt
          </h1>
          <div className="w-24 h-1 bg-crema-500 mx-auto mb-6"></div>
          <p className="text-lg text-espresso-600 max-w-2xl mx-auto">
            Radi vás uvidíme! Kontaktujte nás alebo nás navštívte osobne
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
          >
            <div className="bg-gradient-to-br from-white to-latte-50 rounded-2xl shadow-xl p-8 mb-8 border border-latte-200">
              <h2 className="text-3xl font-serif font-bold text-espresso-900 mb-8">
                Kontaktné informácie
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', title: 'Adresa', content: contactInfo.address, link: false },
                  { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Telefón', content: contactInfo.phone, link: true, href: `tel:${contactInfo.phone}` },
                  { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Email', content: contactInfo.email, link: true, href: `mailto:${contactInfo.email}` },
                  { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', title: 'Facebook', content: 'Sledovať nás na Facebooku', link: true, href: contactInfo.facebook, external: true },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-crema-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-crema-200 transition-colors">
                      <svg className="w-6 h-6 text-crema-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-espresso-800 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.href} 
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="text-crema-600 hover:text-crema-700 transition-colors inline-block hover:translate-x-1 transform duration-200"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-espresso-600">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Opening Hours */}
            {contactInfo.openingHours && (
              <motion.div 
                className="bg-gradient-to-br from-white to-latte-50 rounded-2xl shadow-xl p-8 border border-latte-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-serif font-bold text-espresso-900 mb-6">
                  Otváracie hodiny
                </h2>
                <div className="space-y-3">
                  {Object.entries(contactInfo.openingHours).map(([day, hours], index) => (
                    <motion.div
                      key={day}
                      className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-latte-200 transition-colors border-b border-latte-300 last:border-0"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05, duration: 0.4 }}
                    >
                      <span className="font-semibold text-espresso-800">{day}</span>
                      <span className="text-espresso-600 font-medium">{hours}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Map Placeholder */}
            <motion.div 
              className="bg-gradient-to-br from-white to-latte-50 rounded-2xl shadow-xl p-8 mt-8 border border-latte-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h2 className="text-2xl font-serif font-bold text-espresso-900 mb-4">
                Ako sa k nám dostať
              </h2>
              <div className="bg-gradient-to-br from-latte-200 to-latte-300 rounded-xl h-64 flex items-center justify-center shadow-inner">
                <p className="text-espresso-600 font-medium">
                  {/* TODO: Add Google Maps embed */}
                  Mapa bude pridaná neskôr
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
          >
            <div className="bg-gradient-to-br from-white to-latte-50 rounded-2xl shadow-xl p-8 border border-latte-200">
              <h2 className="text-3xl font-serif font-bold text-espresso-900 mb-8">
                Napíšte nám
              </h2>
              
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ďakujeme za vašu správu! Čoskoro vás budeme kontaktovať.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Meno', type: 'text', required: true, placeholder: 'Vaše meno' },
                  { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'vas@email.sk' },
                  { id: 'phone', label: 'Telefón (voliteľné)', type: 'tel', required: false, placeholder: '+421 900 000 000' },
                ].map((field, index) => (
                  <motion.div
                    key={field.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  >
                    <label htmlFor={field.id} className="block text-sm font-medium text-espresso-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      id={field.id}
                      name={field.id}
                      value={formData[field.id as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full px-4 py-3 border border-latte-300 rounded-lg focus:ring-2 focus:ring-crema-500 focus:border-crema-500 outline-none transition-all duration-200 hover:border-crema-300 bg-white"
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-espresso-700 mb-2">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-latte-300 rounded-lg focus:ring-2 focus:ring-crema-500 focus:border-crema-500 outline-none transition-all duration-200 resize-none hover:border-crema-300 bg-white"
                    placeholder="Vaša správa..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-espresso-800 to-espresso-900 text-white rounded-lg font-semibold text-lg hover:from-espresso-900 hover:to-espresso-800 transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Odosielanie...
                    </span>
                  ) : (
                    'Odoslať správu'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

