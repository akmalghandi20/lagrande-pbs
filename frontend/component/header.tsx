import Image from "next/image";
import Navbar from "./navbar";
import SignInButton from "./signin";

export default function Header() {
  return (
    <header
      style={{ backgroundColor: "#E8D8D8", padding: "1rem" }}
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
          <SignInButton />
        </div>
      </div>
    </header>
  );
}
