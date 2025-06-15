
import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "@/components/LanguageDropdown";

const LOGO = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=facearea&w=96&h=96&facepad=3";

export default function Landing() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const features = t("landing.features", { returnObjects: true }) as Array<any>;
  const problems = t("landing.problems", { returnObjects: true }) as Array<string>;
  const types = t("landing.types", { returnObjects: true }) as Array<any>;

  return (
    <div className="bg-brand-bg min-h-screen pb-8 font-nunito">
      {/* Playful nav */}
      <nav className="sticky top-0 w-full z-10 flex justify-between items-center px-6 py-3 bg-white/90 backdrop-blur-md border-b border-border rounded-b-3xl shadow-fun">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="BizLogo" className="w-12 h-12 rounded-3xl border-4 border-brand-accent shadow-fun" />
          <span className="font-extrabold font-nunito text-brand-primary text-3xl tracking-tighter">SmallBizCard</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("/login")}
            className="font-nunito font-bold px-6 py-2 rounded-3xl bg-brand-primary text-white shadow-fun transition h-12 text-base"
            size="lg"
          >
            {t("login.loginTitle")}
          </Button>
          <LanguageDropdown />
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full flex flex-col items-center gap-5 mt-16 px-2">
        <h1 className="font-extrabold text-5xl md:text-7xl text-brand-primary text-center leading-snug drop-shadow-md tracking-tighter mt-2 mb-2">
          <span className="bg-gradient-to-r from-brand-cta via-brand-primary to-brand-accent bg-clip-text text-transparent">
            {t("landing.welcome").split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-brand-dark text-center bg-brand-secondary/60 rounded-2xl px-6 py-2 w-fit shadow-fun">{t("landing.sub")}</h2>
        <Button
          size="lg"
          className="my-6 font-bold bg-brand-cta text-white hover:bg-brand-primary transition h-16 px-12 text-xl rounded-full shadow-fun animate-pulse"
          onClick={() => navigate("/login")}
        >
          {t("landing.cta")}
        </Button>
        {/* Fun video placeholder */}
        <div className="bg-brand-secondary w-full max-w-sm h-48 rounded-3xl shadow-fun flex flex-col items-center justify-center mt-4 border-4 border-brand-accent relative overflow-hidden">
          <span className="absolute top-4 right-8 bg-brand-accent text-white text-xs px-3 rounded-full font-bold py-1 drop-shadow">Demo</span>
          <svg width="64" height="64" className="opacity-80 drop-shadow-lg" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#1ed760"/>
            <polygon points="10,8 18,12 10,16" fill="#fff" />
          </svg>
          <p className="mt-3 text-brand-accent text-base font-semibold">{t("landing.testimonial.text")}</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="mt-12 px-2 flex flex-col items-center">
        <div className="bg-brand-secondary rounded-3xl p-8 flex flex-col items-center gap-5 w-full max-w-xl shadow-fun border-2 border-brand-accent">
          <span className="font-bold text-2xl text-brand-dark mb-2">✨ {t("landing.trusted")} ✨</span>
          <div className="flex gap-8 justify-center w-full">
            <span className="bg-brand-bg border-2 border-brand-primary px-5 py-2 rounded-full text-brand-accent font-bold text-base shadow">{t("landing.social1") ?? "WarungMaju"}</span>
            <span className="bg-brand-bg border-2 border-brand-accent px-5 py-2 rounded-full text-brand-primary font-bold text-base shadow">{t("landing.social2") ?? "BatikUnik"}</span>
            <span className="bg-brand-bg border-2 border-brand-cta px-5 py-2 rounded-full text-brand-cta font-bold text-base shadow">{t("landing.social3") ?? "CakeRumah"}</span>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="mt-14 px-2 max-w-xl mx-auto">
        <h3 className="font-bold text-brand-cta mb-3 text-2xl tracking-tight">{t("landing.problemsTitle")}</h3>
        <div className="flex gap-5 flex-wrap">
          {problems.map((text, idx) => (
            <div key={idx} className="bg-white border-2 border-brand-accent rounded-2xl shadow-fun p-6 flex-1 min-w-[130px] text-base font-semibold text-brand-primary">{text}</div>
          ))}
        </div>
      </section>

      {/* Features/solutions */}
      <section className="mt-14 px-2 max-w-xl mx-auto">
        <h3 className="font-bold text-brand-primary mb-3 text-2xl">{t("landing.solutionsTitle")}</h3>
        <div className="flex flex-wrap gap-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex-1 min-w-[180px] bg-brand-secondary/70 rounded-2xl shadow-fun p-7 border-2 border-brand-primary text-center">
              <span className="text-brand-accent font-black text-4xl">{f.icon}</span>
              <div className="font-bold text-lg mt-2 mb-1">{f.title}</div>
              <span className="text-base text-brand-dark">{f.desc}</span>
            </div>
          ))}
        </div>
        <Button
          size="lg"
          variant="outline"
          className="font-bold border-2 border-brand-cta mt-7 text-brand-cta rounded-full px-10 py-3"
          onClick={() => navigate("/login")}
        >
          {t("landing.freeBio")}
        </Button>
      </section>

      {/* Testimonials */}
      <section className="mt-20 px-2 max-w-xl mx-auto">
        <div className="bg-brand-secondary text-brand-primary rounded-3xl shadow-fun p-8 flex flex-col gap-4 border-2 border-brand-accent">
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/women/75.jpg" alt={t("landing.testimonial.name")} className="w-14 h-14 rounded-full border-4 border-brand-accent" />
            <div>
              <span className="font-bold text-lg">{t("landing.testimonial.name")}</span>
              <div className="text-base">{t("landing.testimonial.role")}</div>
            </div>
          </div>
          <span className="italic text-lg">{t("landing.testimonial.text")}</span>
        </div>
      </section>

      {/* Scenarios/adoption */}
      <section className="mt-20 px-2 max-w-xl mx-auto">
        <h3 className="font-bold mb-3 text-brand-primary text-2xl">{t("landing.suitable")}</h3>
        <div className="flex gap-5 flex-wrap">
          {types.map((type, idx) => (
            <div key={idx} className="bg-brand-bg rounded-3xl p-6 flex flex-col items-center border-2 border-brand-accent shadow-fun min-w-[150px] flex-1">
              <span className="text-4xl mb-2">{type.icon}</span>
              <span className="font-bold text-base">{type.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case study / mini-wins */}
      <section className="mt-20 px-2 max-w-xl mx-auto">
        <h3 className="font-bold mb-3 text-brand-primary text-2xl">{t("landing.successStories")}</h3>
        <div className="flex gap-5 flex-wrap">
          <div className="bg-brand-secondary p-6 rounded-3xl shadow-fun border-2 border-brand-accent flex-1 min-w-[180px] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=60" alt="" className="rounded-full w-14 h-14 mb-2 border-2 border-brand-cta" />
            <div className="font-bold text-base">{t("landing.story1.title")}</div>
            <div className="text-base text-brand-primary text-center">{t("landing.story1.text")}</div>
          </div>
          <div className="bg-brand-secondary p-6 rounded-3xl shadow-fun border-2 border-brand-accent flex-1 min-w-[180px] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&q=80&w=60" alt="" className="rounded-full w-14 h-14 mb-2 border-2 border-brand-cta" />
            <div className="font-bold text-base">{t("landing.story2.title")}</div>
            <div className="text-base text-brand-primary text-center">{t("landing.story2.text")}</div>
          </div>
        </div>
      </section>

      {/* Encouraging close/CTA */}
      <section className="mt-20 px-2 mb-10 max-w-xl mx-auto">
        <div className="bg-white rounded-3xl shadow-fun p-10 flex flex-col items-center border-4 border-brand-cta animate-pulse hover:scale-105 transition-all">
          <h3 className="font-extrabold text-3xl text-brand-cta mb-4 text-center">{t("landing.mainCtaTitle")}</h3>
          <p className="text-brand-primary text-center mb-8 font-medium text-xl">{t("landing.mainCtaSub")}</p>
          <Button
            size="lg"
            className="px-14 font-bold bg-brand-primary text-white hover:bg-brand-cta hover:text-white transition text-xl h-16 rounded-full shadow-fun"
            onClick={() => navigate("/login")}
          >
            {t("landing.mainCta")}
          </Button>
        </div>
      </section>

      <footer className="border-t-2 pt-6 text-center text-base text-brand-dark font-nunito bg-transparent mt-10">
        &copy; {new Date().getFullYear()} SmallBizCard.id &middot; Made for UMKM Indonesia
      </footer>
    </div>
  );
}
