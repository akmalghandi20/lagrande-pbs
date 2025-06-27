"use client";

import { useEffect, useState } from "react";
import SignUpForm from "./signup";
import LoginForm from "./login";

export default function SignIn() {
  const [showModal, setShowModal] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("username");
    if (savedUser) {
      setUsername(savedUser);
      setIsLoggedIn(true);
    }
  }, []);

  async function handleLogin(user: string, pass: string) {
    if (!user || !pass) {
      alert("Username dan password wajib diisi.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/user");
      const result = await res.json();

      const userData = result.data_user?.find(
        (u: any) => u.username === user && u.password === pass
      );

      if (!userData) {
        alert("Username atau password salah");
        return;
      }

      setUsername(user);
      setIsLoggedIn(true);
      setShowModal(false);
      localStorage.setItem("username", user);
    } catch (error) {
      console.error("Login error:", error);
      alert("Terjadi kesalahan saat login.");
    }
  }

  // handleSignUp menerima parameter tambahan jika SignUpForm mengirimkannya
  async function handleSignUp(
    user: string,
    pass: string,
    nama?: string,
    email?: string
  ) {
    if (!user || !pass) {
      alert("Username dan password wajib diisi.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nama_value: nama || user,
          email_value: email || `${user}@mail.com`,
          username_value: user,
          password_value: pass,
        }),
      });

      const data = await res.json();
      console.log("Signup response:", data);

      if (res.ok) {
        alert(`Akun untuk ${user} berhasil dibuat!`);
        setShowSignUp(false);
      } else {
        alert(data.metaData?.message || "Gagal daftar");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Terjadi kesalahan saat daftar.");
    }
  }

  function handleLogout() {
    localStorage.removeItem("username");
    setUsername("");
    setIsLoggedIn(false);
  }

  return (
    <div className="relative">
      {isLoggedIn ? (
        <div className="flex items-center space-x-4">
          <span className="text-gray-800 font-semibold">Halo {username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div
                className="bg-white rounded-lg p-6 w-full max-w-lg relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
                {showSignUp ? (
                  <>
                    <SignUpForm onSignUp={handleSignUp} />
                    <p className="mt-4 text-center">
                      Sudah punya akun?{" "}
                      <button
                        onClick={() => setShowSignUp(false)}
                        className="text-blue-600 hover:underline"
                      >
                        Masuk
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <LoginForm onLogin={handleLogin} />
                    <p className="mt-4 text-center">
                      Belum punya akun?{" "}
                      <button
                        onClick={() => setShowSignUp(true)}
                        className="text-blue-600 hover:underline"
                      >
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
