"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    router.push("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 p-4 flex items-center justify-between shadow-sm border-b border-gray-300 z-50">
      <div className="flex items-center">
        <div className="w-[50px] h-auto">
          <Image
            src="/warmaskin.png"
            alt="WARMASKIN Logo"
            width={50}
            height={50}
            className="h-auto w-full"
            style={{ objectFit: "contain" }}
          />
        </div>
        <h1 className="ml-4 text-xl font-bold">WARMASKIN</h1>
      </div>

      {username && (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">
            Hallo, <strong>{username}</strong>
          </span>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
