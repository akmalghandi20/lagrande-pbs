import Image from "next/image";
import Navbar from "./navbar";
import SignInButton from "./signin";

export default function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #E8D8D8 0%, #F5EAEA 100%)",
        padding: "1.5rem 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        borderRadius: "0 0 16px 16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1295px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <Image
            src="/warmaskin.png"
            alt="WARMASKIN Logo"
            width={56}
            height={56}
            style={{ borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
          />
          <span style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: "0.05em",
            color: "#7A5C5C"
          }}>
            WARMASKIN
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <Navbar />
          <SignInButton />
        </div>
      </div>
    </header>
  );
}
