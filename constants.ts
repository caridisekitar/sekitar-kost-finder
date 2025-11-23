import { Property, Business, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Kost Dahlia Indah",
    location: "Mampang, Jakarta Selatan",
    price: "Rp1.500.000",
    type: "Putri",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPromoted: true
  },
  {
    id: 2,
    title: "Kost Melati Putih",
    location: "Tebet, Jakarta Selatan",
    price: "Rp2.100.000",
    type: "Campur",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPromoted: true
  },
  {
    id: 3,
    title: "Wisma Asri",
    location: "Setiabudi, Jakarta Selatan",
    price: "Rp1.850.000",
    type: "Putra",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPromoted: true
  },
  {
    id: 4,
    title: "Kost Bunga Mawar",
    location: "Kemang, Jakarta Selatan",
    price: "Rp2.500.000",
    type: "Putri",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPromoted: true
  },
  {
    id: 5,
    title: "Paviliun Ceria",
    location: "Cilandak, Jakarta Selatan",
    price: "Rp3.000.000",
    type: "Campur",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    isPromoted: true
  }
];

export const BUSINESSES: Business[] = [
  {
    id: 1,
    name: "Kopi Calva",
    priceRange: "Rp10.000",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Laundry Kiloan",
    priceRange: "Rp50.000",
    image: "/images/image-15.webp"
  },
  {
    id: 3,
    name: "Warung Makan Enak",
    priceRange: "Rp150.000",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Gym Sehat",
    priceRange: "Rp10.000",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Candra Haris",
    role: "Pemilik Kos Dahlia",
    quote: "Setelah daftarin kos di caridisekitar.com, penyewa jadi makin banyak! Fitur pendaftarannya gampang banget, dan kos saya cepat muncul di hasil pencarian.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Sarah Wijaya",
    role: "Mahasiswi & Pencari Kos",
    quote: "Aplikasinya sangat user-friendly. Filternya lengkap banget, jadi saya bisa nemu kos yang sesuai budget dan deket kampus dalam hitungan menit. Recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Pekerja Kantoran",
    quote: "Fitur Maps sangat membantu saya mencari kos yang strategis, dekat dengan kantor dan fasilitas umum. Prosesnya cepat dan tidak ribet sama sekali.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const isSubscribed = false;