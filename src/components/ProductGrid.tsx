import { motion } from 'framer-motion';
import { MenuItem } from '../types';
import MenuCard from './MenuCard';

interface ProductGridProps {
  items: MenuItem[];
  category?: string;
}

const ProductGrid = ({ items, category }: ProductGridProps) => {
  const filteredItems = category 
    ? items.filter(item => item.category === category)
    : items;

  if (filteredItems.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1]
        }}
        style={{ willChange: 'opacity' }}
      >
        <p className="text-espresso-600 text-lg">Žiadne položky v tejto kategórii.</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      style={{ willChange: 'opacity' }}
    >
      {filteredItems.map((item, index) => (
        <MenuCard key={item.id} item={item} index={index} />
      ))}
    </motion.div>
  );
};

export default ProductGrid;

