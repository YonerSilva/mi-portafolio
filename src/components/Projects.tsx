import Link from "next/link";
import type { Locale, translations } from "@/data/translations";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";
import ScrollAnimations from "./util/ScrollAnimations";

type ProjectsText = (typeof translations)[Locale]["projects"];

export default function Projects({locale, t,}: {locale: Locale; t: ProjectsText;}) {
  return (
    <section id="projects">
      <ScrollAnimations/>
      <div className="content-section">
        <p className="section-label reveal">{t.label}</p>

        <h2 className="reveal">{t.title}</h2>

        <p className="reveal">{t.description}</p>

        <div className={`${styles.grid} reveal`}>
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <article className={styles.card} key={project.slug}>
                <p className={styles.category}>{project.category}</p>

                <h3>{project.name}</h3>

                <p>{project.description[locale]}</p>

                <ul className={styles.technologies}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>

                <p>{project.contribution[locale]}</p>

                <Link href={`/${locale}/projects/${project.slug}`} className="link">
                  {t.buttonViewProject}
                </Link>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}