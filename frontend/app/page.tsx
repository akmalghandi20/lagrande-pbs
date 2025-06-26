"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-brown-100 p-6 md:p-12">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2">
          <Image
            src="/home.JPG"
            alt="Warmaskin Coffee"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl object-cover w-full h-auto border-4 border-brown-100"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-brown-800 drop-shadow animate-fade-in">
            Warmaskin Coffee
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nikmati secangkir kopi terbaik dari biji pilihan, diseduh dengan
            cinta di Warmaskin Coffee. Tempat nongkrong yang nyaman, cocok untuk
            kerja, santai, maupun kumpul bareng teman.
          </p>
          <div className="mt-6 bg-white/80 rounded-xl p-4 shadow flex flex-col gap-2 border-l-4 border-brown-300">
            <h2 className="text-xl font-semibold text-brown-700">
              Jam Operasional
            </h2>
            <ul className="text-gray-600 text-base mt-1">
              <li>Senin - Sabtu : 08.00 - 22.00</li>
              <li>Minggu : 10.00 - 23.00</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-brown-800 animate-fade-in">
          Best Seller
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Americano", img: "/home.JPG" },
            { name: "Kopi Susu", img: "/home.JPG" },
            { name: "Latte", img: "/home.JPG" },
          ].map((item) => (
            <div
              key={item.name}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl group"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={300}
                height={200}
                className="w-full h-52 object-cover transition-all duration-300 group-hover:brightness-90"
              />
              <span className="absolute top-3 left-3 bg-brown-700 text-white text-xs px-3 py-1 rounded-full shadow font-semibold">
                Best Seller
              </span>
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-brown-700 group-hover:text-brown-900 transition">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in {
          animation: fade-in 1s ease;
        }
      `}</style>
    </div>
  );
}
