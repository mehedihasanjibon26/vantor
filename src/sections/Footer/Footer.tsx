"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import "./footer.css";

export default function Footer() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const linesRef = useRef<HTMLDivElement | null>(null);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLDivElement | null>(null);

  const brandRef = useRef<HTMLDivElement | null>(null);

  const statementRef = useRef<HTMLDivElement | null>(null);

  const leftRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  const giantVRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const lines = linesRef.current;
    const logo = logoRef.current;
    const eyebrow = eyebrowRef.current;

    const brand = brandRef.current;
    const statement = statementRef.current;

    const left = leftRef.current;
    const center = centerRef.current;
    const right = rightRef.current;

    const bottom = bottomRef.current;

    const giantV = giantVRef.current;

    if (
      !section ||
      !lines ||
      !logo ||
      !eyebrow ||
      !brand ||
      !statement ||
      !left ||
      !center ||
      !right ||
      !bottom ||
      !giantV
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      /*
       * INITIAL STATES
       */

      gsap.set(lines, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(giantV, {
        scale: 0.7,
        rotation: -8,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(logo, {
        y: 28,
        scale: 0.86,
        autoAlpha: 0,
      });

      gsap.set(eyebrow, {
        y: 20,
        autoAlpha: 0,
      });

      gsap.set(brand, {
        y: 90,
        scale: 0.88,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(statement, {
        y: 30,
        autoAlpha: 0,
      });

      gsap.set(left, {
        x: "-10vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(center, {
        y: 40,
        autoAlpha: 0,
      });

      gsap.set(right, {
        x: "10vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(bottom, {
        y: 25,
        autoAlpha: 0,
      });

      /*
       * MASTER TIMELINE
       */

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
          duration: 0.18,
        },
      );

      /*
       * RED LINES
       */

      timeline.to(
        lines,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        0.18,
      );

      /*
       * BACKGROUND V
       */

      timeline.to(
        giantV,
        {
          scale: 1,
          rotation: 0,
          autoAlpha: 1,
          duration: 1.3,
          ease: "power3.out",
          force3D: true,
        },
        0.3,
      );

      /*
       * LOGO
       */

      timeline.to(
        logo,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        0.5,
      );

      /*
       * EYEBROW
       */

      timeline.to(
        eyebrow,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        0.68,
      );

      /*
       * BIG VANTOR
       */

      timeline.to(
        brand,
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 1.1,
          ease: "power3.out",
          force3D: true,
        },
        0.85,
      );

      /*
       * STATEMENT
       */

      timeline.to(
        statement,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        1.18,
      );

      /*
       * FOOTER COLUMNS
       */

      timeline.to(
        left,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          force3D: true,
        },
        1.5,
      );

      timeline.to(
        center,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
        },
        1.62,
      );

      timeline.to(
        right,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          force3D: true,
        },
        1.74,
      );

      /*
       * BOTTOM LINE
       */

      timeline.to(
        bottom,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: "power2.out",
        },
        1.96,
      );

      /*
       * FINAL CINEMATIC PUSH
       */

      timeline.to(
        brand,
        {
          scale: 1.035,
          duration: 1.1,
          ease: "sine.inOut",
          force3D: true,
        },
        2.15,
      );

      timeline.to(
        giantV,
        {
          scale: 1.08,
          duration: 1.1,
          ease: "sine.inOut",
          force3D: true,
        },
        2.15,
      );

      /*
       * FINAL HOLD
       */

      timeline.to(
        {},
        {
          duration: 1.2,
        },
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="vantorFooter"
      id="footer"
    >
      <div className="vantorFooter__sticky">

        {/* BACKGROUND */}

        <div
          className="vantorFooter__background"
          aria-hidden="true"
        >
          <div className="vantorFooter__glow" />

          <div
            ref={giantVRef}
            className="vantorFooter__giantV"
          >
            V
          </div>
        </div>

        {/* RACING LINES */}

        <div
          ref={linesRef}
          className="vantorFooter__lines"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        {/* TOP AREA */}

        <div className="vantorFooter__hero">

          <div
            ref={logoRef}
            className="vantorFooter__logo"
          >
            <Image
              src="/images/vantor-logo.png"
              alt="Vantor"
              fill
              unoptimized
              sizes="100px"
              className="vantorFooter__logoImage"
            />
          </div>

          <div
            ref={eyebrowRef}
            className="vantorFooter__eyebrow"
          >
            ENGINEERED FOR THE LIMIT
          </div>

          <div
            ref={brandRef}
            className="vantorFooter__brand"
          >
            VANTOR
          </div>

          <div
            ref={statementRef}
            className="vantorFooter__statement"
          >
            BUILT FOR RIDERS WHO NEVER STOP MOVING.
          </div>

        </div>

        {/* FOOTER CONTENT */}

        <div className="vantorFooter__content">

          {/* LEFT */}

          <div
            ref={leftRef}
            className="vantorFooter__column vantorFooter__column--left"
          >
            <span className="vantorFooter__label">
              EXPLORE
            </span>

            <nav className="vantorFooter__nav">
              <a href="#">
                HOME
              </a>

              <a href="#gear">
                GEAR
              </a>

              <a href="#drops">
                NEW DROPS
              </a>

              <a href="#athletes">
                ATHLETES
              </a>
            </nav>
          </div>

          {/* CENTER */}

          <div
            ref={centerRef}
            className="vantorFooter__column vantorFooter__column--center"
          >
            <span className="vantorFooter__label">
              VANTOR / 2026
            </span>

            <div className="vantorFooter__motto">
              RIDE
              <br />
              BEYOND
              <br />
              LIMITS
            </div>
          </div>

          {/* RIGHT */}

          <div
            ref={rightRef}
            className="vantorFooter__column vantorFooter__column--right"
          >
            <span className="vantorFooter__label">
              FOLLOW
            </span>

            <div className="vantorFooter__social">
              <a href="#">
                INSTAGRAM
              </a>

              <a href="#">
                YOUTUBE
              </a>

              <a href="#">
                X / TWITTER
              </a>
            </div>

            <a
              href="mailto:ride@vantor.com"
              className="vantorFooter__mail"
            >
              RIDE@VANTOR.COM
            </a>
          </div>

        </div>

        {/* BOTTOM */}

        <div
          ref={bottomRef}
          className="vantorFooter__bottom"
        >
          <span>
            © 2026 VANTOR
          </span>

          <span>
            BUILT TO MOVE
          </span>

          <div className="vantorFooter__bottomLinks">
            <a href="#">
              PRIVACY
            </a>

            <a href="#">
              TERMS
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}