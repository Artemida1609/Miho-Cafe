import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/menu';
import ProductGrid from '../components/ProductGrid';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const categories = [
    { id: undefined, label: 'Všetko', icon: '🍽️' },
    { id: 'coffee', label: 'Káva', icon: '☕' },
    { id: 'drinks', label: 'Nápoje', icon: '🥤' },
    { id: 'desserts', label: 'Dezerty', icon: '🍰' },
  ];

  const filteredItems = selectedCategory
    ? menuItems.filter(item => item.category === selectedCategory)
    : menuItems;

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
            Naša ponuka
          </h1>
          <div className="w-24 h-1 bg-crema-500 mx-auto mb-6"></div>
          <p className="text-lg text-espresso-600 max-w-2xl mx-auto">
            Objavte naše široké spektrum káv, nápojov a domácich dezertov
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id || 'all'}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-espresso-800 to-espresso-900 text-white shadow-lg scale-105'
                  : 'bg-white text-espresso-700 hover:bg-latte-200 shadow-md hover:shadow-lg hover:scale-105'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              <span className="mr-2 text-xl">{category.icon}</span>
              {category.label}
              {selectedCategory === category.id && (
                <motion.div
                  className="absolute inset-0 rounded-xl border-2 border-crema-400"
                  layoutId="activeCategory"
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30,
                    mass: 0.5
                  }}
                  style={{ willChange: 'transform' }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory || 'all'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ willChange: 'transform, opacity' }}
          >
            <ProductGrid items={filteredItems} category={selectedCategory} />
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div 
          className="mt-20 bg-gradient-to-br from-white to-latte-50 rounded-2xl shadow-xl p-8 md:p-12 text-center border border-latte-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          <h3 className="text-3xl font-serif font-semibold text-espresso-800 mb-4">
            Máte otázky ohľadom ponuky?
          </h3>
          <p className="text-espresso-600 mb-8 text-lg">
            Kontaktujte nás a radi vám poradíme s výberom
          </p>
          <motion.a
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-crema-500 text-white rounded-lg font-semibold hover:bg-crema-600 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Kontaktovať nás
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
