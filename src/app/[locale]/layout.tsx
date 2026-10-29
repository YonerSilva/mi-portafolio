import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/data/translations";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Yoner Silva | Software Developer",
    template: "%s | Yoner Silva",
  },
  icons: {
    icon: "/portafolio.svg"
  },
  description:
    "Portafolio profesional de desarrollo de software, aplicaciones web y APIs.",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({children,params,}: Readonly<{children: React.ReactNode; params: Promise<{ locale: string }>;}>) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={font.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}