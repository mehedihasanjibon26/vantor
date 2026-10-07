"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import "./built-for-riders.css";

export default function BuiltForRiders() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const horseRef = useRef<HTMLDivElement | null>(null);

  const bikeRef = useRef<HTMLDivElement | null>(null);
  const bikeFloatRef = useRef<HTMLDivElement | null>(null);

  const eyebrowRef = useRef<HTMLDivElement | null>(null);
  const builtRef = useRef<HTMLDivElement | null>(null);
  const forRef = useRef<HTMLDivElement | null>(null);
  const ridersRef = useRef<HTMLDivElement | null>(null);

  const statsRef = useRef<HTMLDivElement | null>(null);

  const hpRef = useRef<HTMLSpanElement | null>(null);
  const weightRef = useRef<HTMLSpanElement | null>(null);
  const rpmRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const horse = horseRef.current;

    const bike = bikeRef.current;
    const bikeFloat = bikeFloatRef.current;

    const eyebrow = eyebrowRef.current;
    const built = builtRef.current;
    const forWord = forRef.current;
    const riders = ridersRef.current;

    const stats = statsRef.current;

    const hp = hpRef.current;
    const weight = weightRef.current;
    const rpm = rpmRef.current;

    if (
      !section ||
      !horse ||
      !bike ||
      !bikeFloat ||
      !eyebrow ||
      !built ||
      !forWord ||
      !riders ||
      !stats ||
      !hp ||
      !weight ||
      !rpm
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * =====================================================
       * INITIAL STATES
       * =====================================================
       */

      gsap.set(horse, {
        x: "-10vw",
        y: "3vh",
        scale: 0.94,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(bike, {
        x: "-30vw",
        y: "12vh",
        scale: 0.76,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(bikeFloat, {
        y: 0,
        rotation: 0,
        force3D: true,
      });

      gsap.set(eyebrow, {
        y: 26,
        autoAlpha: 0,
      });

      gsap.set(built, {
        x: "30vw",
        y: 26,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(forWord, {
        x: "34vw",
        y: 26,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(riders, {
        x: "38vw",
        y: 26,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(stats, {
        y: 34,
        autoAlpha: 0,
      });

      hp.textContent = "0";
      weight.textContent = "0";
      rpm.textContent = "0K+";

      const hpCounter = { value: 0 };
      const weightCounter = { value: 0 };
      const rpmCounter = { value: 0 };

      /*
       * =====================================================
       * BIKE FLOAT
       * =====================================================
       */

      const floatTween = gsap.to(bikeFloat, {
        y: -14,
        rotation: -0.55,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        paused: true,
        force3D: true,
      });

      /*
       * =====================================================
       * MASTER TIMELINE
       * =====================================================
       */

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",

          /*
           * More smoothing.
           */
          scrub: 2.2,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            if (self.progress > 0.42) {
              if (floatTween.paused()) {
                floatTween.play();
              }
            } else {
              if (!floatTween.paused()) {
                floatTween.pause();
              }

              gsap.set(bikeFloat, {
                y: 0,
                rotation: 0,
              });
            }
          },
        },
      });

      /*
       * =====================================================
       * OPENING HOLD
       * =====================================================
       */

      timeline.to(
        {},
        {
          duration: 0.22,
        },
      );

      /*
       * =====================================================
       * BIKE ARRIVES SLOWLY
       * =====================================================
       */

      timeline.to(
        bike,
        {
          x: 0,
          y: 0,

          scale: 1,

          autoAlpha: 1,

          duration: 1.55,

          ease: "power2.out",

          force3D: true,
        },
        0.18,
      );

      /*
       * Short hold after bike settles.
       */
      timeline.to(
        {},
        {
          duration: 0.28,
        },
      );

      /*
       * =====================================================
       * HORSE SHADOW ARRIVES
       * =====================================================
       */

      timeline.to(
        horse,
        {
          x: 0,
          y: 0,

          scale: 1,

          autoAlpha: 1,

          duration: 1.05,

          ease: "power2.out",

          force3D: true,
        },
        1.48,
      );

      /*
       * =====================================================
       * EYEBROW
       * =====================================================
       */

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

      /*
       * =====================================================
       * BUILT
       * =====================================================
       */

      timeline.to(
        built,
        {
          x: 0,
          y: 0,

          autoAlpha: 1,

          duration: 0.92,

          ease: "power3.out",

          force3D: true,
        },
        2.05,
      );

      /*
       * =====================================================
       * FOR
       * =====================================================
       */

      timeline.to(
        forWord,
        {
          x: 0,
          y: 0,

          autoAlpha: 1,

          duration: 0.92,

          ease: "power3.out",

          force3D: true,
        },
        2.48,
      );

      /*
       * =====================================================
       * RIDERS
       * =====================================================
       */

      timeline.to(
        riders,
        {
          x: 0,
          y: 0,

          autoAlpha: 1,

          duration: 0.95,

          ease: "power3.out",

          force3D: true,
        },
        2.92,
      );

      /*
       * =====================================================
       * HORSE PARALLAX
       * =====================================================
       */

      timeline.to(
        horse,
        {
          x: "2vw",
          y: "-1vh",

          scale: 1.045,

          duration: 1.4,

          ease: "sine.inOut",

          force3D: true,
        },
        2.55,
      );

      /*
       * =====================================================
       * STATS APPEAR
       * =====================================================
       */

      timeline.to(
        stats,
        {
          y: 0,

          autoAlpha: 1,

          duration: 0.72,

          ease: "power2.out",
        },
        3.5,
      );

      /*
       * =====================================================
       * COUNTERS
       * =====================================================
       */

      timeline.to(
        hpCounter,
        {
          value: 208,

          duration: 1.25,

          ease: "power1.out",

          onUpdate: () => {
            hp.textContent = Math.round(
              hpCounter.value,
            ).toString();
          },
        },
        3.72,
      );

      timeline.to(
        weightCounter,
        {
          value: 200,

          duration: 1.25,

          ease: "power1.out",

          onUpdate: () => {
            weight.textContent = Math.round(
              weightCounter.value,
            ).toString();
          },
        },
        3.84,
      );

      timeline.to(
        rpmCounter,
        {
          value: 14,

          duration: 1.25,

          ease: "power1.out",

          onUpdate: () => {
            rpm.textContent =
              `${Math.round(rpmCounter.value)}K+`;
          },
        },
        3.96,
      );

      /*
       * =====================================================
       * SUBTLE FINAL BIKE PUSH
       * =====================================================
       */

      timeline.to(
        bike,
        {
          scale: 1.025,
          x: "0.5vw",

          duration: 1.15,

          ease: "sine.inOut",

          force3D: true,
        },
        4.15,
      );

      /*
       * =====================================================
       * SUBTLE HORSE FINAL PUSH
       * =====================================================
       */

      timeline.to(
        horse,
        {
          x: "3vw",

          scale: 1.065,

          duration: 1.15,

          ease: "sine.inOut",

          force3D: true,
        },
        4.15,
      );

      /*
       * =====================================================
       * FINAL HOLD
       * =====================================================
       */

      timeline.to(
        {},
        {
          duration: 1.25,
        },
      );

      return () => {
        floatTween.kill();
      };
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
      aria-label="Built for Riders"
    >
      <div className="builtRiders__sticky">

        {/* BACKGROUND */}
        <div
          className="builtRiders__background"
          aria-hidden="true"
        >
          <div className="builtRiders__shape builtRiders__shape--one" />

          <div className="builtRiders__shape builtRiders__shape--two" />

          <div className="builtRiders__shape builtRiders__shape--three" />
        </div>

        {/* HORSE SHADOW */}
        <div
          ref={horseRef}
          className="builtRiders__horse"
          aria-hidden="true"
        >
          <Image
            src="/images/horse/vantor-dark-horse.png"
            alt=""
            fill
            unoptimized
            sizes="(max-width: 768px) 156vw, 82vw"
            className="builtRiders__horseImage"
          />
        </div>

        {/* BIKE */}
        <div
          ref={bikeRef}
          className="builtRiders__bike"
        >
          <div
            ref={bikeFloatRef}
            className="builtRiders__bikeFloat"
          >
            <Image
              src="/images/bike/vantor-bike-angle-03.png"
              alt="Vantor motorcycle"
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 95vw, 70vw"
              className="builtRiders__bikeImage"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="builtRiders__content">

          <div
            ref={eyebrowRef}
            className="builtRiders__eyebrow"
          >
            OPERATING ON LIMITS
          </div>

          <div className="builtRiders__headline">

            <div
              ref={builtRef}
              className="builtRiders__headlineLine"
            >
              BUILT
            </div>

            <div
              ref={forRef}
              className="builtRiders__headlineLine"
            >
              FOR
            </div>

            <div
              ref={ridersRef}
              className="builtRiders__headlineLine"
            >
              RIDERS
            </div>

          </div>

          {/* STATS */}
          <div
            ref={statsRef}
            className="builtRiders__stats"
          >
            <div className="builtRiders__stat">
              <span
                ref={hpRef}
                className="builtRiders__statValue"
              >
                0
              </span>

              <span className="builtRiders__statLabel">
                HP POWER
              </span>
            </div>

            <div className="builtRiders__stat">
              <span
                ref={weightRef}
                className="builtRiders__statValue"
              >
                0
              </span>

              <span className="builtRiders__statLabel">
                KG WEIGHT
              </span>
            </div>

            <div className="builtRiders__stat">
              <span
                ref={rpmRef}
                className="builtRiders__statValue"
              >
                0K+
              </span>

              <span className="builtRiders__statLabel">
                RPM
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}