import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../data/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Domov' },
    { path: '/menu', label: 'Ponuka' },
    { path: '/about', label: 'O nás' },
    { path: '/gallery', label: 'Galéria' },
    { path: '/contact', label: 'Kontakt' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }}
      style={{ willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.img 
              src={images.logo}
              alt="Miho Cafe" 
              className="h-10 w-10 object-contain"
              loading="eager"
              fetchPriority="high"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ 
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
              style={{ willChange: 'transform' }}
            />
            <span className="text-xl font-serif font-bold text-espresso-800 group-hover:text-crema-700 transition-colors">
              Miho Cafe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-crema-700 bg-crema-50'
                    : 'text-espresso-700 hover:text-crema-700 hover:bg-latte-100'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-crema-500 rounded-full"
                    layoutId="activeTab"
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 30,
                      mass: 0.5
                    }}
                    style={{ willChange: 'transform' }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-espresso-700 hover:bg-latte-100"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            style={{ willChange: 'height, opacity' }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-crema-700 bg-crema-50'
                        : 'text-espresso-700 hover:text-crema-700 hover:bg-latte-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

