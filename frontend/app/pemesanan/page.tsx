"use client";

import { useState } from "react";

interface MenuItem {
  namaMenu: string;
  jumlah: number;
}

const BACKEND_URL = "http://localhost:3001/api/pesanan";

export default function Pemesanan() {
  const [namaPemesan, setNamaPemesan] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { namaMenu: "", jumlah: 1 },
  ]);

  const handleAddMenu = () => {
    setMenuItems([...menuItems, { namaMenu: "", jumlah: 1 }]);
  };

  const handleRemoveMenu = (index: number) => {
    const updatedItems = [...menuItems];
    updatedItems.splice(index, 1);
    setMenuItems(updatedItems);
  };

    const simpanData = async (item: MenuItem) => {
    const response = await fetch(BACKEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama_pemesan: namaPemesan,
        nama_menu: item.namaMenu,
        jumlah: item.jumlah,
      }),
    });

    if (!response.ok) {
      throw new Error("Gagal menyimpan ke server.");
    }

    const result = await response.json();

    if (result.metaData?.error !== 0) {
      throw new Error(result.metaData?.message || "Terjadi kesalahan.");
    }

    return result;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      for (const item of menuItems) {
        await simpanData(item);
      }

      alert("Pesanan berhasil dikirim!");
      setNamaPemesan("");
      setMenuItems([{ namaMenu: "", jumlah: 1 }]);
    } catch (error: any) {
      console.error("Error:", error);
      alert("Gagal menyimpan pesanan: " + error.message);
    }
  };

  const handleMenuChange = (
    index: number,
    field: keyof MenuItem,
    value: string | number
  ) => {
    const updated = [...menuItems];

    if (field === "namaMenu") {
      updated[index].namaMenu = String(value);
    } else if (field === "jumlah") {
      updated[index].jumlah = Number(value);
    }

    setMenuItems(updated);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-yellow-50 via-orange-50 to-brown-100">
      <div className="w-full max-w-3xl p-10 bg-gradient-to-br from-yellow-50 via-orange-50 to-brown-100 rounded-3xl shadow-2xl border border-gray-200/30 backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 text-center tracking-widest drop-shadow-lg">
          Pemesanan
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
        <label className="block text-gray-700 mb-2 font-medium tracking-wide">Nama Pemesan</label>
        <input
          type="text"
          placeholder="Nama Pemesan"
          value={namaPemesan}
          onChange={(e) => setNamaPemesan(e.target.value)}
          required
          autoComplete="off"
          className="w-full px-5 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-200 text-gray-800 placeholder-gray-400 shadow-inner mb-4 transition"
        />
          </div>

          {menuItems.map((item, index) => (
        <div key={index} className="mb-5">
          <div className="flex gap-3 items-center">
        <input
          type="text"
          placeholder="Nama Menu"
          value={item.namaMenu}
          onChange={(e) =>
        handleMenuChange(index, "namaMenu", e.target.value)
          }
          required
          className="flex-1 px-5 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-200 text-gray-800 placeholder-gray-400 shadow-inner transition"
        />
        <input
          type="number"
          min={1}
          value={item.jumlah}
          onChange={(e) =>
        handleMenuChange(index, "jumlah", e.target.value)
          }
          required
          className="w-28 px-4 py-3 bg-white border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-200 text-gray-800 shadow-inner transition"
        />
        {menuItems.length > 1 && (
          <button
        type="button"
        onClick={() => handleRemoveMenu(index)}
        className="text-red-500 hover:text-red-400 font-bold text-2xl transition"
        title="Hapus Menu"
          >
        <span className="drop-shadow-lg">&times;</span>
          </button>
        )}
          </div>
        </div>
          ))}

          <div className="flex justify-between mb-6">
        <button
          type="button"
          onClick={handleAddMenu}
          className="text-yellow-700 font-semibold hover:underline hover:text-yellow-800 transition"
        >
          + Tambah Menu
        </button>
          </div>

          <button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-yellow-50 via-orange-50 to-brown-100 text-gray-800 font-bold rounded-2xl shadow-lg hover:from-yellow-100 hover:to-orange-100 hover:scale-105 transition-all duration-300 tracking-widest"
          >
        Pesan Sekarang
          </button>
        </form>
      </div>
      </div>
    );
  }

