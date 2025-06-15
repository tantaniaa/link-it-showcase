
import React from "react";

type ProductCardProps = {
  image: string;
  title: string;
  price: string;
  description?: string;
  ctaType: "whatsapp" | "instagram";
  businessName: string;
  cardSmall?: boolean; // NEW
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
    const text = encodeURIComponent(
      `Halo! Saya ingin pesan ${productTitle} dari ${businessName}.`
    );
    return `https://wa.me/6281234567890?text=${text}`;
  }
  return `https://instagram.com/direct/t/username`;
}

// Accept cardSmall for a smaller layout
const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
  ctaType,
  businessName,
  cardSmall
}) => (
  <div
    className={`bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 mx-auto border border-brand-primary
      ${cardSmall ? 'p-2 max-w-xs' : 'p-4 max-w-xl'} w-full`}
    style={{ minHeight: cardSmall ? '90px' : undefined }}
  >
    <img
      src={image}
      alt={title}
      className={`object-cover flex-shrink-0 border-2 border-brand-accent rounded-xl
        ${cardSmall ? 'w-14 h-14' : 'w-28 h-28'}`}
    />
    <div className={`flex flex-col flex-grow items-center md:items-start w-full ${cardSmall ? "gap-1" : ""}`}>
      <h2 className="font-nunito font-bold text-base text-brand-dark mb-0">{title}</h2>
      <div className="text-sm font-bold text-brand-primary mb-1">{price}</div>
      {description && (
        <div className="text-sm text-gray-600 mb-2 text-center md:text-left">{description}</div>
      )}
      <a
        href={getCTALink(ctaType, businessName, title)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 inline-flex items-center px-3 py-1 bg-brand-accent hover:bg-brand-primary transition-colors text-white rounded-full shadow font-bold font-nunito text-xs gap-2"
      >
        <img src={CTAS[ctaType].iconUrl} alt={CTAS[ctaType].label} className="w-4 h-4" />
        {CTAS[ctaType].label}
      </a>
    </div>
  </div>
);

export default ProductCard;

