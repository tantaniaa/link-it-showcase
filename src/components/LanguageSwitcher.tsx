
import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  function toggleLang() {
    i18n.changeLanguage(i18n.language === "id" ? "en" : "id");
  }
  return (
    <Button
      variant="ghost"
      size="sm"
      className="absolute top-3 right-3 z-50 border border-food-primary"
      onClick={toggleLang}
    >
      {t("lang.changeTo")}
    </Button>
  );
}
