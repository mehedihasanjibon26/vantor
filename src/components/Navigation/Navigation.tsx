"use client";

import "./navigation.css";

export default function Navigation() {
  return (
    <header className="navigation">
      <a href="#" className="navigation__brand">
        VANTOR
      </a>

      <nav className="navigation__links" aria-label="Primary navigation">
        <a href="#machines">MACHINES</a>
        <a href="#gear">GEAR</a>
        <a href="#riders">RIDERS</a>
        <a href="#story">STORY</a>
      </nav>

      <a href="#shop" className="navigation__cta">
        SHOP
      </a>
    </header>
  );
}