import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import LazyImage from '../components/LazyImage';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
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
            Galéria
          </h1>
          <div className="w-24 h-1 bg-crema-500 mx-auto mb-6"></div>
          <p className="text-lg text-espresso-600 max-w-2xl mx-auto">
            Pozrite sa, ako to u nás vyzerá - útulný priestor plný atmosféry
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
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
              onClick={() => setSelectedImage(image.src)}
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <motion.p 
                    className="text-white p-4 font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    {image.title}
                  </motion.p>
                </div>
              )}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-crema-400 transition-colors duration-300 rounded-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-7xl max-h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Gallery"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
                <motion.button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 text-white bg-black/70 rounded-full p-3 hover:bg-black transition-colors backdrop-blur-sm"
                  aria-label="Close"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;

