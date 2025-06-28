"use client";

export default function MenuPage() {
  return (
    <div className="p-8 bg-gradient-to-br from-yellow-50 via-orange-50 to-brown-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-black drop-shadow">Daftar Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center">
          <div className="relative w-40 h-40 mb-4 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-sm text-gray-500">
              [Gambar Menu]
            </span>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-black mb-2 text-center">[Nama Menu]</h2>
            <p className="text-black font-bold text-lg mb-3">Rp[Harga Menu]</p>
          </div>
        </div>
      </div>
    </div>
  );
}
