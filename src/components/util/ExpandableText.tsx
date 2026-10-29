
"use client";

import { useState } from "react";
import type { Locale, translations } from "@/data/translations";
import styles from "./ExpandableText.module.css";

type T_ExpandableText = (typeof translations)[Locale]["expandableText"];

export default function ExpandableText({t, children}: {t: T_ExpandableText, children: React.ReactNode}) {
     const [expanded, setExpanded] = useState(false);

     return (
          <div className={`${styles.container} ${expanded ? styles.expanded : ""}`}>
               <div className={styles.content}>
                    {children}
               </div>

               <button
                    type="button"
                    className={styles.button}
                    onClick={() => setExpanded((previous) => !previous)}
                    aria-expanded={expanded}
               >
                    {expanded ? t.true : t.false}
               </button>
          </div>
     );
}