"use client";

import toast from "react-hot-toast";
import { motion } from "motion/react";
import { ENV } from "../config/env";

export default function OAuthButtons() {
  const providers: {
    name: "google" | "github" | "linkedin";
    src: string;
    size?: { width: number; height: number };
  }[] = [
    { name: "google", src: "/icons/google.svg" },
    { name: "github", src: "/icons/github.svg" },
    { name: "linkedin", src: "/icons/linkedin.svg" },
  ];

  const handleOAuthLogin = async (
    provider: (typeof providers)[number]["name"],
  ) => {
    const toastId = toast.loading("Opening login popup...");
    try {
      // alert("redirecting to the google/github/linkedin/zoho");
      // Redirecting to the provider page
      window.location.href = `${ENV.API_BASE_URL}/auth/signin/${provider}`;
    } catch (err: any) {
      const msg = err?.message || "Unknown error";
      alert(msg);
      console.log(msg);
      if (msg.includes("Popup closed"))
        toast("Login canceled by user", { id: toastId });
      else toast.error(`Login failed: ${msg}`, { id: toastId });
    }
  };

  return (
    <div className="flex justify-center space-x-9">
      {providers.map((prd, i: number) => (
        <div key={i} className="flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleOAuthLogin(prd.name)}
            className="p-2 bg-gradient rounded-full cursor-pointer flex items-center justify-center"
            aria-label={`Login with ${prd.name}`}
          >
            <img
              src={prd.src}
              width={prd.size?.width || 24}
              height={prd.size?.height || 24}
              alt={`${prd.name} logo`}
              className="w-8 h-8"
            />
          </motion.button>
          <span className="uppercase text-sm mt-1 dark:text-gray-300">
            {prd.name}
          </span>
        </div>
      ))}
    </div>
  );
}
