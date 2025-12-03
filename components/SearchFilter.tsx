import React from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';

const SearchFilter: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-4 md:p-6 w-full max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4">

        <div className="flex-1">
          <label className="block text-xs text-gray-500 font-medium mb-1">
            Cari
          </label>

          <div className="flex items-center bg-white rounded-lg px-4 py-2 border border-gray-200 
                      focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <Search size={16} className="text-gray-400 mr-2" />

            <input
              type="text"
              placeholder="Cari kos ..."
              className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>


        <div className="flex-1">
          <label className="block text-xs text-gray-500 font-medium mb-1">
            Lokasi
          </label>

          <div className="relative">
            <select
              className="
                w-full bg-white rounded-lg px-4 py-2 pr-8
                border border-gray-200 cursor-pointer
                hover:border-gray-300
                text-sm text-gray-700
                appearance-none
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Lokasi
              </option>
              <option value="jakarta">Jakarta</option>
              <option value="bandung">Bandung</option>
              <option value="surabaya">Surabaya</option>
            </select>

            {/* Chevron Icon */}
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>
        </div>

        <div className="flex-1">
          <label className="block text-xs text-gray-500 font-medium mb-1">
            Tipe
          </label>

          <div className="relative">
            <select
              className="
                w-full bg-white rounded-lg px-4 py-2 pr-8
                border border-gray-200 cursor-pointer
                hover:border-gray-300
                text-sm text-gray-700
                appearance-none
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Tipe
              </option>
              <option value="jakarta">Jakarta</option>
              <option value="bandung">Bandung</option>
              <option value="surabaya">Surabaya</option>
            </select>

            {/* Chevron Icon */}
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>
        </div>

        {/* Harga */}
        <div className="flex-1">
          <label className="block text-xs text-gray-500 font-medium mb-1">
            Harga
          </label>

          <div className="relative">
            <select
              className="
                w-full bg-white rounded-lg px-4 py-2 pr-8
                border border-gray-200 cursor-pointer
                hover:border-gray-300
                text-sm text-gray-700
                appearance-none
                focus:outline-none focus:ring-2 focus:ring-blue-500
              "
              defaultValue=""
            >
              <option value="" disabled>
                Pilih Harga
              </option>
              <option value="jakarta">{'>'} 1.000.000-2.000.000</option>
              <option value="bandung">Bandung</option>
              <option value="surabaya">Surabaya</option>
            </select>

            {/* Chevron Icon */}
            <ChevronDown
              size={16}
              className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>
        </div>



        <button className="bg-gray-900 text-white px-8 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors h-[40px] md:h-[40px] lg:h-[40px] md:h-auto self-end w-full md:w-auto">
          Cari
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;