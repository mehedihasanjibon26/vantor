"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import "./new-drops.css";

const products = [
  {
    id: "01",
    name: "VANTOR VEST",
    price: "$130.00",
    image: "/images/athletes/vest-default.png",
  },
  {
    id: "02",
    name: "RACE SERIES",
    price: "$210.00",
    image: "/images/athletes/hoodie-default.png",
  },
  {
    id: "03",
    name: "STREET SHOE",
    price: "$160.00",
    image: "/images/athletes/shoe-default.png",
  },
  {
    id: "04",
    name: "RIDER GLOVE",
    price: "$70.00",
    image: "/images/athletes/glove-default.png",
  },
  {
    id: "05",
    name: "STREET SHOE",
    price: "$160.00",
    image: "/images/athletes/shoe-default.png",
  },
  {
    id: "06",
    name: "RIDER GLOVE",
    price: "$70.00",
    image: "/images/athletes/glove-default.png",
  },
  {
    id: "07",
    name: "VANTOR VEST",
    price: "$130.00",
    image: "/images/athletes/vest-default.png",
  },
  {
    id: "08",
    name: "RACE HOODIE",
    price: "$180.00",
    image: "/images/athletes/hoodie-default.png",
  },
];

export default function NewDrops() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const titleRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;

    const title = titleRef.current;
    const description = descriptionRef.current;

    const cards = cardsRef.current.filter(Boolean);

    if (
      !section ||
      !title ||
      !description ||
      cards.length !== products.length
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(title, {
        x: "-12vw",
        autoAlpha: 0,
        force3D: true,
      });

      gsap.set(description, {
        y: 28,
        autoAlpha: 0,
      });

      cards.forEach((card, index) => {
        gsap.set(card, {
          y: 120 + index * 8,
          autoAlpha: 0,
          scale: 0.95,
          force3D: true,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 2.1,
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
        title,
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: "power3.out",
          force3D: true,
        },
        0.22,
      );

      timeline.to(
        description,
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.75,
          ease: "power2.out",
        },
        0.5,
      );

      cards.forEach((card, index) => {
        timeline.to(
          card,
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.95,
            ease: "power3.out",
            force3D: true,
          },
          0.72 + index * 0.15,
        );
      });

      timeline.to(
        {},
        {
          duration: 1.3,
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
      className="newDrops"
      id="drops"
      aria-label="New Drops"
    >
      <div className="newDrops__sticky">

        <div
          className="newDrops__background"
          aria-hidden="true"
        />

        <div className="newDrops__topbar">

          <div
            ref={titleRef}
            className="newDrops__heading"
          >
            <span className="newDrops__headingSlash">
              /
            </span>

            <span>
              NEW DROPS
            </span>
          </div>

          <p
            ref={descriptionRef}
            className="newDrops__description"
          >
            Engineered for motion. Every drop is built with
            precision, performance, and a rider&apos;s mindset.
          </p>

        </div>

        <div className="newDrops__masonry">

          {products.map((product, index) => (
            <article
              key={product.id}
              ref={(element) => {
                if (element) {
                  cardsRef.current[index] = element;
                }
              }}
              className={`newDrops__card newDrops__card--${index + 1}`}
            >

              <span className="newDrops__cardNumber">
                {product.id}
              </span>

              <div className="newDrops__visual">

                <div className="newDrops__imageLayer newDrops__imageLayer--default">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    unoptimized
                    sizes="25vw"
                    className="newDrops__productImage"
                  />
                </div>

                <div className="newDrops__imageLayer newDrops__imageLayer--hover">
                  <Image
                    src="/images/athletes/rider-default.png"
                    alt=""
                    fill
                    unoptimized
                    sizes="25vw"
                    className="newDrops__riderImage"
                  />
                </div>

                <div
                  className="newDrops__redBackdrop"
                  aria-hidden="true"
                />

                <div
                  className="newDrops__halo"
                  aria-hidden="true"
                />

                <div
                  className="newDrops__redMist"
                  aria-hidden="true"
                />

              </div>

              <div className="newDrops__productBar">

                <span className="newDrops__productName">
                  {product.name}
                </span>

                <span className="newDrops__productPrice">
                  {product.price}
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}