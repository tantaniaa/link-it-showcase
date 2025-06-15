
import React from "react";
import { useTranslation } from "react-i18next";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";

const LANGS = [
  { code: "en", label: "English", emoji: "🇬🇧" },
  { code: "id", label: "Bahasa", emoji: "🇮🇩" },
];

export default function LanguageDropdown() {
  const { i18n } = useTranslation();
  const currentLang = LANGS.find(l => l.code === i18n.language) || LANGS[0];

  function handleChange(code: string) {
    i18n.changeLanguage(code);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border border-food-primary"
        >
          <span className="text-xl">{currentLang.emoji}</span>
          <span className="font-bold uppercase text-xs">{currentLang.code}</span>
          <Flag size={16} className="ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {LANGS.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={i18n.language === lang.code ? "bg-food-primary/20 font-bold" : ""}
          >
            <span className="mr-2 text-xl">{lang.emoji}</span>
            <span className="uppercase text-xs">{lang.code}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
