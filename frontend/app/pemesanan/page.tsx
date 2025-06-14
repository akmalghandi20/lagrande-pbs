"use client";

import { useState } from "react";

export default function Pemesanan() {
  const [namaPesanan, setNamaPesanan] = useState("");
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

  return (
    <div>
      <h1>Pemesanan</h1>
      <form>
        <div>
          <label>Nama Pesanan</label>
          <input
            type="text"
            value={namaPesanan}
            onChange={(e) => setNamaPesanan(e.target.value)}
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
      </form>
    </div>
  );
}
