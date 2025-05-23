import Link from "next/link";

export default function Navbar() {
  return (
   <nav>
    <Link href="/">Home</Link>
    <Link href="/menu">Menu</Link>
    <Link href="/pemesanan">Pemesanan</Link>

   </nav>
  );
}
