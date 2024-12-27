"use client";

import { useToast } from "@/components/ui/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function SignOutLink() {
  const { toast } = useToast();
  const handleLogOut = () => {
    toast({ description: "logout Successful" });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogOut}>
        Logout
      </Link>
    </SignOutButton>
  );
}

export default SignOutLink;
