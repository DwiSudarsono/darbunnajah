"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Type untuk form state
interface FormState {
  email: string;
  password: string;
  confirmPassword: string; // Menambahkan state untuk konfirmasi password
  namaLengkap: string;
  nomorTelepon: string;
  alamat: string;
}

export default function Daftar() {
  const [formData, setFormData] = useState<FormState>({
    email: "",
    password: "",
    confirmPassword: "", // Inisialisasi konfirmasi password
    namaLengkap: "",
    nomorTelepon: "",
    alamat: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false); // Menambahkan state untuk toggle konfirmasi password
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password, confirmPassword, namaLengkap, nomorTelepon, alamat } = formData;
    let newErrors: { [key: string]: string } = {};

    // Validasi form
    if (!email) newErrors.email = "Email harus diisi.";
    if (!password) newErrors.password = "Password harus diisi.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Konfirmasi password tidak cocok.";
    if (!namaLengkap) newErrors.namaLengkap = "Nama Lengkap harus diisi.";
    if (!nomorTelepon) newErrors.nomorTelepon = "Nomor Telepon harus diisi.";
    if (!alamat) newErrors.alamat = "Alamat harus diisi.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Data yang dikirim:", formData);
  };

  // Toggle visibilitas password
  const togglePasswordVisibility = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  // Toggle visibilitas konfirmasi password
  const toggleConfirmPasswordVisibility = (): void => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500">
        <form onSubmit={handleSubmit} className="w-96 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-center text-2xl font-bold mb-6">Formulir Pendaftaran</h2>

          {/* Input Nama Lengkap */}
          <div className="mb-4">
            <Label htmlFor="namaLengkap">Nama Lengkap</Label>
            <Input
              id="namaLengkap"
              type="text"
              placeholder="Nama Lengkap"
              value={formData.namaLengkap}
              onChange={handleInputChange}
              required
            />
            {errors.namaLengkap && <p className="text-red-500 text-sm mt-1">{errors.namaLengkap}</p>}
          </div>

          {/* Input Email */}
          <div className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email Anda"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Input Nomor Telepon */}
          <div className="mb-4">
            <Label htmlFor="nomorTelepon">Nomor Telepon</Label>
            <Input
              id="nomorTelepon"
              type="text"
              placeholder="Nomor Telepon"
              value={formData.nomorTelepon}
              onChange={handleInputChange}
              required
            />
            {errors.nomorTelepon && <p className="text-red-500 text-sm mt-1">{errors.nomorTelepon}</p>}
          </div>

          {/* Input Password */}
          <div className="mb-4 relative">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password Anda"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Input Konfirmasi Password */}
          <div className="mb-4 relative">
            <Label htmlFor="confirmPassword">Ketik Ulang Password</Label>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Ketik ulang password Anda"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-gray-500"
              onClick={toggleConfirmPasswordVisibility}
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
            </button>
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Input Alamat */}
          <div className="mb-4">
            <Label htmlFor="alamat">Alamat</Label>
            <Input
              id="alamat"
              type="text"
              placeholder="Alamat Lengkap"
              value={formData.alamat}
              onChange={handleInputChange}
              required
            />
            {errors.alamat && <p className="text-red-500 text-sm mt-1">{errors.alamat}</p>}
          </div>

          <Button type="submit" className="w-full">Daftar</Button>
        </form>
      </div>
      <Footer />
    </>
  );
}
