import Image from "next/image";
import Navbar from "./navbar";


export default function Header() {
  return (
    <header style={{backgroundColor: '#f3f3f3', 
    padding: '1rem',
    display: 'flex',
    }}>
      <Image src="/warmaskin.png" alt="WARMASKIN Logo" width={50} height={50} />
      <div>
                <Navbar />
      </div>
    </header>
  );
}
