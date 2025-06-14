"use client";

import { useEffect, useState } from "react";
import SignUpForm from "./signup";
import LoginForm from "./login";

export default function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    const savedRole = localStorage.getItem("role");
    if (savedUser && savedRole) {
      setUsername(savedUser);
      setRole(savedRole);
      setIsLoggedIn(true);
    }
  }, []);

  function handleLogin(user: string, pass: string) {
    setUsername(user);
    setRole("user");
    setIsLoggedIn(true);
    setShowModal(false);
    localStorage.setItem("username", user);
    localStorage.setItem("role", "user");
  }

  function handleSignUp(user: string, pass: string, userRole: string) {
    alert(`Akun untuk ${user} berhasil dibuat sebagai ${userRole}!`);
    setShowSignUp(false);
  }

  function handleLogout() {
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setUsername("");
    setRole("");
    setIsLoggedIn(false);
  }

  return (
    <div>
        {isLoggedIn ? (
            <div>
                <span>
                    {role === "admin" ? `Halo Admin ${username}` : `Halo, ${username}`}
                </span>
                <button 
                    onClick={handleLogout}
                    >
                    Logout
                </button>
            </div>

        ) : (
      <>
        <button onClick={() => setShowModal(true)}>Sign In</button>
        {showModal && (
          <div>
            <div>
              <button onClick={() => setShowModal(false)}>&times;</button>
              {showSignUp ? (
                <>
                  <SignUpForm onSignUp={handleSignUp} />
                  <p>
                    Sudah punya akun?{" "}
                    <button onClick={() => setShowSignUp(false)}>Masuk</button>
                  </p>
                </>
              ) : (
                <>
                  <LoginForm onLogin={handleLogin} />
                  <p>
                    Belum punya akun?{" "}
                    <button onClick={() => setShowSignUp(true)}>
                      Buat Akun
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        )}
      </>
      )}
    </div>
  );
}
