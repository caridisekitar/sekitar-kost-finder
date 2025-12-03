'use client';

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from "@/app/NotFound";
import "@/app/globals.css";

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const hideHeader = ['/confirm-otp'].includes(location.pathname);
  const hideFooter = ['/login', '/register', '/confirm-otp'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {!hideHeader && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default ClientLayout;