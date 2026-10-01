import { createFileRoute, Link } from "@tanstack/react-router";
import signatureNameTitle from "@/assets/signature-name-title.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Ebbe Bliksted" },
      { name: "description", content: "Get in touch with Ebbe Bliksted by email or phone." },
      { property: "og:title", content: "Contact · Ebbe Bliksted" },
      { property: "og:description", content: "Get in touch with Ebbe Bliksted by email or phone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="about-page contact-page">
      <header className="about-header">
        <Link to="/" className="about-identity" aria-label="Ebbe Bliksted, Cand.poly Design & Innovation — home">
          <img src={signatureNameTitle} alt="Ebbe Bliksted, Cand.poly Design & Innovation" className="about-identity-signature" />
        </Link>
        <nav aria-label="Portfolio navigation">
          <Link to="/about">About</Link>
          <Link to="/work">Selected work</Link>
        </nav>
      </header>

      <section className="contact-intro" aria-labelledby="contact-heading">
        <p className="about-kicker">Contact · Copenhagen</p>
        <h1 id="contact-heading">Let's talk</h1>
        <p className="about-lead">Slide in my DM's.</p>
        <div className="contact-links">
          <a href="mailto:ebbeab@hotmail.com">ebbeab@hotmail.com</a>
          <a href="tel:+4521496615">+45 21 49 66 15</a>
        </div>
      </section>

      <footer className="about-footer"><p>Selected works · 2026</p><Link to="/work">Explore the work</Link></footer>
    </main>
  );
}
