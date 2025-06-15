
import LogoHeader from "@/components/LogoHeader";
import PromoBanner from "@/components/PromoBanner";
import ProductCard from "@/components/ProductCard";
import SocialLinks from "@/components/SocialLinks";
import TestimonialSlider from "@/components/TestimonialSlider";
import AnalyticsSnippet from "@/components/AnalyticsSnippet";

// Demo content for MVP
const demoProducts = [
  {
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=300",
    title: "Chocolate Cake",
    price: "Rp85.000",
    description: "Lezat, lembut, dan penuh coklat asli. Cocok untuk ulang tahun & hadiah.",
    ctaType: "whatsapp" as const,
  },
  {
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&q=80&w=300",
    title: "Handmade Batik Shirt",
    price: "Rp250.000",
    description: "Batik tulis asli, motif modern, bahan nyaman dipakai. Kualitas premium.",
    ctaType: "instagram" as const,
  },
];

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

const Index = () => {
  // In a real version, would be dynamic/user-editable.
  const businessName = "Dapoer Mamah Ayu";
  const tagline = "Cake homemade & baju batik, siap kirim tiap hari 🚚";
  const logoUrl =
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=96&h=96&facepad=3";
  const promoText = "Diskon 10% hingga 30 Juni!";
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
      {/* Promo Banner */}
      <PromoBanner promoText={promoText} expiryText={expiryText} />
      {/* Products */}
      <div className="flex flex-col gap-3 w-full max-w-lg">
        {demoProducts.map((prod, i) => (
          <ProductCard
            key={prod.title}
            image={prod.image}
            title={prod.title}
            price={prod.price}
            description={prod.description}
            ctaType={prod.ctaType}
            businessName={businessName}
          />
        ))}
      </div>
      {/* Social Links */}
      <SocialLinks instagramUrl={instagramUrl} whatsappUrl={whatsappUrl} shopeeUrl={shopeeUrl} />
      {/* Testimonials */}
      <TestimonialSlider testimonials={testimonials} />
      {/* Analytics (show for "seller" only—shown here as demo) */}
      <div className="w-full max-w-lg">
        <AnalyticsSnippet {...analytics} />
      </div>
    </div>
  );
};

export default Index;
