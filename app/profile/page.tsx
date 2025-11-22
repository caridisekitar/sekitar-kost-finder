'use client';

import React from 'react';
import { User, MapPin, Settings, LogOut } from 'lucide-react';

export default function Profile() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
          {/* Banner */}
          <div className="h-48 bg-[#A7D4F1]"></div>
          
          <div className="px-8 pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-8 gap-6">
              <div className="w-32 h-32 rounded-full bg-white p-1 shadow-md">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <User size={48} />
                </div>
              </div>
              <div className="flex-1 mb-2">
                <h1 className="text-2xl font-bold text-gray-900">Pengguna Baru</h1>
                <p className="text-gray-500 flex items-center gap-1"><MapPin size={14} /> Jakarta, Indonesia</p>
              </div>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 mb-2">
                <Settings size={16} /> Edit Profile
              </button>
            </div>

            <div className="border-t border-gray-100 pt-8">
               <h2 className="text-lg font-bold text-gray-900 mb-4">Wishlist Saya</h2>
               <div className="p-8 text-center border border-dashed border-gray-300 rounded-xl text-gray-400">
                   Belum ada kost yang disimpan.
               </div>
            </div>
             
             <div className="mt-8">
                <button className="text-red-500 flex items-center gap-2 text-sm font-medium hover:text-red-600">
                    <LogOut size={16} /> Log out
                </button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
