
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LOGO = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=96&h=96&facepad=3";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="bg-food-bg min-h-screen pb-8">
      {/* Sticky nav */}
      <nav className="sticky top-0 w-full z-10 flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <img src={LOGO} alt="BizLogo" className="w-9 h-9 rounded-full" />
          <span className="font-bold font-nunito text-food-cta text-lg">SmallBizCard</span>
        </div>
        <Button onClick={() => navigate("/login")} className="font-nunito font-bold px-5 py-2">Login</Button>
      </nav>

      {/* Hero */}
      <section className="w-full flex flex-col items-center gap-4 mt-8 px-2">
        <h1 className="font-nunito font-extrabold text-3xl md:text-4xl text-food-cta text-center">
          Toko Online Instan<br />untuk <span className="text-food-primary">Usaha Kecil</span>
        </h1>
        <h2 className="font-nunito text-lg text-gray-700 text-center">
          Link-in-bio gratis yang memudahkan pelanggan pesan lewat chat.
        </h2>
        <Button size="lg" className="my-2 font-bold" onClick={() => navigate("/login")}>
          Coba Sekarang, Gratis 🚀
        </Button>
        {/* Demo video placeholder */}
        <div className="bg-white w-full max-w-xs h-40 rounded-xl shadow-lg flex flex-col items-center justify-center mt-2 border border-food-primary relative">
          <span className="absolute top-2 right-4 bg-food-cta text-food-bg text-xs px-2 rounded font-bold">Demo</span>
          <svg width="60" height="60" className="opacity-70" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#FFB347"/>
            <polygon points="10,9 16,12 10,15" fill="#fff" />
          </svg>
          <p className="mt-2 text-gray-500 text-xs">Lihat demo pelanggan</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="mt-8 px-2 flex flex-col items-center">
        <div className="bg-food-primary/20 rounded-xl p-4 flex flex-col items-center gap-4 w-full max-w-lg">
          <span className="font-nunito font-bold text-lg text-food-cta">Dipercaya oleh UMKM Lokal 🚀</span>
          <div className="flex gap-6 justify-center w-full">
            <span className="bg-white px-3 py-1 rounded-md shadow text-food-cta font-semibold text-sm">WarungMaju</span>
            <span className="bg-white px-3 py-1 rounded-md shadow text-food-cta font-semibold text-sm">BatikUnik</span>
            <span className="bg-white px-3 py-1 rounded-md shadow text-food-cta font-semibold text-sm">CakeRumah</span>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="mt-8 px-2 max-w-lg mx-auto">
        <h3 className="font-bold text-food-cta mb-2 text-lg">Masalah yang Sering Dihadapi:</h3>
        <div className="flex gap-3 flex-wrap">
          <div className="bg-white border rounded-lg shadow p-3 flex-1 min-w-[120px]">
            ❌ Bingung buat katalog online
          </div>
          <div className="bg-white border rounded-lg shadow p-3 flex-1 min-w-[120px]">
            ❌ Susah dapetin order baru
          </div>
          <div className="bg-white border rounded-lg shadow p-3 flex-1 min-w-[120px]">
            ❌ Pelanggan tanya-tanya lewat banyak aplikasi
          </div>
        </div>
      </section>

      {/* Features/solutions */}
      <section className="mt-8 px-2 max-w-lg mx-auto">
        <h3 className="font-bold text-food-cta mb-2 text-lg">Solusi Mudah & Fitur Unggulan</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[160px] bg-white rounded-lg shadow-md p-4 border">
            <span className="text-food-primary font-bold text-lg">📱</span>
            <div className="font-bold">Tampil Keren di HP/customer</div>
            <span className="text-xs text-gray-600">Desain mobile-first, cocok IG & WA</span>
          </div>
          <div className="flex-1 min-w-[160px] bg-white rounded-lg shadow-md p-4 border">
            <span className="text-food-primary font-bold text-lg">🛍️</span>
            <div className="font-bold">Tambah Produk/Layanan</div>
            <span className="text-xs text-gray-600">Mudah upload foto, harga, promo</span>
          </div>
          <div className="flex-1 min-w-[160px] bg-white rounded-lg shadow-md p-4 border">
            <span className="text-food-primary font-bold text-lg">💬</span>
            <div className="font-bold">Order via WhatsApp/IG</div>
            <span className="text-xs text-gray-600">Pelanggan klik, langsung chat ke Anda</span>
          </div>
        </div>
        <Button size="lg" variant="outline" className="font-bold border-food-primary mt-4 text-food-cta" onClick={() => navigate("/login")}>
          Buat Bio Gratis &rarr;
        </Button>
      </section>

      {/* Testimonials */}
      <section className="mt-10 px-2 max-w-lg mx-auto">
        <div className="bg-food-accent text-white rounded-xl shadow-lg p-5 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <img src="https://randomuser.me/api/portraits/women/75.jpg" alt="Rani" className="w-10 h-10 rounded-full border-2 border-white" />
            <div>
              <span className="font-bold">Rani</span>
              <div className="text-xs">Pemilik CakeRumah</div>
            </div>
          </div>
          <span className="italic">
            "Sejak pakai SmallBizCard, order kue langsung naik & pelanggan makin gampang pesan lewat WA!"
          </span>
        </div>
      </section>

      {/* Scenarios/adoption */}
      <section className="mt-10 px-2 max-w-lg mx-auto">
        <h3 className="font-bold mb-2 text-food-cta text-lg">Cocok Untuk Beragam Usaha</h3>
        <div className="flex gap-3 flex-wrap">
          <div className="bg-white rounded-xl p-4 flex flex-col items-center border shadow min-w-[130px] flex-1">
            <span className="text-3xl mb-1">🥧</span>
            <span className="font-bold">Penjual Kue</span>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col items-center border shadow min-w-[130px] flex-1">
            <span className="text-3xl mb-1">🧵</span>
            <span className="font-bold">Tailor / Konveksi</span>
          </div>
          <div className="bg-white rounded-xl p-4 flex flex-col items-center border shadow min-w-[130px] flex-1">
            <span className="text-3xl mb-1">💇‍♀️</span>
            <span className="font-bold">Jasa Kecantikan</span>
          </div>
        </div>
      </section>

      {/* Case study / mini-wins */}
      <section className="mt-10 px-2 max-w-lg mx-auto">
        <h3 className="font-bold mb-2 text-food-cta text-lg">Cerita Sukses Seller</h3>
        <div className="flex gap-3 flex-wrap">
          <div className="bg-white p-3 rounded-xl shadow border flex-1 min-w-[160px] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=60" alt="" className="rounded-full w-10 h-10 mb-2" />
            <div className="font-semibold text-sm">Order Naik 2x</div>
            <div className="text-xs text-gray-800 text-center">Setelah bikin bio-link, pelanggan makin gampang order cake!</div>
          </div>
          <div className="bg-white p-3 rounded-xl shadow border flex-1 min-w-[160px] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&q=80&w=60" alt="" className="rounded-full w-10 h-10 mb-2" />
            <div className="font-semibold text-sm">Lebih Dipercaya</div>
            <div className="text-xs text-gray-800 text-center">Pake foto & testimoni di bio bikin toko makin dipercaya.</div>
          </div>
        </div>
      </section>

      {/* Encouraging close/CTA */}
      <section className="mt-10 px-2 mb-10 max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center border border-food-primary">
          <h3 className="font-extrabold text-2xl text-food-cta mb-2 text-center">Buat Katalog Online Bisnismu Sekarang 🚀</h3>
          <p className="text-gray-700 text-center mb-4">Hanya butuh 2 menit! Gratis • Mudah diatur • Bisa di-custom</p>
          <Button size="lg" className="px-8 font-bold" onClick={() => navigate("/login")}>
            Mulai Sekarang
          </Button>
        </div>
      </section>

      <footer className="border-t pt-4 text-center text-xs text-gray-500 font-nunito">
        &copy; {new Date().getFullYear()} SmallBizCard.id &middot; Made for UMKM Indonesia
      </footer>
    </div>
  );
}
