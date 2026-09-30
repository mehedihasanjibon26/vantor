export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "var(--vantor-black)",
        color: "var(--vantor-white)",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "clamp(56px, 12vw, 180px)",
          fontWeight: 900,
          letterSpacing: "-0.06em",
        }}
      >
        VANTOR
      </h1>
    </main>
  );
}