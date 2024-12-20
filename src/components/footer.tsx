"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  // Update the year on the client side
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          {currentYear} Darbunnajah. All rights reserved.
        </p>
        <p className="text-sm">
          <Link href={"/about"}>
          Made with ❤️ by{" D'one"}
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
