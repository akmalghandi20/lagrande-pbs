"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `
      relative 
      pb-1 
      text-gray-700 
      hover:text-blue-600 
      transition-colors 
      duration-200
      ${isActive ? "text-blue-600 after:w-full" : "after:w-0"}
      after:absolute 
      after:left-0 
      after:-bottom-0.5 
      after:h-0.5 
      after:bg-blue-600 
      after:transition-all 
      after:duration-300 
      hover:after:w-full
    `;
  };

  return ( 
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link href="/"  className={linkClass("/")}>
        Home
      </Link>
      <Link href="/menu">
        Menu
      </Link>
      <Link href="/pemesanan">
        Pemesanan
      </Link>
    </nav>
  );
}
