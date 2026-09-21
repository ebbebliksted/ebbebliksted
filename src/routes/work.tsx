import { createFileRoute, Link } from "@tanstack/react-router";
import workImage1 from "@/assets/work-placeholder-1.png";
import workImage2 from "@/assets/work-placeholder-2.png";
import workImage3 from "@/assets/work-placeholder-3.png";
import workImage4 from "@/assets/work-placeholder-4.png";

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
  component: WorkPage,
});

const projects = [
  {
    image: workImage1,
    title: "Project One",
    year: "2026",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    image: workImage2,
    title: "Project Two",
    year: "2025",
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
  },
  {
    image: workImage3,
    title: "Project Three",
    year: "2024",
    text: "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  },
  {
    image: workImage4,
    title: "Project Four",
    year: "2023",
    text: "Id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
];

function WorkPage() {
  return (
    <main className="about-page work-page">
      <header className="about-header">
        <Link to="/" className="about-identity">
          <strong>Ebbe Bliksted</strong>
          <span>Cand.poly Design &amp; Innovation</span>
        </Link>
        <nav aria-label="Portfolio navigation">
          <Link to="/about">About</Link>
          <a href="mailto:ebbeab@hotmail.com">Contact</a>
        </nav>
      </header>

      <section className="work-intro" aria-labelledby="work-heading">
        <p className="about-kicker">Selected work · 2023—2026</p>
        <h1 id="work-heading">Selected work</h1>
      </section>

      <section className="work-list" aria-label="Projects">
        {projects.map((project, index) => (
          <article className="work-item" key={project.title}>
            <div className="work-media">
              <img src={project.image} alt={`Placeholder visual for ${project.title}`} width={1200} height={900} loading={index === 0 ? "eager" : "lazy"} />
            </div>
            <div className="work-meta">
              <p className="work-index">{String(index + 1).padStart(2, "0")} · {project.year}</p>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <a href="#" className="work-read-more" aria-label={`Read more about ${project.title}`}>Read more <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </section>

      <footer className="about-footer">
        <p>Get in touch · 2026</p>
        <a href="mailto:ebbeab@hotmail.com">ebbeab@hotmail.com <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}
