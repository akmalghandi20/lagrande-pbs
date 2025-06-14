"use client";

import { useState } from "react";

interface MenuItem {
  namaMenu: string;
  jumlah: number;
  harga: number;
}

export default function Pemesanan() {
  const [namaPemesan, setNamaPemesan] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { namaMenu: "", jumlah: 1, harga: 0 },
  ]);
  const [rekomendasi, setRekomendasi] = useState<string[][]>([[]]);

  const handleAddMenu = () => {
    setMenuItems([...menuItems, { namaMenu: "", jumlah: 1, harga: 0 }]);
    setRekomendasi([...rekomendasi, []]);
  };

  const handleRemoveMenu = (index: number) => {
    const updatedItems = [...menuItems];
    const updatedRekom = [...rekomendasi];
    updatedItems.splice(index, 1);
    updatedRekom.splice(index, 1);
    setMenuItems(updatedItems);
    setRekomendasi(updatedRekom);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Pesanan dari ${namaPemesan}\nTotal: Rp${totalHarga.toLocaleString(
        "id-ID"
      )}`
    );

    setNamaPemesan("");
    setMenuItems([{ namaMenu: "", jumlah: 1, harga: 0 }]);
    setRekomendasi([[]]);
  };

  const handleMenuChange = (
    index: number,
    field: keyof MenuItem,
    value: string | number
  ) => {
    const updated = [...menuItems];
    const updatedRekom = [...rekomendasi];

    if (field === "namaMenu") {
      const val = String(value);
      updated[index].namaMenu = val;
      const matched = menuList.find(
        (m) => m.nama.toLowerCase() === val.toLowerCase()
      );
      updated[index].harga = matched ? matched.harga : 0;
      updatedRekom[index] = menuList
        .filter((m) => m.nama.toLowerCase().includes(val.toLowerCase()) && val)
        .slice(0, 5)
        .map((m) => m.nama);
    } else if (field === "jumlah") {
      updated[index].jumlah = Number(value);
    }

    setMenuItems(updated);
    setRekomendasi(updatedRekom);
  };

  const handleSelectRekomendasi = (index: number, nama: string) => {
    const updated = [...menuItems];
    const matched = menuList.find((m) => m.nama === nama);
    updated[index].namaMenu = nama;
    updated[index].harga = matched ? matched.harga : 0;

    setMenuItems(updated);

    const updatedRekom = [...rekomendasi];
    updatedRekom[index] = [];
    setRekomendasi(updatedRekom);
  };

  const totalJumlah = menuItems.reduce((acc, item) => acc + item.jumlah, 0);
  const totalHarga = menuItems.reduce(
    (acc, item) => acc + item.jumlah * item.harga,
    0
  );

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Pemesanan
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-600 mb-1">Nama Pemesan</label>
            <input
              type="text"
              placeholder="Nama Pemesan"
              value={namaPemesan}
              onChange={(e) => setNamaPemesan(e.target.value)}
              required
              autoComplete="off"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500  mb-3"
            />
          </div>

          {menuItems.map((item, index) => (
            <div key={index} className="relative mb-4">
              <div className="flex gap-2 items-center">
                <input
                  type="text"
                  placeholder="Nama Menu"
                  value={item.namaMenu}
                  onChange={(e) =>
                    handleMenuChange(index, "namaMenu", e.target.value)
                  }
                  required
                  className="flex-1 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                <input
                  type="number"
                  min={1}
                  value={item.jumlah}
                  onChange={(e) =>
                    handleMenuChange(index, "jumlah", e.target.value)
                  }
                  required
                  className="w-24 px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {menuItems.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMenu(index)}
                    className="text-red-600 hover:text-red-800 font-bold text-lg"
                  >
                    &times;
                  </button>
                )}
              </div>

              {rekomendasi[index]?.length > 0 && (
                <ul className="absolute z-10 bg-white border mt-1 w-full rounded-xl shadow-md max-h-40 overflow-y-auto">
                  {rekomendasi[index].map((nama, i) => (
                    <li
                      key={i}
                      onClick={() => handleSelectRekomendasi(index, nama)}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {nama}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleAddMenu}
              className="text-blue-600 font-medium hover:underline mb-3"
            >
              + Tambah Menu
            </button>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg border">
            <p>
              <strong>Total Pesanan : </strong> {totalJumlah}
            </p>
            <p>
              <strong>Total Harga : </strong> Rp
              {totalHarga.toLocaleString("id-ID")}
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300"
          >
            Pesan Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
