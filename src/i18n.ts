
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      landing: {
        welcome: "Instant Online Store for Small Business",
        sub: "A free link-in-bio to make it easy for customers to order via chat.",
        cta: "Try Now, Free 🚀",
        trusted: "Trusted by Local Businesses 🚀",
        problemsTitle: "Problems Often Faced:",
        problems: [
          "❌ Confused making online catalog",
          "❌ Difficult to get new orders",
          "❌ Customers ask via too many apps"
        ],
        solutionsTitle: "Easy Solution & Main Features",
        features: [
          {
            icon: "📱",
            title: "Looks Great on Customer’s Phone",
            desc: "Mobile-first design, perfect for IG & WA"
          },
          {
            icon: "🛍️",
            title: "Add Product/Service",
            desc: "Easy to upload photos, prices, promos"
          },
          {
            icon: "💬",
            title: "Order via WhatsApp/IG",
            desc: "Customer just clicks to chat you"
          }
        ],
        freeBio: "Create Free Bio Link →",
        testimonial: {
          name: "Rani",
          role: "Owner of CakeRumah",
          text: '"Since using SmallBizCard, my cake orders immediately increased & customers order easily via WA!"'
        },
        suitable: "Suitable for Various Businesses",
        types: [
          { icon: "🥧", label: "Cake Seller" },
          { icon: "🧵", label: "Tailor / Convection" },
          { icon: "💇‍♀️", label: "Beauty Services" }
        ],
        successStories: "Seller Success Stories",
        story1: {
          title: "Orders Doubled",
          text:
            "After creating a bio-link, customers order cake much more easily!"
        },
        story2: {
          title: "More Trusted",
          text: "Photo & testimonial on bio make shop more trusted."
        },
        mainCtaTitle: "Create Your Business Online Catalog Now 🚀",
        mainCtaSub: "Only takes 2 minutes! Free • Easy to set up • Customizable",
        mainCta: "Start Now"
      },
      login: {
        loginTitle: "Login Admin",
        sub: "Sign in with Google to manage your business catalog.",
        google: "Login with Google",
        back: "← Back to Home"
      },
      admin: {
        adminTitle: "Admin Page",
        save: "Save 🎉"
      },
      lang: {
        changeTo: "Bahasa Indonesia",
      }
    }
  },
  id: {
    translation: {
      landing: {
        welcome: "Toko Online Instan untuk Usaha Kecil",
        sub: "Link-in-bio gratis yang memudahkan pelanggan pesan lewat chat.",
        cta: "Coba Sekarang, Gratis 🚀",
        trusted: "Dipercaya oleh UMKM Lokal 🚀",
        problemsTitle: "Masalah yang Sering Dihadapi:",
        problems: [
          "❌ Bingung buat katalog online",
          "❌ Susah dapetin order baru",
          "❌ Pelanggan tanya-tanya lewat banyak aplikasi"
        ],
        solutionsTitle: "Solusi Mudah & Fitur Unggulan",
        features: [
          {
            icon: "📱",
            title: "Tampil Keren di HP/customer",
            desc: "Desain mobile-first, cocok IG & WA"
          },
          {
            icon: "🛍️",
            title: "Tambah Produk/Layanan",
            desc: "Mudah upload foto, harga, promo"
          },
          {
            icon: "💬",
            title: "Order via WhatsApp/IG",
            desc: "Pelanggan klik, langsung chat ke Anda"
          }
        ],
        freeBio: "Buat Bio Gratis →",
        testimonial: {
          name: "Rani",
          role: "Pemilik CakeRumah",
          text: '"Sejak pakai SmallBizCard, order kue langsung naik & pelanggan makin gampang pesan lewat WA!"'
        },
        suitable: "Cocok Untuk Beragam Usaha",
        types: [
          { icon: "🥧", label: "Penjual Kue" },
          { icon: "🧵", label: "Tailor / Konveksi" },
          { icon: "💇‍♀️", label: "Jasa Kecantikan" }
        ],
        successStories: "Cerita Sukses Seller",
        story1: {
          title: "Order Naik 2x",
          text:
            "Setelah bikin bio-link, pelanggan makin gampang order cake!"
        },
        story2: {
          title: "Lebih Dipercaya",
          text: "Pake foto & testimoni di bio bikin toko makin dipercaya."
        },
        mainCtaTitle: "Buat Katalog Online Bisnismu Sekarang 🚀",
        mainCtaSub: "Hanya butuh 2 menit! Gratis • Mudah diatur • Bisa di-custom",
        mainCta: "Mulai Sekarang"
      },
      login: {
        loginTitle: "Login Admin",
        sub: "Masuk dengan Google untuk mengelola katalog usaha Anda.",
        google: "Masuk dengan Google",
        back: "← Kembali ke Beranda"
      },
      admin: {
        adminTitle: "Halaman Admin",
        save: "Simpan 🎉"
      },
      lang: {
        changeTo: "English",
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
