'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Search, Sparkles, Home as HomeIcon, ChevronDown, ChevronRight } from 'lucide-react';
import { PROPERTIES, BUSINESSES, TESTIMONIALS } from '../constants';
import PropertyCard from '../components/PropertyCard';
import SearchFilter from '../components/SearchFilter';

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonialFade, setTestimonialFade] = useState(true);
  // FIX: Use 'number' for browser's setInterval return type instead of Node.js specific 'NodeJS.Timeout'.
  const testimonialIntervalRef = useRef<number>();


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
  
  // Effect for testimonial auto-sliding
  useEffect(() => {
    // Start the auto-slide timer on mount
    resetTestimonialInterval();
    // Clear the interval on component unmount
    return () => {
      if (testimonialIntervalRef.current) {
        clearInterval(testimonialIntervalRef.current);
      }
    };
  }, []);

  // Effect to handle the fade animation whenever the testimonial index changes
  useEffect(() => {
    setTestimonialFade(false);
    const timer = setTimeout(() => {
      setTestimonialFade(true);
    }, 100); // Short delay to allow CSS transition to trigger
    return () => clearTimeout(timer);
  }, [currentTestimonialIndex]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 360;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
        
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const resetTestimonialInterval = () => {
    if (testimonialIntervalRef.current) {
      clearInterval(testimonialIntervalRef.current);
    }
    testimonialIntervalRef.current = window.setInterval(() => {
      setCurrentTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length);
    }, 5000000); // Slide every 5 seconds
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length);
    resetTestimonialInterval();
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    resetTestimonialInterval();
  };

  const handleGoToTestimonial = (index: number) => {
    setCurrentTestimonialIndex(index);
    resetTestimonialInterval();
  };
  
  const currentTestimonial = TESTIMONIALS[currentTestimonialIndex];

  return (
    <div className="pt-20 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:h-[680px] flex flex-col items-center justify-start pt-16 md:pt-28 overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
            <img 
                src="/images/hero-image-bg.webp" 
                alt="Hero Background" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/30 to-blue-300/10 mix-blend-multiply"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10 relative w-full">
          <h1 className="text-xl md:text-[64px] lg:text-[64px] leading-[30px] md:leading-[76px] lg:leading-[76px] tracking-[-0.8px] text-white drop-shadow-sm">
            Cari kost terasa lebih mudah,
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-0 md:mt-2 lg:mt-2 text-xl md:text-[64px] lg:text-[64px] leading-[30px] md:leading-[76px] lg:leading-[76px] tracking-[-0.8px] text-white drop-shadow-sm">
            <span>bersama</span>
            <div className="flex items-end justify-center">
               <img alt="Logo" src="/images/logo-sekitar-icon.png" className="h-10 w-auto md:h-[72px] md:w-auto"/>
            </div>
            <span>Sekitar.</span>
          </div>
          
          <div className="mt-10 md:mt-14 max-w-2xl mx-auto w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 pl-6 md:pl-8 flex items-center shadow-xl transition-transform hover:scale-[1.01]">
              <Search className="text-gray-400 w-5 h-5 mr-3 flex-shrink-0" />
              <input 
                type="text" 
                placeholder="Tulis nama kost disini..." 
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 text-base md:text-lg py-2 bg-transparent"
              />
              <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-black transition-colors shadow-md">
                Cari
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* About Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="text-xl">✦</span> ABOUT US
            </div>
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 leading-tight font-semibold">
              Sama seperti jodoh, kadang kost <br/> dan hunian idaman bisa kamu &nbsp;
              <span className="text-[#96C8E2]">#CariDiSekitar</span>
            </h2>
            <div className="flex gap-4 mt-8">
              <div className="w-48 h-48 bg-gray-100 rounded-2xl overflow-hidden">
                <img src="/images/about-1.webp" className="w-full h-full object-cover" alt="Building detail" />
              </div>
              <div className="w-48 h-48 bg-gray-100 rounded-2xl overflow-hidden">
                <img src="/images/about-2.webp" className="w-full h-full object-cover" alt="Roof detail" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-between h-full md:pt-20">
             <div className="self-end mb-10">
                <img src="/images/sparkels.svg" className="h-[52px] object-cover" alt="Interior detail" />
             </div>
             <p className="text-gray-500 text-lg md:text-xl leading-relaxed text-right max-w-md ml-auto">
               Dengan data yang akurat dan filter yang personal, <span className="text-[#96C8E2] font-semibold">Sekitar</span> hadir untuk bantu kamu menemukan kost terbaik yang sesuai dengan kebutuhan mu, di mana pun kamu berada.
             </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-8 md:py-20 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#F5F5F5] py-5 rounded-2xl">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            <div className="lg:w-1/4 flex flex-col justify-center lg:sticky lg:top-24 self-start">
               <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-4 text-gray-900">
                 <span className="text-lg">✦</span> HIGHLIGHT
               </div>
               <h2 className="text-3xl md:text-[48px] lg:text-[48px] font-semibold text-gray-900 mb-6 leading-tight">
                 5 Kost Pilihan Kami
               </h2>
               <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                 Pusing ya pilih kos yang nyaman, aman, dan strategis? <br className="hidden lg:block"/>
                 Tenang, ini dia 5 kost pilihan kami 👉🏻
               </p>
               
               <div className="flex gap-4">
                 <button 
                   onClick={() => scroll('left')}
                   disabled={!canScrollLeft}
                   className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-200 ${
                     !canScrollLeft 
                       ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-transparent' 
                       : 'border-gray-300 text-gray-900 hover:border-gray-900 hover:bg-white bg-transparent'
                   }`}
                   aria-label="Previous"
                 >
                   <ArrowLeft size={24} />
                 </button>
                 <button 
                   onClick={() => scroll('right')}
                   disabled={!canScrollRight}
                   className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-200 ${
                     !canScrollRight
                       ? 'border-gray-200 text-gray-300 cursor-not-allowed bg-transparent'
                       : 'bg-[#1A1A1A] border-[#1A1A1A] text-white hover:bg-black hover:scale-105 shadow-lg'
                   }`}
                   aria-label="Next"
                 >
                   <ArrowRight size={24} />
                 </button>
               </div>
            </div>

            <div 
              ref={scrollContainerRef}
              className="lg:w-3/4 flex overflow-x-auto gap-6 pb-4 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar snap-x scroll-smooth items-stretch"
            >
              {PROPERTIES.slice(0, 5).map((prop) => (
                <div key={prop.id} className="min-w-[250px] md:min-w-[250px] snap-start h-auto">
                  <PropertyCard property={prop} />
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* Search Listings Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest mb-2">
             <span className="text-xl">✦</span> CARI KOS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Mulai Cari Kos</h2>
          <p className="text-gray-500">Kalau biasanya kamu butuh 30 hari untuk cari kost yang sesuai, di Sekitar kamu hanya butuh 30 menit!</p>
        </div>

        <SearchFilter />

        <div className="mt-8 mb-12 text-gray-500 text-sm">
          Menampilkan 10 dari hasil pencarian
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[...PROPERTIES, ...PROPERTIES].slice(0, 10).map((prop, idx) => (
            <PropertyCard key={`${prop.id}-${idx}`} property={prop} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-12 text-sm font-medium">
           <button className="text-gray-400 flex items-center gap-1 hover:text-gray-900"><ArrowLeft size={16}/> Previous</button>
           <button className="w-8 h-8 bg-gray-900 text-white rounded flex items-center justify-center">1</button>
           <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 rounded flex items-center justify-center">2</button>
           <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 rounded flex items-center justify-center">3</button>
           <span className="text-gray-400">...</span>
           <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 rounded flex items-center justify-center">67</button>
           <button className="w-8 h-8 text-gray-500 hover:bg-gray-100 rounded flex items-center justify-center">68</button>
           <button className="text-gray-900 flex items-center gap-1 hover:text-blue-600">Next <ArrowRight size={16}/></button>
        </div>
      </section>

      {/* Promo Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="bg-[#89CFF0] rounded-3xl p-8 md:p-10 flex flex-row items-center relative overflow-hidden h-[300px]">
             <div className="absolute left-0 bottom-0 w-1/2 h-full">
                <img src="/images/bisnis-kost.webp" className="w-full h-full object-cover object-center" alt="User" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#89CFF0]"></div>
             </div>
             <div className="absolute right-0 w-1/2 z-10">
               <div className="inline-block bg-white px-3 py-1 rounded-xl text-xs font-bold mb-4">Gratis</div>
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Daftarkan Kosmu</h3>
               <p className="text-white/90 text-sm mb-6">Punya kos? Yuk, daftarkan sekarang dan buat kosmu lebih mudah ditemukan oleh ribuan pencari di sekitar kamu!</p>
               <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800">Daftar sekarang</button>
             </div>
          </div>

           <div className="bg-[#89CFF0] rounded-3xl p-8 md:p-10 flex flex-row items-center relative overflow-hidden h-[300px]">
              <div className="absolute left-0 bottom-0 w-1/2 h-full">
                <img src="/images/daftarkan-bisnis.webp" className="w-full h-full object-cover object-center" alt="Business owner" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#89CFF0]"></div>
             </div>
             <div className="absolute right-0 w-1/2 z-10">
               <div className="inline-block bg-white px-3 py-1 rounded-xl text-xs font-bold mb-4">Gratis</div>
               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Daftarkan Bisnismu</h3>
               <p className="text-white/90 text-sm mb-6">Punya usaha lokal? Yuk, daftarkan bisnismu biar makin dikenal dan mudah ditemukan orang di sekitar kamu!</p>
               <button className="bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800">Daftar sekarang</button>
             </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest mb-2">
             <span className="text-xl">✦</span> BISNIS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Bisnis Teman Sekitar</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Kami percaya setiap usaha layak untuk tumbuh. Karena itu, kami bantu #TemanSekitar mempromosikan bisnis kecil/UMKM secara gratis di website ini. 🩵</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {BUSINESSES.map((biz) => (
            <div key={biz.id} className="relative rounded-xl overflow-hidden bg-white shadow-md">
        
                <div className="relative h-[360px] w-full">
                  <img
                    src={biz.image}
                    alt={biz.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] bg-white/20 backdrop-blur-sm rounded-xl shadow-lg p-2">
                  <h3 className="text-[16px] lg:text-[16px] md:text-[16px] text-white">
                    {biz.name}
                  </h3>
                  
                  <div className="text-center flex justify-between items-end">
                    <span className="text-[16px] lg:text-[16px] md:text-[16px] font-bold text-white">
                      {biz.priceRange}
                    </span>
                    <div className="bg-white rounded-full p-2 hover:bg-gray-200 transition-colors">
                      <ChevronRight size={16} className="text-gray-900" />
                    </div>
                  </div>
                </div>

              </div>

            
          ))}
        </div>

        


         <div className="flex justify-center mt-10">
           <button className="px-8 py-3 border border-[#18181B] rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">Lihat semua</button>
         </div>
      </section>

      {/* Testimonial Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Apa Kata <span className="text-[#96C8E2]">#TemanSekitar</span></h2>
          <p className="text-gray-500 mt-4">Setiap pengguna punya cerita. Inilah pengalaman mereka menemukan kost yang tepat bersama Sekitar. 🩵</p>
        </div>

        <div className="relative bg-gray-50 rounded-3xl flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
           <div className="absolute left-4 top-1/2 -translate-y-1/2 md:-left-16">
             <button onClick={handlePrevTestimonial} className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 shadow-sm transition-all">
               <ArrowLeft size={20} className="text-gray-400" />
             </button>
           </div>
           <div className="absolute right-4 top-1/2 -translate-y-1/2 md:-right-16">
             <button onClick={handleNextTestimonial} className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 shadow-sm transition-all">
               <ArrowRight size={20} className="text-white" />
             </button>
           </div>
          
           <div className={`transition-opacity duration-300 ${testimonialFade ? 'opacity-100' : 'opacity-0'} w-full flex flex-col md:flex-row items-center gap-10`}>
             <div className="md:w-64 flex-shrink-0 overflow-hidden border-white shadow-lg rounded-l-xl">
               <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
             </div>
             <div className="flex-1 text-center md:text-left">
               <span className="text-6xl font-serif text-gray-900 leading-none mb-4 block">“</span>
               <p className="text-xl md:text-2xl text-gray-800 font-medium mb-6 leading-relaxed min-h-[140px] md:min-h-[168px]">
                 {currentTestimonial.quote}
               </p>
               <div>
                 <h4 className="font-bold text-gray-900">— {currentTestimonial.name}</h4>
                 <p className="text-gray-500 text-sm">{currentTestimonial.role}</p>
               </div>
             </div>
           </div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
           {TESTIMONIALS.map((_, index) => (
             <button
               key={index}
               onClick={() => handleGoToTestimonial(index)}
               className={`w-2.5 h-2.5 rounded-full transition-colors ${
                 currentTestimonialIndex === index ? 'bg-gray-800' : 'bg-gray-300 hover:bg-gray-400'
               }`}
               aria-label={`Go to testimonial ${index + 1}`}
             />
           ))}
        </div>
      </section>
    </div>
  );
}