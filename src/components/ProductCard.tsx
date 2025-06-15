
import React from "react";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  description?: string;
  ctaType: "whatsapp" | "instagram";
  businessName: string;
};

const CTAS = {
  whatsapp: {
    label: "Pesan via WhatsApp",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
  },
  instagram: {
    label: "Order via Instagram",
    iconUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg"
  }
};

function getCTALink(
  type: "whatsapp" | "instagram",
  businessName: string,
  productTitle: string
): string {
  if (type === "whatsapp") {
    // Use a demo phone.
    const text = encodeURIComponent(
      `Halo! Saya ingin pesan ${productTitle} dari ${businessName}.`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  }
  // Instagram DM links need actual usernames, just open ig.com for now.
  return `https://instagram.com/direct/t/username`;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
  ctaType,
  businessName
}) => (
  <div className="bg-white rounded-xl shadow-lg p-4 mb-4 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 max-w-xl w-full mx-auto border border-food-primary">
    <img src={image} alt={title} className="w-28 h-28 rounded-xl object-cover flex-shrink-0 border-2 border-food-accent" />
    <div className="flex flex-col flex-grow items-center md:items-start w-full">
      <h2 className="font-nunito font-bold text-xl text-food-cta mb-0">{title}</h2>
      <div className="text-lg font-bold text-food-primary mb-1">{price}</div>
      {description && <div className="text-sm text-gray-700 mb-2 text-center md:text-left">{description}</div>}
      <a
        href={getCTALink(ctaType, businessName, title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-flex items-center px-6 py-2 bg-food-accent hover:bg-food-primary transition-colors text-white rounded-full shadow-md font-bold font-nunito text-md gap-2"
      >
        <img src={CTAS[ctaType].iconUrl} alt={CTAS[ctaType].label} className="w-5 h-5" />
        {CTAS[ctaType].label}
      </a>
    </div>
  </div>
);

export default ProductCard;
