"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation/Navigation";
import { gsap } from "@/lib/gsap";
import "./cinematicHero.css";

export default function CinematicHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const bikeRef = useRef<HTMLDivElement | null>(null);
  const navWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const bike = bikeRef.current;
    const navWrap = navWrapRef.current;

    if (!hero || !bike || !navWrap) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bike, {
        xPercent: -105,
        yPercent: 5,
        scale: 0.88,
        rotation: -2.5,
        autoAlpha: 0,
      });

      gsap.set(navWrap, {
        autoAlpha: 0,
        y: -35,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top 92%",
          end: "top 18%",
          scrub: 2.2,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        bike,
        {
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out",
        },
        0,
      );

      timeline.to(
        navWrap,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
        },
        0.2,
      );
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="cinematicHero"
      id="hero"
    >
      <div
        className="cinematicHero__background"
        aria-hidden="true"
      >
        <div className="cinematicHero__shape cinematicHero__shape--left" />
        <div className="cinematicHero__shape cinematicHero__shape--center" />
        <div className="cinematicHero__shape cinematicHero__shape--right" />
      </div>

      <div
        ref={navWrapRef}
        className="cinematicHero__nav"
      >
        <Navigation />
      </div>

      <div
        ref={bikeRef}
        className="cinematicHero__bike"
      >
        <Image
          src="/images/bike/vantor-naked-bike.png"
          alt="Vantor naked motorcycle"
          fill
          priority
          unoptimized
          sizes="(max-width: 768px) 120vw, 78vw"
          className="cinematicHero__bikeImage"
        />
      </div>

      <div
        className="cinematicHero__floor"
        aria-hidden="true"
      />

      <div className="cinematicHero__microcopy">
        BUILT TO MOVE
      </div>
    </section>
  );
}