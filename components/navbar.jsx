"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { SignupButton } from "@/components/signup-button";
import { LoginButton } from "@/components/login-button";
import { LogoutButton } from "@/components/logout-button";
import React from "react";

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  return (
    <div className="py-4 flex w-full justify-between bg-gray-800 px-44">
      <div className="flex gap-8 text-white">
        <a href="/">Home</a>
       
      </div>
      <div className="flex gap-4">
        {!user && !isLoading && (
          <>
            <SignupButton />
            <LoginButton />
          </>
        )}
        {user && !isLoading && (
          <>
            <LogoutButton />
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
