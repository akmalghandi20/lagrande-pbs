export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #E8D8D8 0%, #F5EAEA 100%)",
        padding: "2rem 1rem",
        marginTop: "3rem",
        boxShadow: "0 -2px 16px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p style={{
        color: "#6B4F4F",
        fontWeight: 500,
        fontSize: "1.1rem",
        letterSpacing: "0.03em",
        margin: 0,
      }}>
        © 2025 <span style={{fontWeight: 700, letterSpacing: "0.05em"}}>WARMASKIN</span>. All rights reserved.
      </p>
      <div style={{
        marginTop: "0.5rem",
        fontSize: "0.95rem",
        color: "#9C7E7E",
      }}>
      </div>
    </footer>
  );
}
