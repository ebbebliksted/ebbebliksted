import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import workImage1 from "@/assets/work-placeholder-1.png";
import workImage2 from "@/assets/work-placeholder-2.png";
import workImage3 from "@/assets/work-placeholder-3.png";
import workImage4 from "@/assets/work-placeholder-4.png";

const projects: Record<string, {
  title: string;
  year: string;
  image: string;
  description: string[];
  learnings: string[];
  skills: string[];
}> = {
  "urban-bloom": {
    title: "Urban Bloom",
    year: "2023",
    image: workImage1,
    description: [
      "Urban Bloom asks how design can strengthen the bond between city dwellers and the ecosystems around them. Using the Social Implication Design method, the project researched urban ecology, behavioural psychology and municipal systems to understand what stops Copenhageners from engaging with biodiversity close to home.",
      "The result is a mobile platform that gives citizens the legal right and practical means to turn neglected pavement, curb strips and traffic islands into small, biodiversity-friendly plantings — developed in dialogue with Copenhagen Municipality and validated through expert interviews and a narrative-based study.",
    ],
    learnings: [
      "Designing for behaviour change means designing the surrounding system — permissions, seed access and municipal process — not just the app.",
      "Grounding the concept in stakeholder interviews and literature before ideating kept the platform's rules realistic rather than aspirational.",
      "A concept this civic needs iteration: validation surfaced real feedback the current prototype doesn't yet fully address.",
    ],
    skills: ["Social Implication Design", "Stakeholder research", "Service design", "UX/UI prototyping", "Workshop facilitation"],
  },
  "metal-additive-manufacturing": {
    title: "Sustainable Metal Additive Manufacturing",
    year: "2026",
    image: workImage2,
    description: [
      "This thesis examines the sustainability of laser powder bed fusion (LPBF), a metal 3D-printing process increasingly used to produce injection-moulding inserts with complex, conformal cooling channels. Working with an industry partner's manufacturing team, the project combined a meta-analysis of existing research with a full cradle-to-grave Life Cycle Assessment of a production insert to identify where its environmental impact actually comes from.",
      "Based on the LCA, three improvement scenarios were developed and evaluated — relocating post-processing, substituting materials and lightweighting through topology optimisation — and tested for feasibility through interviews with the manufacturing team, weighing environmental gains against cost and organisational reality.",
    ],
    learnings: [
      "The printing step is often not the biggest contributor — post-processing and local energy mix can dominate a part's footprint more than the headline manufacturing technology.",
      "A Life Cycle Assessment only creates change if its recommendations are feasible for the team that has to implement them.",
      "Environmental improvements can trade off against each other — reducing one impact category sometimes increases another.",
    ],
    skills: ["Life Cycle Assessment", "Sustainability strategy", "Design Research Methodology", "Stakeholder interviews", "Industrial collaboration"],
  },
  "project-three": {
    title: "Project Three",
    year: "2024",
    image: workImage3,
    description: [
      "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    ],
    learnings: [
      "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      "Omnis voluptas assumenda est, omnis dolor repellendus temporibus autem quibusdam.",
      "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore.",
    ],
    skills: ["LCA & ESG reporting", "Product development", "Figma", "Workshop facilitation"],
  },
  "project-four": {
    title: "Project Four",
    year: "2023",
    image: workImage4,
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    ],
    learnings: [
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.",
    ],
    skills: ["Social innovation", "Qualitative research", "Cross-disciplinary collaboration"],
  },
};

export const Route = createFileRoute("/work/$projectId")({
  beforeLoad: ({ params }) => {
    if (!projects[params.projectId]) throw notFound();
  },
  head: ({ params }) => {
    const project = projects[params.projectId];
    return {
      meta: [
        { title: `${project?.title ?? "Project"} — Ebbe Bliksted` },
        { name: "description", content: `${project?.title ?? "Project"} by Ebbe Bliksted — description, learnings and skills.` },
        { property: "og:title", content: `${project?.title ?? "Project"} — Ebbe Bliksted` },
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
        <Link to="/" className="about-identity">
          <strong>Ebbe Bliksted</strong>
          <span>Cand.poly Design &amp; Innovation</span>
        </Link>
        <nav aria-label="Portfolio navigation">
          <Link to="/work">Selected work</Link>
          <a href="mailto:ebbeab@hotmail.com">Contact</a>
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
        </div>
      </section>

      <section className="about-section" aria-labelledby="project-learnings-heading">
        <div className="about-section-label"><span>02</span><h2 id="project-learnings-heading">Learnings</h2></div>
        <div className="project-body">
          <ul className="project-learnings">
            {project.learnings.map((learning) => <li key={learning.slice(0, 24)}>{learning}</li>)}
          </ul>
        </div>
      </section>

      <footer className="about-footer">
        <p>Next project</p>
        <Link to="/work/$projectId" params={{ projectId: nextId }}>{projects[nextId]!.title} <span aria-hidden="true">↗</span></Link>
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
