"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation/Navigation";
import { gsap } from "@/lib/gsap";
import "./preloader.css";

export default function Preloader() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const bikeStageRef = useRef<HTMLDivElement | null>(null);
  const bikeMotionRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const rideRef = useRef<HTMLDivElement | null>(null);
  const dieRef = useRef<HTMLDivElement | null>(null);
  const darkTypeRef = useRef<HTMLDivElement | null>(null);

  const panelsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const bikeStage = bikeStageRef.current;
    const bike = bikeMotionRef.current;
    const nav = navRef.current;
    const ride = rideRef.current;
    const die = dieRef.current;
    const darkType = darkTypeRef.current;

    const panels = panelsRef.current.filter(Boolean);

    if (
      !section ||
      !logo ||
      !bikeStage ||
      !bike ||
      !nav ||
      !ride ||
      !die ||
      !darkType ||
      panels.length !== 6
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(logo, {
        autoAlpha: 1,
        scale: 1,
      });

      gsap.set(panels, {
        yPercent: 0,
      });

      const getBikeStartX = () => {
        const viewportWidth = window.innerWidth;
        const bikeWidth = bikeStage.offsetWidth;
        const stageLeft = (viewportWidth - bikeWidth) / 2;
        const desiredInitialLeft = -(bikeWidth * 0.76);

        return desiredInitialLeft - stageLeft;
      };

      gsap.set(bike, {
        x: getBikeStartX(),
        y: 0,
        scale: 1,
        rotation: 0,
        autoAlpha: 1,
      });

      gsap.set(nav, {
        y: -34,
        autoAlpha: 0,
      });

      gsap.set(ride, {
        x: -100,
        y: 20,
        autoAlpha: 0,
      });

      gsap.set(die, {
        x: 100,
        y: 20,
        autoAlpha: 0,
      });

      gsap.set(darkType, {
        y: "105vh",
        autoAlpha: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.4,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(
        {},
        {
          duration: 0.14,
        },
      );

      timeline.to(
        logo,
        {
          autoAlpha: 0,
          scale: 0.95,
          duration: 0.16,
          ease: "power2.inOut",
        },
        0.14,
      );

      timeline.to(
        bike,
        {
          x: 0,
          duration: 0.82,
          ease: "power2.out",
        },
        0.22,
      );

      timeline.to(
        panels[0],
        {
          yPercent: -125,
          duration: 0.78,
          ease: "power3.inOut",
        },
        0.25,
      );

      timeline.to(
        panels[1],
        {
          yPercent: 125,
          duration: 0.78,
          ease: "power3.inOut",
        },
        0.31,
      );

      timeline.to(
        panels[2],
        {
          yPercent: -125,
          duration: 0.78,
          ease: "power3.inOut",
        },
        0.37,
      );

      timeline.to(
        panels[3],
        {
          yPercent: 125,
          duration: 0.78,
          ease: "power3.inOut",
        },
        0.43,
      );

      timeline.to(
        panels[4],
        {
          yPercent: -125,
          duration: 0.78,
          ease: "power3.inOut",
        },
        0.49,
      );

      timeline.to(
        panels[5],
        {
          yPercent: 125,
          duration: 0.78,
          ease: "power3.inOut",
        },
        0.55,
      );

      timeline.to(
        nav,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.42,
          ease: "power3.out",
        },
        0.55,
      );

      /*
       * Giant dark TOR rises from outside
       * bottom-right of the hero.
       */
      timeline.to(
        darkType,
        {
          y: "-8vh",
          duration: 0.78,
          ease: "power2.out",
        },
        0.76,
      );

      /*
       * White words appear later.
       */
      timeline.to(
        ride,
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 0.42,
          ease: "power3.out",
        },
        1.02,
      );

      timeline.to(
        die,
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 0.42,
          ease: "power3.out",
        },
        1.20,
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const darkWord = ["T", "O", "R"];

  return (
    <section
      ref={sectionRef}
      className="preloader"
      aria-label="Vantor intro and hero"
    >
      <div className="preloader__sticky">
        <div className="preloader__hero">
          <div
            className="preloader__heroBackground"
            aria-hidden="true"
          >
            <div className="preloader__heroShape preloader__heroShape--left" />
            <div className="preloader__heroShape preloader__heroShape--center" />
            <div className="preloader__heroShape preloader__heroShape--right" />
          </div>

          <div
            ref={navRef}
            className="preloader__nav"
          >
            <Navigation />
          </div>

          <div
            ref={darkTypeRef}
            className="preloader__darkType"
            aria-hidden="true"
          >
            {darkWord.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className={`preloader__darkLetter preloader__darkLetter--${index + 1}`}
              >
                {letter}
              </span>
            ))}
          </div>

          <div
            ref={rideRef}
            className="preloader__heroWord preloader__heroWord--ride"
          >
            RIDE
          </div>

          <div
            ref={dieRef}
            className="preloader__heroWord preloader__heroWord--die"
          >
            DIE
          </div>

          <div
            ref={bikeStageRef}
            className="preloader__bikeStage"
          >
            <div
              ref={bikeMotionRef}
              className="preloader__bikeMotion"
            >
              <Image
                src="/images/bike/vantor-naked-bike.png"
                alt="Vantor naked motorcycle"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 88vw, 52vw"
                className="preloader__bikeImage"
              />
            </div>
          </div>

          <div
            className="preloader__roadShadow"
            aria-hidden="true"
          />

          <div
            className="preloader__contactShadow"
            aria-hidden="true"
          />
        </div>

        <div
          className="preloader__panels"
          aria-hidden="true"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              ref={(element) => {
                if (element) {
                  panelsRef.current[index] = element;
                }
              }}
              className={`preloader__panel preloader__panel--${index + 1}`}
            />
          ))}
        </div>

        <div
          ref={logoRef}
          className="preloader__logoWrap"
        >
          <div className="preloader__logoBox">
            <Image
              src="/images/vantor-logo.png"
              alt="Vantor"
              fill
              priority
              sizes="270px"
              className="preloader__logoImage"
            />
          </div>

          <div className="preloader__wordmark">
            VANTOR
          </div>
        </div>
      </div>
    </section>
  );
}