"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ButtonGoogle() {
  return (
    <div className="flex justify-center "> {/* Tambahkan flex justify-center */}
      <Button
        onClick={() => signIn("google")}
        className="flex items-center justify-center  "
      >
        <FontAwesomeIcon icon={faGoogle} />
        Masuk Dengan Google
      </Button>
    </div>
  );
}
