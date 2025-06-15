
import React from "react";
import { Instagram } from "lucide-react";

type SocialLinksProps = {
  instagramUrl?: string;
  whatsappUrl?: string;
  shopeeUrl?: string;
};

const SocialLinks: React.FC<SocialLinksProps> = ({
  instagramUrl = "https://instagram.com/yourbiz",
  whatsappUrl = "https://wa.me/6281234567890",
  shopeeUrl = "https://shopee.co.id/yourshop"
}) => (
  <div className="flex flex-row justify-center gap-4 mb-4">
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-food-accent hover:bg-food-primary text-white rounded-full p-3 flex items-center gap-1 shadow-lg transition-all hover:scale-105"
      aria-label="WhatsApp"
    >
      {/* WhatsApp SVG brand icon */}
      <svg viewBox="0 0 32 32" width={20} height={20} fill="white" className="mr-1" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M16 3C9.383 3 4 8.383 4 15c0 2.661 1.027 5.206 2.893 7.22L4 29l6.967-2.801A12.899 12.899 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3zm0 22c-2.039 0-4.016-.543-5.752-1.572l-.408-.244-4.142 1.666 1.587-4.312-.264-.414C5.526 18.038 5 16.544 5 15c0-6.065 4.935-11 11-11s11 4.935 11 11-4.935 11-11 11zm6.037-7.393c-.33-.164-1.964-.971-2.269-1.08-.305-.112-.528-.164-.751.165-.22.33-.858 1.079-1.053 1.299-.193.22-.387.247-.717.083-.33-.165-1.392-.513-2.652-1.633-.981-.872-1.644-1.948-1.84-2.278-.193-.33-.021-.508.146-.671.151-.15.33-.39.495-.586.163-.194.217-.332.33-.551.11-.22.055-.413-.027-.577-.082-.164-.752-1.816-1.03-2.49-.272-.653-.552-.564-.752-.574-.193-.009-.414-.011-.636-.011a1.23 1.23 0 0 0-.86.4c-.295.313-.963.943-.963 2.299s.985 2.672 1.124 2.862c.138.189 1.942 2.965 4.705 4.042.658.225 1.177.36 1.58.46.665.168 1.273.145 1.753.088.535-.063 1.639-.669 1.872-1.316.23-.647.23-1.204.162-1.316-.068-.112-.246-.182-.508-.312z"/>
        </g>
      </svg>
      <span className="font-nunito font-bold text-sm">WhatsApp</span>
    </a>
    <a
      href={instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-food-accent hover:bg-food-primary text-white rounded-full p-3 flex items-center gap-1 shadow-lg transition-all hover:scale-105"
      aria-label="Instagram"
    >
      <Instagram size={20} className="mr-1" />
      <span className="font-nunito font-bold text-sm">Instagram</span>
    </a>
    <a
      href={shopeeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-food-accent hover:bg-food-primary text-white rounded-full p-3 flex items-center gap-1 shadow-lg transition-all hover:scale-105"
      aria-label="Shopee"
    >
      <svg width={20} height={20} className="mr-1" viewBox="0 0 32 32"><path fill="white" d="M22.086 19.999c.014-.041.027-.081.036-.123.25-1.005-.304-1.362-.372-1.402-.22-.134-.546-.116-.698-.099a.618.618 0 0 0-.262.09c-.16.07-.307.153-.441.246c-.207.143-.399.29-.628.43c-.187.114-.376.222-.58.303a1.563 1.563 0 0 1-.56.093c-.092-.018-.198-.064-.322-.171c-.158-.155-.239-.383-.133-.538c.08-.121.293-.264.602-.456c.845-.525 1.483-.846 2.028-1.283c.709-.573 1.499-1.463 1.282-2.599c-.17-.89-.846-1.445-2.044-1.623c-.871-.127-2.012.062-2.95.486a.61.61 0 0 0-.237.144a.568.568 0 0 0 .018.691c.142.172.358.253.562.211a5.654 5.654 0 0 1 2.692-.277a2.295 2.295 0 0 1 .36.087c.494.176.729.463.794.733c.124.517-.193.96-1.019 1.448l-1.248.749c-1.146.688-1.461 1.44-1.345 2.047c.104.543.573.869 1.029.985a3.951 3.951 0 0 0 1.595-.012c.465-.098.897-.265 1.258-.46c.226-.128.392-.228.52-.307zM16.604 22.153c-3.518 0-6.374-2.854-6.374-6.374c0-3.521 2.856-6.375 6.374-6.375s6.375 2.854 6.375 6.375c0 3.52-2.857 6.374-6.375 6.374zm0-14.672c2.889 0 5.484 1.172 7.354 3.051c1.869 1.88 3.035 4.48 3.035 7.37c0 2.892-1.166 5.494-3.035 7.374c-1.87 1.88-4.465 3.052-7.354 3.052s-5.485-1.172-7.354-3.052c-1.87-1.88-3.035-4.482-3.035-7.374c0-2.89 1.166-5.49 3.035-7.37C11.119 8.653 13.715 7.481 16.604 7.481zm0-2.065c-7.107 0-12.88 5.771-12.88 12.88c0 7.107 5.773 12.878 12.88 12.878c7.108 0 12.88-5.77 12.88-12.878c0-7.109-5.772-12.88-12.88-12.88z"></path></svg>
      <span className="font-nunito font-bold text-sm">Shopee</span>
    </a>
  </div>
);

export default SocialLinks;
