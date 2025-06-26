'use client';

import Image from "next/image";

export default function HomePage() {
  return (
  <div  className="space-y-16 p-6 md:p-12">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div>
        <Image
         src="/warmaskin.png"
         alt="Warmaskin Coffee"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h1 className="text-4xl font-bold text-brown-800">
          Warmaskin Coffe
        </h1>
        <p className="text-gray-700 text-lg">
          Nikmati secangkir kopi terbaik dari biji pilihan, diseduh dengan cinta di Warmaskin Coffee.
            Tempat nongkrong yang nyaman, cocok untuk kerja, santai, maupun kumpul bareng teman
        </p>
        <div className="mt-4">
          <div>
            <h2 className="text-xl font-semibold text-brown-700">
              Jam Operasional
            </h2>
            <ul className="text-gray-600 text-base mt-1">
              <li>Senin - Sabtu : 08.00 - 10.00</li>
              <li>Minggu : 10.00 - 23.00</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  </div>
  );
}
