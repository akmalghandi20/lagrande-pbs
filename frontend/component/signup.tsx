'use client';

import { useState } from "react";

interface SignUpProps {
  onSignUp: (username: string, password: string, role: string) => void;
}

export default function SignUpForm({ onSignUp }: SignUpProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSignUp(username, password, role);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Masukan Username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        />
        <input type="text"
        placeholder="Masukan Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        </select>
        <button
        type="submit"
        >
            Daftar
        </button>
      </form>
    </div>
  );
}
