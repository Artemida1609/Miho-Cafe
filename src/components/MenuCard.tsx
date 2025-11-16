import { motion } from 'framer-motion';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

const MenuCard = ({ item, index = 0 }: MenuCardProps) => {
  // Перші 3 елементи (перший рядок) з'являються відразу
  const isFirstRow = index < 3;
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-latte-200"
      initial={{ opacity: 0, y: 30 }}
      {...(isFirstRow 
        ? {
            animate: { opacity: 1, y: 0 },
            transition: { 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }
          }
        : {
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3, margin: "-50px" },
            transition: { 
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1]
            }
          }
      )}
      whileHover={{ scale: 1.03, y: -5 }}
      style={{ willChange: 'transform, opacity' }}
    >
      {item.image && (
        <div className="h-48 overflow-hidden relative">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-espresso-800 mb-2 group-hover:text-crema-700 transition-colors">
          {item.name}
        </h3>
        <p className="text-espresso-600 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-crema-700 group-hover:scale-110 transition-transform inline-block">
            {item.price.toFixed(2)} €
          </span>
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-latte-200 to-latte-300 text-espresso-700 shadow-sm">
            {item.category === 'coffee' && '☕ Káva'}
            {item.category === 'drinks' && '🥤 Nápoje'}
            {item.category === 'desserts' && '🍰 Dezerty'}
            {item.category === 'food' && '🍽️ Jedlo'}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;

