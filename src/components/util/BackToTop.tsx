"use client";

import { useEffect, useState } from "react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
     const [visible, setVisible] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
               setVisible(window.scrollY > 400);
          };
          handleScroll();
          window.addEventListener("scroll", handleScroll, { passive: true });
          return () => {
               window.removeEventListener("scroll", handleScroll);
          };
     }, []);

     return (
          <button
               type="button"
               className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
               aria-label="Volver al inicio"
               title="Volver arriba"
               tabIndex={visible ? 0 : -1}
               aria-hidden={!visible}
          >
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
               >
                    <path d="m18 15-6-6-6 6" />
               </svg>
          </button>
     );
}