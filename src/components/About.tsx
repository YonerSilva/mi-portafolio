import type { Locale, translations } from "@/data/translations";
import ScrollAnimations from "./util/ScrollAnimations";
import ExpandableText from "./util/ExpandableText";

type AboutText = (typeof translations)[Locale]["about"];
type TExpandableText = (typeof translations)[Locale]["expandableText"];

export default function About({ t, e }: { t: AboutText, e: TExpandableText }) {
  return (
    <section id="about" className="paint">
      <ScrollAnimations/>
      <div className="content-section">
        <p className="section-label reveal">{t.label}</p>
        <h2 className="reveal">
          {t.titleStart}
          <br />
          {t.titleEnd}
        </h2>
        <ExpandableText t={e}>
          <p className="reveal">{t.description}</p>
        </ExpandableText>
      </div>
    </section>
  );
}