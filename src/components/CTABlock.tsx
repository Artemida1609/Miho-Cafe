import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CTABlockProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'primary' | 'secondary';
}

const CTABlock = ({ 
  title, 
  description, 
  buttonText, 
  buttonLink,
  variant = 'primary' 
}: CTABlockProps) => {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.div 
      className={`${isPrimary ? 'bg-gradient-to-br from-espresso-900 via-espresso-800 to-espresso-900' : 'bg-crema-100'} rounded-2xl p-8 md:p-12 text-center relative overflow-hidden`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ willChange: 'transform, opacity' }}
    >
      {isPrimary && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-crema-500 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-latte-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      )}
      <div className="relative z-10">
        <motion.h2 
          className={`text-3xl md:text-4xl font-serif font-bold mb-4 ${isPrimary ? 'text-latte-100' : 'text-espresso-900'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.2, 
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className={`text-lg mb-8 max-w-2xl mx-auto ${isPrimary ? 'text-latte-200' : 'text-espresso-700'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.3, 
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{ willChange: 'transform, opacity' }}
        >
          {description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.4, 
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ willChange: 'transform' }}
        >
          <Link
            to={buttonLink}
            className={`group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              isPrimary
                ? 'bg-crema-500 text-white hover:bg-crema-600 shadow-lg hover:shadow-2xl'
                : 'bg-espresso-800 text-latte-100 hover:bg-espresso-900 shadow-lg hover:shadow-2xl'
            }`}
          >
            {buttonText}
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CTABlock;

