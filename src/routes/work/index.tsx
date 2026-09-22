import { createFileRoute, Link } from "@tanstack/react-router";
import urbanBloomImage from "@/assets/urban-bloom-phone.jpg.asset.json";
import thesisCoverImage from "@/assets/speciale-forside.jpg.asset.json";
import workImage3 from "@/assets/work-placeholder-3.png";
import workImage4 from "@/assets/work-placeholder-4.png";

export const Route = createFileRoute("/work/")({
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
    image: urbanBloomImage.url,
    title: "Urban Bloom",
    slug: "urban-bloom",
    year: "2023",
    text: "A bachelor thesis exploring how design can turn neglected urban plots into biodiversity. Urban Bloom is a mobile platform that lets citizens claim and green disused spaces, in collaboration with Copenhagen Municipality.",
  },
  {
    image: thesisCoverImage.url,
    title: "Sustainable Metal Additive Manufacturing",
    slug: "metal-additive-manufacturing",
    year: "2026",
    text: "A master's thesis investigating the environmental footprint of metal 3D-printed tooling for injection moulding, in collaboration with an industrial manufacturing partner.",
  },
  {
    image: workImage3,
    title: "Project Three",
    slug: "project-three",
    year: "2024",
    text: "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.",
  },
  {
    image: workImage4,
    title: "Project Four",
    slug: "project-four",
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
              <img src={project.image} alt={`Visual for ${project.title}`} width={1200} height={900} loading={index === 0 ? "eager" : "lazy"} />
            </div>
            <div className="work-meta">
              <p className="work-index">{String(index + 1).padStart(2, "0")} · {project.year}</p>
              <h2>{project.title}</h2>
              <p>{project.text}</p>
              <Link to="/work/$projectId" params={{ projectId: project.slug }} className="work-read-more" aria-label={`Read more about ${project.title}`}>Read more <span aria-hidden="true">↗</span></Link>
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
