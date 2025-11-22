import React from 'react';
import { Property } from '../types';
import { MapPin, Bed } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
        {/* IMAGE */}
        <div className="relative h-[360px] w-full">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover"
          />

          {/* BADGE */}
          <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-sm">
            <Bed size={18} className="text-gray-700" />
            <span className="font-semibold text-gray-900 text-[14px]">Kost {property.type}</span>
          </div>
        </div>

        {/* FLOATING WHITE CARD */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] bg-white rounded-xl shadow-lg p-2">
          <h3 className="text-[16px] lg:text-[16px] md:text-[16px] font-semibold text-gray-900">
            {property.title}
          </h3>

          {/* LOCATION */}
          <div className="flex items-center text-gray-500 mt-1 mb-4 text-[12px] lg:text-[12px] md:text-[12px]">
            <MapPin size={16} className="mr-1" />
            {property.location}
          </div>

          {/* PRICE */}
          <div className="bg-[#EAF6FF] rounded-xl py-3 text-center">
            <span className="text-[16px] lg:text-[16px] md:text-[16px] font-bold text-gray-900">
              {property.price}
            </span>
          </div>
        </div>
      </div>

    // <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full flex flex-col">
    //   <div className="relative h-72 overflow-hidden">
    //     <img 
    //       src={property.image} 
    //       alt={property.title} 
    //       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    //     />
    //     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
    //         <Bed size={14} className="text-gray-700" />
    //         <span className="text-xs font-bold text-gray-900">Kost {property.type}</span>
    //     </div>
    //   </div>
    //   <div className="p-5 flex-1 flex flex-col">
    //     <h3 className="font-bold text-gray-900 text-xl mb-1">{property.title}</h3>
    //     <div className="flex items-center text-gray-500 text-sm mb-6">
    //       <MapPin size={14} className="mr-1" />
    //       {property.location}
    //     </div>
    //     <div className="mt-auto">
    //       <div className="bg-[#F0F9FF] rounded-xl py-3 px-4 text-center">
    //         <span className="font-bold text-gray-900 text-lg">{property.price}</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PropertyCard;