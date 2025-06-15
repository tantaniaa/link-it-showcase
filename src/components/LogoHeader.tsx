
import React from "react";

type LogoHeaderProps = {
  logoUrl?: string;
  name: string;
  tagline?: string;
};

const LogoHeader: React.FC<LogoHeaderProps> = ({
  logoUrl = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=96&h=96&facepad=3",
  name,
  tagline,
}) => (
  <div className="flex flex-col items-center gap-2 mb-2">
    <div className="rounded-full border-4 border-food-primary bg-food-bg w-24 h-24 flex items-center justify-center shadow-md overflow-hidden">
      <img
        src={logoUrl}
        alt="Logo"
        className="object-cover w-20 h-20 rounded-full"
      />
    </div>
    <h1 className="text-2xl md:text-3xl font-extrabold mt-2 font-nunito text-food-cta">{name}</h1>
    {tagline && <p className="text-md text-food-accent font-nunito text-center">{tagline}</p>}
  </div>
);

export default LogoHeader;
