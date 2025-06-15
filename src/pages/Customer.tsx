
import React from "react";
import LogoHeader from "@/components/LogoHeader";
import PromoBanner from "@/components/PromoBanner";
import ProductCard from "@/components/ProductCard";
import SocialLinks from "@/components/SocialLinks";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnalyticsSnippet from "@/components/AnalyticsSnippet";
import { useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

// Demo content for MVP (will be replaced by real data later)

// Only ONE product shown
const demoProducts = [
  {
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=300",
    title: "Chocolate Cake",
    price: "Rp85.000",
    description: "Lezat, lembut, dan penuh coklat asli. Cocok untuk ulang tahun & hadiah.",
    ctaType: "whatsapp" as const,
  }
];

// Demo catalogue links
const extraLinks = [
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&q=80&w=300",
    title: "Order via Tokopedia",
    url: "https://tokopedia.com/"
  },
  // Add more links in admin panel for realistic demo
];

// Testimonials as before
const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    name: "Rani",
    caption: "Cake terenak yang pernah saya coba!",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "Andi",
    caption: "Pengiriman cepat dan ramah!",
  },
];

const Customer = () => {
  const { username } = useParams<{ username: string }>();

  const businessName = username ? decodeURIComponent(username) : "Dapoer Mamah Ayu";
  const tagline = "Cake homemade & baju batik, siap kirim tiap hari 🚚";
  const logoUrl =
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=96&h=96&facepad=3";
  const promoText = "Diskon 10% hingga 30 Juni!";
  const promoLink = "https://wa.me/6281234567890?text=Promo+Diskon"; // Could use admin value
  const expiryText = "Sisa 9 Hari";
  // Socials (fake/demo links)
  const instagramUrl = "https://instagram.com/mamahayu.id";
  const whatsappUrl = "https://wa.me/6281234567890";
  const shopeeUrl = "https://shopee.co.id/mamahayu";
  // Analytics
  const analytics = { views: 153, waClicks: 27, trendingUp: true };

  return (
    <div className="min-h-screen w-full bg-food-bg px-2 py-4 flex flex-col items-center">
      {/* Header / Profile */}
      <LogoHeader logoUrl={logoUrl} name={businessName} tagline={tagline} />

      {/* Promo Banner (Clickable) */}
      <a href={promoLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-lg">
        <PromoBanner promoText={promoText} expiryText={expiryText} />
      </a>

      {/* Product */}
      <div className="flex flex-col gap-3 w-full max-w-lg">
        <ProductCard
          key={demoProducts[0].title}
          image={demoProducts[0].image}
          title={demoProducts[0].title}
          price={demoProducts[0].price}
          description={demoProducts[0].description}
          ctaType={demoProducts[0].ctaType}
          businessName={businessName}
        />
      </div>

      {/* Menu Catalogue Section */}
      <div className="w-full max-w-lg mt-3 mb-2">
        <h2 className="font-bold text-md mb-2 text-food-primary">Menu Catalogue</h2>
        <div className="flex flex-col gap-3">
          {extraLinks.map((link, idx) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={idx}
              className="flex items-center gap-3 bg-white rounded-lg border border-food-primary/50 p-3 shadow hover:bg-food-primary/10 transition">
              {link.image ? (
                <img src={link.image} alt={link.title} className="w-12 h-12 object-cover rounded" />
              ) : (
                <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center text-gray-400">No Image</div>
              )}
              <div className="font-bold text-food-cta text-base">{link.title}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Us Header */}
      <div className="flex flex-col w-full max-w-lg my-2">
        <h2 className="font-nunito font-bold text-md mb-2 text-food-primary">Contact Us</h2>
        <SocialLinks instagramUrl={instagramUrl} whatsappUrl={whatsappUrl} shopeeUrl={shopeeUrl} />
      </div>

      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials} />

      {/* Analytics (show for "seller" only—shown here as demo) */}
      <div className="w-full max-w-lg">
        <AnalyticsSnippet {...analytics} />
      </div>
    </div>
  );
};

export default Customer;
