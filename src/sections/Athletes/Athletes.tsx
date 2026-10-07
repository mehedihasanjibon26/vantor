"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { asset } from "@/lib/asset";
import "./athletes.css";

const athletes = [
  {
    name: "AXEL BLAZE",
    country: "UNITED STATES",
    image: "/images/athletes/axel-blaze.png",
  },
  {
    name: "NOVA DRIFT",
    country: "UNITED STATES",
    image: "/images/athletes/nova-drift.png",
  },
  {
    name: "OSCAR PIASKI",
    country: "UNITED STATES",
    image: "/images/athletes/oscar-piaski.png",
  },
  {
    name: "LUNA FLUX",
    country: "UNITED STATES",
    image: "/images/athletes/luna-flux.png",
  },
];

const topRow = [
  athletes[0],
  athletes[1],
  athletes[2],
  athletes[3],
  athletes[0],
];

const bottomRow = [
  athletes[3],
  athletes[2],
  athletes[0],
  athletes[1],
  athletes[3],
];

export default function Athletes() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const topRowRef = useRef<HTMLDivElement | null>(null);
  const bottomRowRef = useRef<HTMLDivElement | null>(null);

  const linesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const title = titleRef.current;
    const description = descriptionRef.current;

    const topRowElement = topRowRef.current;
    const bottomRowElement = bottomRowRef.current;

    const lines = linesRef.current;

    if (
      !section ||
      !title ||
      !description ||
      !topRowElement ||
      !bottomRowElement ||
      !lines
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(lines, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(title, {
        x: "-12vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(description, {
        y: 24,
        autoAlpha: 0,
      });

      gsap.set(topRowElement, {
        x: "12vw",
        y: 90,
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(bottomRowElement, {
        x: "-18vw",
        y: 120,
        autoAlpha: 0,
        force3D: true,
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
          duration: 0.18,
        },
      );

      timeline.to(
        lines,
        {
          scaleX: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        0.18,
      );

      timeline.to(
        title,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",
          force3D: true,
        },
        0.28,
      );

      timeline.to(
        description,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power2.out",
        },
        0.48,
      );

      timeline.to(
        topRowElement,
        {
          x: 0,
          y: 0,
          autoAlpha: 1,
          duration: 1.05,
          ease: "power3.out",
          force3D: true,
        },
        0.72,
      );

      timeline.to(
        bottomRowElement,
        {
          x: "-8vw",
          y: 0,
          autoAlpha: 1,
          duration: 1.05,
          ease: "power3.out",
          force3D: true,
        },
        0.92,
      );

      timeline.to(
        topRowElement,
        {
          x: "-22vw",
          duration: 2.4,
          ease: "none",
          force3D: true,
        },
        1.55,
      );

      timeline.to(
        bottomRowElement,
        {
          x: "10vw",
          duration: 2.4,
          ease: "none",
          force3D: true,
        },
        1.55,
      );

      /*
       * Full athlete composition hold
       */
      timeline.to(
        {},
        {
          duration: 0.9,
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
      className="athletes"
      id="athletes"
      aria-label="Our Athletes"
    >
      <div className="athletes__sticky">

        <div
          className="athletes__background"
          aria-hidden="true"
        />

        <div
          ref={linesRef}
          className="athletes__racingLines"
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
        </div>

        <div className="athletes__header">

          <div
            ref={titleRef}
            className="athletes__title"
          >
            <span className="athletes__slash">
              /
            </span>

            <span>
              OUR ATHLETES
            </span>
          </div>

          <p
            ref={descriptionRef}
            className="athletes__description"
          >
            Built for motion. Driven by people who push
            performance beyond the limit.
          </p>

        </div>

        <div className="athletes__rows">

          <div
            ref={topRowRef}
            className="athletes__row athletes__row--top"
          >
            {topRow.map((athlete, index) => (
              <AthleteCard
                key={`top-${athlete.name}-${index}`}
                athlete={athlete}
              />
            ))}
          </div>

          <div
            ref={bottomRowRef}
            className="athletes__row athletes__row--bottom"
          >
            {bottomRow.map((athlete, index) => (
              <AthleteCard
                key={`bottom-${athlete.name}-${index}`}
                athlete={athlete}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function AthleteCard({
  athlete,
}: {
  athlete: {
    name: string;
    country: string;
    image: string;
  };
}) {
  return (
    <article className="athletes__card">

      <div className="athletes__cardInner">

        <Image
          src={asset(athlete.image)}
          alt={athlete.name}
          fill
          unoptimized
          sizes="(max-width: 768px) 80vw, 30vw"
          className="athletes__image"
        />

        <div
          className="athletes__cardShade"
          aria-hidden="true"
        />

        <div className="athletes__cardInfo">

          <div className="athletes__country">
            {athlete.country}
          </div>

          <div className="athletes__name">
            {athlete.name}
          </div>

        </div>

      </div>

    </article>
  );
}