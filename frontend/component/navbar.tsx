"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Pemesanan", path: "/pemesanan" },
  ];

  return (
    <nav  className="flex gap-6 px-4 py-2">
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`
            pb-1 border-b-2 transition-all duration-200
            ${pathname === item.path 
              ? "border-blue-600 text-blue-600 font-semibold" 
              : "border-transparent hover:border-blue-500 hover:text-blue-500"}
          `}
        >
          {item.name}
      </Link>
     ))}
    </nav>
  );
}
