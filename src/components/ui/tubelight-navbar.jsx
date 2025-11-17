import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export const TubelightNavbar = ({ items = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const location = useLocation();
  const navRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const currentPath = location.pathname;
    const index = items.findIndex(item => {
      if (item.url === '/') {
        return currentPath === '/';
      }
      return currentPath.startsWith(item.url) && item.url !== '/';
    });
    setActiveIndex(index >= 0 ? index : 0);
  }, [location, items]);

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const activeItem = itemRefs.current[activeIndex];
      setIndicatorStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <nav className="relative bg-gray-900/95 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-16 pl-14 sm:pl-16 md:pl-24" ref={navRef}>
          <div className="relative flex items-center gap-2">
            {items.map((item, index) => (
              <Link
                key={item.url}
                ref={(el) => (itemRefs.current[index] = el)}
                to={item.url}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md",
                  "hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50",
                  index === activeIndex
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-300"
                )}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-2">
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="hidden md:inline">{item.name}</span>
                </div>
              </Link>
            ))}
            
            {/* Tubelight indicator */}
            <motion.div
              className="absolute bottom-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg"
              style={indicatorStyle}
              animate={indicatorStyle}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 blur-sm opacity-60" />
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};