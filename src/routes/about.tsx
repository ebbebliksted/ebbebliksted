import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ebbe Bliksted" },
      { name: "description", content: "About Ebbe Bliksted, designer and innovation specialist." },
      { property: "og:title", content: "About — Ebbe Bliksted" },
      { property: "og:description", content: "About Ebbe Bliksted, designer and innovation specialist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPlaceholder,
});

function AboutPlaceholder() {
  return (
    <main className="placeholder-page">
      <p className="placeholder-index">03 / 03</p>
      <h1>About</h1>
      <p>This page is taking shape.</p>
      <nav aria-label="Portfolio navigation">
        <Link to="/work">Back</Link>
        <Link to="/">Start over</Link>
      </nav>
    </main>
  );
}