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
      <div className="w-full max-w-3xl p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-3xl shadow-2xl border border-blue-700/30 backdrop-blur-lg">
        <h1 className="text-3xl font-extrabold text-cyan-400 mb-8 text-center tracking-widest drop-shadow-lg">
          Pemesanan
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
        <label className="block text-cyan-300 mb-2 font-medium tracking-wide">Nama Pemesan</label>
        <input
          type="text"
          placeholder="Nama Pemesan"
          value={namaPemesan}
          onChange={(e) => setNamaPemesan(e.target.value)}
          required
          autoComplete="off"
          className="w-full px-5 py-3 bg-gray-800 border border-cyan-500/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-cyan-100 placeholder-cyan-500 shadow-inner mb-4 transition"
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
          className="flex-1 px-5 py-3 bg-gray-800 border border-cyan-500/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-cyan-100 placeholder-cyan-500 shadow-inner transition"
            />
            <input
          type="number"
          min={1}
          value={item.jumlah}
          onChange={(e) =>
            handleMenuChange(index, "jumlah", e.target.value)
          }
          required
          className="w-28 px-4 py-3 bg-gray-800 border border-cyan-500/40 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400 text-cyan-100 shadow-inner transition"
            />
            {menuItems.length > 1 && (
          <button
            type="button"
            onClick={() => handleRemoveMenu(index)}
            className="text-pink-500 hover:text-pink-400 font-bold text-2xl transition"
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
          className="text-cyan-400 font-semibold hover:underline hover:text-cyan-300 transition"
        >
          + Tambah Menu
        </button>
          </div>

          <button
        type="submit"
        className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-700 text-white font-bold rounded-2xl shadow-lg hover:from-cyan-400 hover:to-purple-600 hover:scale-105 transition-all duration-300 tracking-widest"
          >
        Pesan Sekarang
          </button>
        </form>
      </div>
      </div>
    );
  }

