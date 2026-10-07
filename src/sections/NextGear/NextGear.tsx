"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { asset } from "@/lib/asset";
import "./next-gear.css";

export default function NextGear() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const circleRef = useRef<HTMLDivElement | null>(null);

  const bikeRef = useRef<HTMLDivElement | null>(null);

  const nextRef = useRef<HTMLDivElement | null>(null);
  const gearRef = useRef<HTMLDivElement | null>(null);

  const accentLeftRef = useRef<HTMLDivElement | null>(null);
  const accentRightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const circle = circleRef.current;
    const bike = bikeRef.current;

    const next = nextRef.current;
    const gear = gearRef.current;

    const accentLeft = accentLeftRef.current;
    const accentRight = accentRightRef.current;

    if (
      !section ||
      !circle ||
      !bike ||
      !next ||
      !gear ||
      !accentLeft ||
      !accentRight
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(circle, {
        scale: 0.08,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(bike, {
        scale: 0.16,
        y: "20vh",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(next, {
        x: "-24vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(gear, {
        x: "24vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(accentLeft, {
        x: "-15vw",
        autoAlpha: 0,
      });

      gsap.set(accentRight, {
        x: "15vw",
        autoAlpha: 0,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.2,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        {},
        {
          duration: 0.2,
        },
      );

      timeline.to(
        circle,
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.35,
          ease: "power3.out",
          force3D: true,
        },
        0.2,
      );

      timeline.to(
        bike,
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          duration: 1.3,
          ease: "power3.out",
          force3D: true,
        },
        0.48,
      );

      timeline.to(
        next,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.95,
          ease: "power3.out",
          force3D: true,
        },
        0.82,
      );

      timeline.to(
        gear,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.95,
          ease: "power3.out",
          force3D: true,
        },
        0.95,
      );

      timeline.to(
        accentLeft,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        1.1,
      );

      timeline.to(
        accentRight,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        1.18,
      );

      timeline.to(
        bike,
        {
          scale: 1.045,
          duration: 1.15,
          ease: "sine.inOut",
          force3D: true,
        },
        1.7,
      );

      timeline.to(
        circle,
        {
          scale: 1.05,
          duration: 1.15,
          ease: "sine.inOut",
          force3D: true,
        },
        1.7,
      );

      /*
       * Full composition hold
       */
      timeline.to(
        {},
        {
          duration: 1.15,
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
          className="nextGear__background"
          aria-hidden="true"
        />

        <div
          ref={circleRef}
          className="nextGear__circle"
          aria-hidden="true"
        />

        <div
          ref={accentLeftRef}
          className="nextGear__speedAccent nextGear__speedAccent--left"
          aria-hidden="true"
        />

        <div
          ref={accentRightRef}
          className="nextGear__speedAccent nextGear__speedAccent--right"
          aria-hidden="true"
        />

        <div className="nextGear__wordStage">
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
        </div>

        <div
          ref={bikeRef}
          className="nextGear__bike"
        >
          <Image
            src={asset(
              "/images/bike/vantor-bike-front.png",
            )}
            alt="Vantor motorcycle front view"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 84vw, 42vw"
            className="nextGear__bikeImage"
          />
        </div>

        <div
          className="nextGear__ground"
          aria-hidden="true"
        />

      </div>
    </section>
  );
}