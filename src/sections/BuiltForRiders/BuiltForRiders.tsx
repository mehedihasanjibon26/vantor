"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { asset } from "@/lib/asset";
import "./built-for-riders.css";

export default function BuiltForRiders() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const bikeRef = useRef<HTMLDivElement | null>(null);
  const horseRef = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);

  const builtRef = useRef<HTMLDivElement | null>(null);
  const forRef = useRef<HTMLDivElement | null>(null);
  const ridersRef = useRef<HTMLDivElement | null>(null);

  const statsRef = useRef<HTMLDivElement | null>(null);

  const statOneRef = useRef<HTMLSpanElement | null>(null);
  const statTwoRef = useRef<HTMLSpanElement | null>(null);
  const statThreeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const bike = bikeRef.current;
    const horse = horseRef.current;

    const eyebrow = eyebrowRef.current;

    const built = builtRef.current;
    const forWord = forRef.current;
    const riders = ridersRef.current;

    const stats = statsRef.current;

    const statOne = statOneRef.current;
    const statTwo = statTwoRef.current;
    const statThree = statThreeRef.current;

    if (
      !section ||
      !bike ||
      !horse ||
      !eyebrow ||
      !built ||
      !forWord ||
      !riders ||
      !stats ||
      !statOne ||
      !statTwo ||
      !statThree
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(bike, {
        x: "-30vw",
        y: "12vh",
        scale: 0.76,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(horse, {
        x: "-10vw",
        y: "3vh",
        scale: 0.94,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(eyebrow, {
        y: 24,
        autoAlpha: 0,
      });

      gsap.set([built, forWord, riders], {
        x: "12vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(stats, {
        y: 35,
        autoAlpha: 0,
      });

      statOne.textContent = "0";
      statTwo.textContent = "0";
      statThree.textContent = "0";

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
          duration: 0.22,
        },
      );

      timeline.to(
        bike,
        {
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.55,
          ease: "power3.out",
          force3D: true,
        },
        0.18,
      );

      timeline.to(
        horse,
        {
          x: 0,
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.05,
          ease: "power3.out",
          force3D: true,
        },
        1.48,
      );

      timeline.to(
        eyebrow,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.62,
          ease: "power2.out",
        },
        1.85,
      );

      timeline.to(
        built,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.72,
          ease: "power3.out",
          force3D: true,
        },
        2.05,
      );

      timeline.to(
        forWord,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.72,
          ease: "power3.out",
          force3D: true,
        },
        2.48,
      );

      timeline.to(
        riders,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.72,
          ease: "power3.out",
          force3D: true,
        },
        2.92,
      );

      timeline.to(
        horse,
        {
          x: "3vw",
          y: "-1vh",
          duration: 1.3,
          ease: "none",
          force3D: true,
        },
        2.55,
      );

      timeline.to(
        stats,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        3.5,
      );

      const statOneObject = { value: 0 };
      const statTwoObject = { value: 0 };
      const statThreeObject = { value: 0 };

      timeline.to(
        statOneObject,
        {
          value: 120,
          duration: 1.25,
          ease: "power2.out",
          onUpdate: () => {
            statOne.textContent = Math.round(
              statOneObject.value,
            ).toString();
          },
        },
        3.72,
      );

      timeline.to(
        statTwoObject,
        {
          value: 46,
          duration: 1.25,
          ease: "power2.out",
          onUpdate: () => {
            statTwo.textContent = Math.round(
              statTwoObject.value,
            ).toString();
          },
        },
        3.84,
      );

      timeline.to(
        statThreeObject,
        {
          value: 18,
          duration: 1.25,
          ease: "power2.out",
          onUpdate: () => {
            statThree.textContent = Math.round(
              statThreeObject.value,
            ).toString();
          },
        },
        3.96,
      );

      timeline.to(
        bike,
        {
          scale: 1.035,
          duration: 1.1,
          ease: "sine.inOut",
          force3D: true,
        },
        4.15,
      );

      timeline.to(
        horse,
        {
          scale: 1.03,
          duration: 1.1,
          ease: "sine.inOut",
          force3D: true,
        },
        4.15,
      );

      /*
       * Full completed visual hold
       */
      timeline.to(
        {},
        {
          duration: 1.25,
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
      className="builtRiders"
      id="riders"
      aria-label="Built For Riders"
    >
      <div className="builtRiders__sticky">

        <div
          className="builtRiders__background"
          aria-hidden="true"
        />

        <div
          ref={horseRef}
          className="builtRiders__horse"
          aria-hidden="true"
        >
          <Image
            src={asset(
              "/images/horse/vantor-dark-horse.png",
            )}
            alt=""
            fill
            unoptimized
            sizes="82vw"
            className="builtRiders__horseImage"
          />
        </div>

        <div
          ref={bikeRef}
          className="builtRiders__bike"
        >
          <div className="builtRiders__bikeFloat">
            <Image
              src={asset(
                "/images/bike/vantor-bike-angle-03.png",
              )}
              alt="Vantor motorcycle"
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 90vw, 64vw"
              className="builtRiders__bikeImage"
            />
          </div>
        </div>

        <div className="builtRiders__content">

          <div
            ref={eyebrowRef}
            className="builtRiders__eyebrow"
          >
            BUILT FOR THE ONES WHO PUSH FURTHER
          </div>

          <div className="builtRiders__headline">
            <div
              ref={builtRef}
              className="builtRiders__word"
            >
              BUILT
            </div>

            <div
              ref={forRef}
              className="builtRiders__word builtRiders__word--for"
            >
              FOR
            </div>

            <div
              ref={ridersRef}
              className="builtRiders__word"
            >
              RIDERS
            </div>
          </div>

          <div
            ref={statsRef}
            className="builtRiders__stats"
          >
            <div className="builtRiders__stat">
              <div className="builtRiders__statValue">
                <span ref={statOneRef}>0</span>
                <span className="builtRiders__statSuffix">
                  +
                </span>
              </div>

              <div className="builtRiders__statLabel">
                PERFORMANCE PARTS
              </div>
            </div>

            <div className="builtRiders__stat">
              <div className="builtRiders__statValue">
                <span ref={statTwoRef}>0</span>
                <span className="builtRiders__statSuffix">
                  +
                </span>
              </div>

              <div className="builtRiders__statLabel">
                RACE PROVEN BUILDS
              </div>
            </div>

            <div className="builtRiders__stat">
              <div className="builtRiders__statValue">
                <span ref={statThreeRef}>0</span>
                <span className="builtRiders__statSuffix">
                  K
                </span>
              </div>

              <div className="builtRiders__statLabel">
                RIDERS WORLDWIDE
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}