"use client";

import { useState } from "react";

export default function Pemesanan() {
  const [namaPemesan, setNamaPemesan] = useState("");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { namaMenu: "", jumlah: 1 },
  ]);

  const handleAddMenu = () => {
    setMenuItems([...menuItems, { namaMenu: "", jumlah: 1 }]);
  };

  const handleRemoveMenu = (index: number) => {
    const updated = menuItems.filter((_, i) => i !== index);
    setMenuItems(updated);
  };

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const detailPesanan = menuItems
      .map((item) => `${item.namaMenu} (${item.jumlah})`)
      .join(', ');
    alert(`Pesanan dari ${namaPemesan}: ${detailPesanan}`);
    setNamaPemesan('');
    setMenuItems([{ namaMenu: '', jumlah: 1 }]);
  };

  return (
    <div>
      <h1>Pemesanan</h1>
      <form  onSubmit={handleSubmit} >
        <div>
          <label>Nama Pemesan</label>
          <input
            type="text"
            value={namaPemesan}
            onChange={(e) => setNamaPemesan(e.target.value)}
            required
          />
        </div>

        {menuItems.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Nama Menu"
              value={item.namaMenu}
              onChange={(e) => {
                const updated = [...menuItems];
                updated[index].namaMenu = e.target.value;
                setMenuItems(updated);
              }}
            />
            <input
              type="number"
              min={1}
              value={item.jumlah}
              onChange={(e) => {
                const updated = [...menuItems];
                updated[index].jumlah = Number(e.target.value);
                setMenuItems(updated);
              }}
            />

            {menuItems.length > 1 && (
              <button type="button" onClick={() => handleRemoveMenu(index)}>
                &times;
              </button>
            )}
          </div>
        ))}

        <div>
          <button type="button" onClick={handleAddMenu}>
            + Tambah Menu
          </button>
        </div>

        <button
          type="submit"
        >
          
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
}
