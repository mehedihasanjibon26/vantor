"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import "./next-gear.css";

export default function NextGear() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const circleRef = useRef<HTMLDivElement | null>(null);
  const bikeRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const gearRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const circle = circleRef.current;
    const bike = bikeRef.current;
    const next = nextRef.current;
    const gear = gearRef.current;
    const shadow = shadowRef.current;

    if (
      !section ||
      !circle ||
      !bike ||
      !next ||
      !gear ||
      !shadow
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * =====================================================
       * INITIAL STATE
       * =====================================================
       */

      gsap.set(circle, {
        scale: 0.04,
        autoAlpha: 1,
        force3D: true,
        transformOrigin: "50% 50%",
      });

      gsap.set(bike, {
        scale: 0.055,
        y: "-1.5vh",
        autoAlpha: 0.08,
        force3D: true,
        transformOrigin: "50% 50%",
      });

      gsap.set(next, {
        x: "-110vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(gear, {
        x: "110vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(shadow, {
        scaleX: 0.08,
        scaleY: 0.35,
        autoAlpha: 0,
        force3D: true,
      });

      /*
       * =====================================================
       * MASTER SCROLL TIMELINE
       * =====================================================
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",

          /*
           * Lower scrub = follows the scroll more naturally.
           * Still smooth, but not laggy.
           */
          scrub: 1.15,

          invalidateOnRefresh: true,
        },
      });

      /*
       * Slight dark hold.
       */
      timeline.to(
        {},
        {
          duration: 0.08,
        },
      );

      /*
       * =====================================================
       * CIRCLE
       *
       * ONE continuous movement.
       * No intermediate scale stops.
       * =====================================================
       */

      timeline.to(
        circle,
        {
          scale: 7.8,
          duration: 1.55,
          ease: "power1.inOut",
          force3D: true,
        },
        0.08,
      );

      /*
       * =====================================================
       * BIKE
       *
       * ONE continuous approach.
       * Feels like the bike is coming from far away.
       * =====================================================
       */

      timeline.to(
        bike,
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 1.5,
          ease: "power1.inOut",
          force3D: true,
        },
        0.18,
      );

      /*
       * =====================================================
       * TEXT
       * =====================================================
       */

      timeline.to(
        next,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.68,
          ease: "power3.out",
          force3D: true,
        },
        0.72,
      );

      timeline.to(
        gear,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.68,
          ease: "power3.out",
          force3D: true,
        },
        0.8,
      );

      /*
       * =====================================================
       * SHADOW
       * =====================================================
       */

      timeline.to(
        shadow,
        {
          scaleX: 1,
          scaleY: 1,
          autoAlpha: 0.8,
          duration: 0.75,
          ease: "power2.out",
          force3D: true,
        },
        0.88,
      );

      /*
       * Final hold.
       */
      timeline.to(
        {},
        {
          duration: 0.72,
        },
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="nextGear"
      id="gear"
      aria-label="Next Gear"
    >
      <div className="nextGear__sticky">

        <div
          className="nextGear__darkBackground"
          aria-hidden="true"
        />

        <div
          className="nextGear__circleWrap"
          aria-hidden="true"
        >
          <div
            ref={circleRef}
            className="nextGear__circle"
          />
        </div>

        <div
          ref={nextRef}
          className="nextGear__word nextGear__word--next"
        >
          NEXT
        </div>

        <div
          ref={gearRef}
          className="nextGear__word nextGear__word--gear"
        >
          GEAR
        </div>

        <div
          ref={bikeRef}
          className="nextGear__bike"
        >
          <Image
            src="/images/bike/vantor-bike-front.png"
            alt="Vantor motorcycle front view"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 92vw, 55vw"
            className="nextGear__bikeImage"
          />
        </div>

        <div
          ref={shadowRef}
          className="nextGear__shadow"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}