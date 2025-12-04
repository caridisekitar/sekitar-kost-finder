'use client';

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import path from 'path';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 md:h-20 lg:h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('/')}>
            <div className="flex items-center gap-2">
              <img alt="Logo" src="/images/logo-header-sekitar.png" className="h-[44px] md:h-[54px] lg:h-[54px] w-auto text-blue-400"/>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-900 hover:text-blue-500 font-medium text-sm">Home</Link>
            <Link to="/cari-kos" className="text-gray-500 hover:text-blue-500 font-medium text-sm">Cari Kos</Link>
            <Link to="/maps" className="text-gray-500 hover:text-blue-500 font-medium text-sm">Maps</Link>
            <Link to="/wishlist" className="text-gray-500 hover:text-blue-500 font-medium text-sm">Wishlist</Link>
            <Link to="/calculator" className="text-gray-500 hover:text-blue-500 font-medium text-sm">Kalkulator Budget</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button onClick={() => navigate('/login')} className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
              Masuk
            </button>
            <button onClick={() => navigate('/register')} className="px-6 py-2.5 bg-gray-900 border border-transparent rounded-lg text-sm font-medium text-white hover:bg-gray-800 transition-colors">
              Daftar
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#292524] bg-[#DCF4FF] p-2 rounded-full">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Home</Link>
            <Link to="/cari-kos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">Cari Kos</Link>
            <Link to="/maps" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">Maps</Link>
            <Link to="/wishlist" className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-50">Wishlist</Link>
            <div className="mt-4 flex flex-col space-y-2">
              <button onClick={() => navigate('/login')} className="w-full text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium">Masuk</button>
              <button onClick={() => navigate('/register')} className="w-full text-center px-4 py-2 bg-gray-900 rounded-md text-white font-medium">Daftar</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;