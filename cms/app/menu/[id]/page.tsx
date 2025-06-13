"use client";
import Sidebar from "@/component/sidebar";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, ChangeEvent } from "react";

type FormState = {
  nama_menu: string;
  deskripsi_menu: string;
  gambar: File | string | null;
  harga_menu: number;
};

export default function EditMenuPage() {
  const { id } = useParams(); // dapatkan ID dari URL
  const router = useRouter();
  const [form, setForm] = useState<FormState>({
    nama_menu: "",
    deskripsi_menu: "",
    gambar: null,
    harga_menu: 0,
  });
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data menu berdasarkan ID
    async function fetchMenu() {
      try {
        const res = await fetch(`http://localhost:3001/api/menu/${id}`, {
          method: "GET",
        });
        const js = await res.json();

        const menu = js.data_menu;
        if (menu) {
          setForm({
            nama_menu: menu.nama_menu,
            deskripsi_menu: menu.deskripsi_menu,
            gambar: menu.gambar,
            harga_menu: menu.harga_menu,
          });
          setPreview(menu.gambar);
        } else {
          alert("Data menu tidak ditemukan");
          router.push("/menu");
        }
      } catch {
        alert("Gagal fetch data");
      } finally {
        setLoading(false);
      }
    }
    if (id) fetchMenu();
  }, [id, router]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;

    setForm((f) => ({
      ...f,
      [name]: name === "harga_menu" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama_menu", form.nama_menu);
    data.append("deskripsi_menu", form.deskripsi_menu);
    data.append("harga_menu", form.harga_menu.toString());

    const res = await fetch(`http://localhost:3001/api/menu/${id}`, {
      method: "PUT",
      body: data,
    });
    if (!res.ok) return alert("Gagal perbarui data!");

    router.push("/menu");
  };

  if (loading) return <p className="ml-64 p-6">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Edit Menu</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
          {/* Form fields—sama seperti AddMenuPage */}
          {/* Nama Menu */}
          <div>
            <label
              htmlFor="nama_menu"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Menu
            </label>
            <input
              name="nama_menu"
              id="nama_menu"
              type="text"
              value={form.nama_menu}
              onChange={handleChange}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Deskripsi */}
          <div>
            <label
              htmlFor="deskripsi_menu"
              className="block text-sm font-medium text-gray-700"
            >
              Deskripsi
            </label>
            <textarea
              name="deskripsi_menu"
              id="deskripsi_menu"
              value={form.deskripsi_menu}
              onChange={handleChange}
              rows={3}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Harga */}
          <div>
            <label
              htmlFor="harga_menu"
              className="block text-sm font-medium text-gray-700"
            >
              Harga (IDR)
            </label>
            <input
              name="harga_menu"
              id="harga_menu"
              type="number"
              value={form.harga_menu}
              onChange={handleChange}
              min={0}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-md"
          >
            Perbarui
          </button>
        </form>
      </main>
    </div>
  );
}
