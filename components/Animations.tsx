"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Motion for the ASSAïS site (Hermès-inspired layout).
 *
 *  1. Scroll-reveal of every `.reveal` element with a `data-delay` stagger.
 *  2. Hero image entrance + subtle scroll parallax.
 *  3. Full-bleed editorial banners — their background image drifts on scroll.
 *  4. Product grid — `ScrollTrigger.batch` staggers the cards in.
 *
 * `prefers-reduced-motion` short-circuits to static content.
 */
export default function Animations() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("no-js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return; // leave everything visible and static

    gsap.registerPlugin(ScrollTrigger);
    root.classList.add("gsap-ready");

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      /* ── Hero entrance ─────────────────────────────── */
      const heroMedia = document.querySelector<HTMLElement>(".hero-media");
      const intro = gsap.timeline({ defaults: { ease } });
      if (heroMedia) {
        gsap.set(heroMedia, { scale: 1.12, opacity: 0 });
        intro.to(heroMedia, { scale: 1, opacity: 1, duration: 1.8 }, 0);
      }
      gsap.set(".hero-copy.reveal", { opacity: 0, y: 30 });
      intro.to(".hero-copy.reveal", { opacity: 1, y: 0, duration: 1.1 }, 0.45);

      // Hero image slow scroll parallax.
      if (heroMedia) {
        gsap.to(heroMedia, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      /* ── Generic scroll-reveal ─────────────────────── */
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        if (el.classList.contains("hero-copy")) return; // handled by intro
        const delay = Number(el.dataset.delay || 0) * 0.1;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            delay,
            ease,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          }
        );
      });

      /* ── Editorial banners — background drift on scroll ─ */
      gsap.utils.toArray<HTMLElement>(".editorial .ed-media").forEach((media) => {
        gsap.fromTo(
          media,
          { yPercent: -8, scale: 1.08 },
          {
            yPercent: 8,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: media.closest("section") || media,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });

      /* ── Product grid — staggered rise on scroll ─────── */
      ScrollTrigger.batch(".product-grid .product", {
        start: "top 90%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 48 },
            { opacity: 1, y: 0, duration: 1, ease, stagger: 0.1, overwrite: true }
          ),
        once: true,
      });

      /* ── Category tiles — staggered rise ─────────────── */
      ScrollTrigger.batch(".cat-row .cat", {
        start: "top 92%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { opacity: 0, y: 36 },
            { opacity: 1, y: 0, duration: 0.9, ease, stagger: 0.08, overwrite: true }
          ),
        once: true,
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
}
