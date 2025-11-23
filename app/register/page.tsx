'use client';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register logic
    console.log('Registering:', name, email, phone);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50">

  {/* LEFT: REGISTER FORM */}
  <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 p-8">

      {/* Logo + Title */}
      <div className="">
        <div
          className="flex cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img alt="Logo" src="/images/logo-header-sekitar.png" className="h-[44px] md:h-[54px] lg:h-[54px] w-auto text-blue-400"/>
        </div>

        <h2 className="mt-6 text-[20px] md:text-[32px] lg:text-[32px] font-semibold text-gray-900">
          Daftar ke Sekitar
        </h2>
        <p className="mt-2 text-xs text-gray-600">
          Cuma butuh 3 detik untuk daftar, dan kamu bisa langsung akses ratusan kost, lho!
        </p>
      </div>

      {/* FORM */}
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">

          {/* NAME */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nama Lengkap
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs"
              placeholder="Masukkan nama lengkap kamu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs"
              placeholder="Masukkan e-mail kamu"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PHONE NUMBER */}
          <div className="mb-4">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700 mb-1 mt-4"
            >
              Nomor Telepon
            </label>
            <input
              id="phone-number"
              name="phone"
              type="phone"
              required
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-xs"
              placeholder="Masukkan no telepon kamu yang terhubung ke WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
          >
            Selanjutnya
          </button>
        </div>
      </form>

      {/* LOGIN LINK */}
      <div className="">
        <p className="text-sm text-gray-600">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Masuk
          </Link>
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT: BACKGROUND IMAGE */}
  <div
    className="hidden lg:block bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/bg-login.webp')"
    }}
  ></div>
</div>

  );
}