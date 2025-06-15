
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const navigate = useNavigate();

  function handleGoogleLogin() {
    // Placeholder: Show a toast, real auth would use Supabase
    window.alert("Demo: Google login will be enabled once backend is connected.");
    navigate("/admin");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-food-bg px-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 flex flex-col items-center gap-5 border">
        <h1 className="text-2xl font-extrabold text-food-cta mb-2 font-nunito">Login Admin</h1>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Masuk dengan Google untuk mengelola katalog usaha Anda.
        </p>
        <Button onClick={handleGoogleLogin} className="flex items-center gap-2 px-8 py-3 text-base font-bold font-nunito bg-white border border-food-primary text-food-cta hover:bg-food-primary hover:text-white transition">
          <span>
            <svg width="22" height="22" viewBox="0 0 22 22" className="mr-2" fill="none">
              <g>
                <ellipse rx="10" ry="10" cx="11" cy="11" fill="#4285F4"/>
                <path d="M15.5 11.2C15.5 10.75 15.47 10.35 15.41 9.97H11V12.07H13.52C13.41 12.7 13.07 13.22 12.51 13.58V15.01H14.19C15.07 14.2 15.5 12.85 15.5 11.2Z" fill="#34A853"/>
                <path d="M11 15.27C12.03 15.27 12.85 14.94 13.42 14.5L12.15 13.15C11.87 13.32 11.5 13.41 11 13.41C9.99 13.41 9.17 12.67 8.87 11.74H7.55V13.22C8.12 14.13 9.43 15.27 11 15.27Z" fill="#FBBC05"/>
                <path d="M8.87 11.74C8.79 11.52 8.74 11.28 8.74 11.04C8.74 10.8 8.79 10.56 8.87 10.33V8.85H7.55C7.34 9.31 7.23 9.85 7.23 10.41C7.23 10.97 7.34 11.51 7.55 11.97L8.87 11.74Z" fill="#EA4335"/>
                <path d="M11 8.67C11.6 8.67 12.12 8.87 12.5 9.28L14.01 7.83C13.42 7.29 12.52 6.92 11 6.92C9.42 6.92 8.12 8.06 7.55 8.97L8.87 10.33C9.17 9.41 9.99 8.67 11 8.67Z" fill="#4285F4"/>
              </g>
            </svg>
          </span>
          Masuk dengan Google
        </Button>
        <Button variant="ghost" className="mt-2 text-sm text-food-cta underline" onClick={() => navigate("/")}>
          &larr; Kembali ke Beranda
        </Button>
      </div>
    </div>
  );
}
