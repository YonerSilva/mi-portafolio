"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
     useEffect(() => {
          const elements = document.querySelectorAll(".reveal");

          if (!("IntersectionObserver" in window)) {
               elements.forEach((element) => {
                    element.classList.add("visible");
               });
               return;
          }

          const observer = new IntersectionObserver(
               (entries) => {
                    entries.forEach((entry) => {
                         if (entry.isIntersecting) {
                              entry.target.classList.add("visible");
                              observer.unobserve(entry.target);
                         }
                    });
               },
               {
                    threshold: 0.01,
                    rootMargin: "0px 0px 0px 0px",
               }
          );

          elements.forEach((element) => observer.observe(element));

          return () => observer.disconnect();
     }, []);

     return null;
}