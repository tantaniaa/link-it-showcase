
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Placeholder images for uploaded logo or product photos
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=96&h=96&facepad=3";

export default function AdminPage() {
  // Basic business details
  const [logo, setLogo] = useState(PLACEHOLDER_IMG);
  const [businessName, setBusinessName] = useState("Dapoer Mamah Ayu");
  const [tagline, setTagline] = useState("Cake homemade & baju batik, siap kirim tiap hari 🚚");
  const [promoText, setPromoText] = useState("Diskon 10% hingga 30 Juni!");
  const [promoExpiry, setPromoExpiry] = useState("Sisa 9 Hari");

  // Products
  const [products, setProducts] = useState([
    {
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=300",
      title: "Chocolate Cake",
      price: "Rp85.000",
      description: "Lezat, lembut, dan penuh coklat asli. Cocok untuk ulang tahun & hadiah.",
      ctaType: "whatsapp",
    },
    {
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&q=80&w=300",
      title: "Handmade Batik Shirt",
      price: "Rp250.000",
      description: "Batik tulis asli, motif modern, bahan nyaman dipakai. Kualitas premium.",
      ctaType: "instagram",
    },
  ]);

  // Social links
  const [instagramUrl, setInstagramUrl] = useState("https://instagram.com/mamahayu.id");
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/6281234567890");
  const [shopeeUrl, setShopeeUrl] = useState("https://shopee.co.id/mamahayu");

  // Testimonials
  const [testimonials, setTestimonials] = useState([
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
  ]);

  // Handle uploads, edits
  function handleLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      // For demo, show a preview (not a real upload)
      const url = URL.createObjectURL(e.target.files[0]);
      setLogo(url);
    }
  }
  function handleProductImageChange(idx: number, e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setProducts(ps =>
        ps.map((prod, i) => (i === idx ? { ...prod, image: url } : prod)),
      );
    }
  }
  function handleProductChange(idx: number, key: string, value: string) {
    setProducts(ps =>
      ps.map((prod, i) => (i === idx ? { ...prod, [key]: value } : prod)),
    );
  }
  function addProduct() {
    setProducts(ps => [
      ...ps,
      { image: PLACEHOLDER_IMG, title: "", price: "", description: "", ctaType: "whatsapp" },
    ]);
  }
  function removeProduct(idx: number) {
    setProducts(ps => ps.filter((_, i) => i !== idx));
  }

  // Testimonials
  function handleTestimonialChange(idx: number, key: string, value: string) {
    setTestimonials(ts =>
      ts.map((t, i) => (i === idx ? { ...t, [key]: value } : t)),
    );
  }
  function handleTestimonialAvatar(idx: number, e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setTestimonials(ts =>
        ts.map((t, i) => (i === idx ? { ...t, avatar: url } : t)),
      );
    }
  }
  function addTestimonial() {
    setTestimonials(ts => [...ts, { avatar: PLACEHOLDER_IMG, name: "", caption: "" }]);
  }
  function removeTestimonial(idx: number) {
    setTestimonials(ts => ts.filter((_, i) => i !== idx));
  }

  // Demo save function
  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    toast.success("Saved! (This is a demo. Data is not persisted yet.)");
  }

  return (
    <div className="max-w-2xl mx-auto p-3 pb-24">
      <h1 className="text-2xl font-bold mb-4 text-food-cta">Admin Page</h1>
      <form className="space-y-8" onSubmit={handleSave}>
        {/* Logo */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <CardTitle>Logo & Branding</CardTitle>
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="Logo" className="w-24 h-24 rounded-full border-4 border-food-primary object-cover" />
              <input type="file" accept="image/*" className="mb-2" onChange={handleLogoChange} />
              <Label>Business Name</Label>
              <Input value={businessName} onChange={e => setBusinessName(e.target.value)} required className="mb-2" />
              <Label>Tagline</Label>
              <Input value={tagline} onChange={e => setTagline(e.target.value)} />
            </div>
          </CardContent>
        </Card>

        {/* Promo banner */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <CardTitle>Promo Banner</CardTitle>
            <Label>Promo Text</Label>
            <Input value={promoText} onChange={e => setPromoText(e.target.value)} />
            <Label>Expiry / Additional Info</Label>
            <Input value={promoExpiry} onChange={e => setPromoExpiry(e.target.value)} />
          </CardContent>
        </Card>

        {/* Products */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="flex justify-between items-center">
              <CardTitle>Products/Services</CardTitle>
              <Button type="button" variant="secondary" size="sm" onClick={addProduct}>+ Add Product</Button>
            </div>
            <div className="space-y-6">
              {products.map((prod, idx) => (
                <div
                  key={idx}
                  className="bg-food-bg border relative border-gray-200 rounded-xl p-3 flex flex-col md:flex-row gap-3"
                >
                  <div className="flex flex-col items-center gap-1">
                    <img src={prod.image} alt="" className="w-20 h-20 rounded-lg object-cover border" />
                    <input type="file" accept="image/*" className="text-xs" onChange={e => handleProductImageChange(idx, e)} />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <Label>Title</Label>
                    <Input value={prod.title} onChange={e => handleProductChange(idx, "title", e.target.value)} required />
                    <Label>Price</Label>
                    <Input value={prod.price} onChange={e => handleProductChange(idx, "price", e.target.value)} />
                    <Label>Description</Label>
                    <Input value={prod.description} onChange={e => handleProductChange(idx, "description", e.target.value)} />
                    <Label>CTA</Label>
                    <select
                      className="rounded-md border px-3 py-2 bg-white text-sm"
                      value={prod.ctaType}
                      onChange={e => handleProductChange(idx, "ctaType", e.target.value)}
                    >
                      <option value="whatsapp">WhatsApp</option>
                      <option value="instagram">Instagram DM</option>
                    </select>
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-red-500"
                    onClick={() => removeProduct(idx)}
                    aria-label="Remove product"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <CardTitle>Social / Contact Links</CardTitle>
            <Label>Instagram</Label>
            <Input value={instagramUrl} onChange={e => setInstagramUrl(e.target.value)} />
            <Label>WhatsApp</Label>
            <Input value={whatsappUrl} onChange={e => setWhatsappUrl(e.target.value)} />
            <Label>Shopee</Label>
            <Input value={shopeeUrl} onChange={e => setShopeeUrl(e.target.value)} />
          </CardContent>
        </Card>

        {/* Testimonials */}
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className="flex justify-between items-center">
              <CardTitle>Testimonials</CardTitle>
              <Button type="button" variant="secondary" size="sm" onClick={addTestimonial}>+ Add Testimonial</Button>
            </div>
            <div className="space-y-6">
              {testimonials.map((testi, idx) => (
                <div
                  key={idx}
                  className="bg-food-bg border relative border-gray-200 rounded-xl p-3 flex gap-3 items-center"
                >
                  <div className="flex flex-col items-center gap-1">
                    <img src={testi.avatar} alt="" className="w-14 h-14 rounded-full border" />
                    <input type="file" accept="image/*" className="text-xs" onChange={e => handleTestimonialAvatar(idx, e)} />
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <Label>Name</Label>
                    <Input value={testi.name} onChange={e => handleTestimonialChange(idx, "name", e.target.value)} required />
                    <Label>Caption</Label>
                    <Input value={testi.caption} onChange={e => handleTestimonialChange(idx, "caption", e.target.value)} required />
                  </div>
                  <button
                    type="button"
                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-red-500"
                    onClick={() => removeTestimonial(idx)}
                    aria-label="Remove testimonial"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save button */}
        <Button type="submit" className="w-full font-bold text-lg" size="lg">
          Save &nbsp; 🎉
        </Button>
      </form>
    </div>
  );
}
