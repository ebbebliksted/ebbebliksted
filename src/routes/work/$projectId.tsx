import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import signatureNameTitle from "@/assets/signature-name-title.png";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/work/$projectId")({
  beforeLoad: ({ params }) => {
    if (!projects[params.projectId]) throw notFound();
  },
  head: ({ params }) => {
    const project = projects[params.projectId];
    return {
      meta: [
        { title: `${project?.title ?? "Project"} · Ebbe Bliksted` },
        { name: "description", content: `${project?.title ?? "Project"} by Ebbe Bliksted: description, learnings and skills.` },
        { property: "og:title", content: `${project?.title ?? "Project"} · Ebbe Bliksted` },
        { property: "og:description", content: `${project?.title ?? "Project"} by Ebbe Bliksted.` },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
  notFoundComponent: ProjectNotFound,
});

function ProjectPage() {
  const { projectId } = Route.useParams();
  const project = projects[projectId]!;
  const projectIds = Object.keys(projects);
  const index = projectIds.indexOf(projectId);
  const nextId = projectIds[(index + 1) % projectIds.length]!;

  return (
    <main className="about-page project-page">
      <header className="about-header">
        <Link to="/" className="about-identity" aria-label="Ebbe Bliksted, Cand.poly Design & Innovation — home">
          <img src={signatureNameTitle} alt="Ebbe Bliksted, Cand.poly Design & Innovation" className="about-identity-signature" />
        </Link>
        <nav aria-label="Portfolio navigation">
          <Link to="/work">Selected work</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="project-hero" aria-labelledby="project-heading">
        <p className="about-kicker">{String(index + 1).padStart(2, "0")} · {project.year}</p>
        <h1 id="project-heading">{project.title}</h1>
        <figure className="project-hero-media">
          <img src={project.image} alt={`Visual for ${project.title}`} width={1200} height={900} />
        </figure>
      </section>

      <section className="about-section" aria-labelledby="project-about-heading">
        <div className="about-section-label"><span>01</span><h2 id="project-about-heading">About the project</h2></div>
        <div className="project-body">
          {project.description.map((paragraph) => <p key={paragraph.slice(0, 24)}>{paragraph}</p>)}
          {project.download && (
            <p className="project-download">
              {project.download.text}{" "}
              <a href={project.download.href} target="_blank" rel="noopener noreferrer">{project.download.label}</a>
            </p>
          )}
        </div>
      </section>

      <section className="about-section" aria-labelledby="project-learnings-heading">
        <div className="about-section-label"><span>02</span><h2 id="project-learnings-heading">{project.learningsHeading ?? "Learnings"}</h2></div>
        <div className="project-body">
          {project.learningsAsProse ? (
            project.learnings.map((learning) => <p key={learning.slice(0, 24)}>{learning}</p>)
          ) : (
            <ul className="project-learnings">
              {project.learnings.map((learning) => <li key={learning.slice(0, 24)}>{learning}</li>)}
            </ul>
          )}
        </div>
      </section>

      {project.gallery && (
        <section className="about-section" aria-labelledby="project-gallery-heading">
          <div className="about-section-label"><span>03</span><h2 id="project-gallery-heading">Gallery</h2></div>
          <div className={`project-gallery${project.galleryLayout ? ` project-gallery--${project.galleryLayout}` : ""}`}>
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>
      )}

      <footer className="about-footer">
        <p>Next project</p>
        <Link to="/work/$projectId" params={{ projectId: nextId }}>{projects[nextId]!.title}</Link>
      </footer>
    </main>
  );
}

function ProjectNotFound() {
  return (
    <main className="placeholder-page">
      <p className="placeholder-index">404</p>
      <h1>Project not found</h1>
      <p>This project doesn’t exist yet.</p>
      <nav aria-label="Portfolio navigation">
        <Link to="/work">Back to work</Link>
      </nav>
    </main>
  );
}
