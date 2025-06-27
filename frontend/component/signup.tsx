"use client";

import { useState } from "react";

interface SignUpProps {
  onSignUp: (
    username: string,
    password: string,
    nama: string,
    email: string
  ) => void;
}

export default function SignUpForm({ onSignUp }: SignUpProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSignUp(username, password, nama, email);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md mx-auto"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Nama
          </label>
          <input
            type="text"
            placeholder="Masukan Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Username
          </label>
          <input
            type="text"
            placeholder="Masukan Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
            <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-9 cursor-pointer p-1 bg-transparent hover:bg-gray-200 rounded-full focus:outline-none"
            tabIndex={-1}
            aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
            >
            <img
              src={showPassword ? "/eye-solid.svg" : "/eye-slash-solid.svg"}
              alt={showPassword ? "Sembunyikan password" : "Tampilkan password"}
              className="w-5 h-5"
            />
            </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Daftar
        </button>
      </form>
    </div>
  );
}
