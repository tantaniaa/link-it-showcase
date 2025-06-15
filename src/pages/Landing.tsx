
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
    <div className="bg-brand-bg min-h-screen pb-8 font-apple">
      {/* Sticky nav */}
      <nav className="sticky top-0 w-full z-10 flex justify-between items-center px-6 py-3 bg-white/70 backdrop-blur-md border-b border-border">
        <div className="flex items-center gap-3">
          <img src={LOGO} alt="BizLogo" className="w-10 h-10 rounded-xl" />
          <span className="font-extrabold font-apple text-brand-primary text-2xl tracking-tight">SmallBizCard</span>
        </div>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("/login")}
            className="font-apple font-semibold px-6 py-2 rounded-md bg-brand-accent text-white hover:bg-brand-primary transition h-11"
            size="lg"
          >
            {t("login.loginTitle")}
          </Button>
          <LanguageDropdown />
        </div>
      </nav>

      {/* Hero */}
      <section className="w-full flex flex-col items-center gap-4 mt-12 px-2">
        <h1 className="font-apple font-extrabold text-5xl md:text-6xl text-brand-primary text-center leading-tight drop-shadow-sm tracking-tight mt-2">
          {t("landing.welcome").split("<br />").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h1>
        <h2 className="font-apple text-2xl text-brand-dark text-center mt-1 font-medium">{t("landing.sub")}</h2>
        <Button
          size="lg"
          className="my-4 font-semibold bg-brand-cta text-white hover:bg-brand-primary transition h-12 px-8 text-lg rounded-xl shadow-apple"
          onClick={() => navigate("/login")}
        >
          {t("landing.cta")}
        </Button>
        {/* Demo video placeholder */}
        <div className="bg-white w-full max-w-sm h-44 rounded-2xl shadow-apple flex flex-col items-center justify-center mt-4 border border-border">
          <span className="absolute top-3 right-8 bg-brand-cta text-white text-xs px-3 rounded font-bold py-1 shadow">Demo</span>
          <svg width="60" height="60" className="opacity-80" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="12" fill="#0071e3"/>
            <polygon points="10,9 16,12 10,15" fill="#fff" />
          </svg>
          <p className="mt-3 text-gray-500 text-sm font-medium">{t("landing.testimonial.text")}</p>
        </div>
      </section>

      {/* Social proof */}
      <section className="mt-12 px-2 flex flex-col items-center">
        <div className="bg-brand-secondary/70 rounded-2xl p-6 flex flex-col items-center gap-4 w-full max-w-xl shadow-apple border border-border">
          <span className="font-apple font-semibold text-xl text-brand-primary mb-2">{t("landing.trusted")}</span>
          <div className="flex gap-8 justify-center w-full">
            <span className="bg-white px-4 py-2 rounded-md text-brand-accent font-semibold text-base shadow">{t("landing.social1") ?? "WarungMaju"}</span>
            <span className="bg-white px-4 py-2 rounded-md text-brand-accent font-semibold text-base shadow">{t("landing.social2") ?? "BatikUnik"}</span>
            <span className="bg-white px-4 py-2 rounded-md text-brand-accent font-semibold text-base shadow">{t("landing.social3") ?? "CakeRumah"}</span>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="mt-12 px-2 max-w-xl mx-auto">
        <h3 className="font-semibold text-brand-primary mb-3 text-xl">{t("landing.problemsTitle")}</h3>
        <div className="flex gap-4 flex-wrap">
          {problems.map((text, idx) => (
            <div key={idx} className="bg-white border rounded-xl shadow p-5 flex-1 min-w-[130px] text-base font-medium text-brand-primary">{text}</div>
          ))}
        </div>
      </section>

      {/* Features/solutions */}
      <section className="mt-12 px-2 max-w-xl mx-auto">
        <h3 className="font-semibold text-brand-primary mb-3 text-xl">{t("landing.solutionsTitle")}</h3>
        <div className="flex flex-wrap gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="flex-1 min-w-[180px] bg-white rounded-xl shadow-apple p-6 border text-center">
              <span className="text-brand-accent font-bold text-3xl">{f.icon}</span>
              <div className="font-semibold text-lg mt-2 mb-1">{f.title}</div>
              <span className="text-base text-gray-600">{f.desc}</span>
            </div>
          ))}
        </div>
        <Button
          size="lg"
          variant="outline"
          className="font-semibold border-brand-accent mt-6 text-brand-accent"
          onClick={() => navigate("/login")}
        >
          {t("landing.freeBio")}
        </Button>
      </section>

      {/* Testimonials */}
      <section className="mt-16 px-2 max-w-xl mx-auto">
        <div className="bg-brand-secondary text-brand-primary rounded-2xl shadow-apple p-7 flex flex-col gap-4 border">
          <div className="flex items-center gap-4">
            <img src="https://randomuser.me/api/portraits/women/75.jpg" alt={t("landing.testimonial.name")} className="w-12 h-12 rounded-full border-2 border-white" />
            <div>
              <span className="font-semibold text-lg">{t("landing.testimonial.name")}</span>
              <div className="text-sm">{t("landing.testimonial.role")}</div>
            </div>
          </div>
          <span className="italic text-base">{t("landing.testimonial.text")}</span>
        </div>
      </section>

      {/* Scenarios/adoption */}
      <section className="mt-16 px-2 max-w-xl mx-auto">
        <h3 className="font-semibold mb-3 text-brand-primary text-xl">{t("landing.suitable")}</h3>
        <div className="flex gap-4 flex-wrap">
          {types.map((type, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 flex flex-col items-center border shadow-apple min-w-[140px] flex-1">
              <span className="text-3xl mb-2">{type.icon}</span>
              <span className="font-semibold text-base">{type.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Case study / mini-wins */}
      <section className="mt-16 px-2 max-w-xl mx-auto">
        <h3 className="font-semibold mb-3 text-brand-primary text-xl">{t("landing.successStories")}</h3>
        <div className="flex gap-4 flex-wrap">
          <div className="bg-white p-5 rounded-2xl shadow-apple border flex-1 min-w-[180px] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&q=80&w=60" alt="" className="rounded-full w-12 h-12 mb-2" />
            <div className="font-semibold text-base">{t("landing.story1.title")}</div>
            <div className="text-base text-gray-800 text-center">{t("landing.story1.text")}</div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-apple border flex-1 min-w-[180px] flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&q=80&w=60" alt="" className="rounded-full w-12 h-12 mb-2" />
            <div className="font-semibold text-base">{t("landing.story2.title")}</div>
            <div className="text-base text-gray-800 text-center">{t("landing.story2.text")}</div>
          </div>
        </div>
      </section>

      {/* Encouraging close/CTA */}
      <section className="mt-16 px-2 mb-12 max-w-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-apple p-8 flex flex-col items-center border border-brand-accent">
          <h3 className="font-extrabold text-3xl text-brand-primary mb-4 text-center">{t("landing.mainCtaTitle")}</h3>
          <p className="text-brand-dark text-center mb-6 font-medium text-xl">{t("landing.mainCtaSub")}</p>
          <Button
            size="lg"
            className="px-12 font-semibold bg-brand-accent text-white hover:bg-brand-primary transition text-lg h-14 rounded-xl shadow-apple"
            onClick={() => navigate("/login")}
          >
            {t("landing.mainCta")}
          </Button>
        </div>
      </section>

      <footer className="border-t pt-6 text-center text-sm text-gray-500 font-apple bg-transparent">
        &copy; {new Date().getFullYear()} SmallBizCard.id &middot; Made for UMKM Indonesia
      </footer>
    </div>
  );
}
