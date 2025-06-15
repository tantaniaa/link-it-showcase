
import React from "react";

interface PromoBannerProps {
  promoText: string;
  expiryText?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ promoText, expiryText }) => (
  <div className="w-full mb-4 flex justify-center">
    <div className="px-4 py-2 bg-food-primary text-food-cta rounded-xl shadow animate-promo-bounce font-bold text-lg flex items-center gap-2 font-nunito">
      <span role="img" aria-label="promo">📢</span>
      {promoText}
      {expiryText && (
        <span className="ml-3 text-xs bg-food-cta text-food-bg py-1 px-3 rounded-full">{expiryText}</span>
      )}
    </div>
  </div>
);

export default PromoBanner;
