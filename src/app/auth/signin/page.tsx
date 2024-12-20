// src/app/profile/page.tsx
'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const signin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Fungsi untuk menangani logout
  const handleLogout = async () => {
    await signOut({ callbackUrl: '/login' }); // Mengarahkan ke halaman login setelah logout
  };

  if (status === "loading") {
    return <p>Memuat sesi...</p>;
  }

  if (!session) {
    router.push("/login"); // Jika pengguna tidak ada sesi, arahkan ke halaman login
    return null;
  }

  return (
    <div>
      <h2>Profil Pengguna</h2>
      <p>Nama: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default signin;
