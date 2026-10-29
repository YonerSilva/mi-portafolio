import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/util/BackToTop";
import { locales, translations, type Locale } from "@/data/translations";

export default async function Home({params,}: {params: Promise<{ locale: string }>;}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const language = locale as Locale;
  const t = translations[language];

  return (
    <>
      <Header locale={language} t={t.navigation} p={t.languageSwitcher} l={t.themeToggle} />

      <main>
        <Hero t={t.hero} />
        <About t={t.about} e={t.expandableText} />
        <Projects locale={language} t={t.projects} />
        <Contact t={t.contact} />
      </main>

      <Footer locale={language} t={t.footer} />

      <BackToTop />
    </>
  );
}
