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
        />
      </div>
      <div>
        <h1>
          Warmaskin Coffe
        </h1>
        <p>

        </p>
        <div>
          <div>
            <h2>

            </h2>
            <ul>
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
