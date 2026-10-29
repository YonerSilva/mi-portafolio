import Link from "next/link";
import type { Locale, translations } from "@/data/translations";
import LanguageSwitcher from "./util/LanguageSwitcher";
import ThemeToggle from "./util/ThemeToggle";
import styles from "./Header.module.css";

type T_Navigation = (typeof translations)[Locale]["navigation"];
type T_ThemeToggle = (typeof translations)[Locale]["themeToggle"];
type T_LanguageSwitcher = (typeof translations)[Locale]["languageSwitcher"];

export default function Header({ locale, t, p, l }: { locale: Locale; t: T_Navigation; p: T_LanguageSwitcher; l: T_ThemeToggle;}) {
  return (
    <header className={styles.header}>
      <Link className={styles.brand} href={`/${locale}#home`}>
        YS<span>.</span>
      </Link>
      <nav aria-label={t.about}>
        <Link href={`/${locale}#about`}>{t.about}</Link>
        <Link href={`/${locale}#projects`}>{t.projects}</Link>
        <Link href={`/${locale}#contact`}>{t.contact}</Link>
      </nav>
      <div className={styles.actions}>
        <LanguageSwitcher locale={locale} t={p} />
        <ThemeToggle t={l} />
      </div>
      {/*<Link className={styles.cta} href={`/${locale}#contact`}>
        {t.cta} ↗
      </Link>*/}
    </header>
  );
}