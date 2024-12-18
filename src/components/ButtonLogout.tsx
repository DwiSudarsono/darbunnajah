"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default () => (
  <Button onClick={() => signOut()}>
    Sign out
  </Button>
);
