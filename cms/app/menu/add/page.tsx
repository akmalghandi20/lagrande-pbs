"use client";
import Sidebar from "@/component/sidebar";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";

export default function AddMenuPage() {
  const router = useRouter();
  const [form, setForm] = useState<any>({
    nama_menu: "",
    deskripsi_menu: "",
    gambar: null,
    harga_menu: 0,
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "gambar" && files && files[0]) {
      const file = files[0];
      setForm((f: any) => ({ ...f, gambar: file }));
      setPreview(URL.createObjectURL(file));
    } else {
      setForm((f: any) => ({
        ...f,
        [name]: name === "harga_menu" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("nama_menu", form.nama_menu);
    data.append("deskripsi_menu", form.deskripsi_menu);
    data.append("harga_menu", form.harga_menu.toString());
    if (form.gambar) data.append("gambar", form.gambar);

    const res = await fetch("http://localhost:3001/api/menu", {
      method: "POST",
      body: data,
    });
    if (!res.ok) {
      alert("Gagal menyimpan data!");
      return;
    }
    router.push("/menu");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-4">Tambah Menu</h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
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
              onChange={handleChange}
              value={form.nama_menu}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              onChange={handleChange}
              value={form.deskripsi_menu}
              rows={3}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Input Gambar */}
          <div>
            <label
              htmlFor="gambar"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Gambar
            </label>
            <input
              name="gambar"
              id="gambar"
              type="file"
              accept="image/*"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-600 border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {preview && (
            <div>
              <p className="text-sm text-gray-600 mb-2">Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded"
              />
            </div>
          )}

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
              onChange={handleChange}
              value={form.harga_menu}
              min={0}
              required
              className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300"
          >
            Simpan
          </button>
        </form>
      </main>
    </div>
  );
}
