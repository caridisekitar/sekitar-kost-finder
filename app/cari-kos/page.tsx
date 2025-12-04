'use client';

import React, { useRef, useState, useEffect } from 'react';
import SearchFilters from "../../components/SearchFilter";
import PropertyCard from "../../components/PropertyCard";
import PropertyCardBlur from "../../components/PropertyCardBlur";
import Pagination from "../../components/Pagination";
import { PROPERTIES, BUSINESSES, TESTIMONIALS } from '../../constants';

export default function FindKos() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
      const [canScrollLeft, setCanScrollLeft] = useState(false);
      const [canScrollRight, setCanScrollRight] = useState(true);
    const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
    }
  };

  // Effect for property slider scroll listeners
    useEffect(() => {
      checkScrollButtons();
      const currentRef = scrollContainerRef.current;
      if (currentRef) {
          currentRef.addEventListener('scroll', checkScrollButtons);
      }
      window.addEventListener('resize', checkScrollButtons);
      
      return () => {
        if (currentRef) {
          currentRef.removeEventListener('scroll', checkScrollButtons);
        }
        window.removeEventListener('resize', checkScrollButtons);
      };
    }, []);
    
  return (
    <div className="pt-20 overflow-x-hidden">
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <nav className="text-xs text-gray-500 mb-4">
        Home / <span className="font-medium text-black">Cari Kos</span>
      </nav>

      <h1 className="text-2xl font-bold mb-6">Cari Kos</h1>

      <SearchFilters />

      <p className="text-sm text-gray-500 mb-3">
        Menampilkan 20 dari hasil pencarian
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[...PROPERTIES, ...PROPERTIES].slice(0, 10).map((prop, idx) => {
              
              // If index >= 5 → render PropertyCardBlur
              if (idx >= 5) {
                return (
                  <PropertyCardBlur 
                    key={`${prop.id}-${idx}`} 
                    property={prop} 
                  />
                );
              }

              // Otherwise → normal card
              return (
                <PropertyCard
                  key={`${prop.id}-${idx}`}
                  property={prop}
                />
              );
            })}
          </div>

      <Pagination />
    </section>
    </div>
  );
}
