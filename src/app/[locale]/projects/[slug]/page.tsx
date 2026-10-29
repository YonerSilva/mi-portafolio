import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { locales, type Locale, translations } from "@/data/translations";
import { projects } from "@/data/projects";
import styles from "./page.module.css";
import BackToTop from "@/components/util/BackToTop";
import ScrollAnimations from "@/components/util/ScrollAnimations";

export const instant = false;

type ProjectPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({ params, }: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {};
  }

  const language = locale as Locale;

  return {
    title: project.name,
    description: project.description[language],
  };
}

export default async function ProjectPage({ params, }: ProjectPageProps) {
  const { locale, slug } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const language = locale as Locale;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const t = translations[language]["projects"]["project"];

  return (
    <main>
      <ScrollAnimations />

      <header className={styles.header}>
        <Link href={`/${language}#projects`} className="link">
          ← {t.buttonBack}
        </Link>

        <p className="section-label">
          {t.title}
        </p>

        <h1>{project.name}</h1>

        <p className={styles.category}>
          {project.category}
        </p>

        <p className={styles.description}>
          {project.description[language]}
        </p>

        <Link href={`/${language}#contact`} className="link">
          {t.contact}{" "}↗
        </Link>

        {project.repositories && (
          project.repositories.map(({name, url}, index) => (
            <a className="link" href={url} target="_blank" rel="noopener noreferrer" key={index}>
              {name} ↗
            </a>
          ))
        )}
      </header>

      <section className="paint">
        <div className="content-section">
          <h3 className="reveal">{t.context}</h3>
          <p className="reveal">{project.context[language]}</p>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h3 className="reveal">{t.challenge}</h3>
          <p className="reveal">{project.challenge[language]}</p>
        </div>
      </section>

      <section className="paint">
        <div className="content-section">
          <h3 className="reveal">{t.contribution}</h3>
          <p className="reveal">{project.contribution[language]}</p>
        </div>
      </section>

      <section>
        <div className="content-section">
          <h3 className="reveal">{t.technologies}</h3>
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li className="reveal" key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </section>

      {project.gallery.length > 0 && (
        <section
          className={styles.gallerySection}
          aria-label={t.gallery}
        >
          <div className={styles.gallery}>
            {project.gallery.map((image, index) => (
              <figure
                key={`${image}-${index}`}
                className={styles.galleryItem}
              >
                <Image
                  src={image}
                  alt={`${project.name} — ${index + 1}`}
                  width={1600}
                  height={900}
                  sizes="(max-width: 600px) calc(100vw - 32px), (max-width: 900px) calc(50vw - 28px), 520px"
                  quality={90}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </section>
      )}

      <BackToTop />
    </main>
  );
}