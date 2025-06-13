import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex items-center shadow-sm border-b border-gray-300 z-50">
      <Image src="/warmaskin.png" alt="WARMASKIN Logo" width={50} height={50} />
      <h1 className="ml-4 text-xl font-bold">WARMASKIN</h1>
    </header>
  );
}
