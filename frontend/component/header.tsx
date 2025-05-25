import Image from "next/image";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "#f3f3f3", padding: "1rem" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src="/warmaskin.png"
          alt="WARMASKIN Logo"
          width={50}
          height={50}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Navbar />
        </div>
      </div>
    </header>
  );
}
