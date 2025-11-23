'use client';

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Info } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    console.log('Logging in with:', phone);
    navigate('/profile');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-gray-50">

  {/* LEFT: LOGIN FORM */}
  <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 p-8">

      <div className="">
        <div className="flex cursor-pointer" onClick={() => navigate('/')}>
          <img alt="Logo" src="/images/logo-header-sekitar.png" className="h-[44px] md:h-[54px] lg:h-[54px] w-auto text-blue-400"/>
        </div>

        <h2 className="mt-6 text-[20px] md:text-[32px] lg:text-[32px] font-semibold text-gray-900">Masuk ke Sekitar</h2>
      </div>

      <form className="mt-3 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          
          {/* PHONE NUMBER */}
          <div className="mb-4">
            <label
              htmlFor="phone-number"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nomor Telepon
            </label>
            <input
              id="phone-number"
              name="phone"
              type="phone"
              required
              className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Masukkan nomor telepon kamu"
              value={phone}
            />
          </div>

        </div>

        {/* REMEMBER ME + FORGOT */}
        <div className="flex items-center justify-between">
          <div className="bg-[#E0F2FE] rounded-lg p-3 flex items-center gap-2">
            <Info size={40} className="text-gray-500 mr-2"/>
            <p className="text-xs text-gray-600">OTP dikirim via WhatsApp. Pastikan nomor kamu terhubung dengan WhatsApp, ya!</p>
          </div>
          
          
        </div>

        {/* SIGN IN BUTTON */}
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors"
        >
          Kirim OTP
        </button>
      </form>

      {/* REGISTER LINK */}
      <div className="">
        <p className="text-sm text-gray-600">
          Belum punya akun?{" "}
          <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
            Daftar sekarang
          </Link>
        </p>
      </div>
    </div>
  </div>

  {/* RIGHT: FULL IMAGE BACKGROUND */}
  <div
    className="hidden lg:block bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/bg-login.webp')"
    }}
  ></div>
</div>

  );
}