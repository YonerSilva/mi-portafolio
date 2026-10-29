"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
     useEffect(() => {
          const elements = document.querySelectorAll(".reveal");

          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              entry.target.classList.add("visible");
                         } else {
                              entry.target.classList.remove("visible");
                         }
                    });
               },
               {
                    threshold: 0.15,
               }
          );

          elements.forEach((element) => {
               observer.observe(element);
          });

          return () => observer.disconnect();
     }, []);

     return null;
}