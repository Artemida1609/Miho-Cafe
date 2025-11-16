import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { menuItems } from '../data/menu';
import { galleryImages } from '../data/gallery';
import ProductGrid from '../components/ProductGrid';
import CTABlock from '../components/CTABlock';
import LazyImage from '../components/LazyImage';

const Home = () => {
  const featuredItems = menuItems.slice(0, 6);
  const featuredImages = galleryImages.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-900 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-crema-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-latte-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-crema-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance"
              variants={itemVariants}
            >
              Miho Cafe
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-latte-200 mb-8 max-w-3xl mx-auto text-balance"
              variants={itemVariants}
            >
              Útulná kaviareň v srdci Bratislavy, kde sa stretáva tradícia s modernitou
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Link
                to="/menu"
                className="group px-8 py-4 bg-crema-500 text-white rounded-lg font-semibold text-lg hover:bg-crema-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
              >
                <span className="flex items-center justify-center gap-2">
                  Pozrieť ponuku
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-latte-200 text-latte-200 rounded-lg font-semibold text-lg hover:bg-latte-200 hover:text-espresso-900 transition-all duration-300 hover:scale-105 transform"
              >
                Zistiť viac
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gradient-to-b from-latte-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {[
              { icon: '☕', title: 'Čerstvá káva', desc: 'Každý deň pripravujeme kávu z najkvalitnejších zrniek' },
              { icon: '🍰', title: 'Domáce dezerty', desc: 'Čerstvé dezerty pripravené s láskou každý deň' },
              { icon: '🌳', title: 'Útulná atmosféra', desc: 'Miesto, kde sa môžete uvoľniť a užiť si pokojný čas' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
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
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-latte-200">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-espresso-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-espresso-600">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-5xl font-serif font-bold text-espresso-900 mb-4">
              Naše špeciality
            </h2>
            <div className="w-24 h-1 bg-crema-500 mx-auto mb-6"></div>
            <p className="text-lg text-espresso-600 max-w-2xl mx-auto">
              Objavte naše najobľúbenejšie kávy a dezerty
            </p>
          </motion.div>
          <ProductGrid items={featuredItems} />
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/menu"
              className="group inline-block px-8 py-4 bg-espresso-800 text-white rounded-lg font-semibold hover:bg-espresso-900 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                Zobraziť celú ponuku
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gradient-to-b from-latte-100 to-latte-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <h2 className="text-5xl font-serif font-bold text-espresso-900 mb-4">
              Náš priestor
            </h2>
            <div className="w-24 h-1 bg-crema-500 mx-auto mb-6"></div>
            <p className="text-lg text-espresso-600 max-w-2xl mx-auto">
              Pozrite sa, ako to u nás vyzerá
            </p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {featuredImages.map((image) => (
              <motion.div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
                style={{ willChange: 'transform' }}
              >
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{image.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Link
              to="/gallery"
              className="group inline-block px-8 py-4 bg-crema-500 text-white rounded-lg font-semibold hover:bg-crema-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              <span className="flex items-center justify-center gap-2">
                Zobraziť celú galériu
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            title="Navštívte nás"
            description="Prídite si vychutnať kvalitnú kávu a útulnú atmosféru v srdci Bratislavy"
            buttonText="Kontakt"
            buttonLink="/contact"
            variant="primary"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

