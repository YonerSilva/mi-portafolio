import type { Locale, translations } from "@/data/translations";

type Footer = (typeof translations)[Locale]["footer"];

export default function Footer({ locale, t }: { locale: Locale; t: Footer }) {
     return (
          <footer className="site-footer">
               <span>© 2026 Dev Yoner Silva </span>
               <span>{t}</span>
          </footer>
     );
}
