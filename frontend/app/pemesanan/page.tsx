"use client";

import { useState } from "react";

interface MenuItem {
  namaMenu: string;
  jumlah: number;
}

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      for (const item of menuItems) {
        const response = await fetch("/api/pesanan", {
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

        const result = await response.json();

        if (!response.ok || result.metaData?.error !== 0) {
          alert(`Gagal menyimpan pesanan: ${result.metaData?.message}`);
          return;
        }
      }

      alert("Pesanan berhasil dikirim!");

      setNamaPemesan("");
      setMenuItems([{ namaMenu: "", jumlah: 1 }]);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Gagal menghubungi server.");
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
            <div key={index} className="mb-4">
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

