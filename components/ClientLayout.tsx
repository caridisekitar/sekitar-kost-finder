'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from "@/app/NotFound";
import "@/app/globals.css";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isNotFound = children?.type === NotFound;

  const hideHeaderFooter = ['/login', '/register', '/confirm-otp'].includes(location.pathname) || isNotFound;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {!hideHeaderFooter && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;