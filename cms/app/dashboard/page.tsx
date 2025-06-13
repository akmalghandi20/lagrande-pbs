import Sidebar from "@/component/sidebar";
import Image from "next/image";
import React from "react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="ml-64 p-6 w-full bg-gray-100">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">
            Total Sales
          </div>
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">
            Order Count
          </div>
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">
            Customer Count
          </div>
          <div className="bg-white p-4 rounded-md shadow flex items-center justify-center">
            Online Orders
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-md shadow col-span-2">
            Sales Chart & Best Sellers
          </div>
          <div className="bg-white p-4 rounded-md shadow">
            Order Management Table
          </div>
        </section>
      </main>
    </div>
  );
}
