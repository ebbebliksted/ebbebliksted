import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Ebbe Bliksted" },
      { name: "description", content: "Selected design and innovation work by Ebbe Bliksted." },
      { property: "og:title", content: "Selected Work — Ebbe Bliksted" },
      { property: "og:description", content: "Selected design and innovation work by Ebbe Bliksted." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPlaceholder,
});

function WorkPlaceholder() {
  return (
    <main className="placeholder-page">
      <p className="placeholder-index">02 / 03</p>
      <h1>Selected work</h1>
      <p>Projects will live here soon.</p>
      <nav aria-label="Portfolio navigation">
        <Link to="/">Back</Link>
        <Link to="/about">Continue</Link>
      </nav>
    </main>
  );
}