"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Locale, translations } from "@/data/translations";
import styles from "./LanguageSwitcher.module.css";

type T_LanguageSwitcher = (typeof translations)[Locale]["languageSwitcher"];

export default function LanguageSwitcher({ t, locale }: { t: T_LanguageSwitcher; locale: Locale;}) {
  const pathname = usePathname();
  const nextLocale = locale === "es" ? "en" : "es";
  const nextPath = pathname.replace(
    /^\/(es|en)(?=\/|$)/,
    `/${nextLocale}`,
  );

  return (
    <Link
      href={nextPath}
      hrefLang={nextLocale}
      lang={nextLocale}
      aria-label={t}
      title={t}
      className={styles.languageSwitcher}
    >
      {nextLocale.toUpperCase()}
    </Link>
  );
}