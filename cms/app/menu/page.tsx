"use client";
import Sidebar from "@/component/sidebar";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type MenuItem = {
  id: number;
  nama_menu: string;
  deskripsi_menu: string;
  gambar: string;
  harga_menu: number;
};

export default function MenuPage() {
  const [menuData, setMenuData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch("http://localhost:3001/api/menu", {
          method: "GET",
        });
        if (!res.ok) throw new Error("HTTP error " + res.status);
        const json = await res.json();
        const data: MenuItem[] = json.data_menu; // <-- extract from nested object
        setMenuData(data);
      } catch (error) {
        console.error("Failed to fetch menu:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  const handleEdit = (id: number) => {
    // Pindah ke halaman edit untuk menu dengan ID tertentu
    router.push(`/menu/${id}`);
  };

  const handleDelete = async (item: MenuItem) => {
    const ok = confirm(`Hapus menu "${item.nama_menu}"?`);
    if (!ok) return;

    try {
      const res = await fetch(`http://localhost:3001/api/menu/${item.id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Gagal menghapus");
      setMenuData((prev) => prev.filter((m) => m.id !== item.id));
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus menu");
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Daftar Menu</h1>
          <Link href="/menu/add">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              + Tambah Menu
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto bg-white rounded-lg shadow">
          {menuData.length > 0 ? (
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left">No</th>
                  <th className="px-4 py-2 text-left">Gambar</th>
                  <th className="px-4 py-2 text-left">Nama Menu</th>
                  <th className="px-4 py-2 text-left">Deskripsi</th>
                  <th className="px-4 py-2 text-right">Harga (IDR)</th>
                  <th className="px-4 py-2 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {menuData.map((item, idx) => (
                  <tr
                    key={item.id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-4 py-3">{idx + 1}</td>
                    <td className="px-4 py-3">
                      {item.gambar ? (
                        <Image
                          src={item.gambar}
                          alt={item.nama_menu || "Menu image"}
                          width={50}
                          height={50}
                          className="rounded"
                        />
                      ) : (
                        <div
                          className="w-12 h-12 bg-gray-200 rounded"
                          aria-hidden="true"
                        />
                      )}
                    </td>
                    <td className="px-4 py-3">{item.nama_menu}</td>
                    <td className="px-4 py-3">{item.deskripsi_menu}</td>
                    <td className="px-4 py-3 text-right">
                      Rp. {item.harga_menu.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-center space-x-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                        onClick={() => handleDelete(item)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center my-5">Belum Ada Data</p>
          )}
        </div>
      </main>
    </div>
  );
}
