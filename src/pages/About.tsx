import { motion } from 'framer-motion';
import { cafeStory } from '../data/cafeInfo';
import { contactInfo } from '../data/cafeInfo';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="bg-gradient-to-b from-latte-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-crema-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-latte-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-serif font-bold text-center mb-6"
            variants={itemVariants}
          >
            {cafeStory.title}
          </motion.h1>
          <motion.p 
            className="text-xl text-latte-200 text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Zistite viac o našej kaviarni a o tom, čo nás robí špeciálnymi
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="bg-gradient-to-br from-latte-50 to-white rounded-2xl p-8 md:p-12 shadow-xl border border-latte-200">
            <div className="whitespace-pre-line text-espresso-700 leading-relaxed text-lg md:text-xl">
              {cafeStory.content}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-latte-100 to-latte-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl md:text-5xl font-serif font-bold text-center text-espresso-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
          >
            Naše hodnoty
          </motion.h2>
          <div className="w-24 h-1 bg-crema-500 mx-auto mb-12"></div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { icon: '🌱', title: 'Kvalita', desc: 'Používame len najkvalitnejšie suroviny a pripravujeme každý nápoj s láskou a starostlivosťou' },
              { icon: '❤️', title: 'Tradícia', desc: 'Ctíme tradície kaviarne, no zároveň sme otvorení novým trendom a inováciám' },
              { icon: '🤝', title: 'Spoločenstvo', desc: 'Veríme, že kaviareň je miestom, kde sa stretávajú ľudia a vytvárajú sa priateľstvá' },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center group hover:shadow-2xl transition-all duration-300 border border-latte-200"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                style={{ willChange: 'transform' }}
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-espresso-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-espresso-600 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 bg-white">
        <motion.div 
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-espresso-900 mb-4">
            Otváracie hodiny
          </h2>
          <div className="w-24 h-1 bg-crema-500 mx-auto mb-12"></div>
          <div className="bg-gradient-to-br from-latte-100 to-white rounded-2xl shadow-xl p-8 md:p-12 border border-latte-200">
            <div className="space-y-4">
              {contactInfo.openingHours && Object.entries(contactInfo.openingHours).map(([day, hours], index) => (
                <motion.div
                  key={day}
                  className="flex justify-between items-center py-3 px-4 rounded-lg hover:bg-latte-200 transition-colors border-b border-latte-300 last:border-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1, 
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <span className="text-lg font-semibold text-espresso-800">{day}</span>
                  <span className="text-lg text-espresso-600 font-medium">{hours}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-crema-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-latte-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <motion.div 
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Navštívte nás
          </h2>
          <p className="text-xl text-latte-200 mb-8">
            Prídite si vychutnať kvalitnú kávu a útulnú atmosféru
          </p>
          <motion.a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-crema-500 text-white rounded-lg font-semibold text-lg hover:bg-crema-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Zobraziť kontakt
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;

