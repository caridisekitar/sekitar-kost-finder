import React from 'react';
import { Property } from '../types';
import Image from 'next/image';
import { MapPin } from 'lucide-react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-white shadow-md">
      {/* IMAGE */}
      <div className="relative h-[360px] w-full">
        <img
          src={property.image || ''}
          alt={property.title}
          className="h-full w-full object-cover"
        />

        {/* TYPE BADGE */}
        <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-2xl flex items-center gap-2 shadow-sm">
          <Image src="/images/bed.svg" alt="bed" width={18} height={18} />
          <span className="font-medium text-gray-900 text-[10px]">
            Kost {property.type || <Skeleton />}
          </span>
        </div>

        {/* NEW BADGE */}
        {property.isNew && (
          <div className="absolute top-1 -right-2 text-white py-2 rounded-l-xl rounded-r-sm flex items-center gap-2 shadow-sm">
            <Image src="/images/new.svg" alt="new" width={70} height={14} />
          </div>
        )}
      </div>

      {/* FLOATING INFO CARD */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-[90%] bg-white rounded-xl shadow-lg p-3">
        <h3 className="text-[14px] font-medium text-gray-900">
          {property.title || <Skeleton />}
        </h3>

        {/* LOCATION */}
        <div className="flex items-center text-gray-500 mt-1 mb-3 text-xs">
          <MapPin size={16} className="mr-1" />
          {property.location}
        </div>

        {/* PRICE */}
        <div className="bg-[#EAF6FF] rounded-xl py-3 text-center">
          <span className="text-[16px] font-bold text-gray-900">
            {property.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
