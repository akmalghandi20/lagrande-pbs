import Sidebar from "@/component/sidebar";
import React from "react";
import {
  FaShoppingCart,
  FaClipboardList,
  FaUsers,
  FaLaptop,
} from "react-icons/fa";

export default function DashboardPage() {
  const stats = [
    {
      label: "Order Count",
      value: 742,
      icon: <FaClipboardList className="text-green-500 w-8 h-8" />,
      bg: "green-100",
    },
    {
      label: "Customer Count",
      value: 310,
      icon: <FaUsers className="text-purple-500 w-8 h-8" />,
      bg: "purple-100",
    },
    {
      label: "Menus",
      value: 582,
      icon: <FaLaptop className="text-yellow-500 w-8 h-8" />,
      bg: "yellow-100",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="ml-64 p-6 w-full">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`bg-white p-4 rounded-lg shadow flex items-center space-x-4`}
            >
              <div className={`p-3 rounded-full bg-${stat.bg}`}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
