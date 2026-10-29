import type { Locale, translations } from "@/data/translations";
import Image from "next/image";

type ContactText = (typeof translations)[Locale]["contact"];

export default function Contact({ t }: { t: ContactText }) {
  return (
    <section id="contact" className="paint">
      <div className="content-section">
        <p className="section-label reveal">{t.label}</p>

        <h2 className="reveal">{t.title}</h2>

        <p className="reveal">{t.description}</p>

        <div className="actions">
          <a className="button-primary" href="https://www.linkedin.com/in/yoner-silva" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/linkedin.svg"
              width={24}
              height={24}
              alt="linkedin"
            />
            LinkedIn ↗
          </a>

          <a className="button-primary" href="https://github.com/YonerSilva/YonerSilva" target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/github.svg"
              width={24}
              height={24}
              alt="github"
            />
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}