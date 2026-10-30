import type { Locale, translations } from "@/data/translations";
import styles from "./Hero.module.css";
import { technologies } from "@/data/tecnologies";
import Image from "next/image";
import { Collapse } from "antd";
import { Suspense } from "react";

type HeroText = (typeof translations)[Locale]["hero"];

export default function Hero({ t }: { t: HeroText }) {

  const showTecnologies = () => {
    return (
      <div className={styles.technologies}>

        <span className={styles.category}>Frontend</span>
        <div className={styles.technologyList}>
          {technologies.frontend.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <span className={styles.category}>Backend</span>
        <div className={styles.technologyList}>
          {technologies.backend.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <span className={styles.category}>Databases</span>
        <div className={styles.technologyList}>
          {technologies.databases.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <span className={styles.category}>Cloud</span>
        <div className={styles.technologyList}>
          {technologies.cloud.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <span className={styles.category}>DevOps</span>
        <div className={styles.technologyList}>
          {technologies.devops.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <span className={styles.category}>Tools</span>
        <div className={styles.technologyList}>
          {technologies.tools.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>

        <hr className={styles.divider} />

        <span className={styles.category}>Methodologies</span>
        <div className={styles.technologyList}>
          {technologies.methodologies.map(({ id, name, Icon }) => (
            <div className={styles.technology} key={id}>
              {Icon && <Icon size={36} />}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="home">
      <div className={styles.hero}>
        <div className={styles.presentation}>
          <Image
            src="/images/banner_presentation.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={85}
            className={styles.presentationBackground}
          />

          <div className={styles.profilePhoto}>
            <Image
              src="/images/profile.png"
              alt="Yoner Silva, ingeniero de sistemas"
              width={180}
              height={180}
              priority
              fetchPriority="high"
              className={styles.avatar}
            />
          </div>
          <div className={styles.presentationContent}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h1>
              {t.titleStart}
              <br />
              {t.titleEnd} <span>{t.highlight}</span>
            </h1>
            <p className={styles.description}>{t.description}</p>
          </div>
        </div>

        <div className={styles.content}>
          <div className="actions">
            <a className="button-primary" href="#projects">
              {t.projectsCta} <span>↘</span>
            </a>

            <a className="button-primary" href="#contact">
              {t.contactCta} <span>↘</span>
            </a>
          </div>

          <Suspense fallback={null}>
            <Collapse
              className={styles.collapse}
              size="large"
              items={[
                {
                  key: "1",
                  label: (
                    <span className={styles.titleTechnologies}>
                      {t.technologies}
                    </span>
                  ),
                  children: showTecnologies(),
                },
              ]}
            />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
