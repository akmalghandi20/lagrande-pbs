"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Menu", href: "/menu" },
    { label: "Customers", href: "/customers" },
    { label: "Transaction", href: "/transaction" },
  ];

  return (
    <aside className="bg-white h-screen w-64 p-6 shadow-md fixed top-0 left-0 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">
        ☕ HOT &amp; COLD
      </h2>
      <ul className="space-y-4 text-sm">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block py-2 px-3 rounded ${
                  active
                    ? "text-orange-500 font-semibold bg-orange-100"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
