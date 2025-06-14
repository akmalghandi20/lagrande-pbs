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

  function handleLogin(user: string, pass: string) {
    setUsername(user);
    setIsLoggedIn(true);
    setShowModal(false);
    localStorage.setItem("username", user); 
  }

  function handleSignUp(user: string, pass: string) {
    alert(`Akun untuk ${user} berhasil Dibuat}!`);
    setShowSignUp(false);
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
          <span className="text-gray-800 font-semibold">
            Halo {username}
          </span>
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
                      <button onClick={() => setShowSignUp(true)}
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
