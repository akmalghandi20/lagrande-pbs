import Sidebar from "@/component/sidebar";
import Image from "next/image";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 p-6 w-full bg-gray-100">
        <header className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search..."
            className="border px-4 py-2 rounded-md w-full md:w-1/3"
          />
          <div className="flex items-center gap-4">
            <span>Admin</span>
            <Image
              src="/images/coffe.png"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Stats Cards */}
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">Total Sales</div>
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">Order Count</div>
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">Customer Count</div>
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">Online Orders</div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow col-span-2">Sales Chart & Best Sellers</div>
          <div className="bg-white p-4 rounded-md shadow">Order Management Table</div>
        </section>
      </main>
    </div>
  );
}
