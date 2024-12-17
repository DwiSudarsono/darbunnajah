"use client";
import Image from "next/image"; // Ganti dengan next/image
import Link from "next/link"; // Ganti navigasi internal dengan Link
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle navbar untuk mengubah status isOpen
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-5">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {/* Gunakan next/image untuk gambar */}
            <Image
              className="w-10 rounded"
              src="/assets/logo.png" // Path relatif untuk Next.js
              alt="logo"
              width={40}
              height={40}
            />
            <h2 className="md:font-extrabold ml-2 md:text-xl text-center font-bold text-sm">
              DARBUNNAJAH
            </h2>
          </Link>
        </div>

        {/* Navbar untuk screen besar */}
        <nav className="hidden md:flex md:space-x-4 text-center md:font-extrabold md:text-xl font-bold text-md dark:text-white text-black">
          <li className="list-none">
            <Link href="/masuk">
              Masuk
            </Link>
          </li>
          <li className="list-none">
            <Link href="/daftar">
              Daftar
            </Link>
          </li>
          <li className="list-none">
            <Link href="/komunitas">
              Komunitas
            </Link>
          </li>
        </nav>

        {/* Navbar untuk screen kecil */}
        <div className="md:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="cursor-pointer text-xl"
            onClick={toggleNavbar}
          />
        </div>
      </div>

      {/* Navbar untuk layar kecil dengan animasi slide-in dan slide-out */}
      <div
        className={`flex flex-col items-center dark:bg-gray-900 text-white bg-gray-600 p-5 fixed top-0 right-0 h-full w-64 transform transition-all duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } ease-in-out`}
      >
        <FontAwesomeIcon
          icon={faTimes}
          className="absolute top-5 right-5 cursor-pointer text-2xl"
          onClick={toggleNavbar} // Menambahkan fungsi close untuk navbar
        />
        <Link href="/masuk" className="font-bold mt-10">
          Masuk
        </Link>
        <Link href="/daftar" className="font-bold mt-4">
          Daftar
        </Link>
        <Link href="/komunitas" className="font-bold mt-4">
          Komunitas
        </Link>
      </div>
    </div>
  );
}

export default Navbar;