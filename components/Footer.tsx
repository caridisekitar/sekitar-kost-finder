import React from 'react';
import { Home,  Instagram, Tiktok } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pb-0 md:pb-8 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[url('/images/bg-footer.webp')] bg-cover bg-top md:rounded-2xl lg:rounded-2xl">
        {/* Top Section with Blue Background Card */}
        <div className="lg:p-8 md:pt-12 pb-8 md:pb-8 lg:pb-8">
          {/* <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full blur-3xl"></div> */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
            <div className="mb-2 md:mb-0 lg:mb-0">
              <div className="flex items-center gap-2 my-8 md:my-0 lg:my-5">
                <img alt="Logo" src="/images/logo-footer.webp" className="h-[50px] md:h-[65px] lg:h-[65px] w-auto text-white"/>
              </div>
            </div>
            <div className="text-right">
               <h2 className="text-[20px] lg:leading-[38px] md:text-[32px] font-bold text-white mb-10">Cari kost terasa lebih mudah,<br/>bersama Sekitar.</h2>
            </div>
          </div>
        {/* here */}
        <div className="bg-white p-4 rounded-xl shadow-md">

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-4">MENU</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Home</a></li>
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Cari Kost</a></li>
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Maps</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-4 text-transparent">.</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Wishlist</a></li>
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Kalkulator Budget</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-4">INFORMATION</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Privacy</a></li>
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Faq</a></li>
                  <li><a href="#" className="text-gray-900 hover:text-blue-600 text-sm">Contacts</a></li>
                </ul>
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-end lg:items-end">
                <button className="bg-black text-white px-6 py-2 rounded-lg text-sm mb-4 w-full md:w-auto lg:w-auto">Contact Us</button>
                <a href="mailto:caridisekitar@gmail.com" className="text-sm text-gray-500">caridisekitar@gmail.com</a>
              </div>
            </div>
        
            <div className="flex flex-col md:flex-row justify-between items-center my-4">
                <div className="flex space-x-4 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full border-2 border-[#1B1819] flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <a href="https://www.tiktok.com/@caridisekitar.com">
                      <img src="/images/tiktok.svg" alt="Tiktok Sekitar" className="w-6 h-6"/>
                    </a>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#1B1819] flex items-center justify-center hover:bg-gray-50 cursor-pointer">
                    <a href="https://www.instagram.com/caridisekitar">
                      <img src="/images/instagram.svg" alt="Instagram Sekitar" className="w-6 h-6"/>
                    </a>
                  </div>
                </div>
              <p className="text-xs text-[#1B1819]">© 2025 Sekitar All Rights Reserved</p>
            </div>
        </div>

            

        </div>

        

        
      </div>
    </footer>
  );
};

export default Footer;