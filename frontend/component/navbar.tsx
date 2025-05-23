'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkclass = (path: string) =>
    pathname === path ? "text-blue-500 font-bold" : "text-black";
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
      <Link href="/" className={linkclass('/')}>Home</Link>
      <Link href="/menu" className={('/menu')}>Menu</Link>
      <Link href="/pemesanan" className={('/pemesanan')}>Pemesanan</Link>
    </nav>
  );
}
