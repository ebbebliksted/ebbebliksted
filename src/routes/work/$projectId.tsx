import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import urbanBloomImage from "@/assets/urban-bloom-phone.jpg.asset.json";
import thesisCoverImage from "@/assets/speciale-forside.jpg";
import designParkHero from "@/assets/design-park-hero.png";
import legoClubHero from "@/assets/lego-club-5083.jpg";
import missionLabCover from "@/assets/mission-lab-playbook-cover.png";

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
    image: urbanBloomImage.url,
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
    image: thesisCoverImage,
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
  "design-park": {
    title: "DesignPark",
    year: "2024",
    image: designParkHero,
    description: [
      "DesignPark asks how primary schools without a makerspace of their own could get hands-on access to digital fabrication. Using the N-model, the project moved between the engineering, complex-system and artefact levels — combining desk research, 17 stakeholder interviews and co-creation workshops at two schools to understand why donated 3D printers and laser cutters so often sit unused: schools have the equipment, but not the maintenance know-how, curriculum or time.",
      "The result is a 20-foot container fitted out as a mobile makerspace, paired with a product-service system: schools book a visit, a facilitator and ready-made STEM curriculum through a website, while DesignPark keeps ownership of — and responsibility for — the machines. The concept was tested through a real co-creation workshop at a primary school, a website prototype, a business model canvas, and a cost and market analysis.",
    ],
    learnings: [
      "A good artefact isn't enough — the real barrier between schools and digital fabrication was organisational (maintenance, curriculum, teacher confidence), not physical space or budget.",
      "Letting teachers co-design without also holding a clear point of view produces a compromise, not a good makerspace — one interviewee's line, 'if teachers get to design the makerspace, it will be a bad makerspace,' stuck with the team.",
      "With eight people and 17 interviews, structured project management mattered as much as the design work — momentum only picked up once roles and delegation were made explicit.",
    ],
    skills: ["Systems-level design (N-model)", "Stakeholder research & interviews", "Co-creation workshops", "Product-service system design", "CAD & prototyping", "Business modelling"],
  },
  "the-club": {
    title: "LEGO Element 5083 — The Club",
    year: "2022",
    image: legoClubHero,
    description: [
      "During an internship on LEGO's element design team, I worked on Collectible Minifigures Series 25 & 26 — mainly the prosthetic legs in Series 25, and Orion's club, element 5083, in Series 26. The club needed to read as a heavy, hero-scale weapon in the hand of a tiny minifigure, while still moulding cleanly and holding up to the durability and safety standards every LEGO element has to meet.",
      "I worked closely with creative leads, element leads and engineers, taking the piece from ideation and exploration sketches through 3D sculpting in ZBrush and precise surface modelling in Rhino, all the way to design for manufacturing.",
    ],
    learnings: [
      "Designing at minifigure scale is its own discipline — a silhouette has to stay readable and characterful in a few centimetres, which is a very different constraint than product design at full scale.",
      "Moving between ZBrush's organic sculpting and Rhino's precise surfacing taught me how to keep a design's character intact while making it manufacturable.",
      "Getting an element from concept to production is a team sport — creative intent only survives contact with moulding, safety and cost constraints through close collaboration with element leads and engineers.",
    ],
    skills: ["3D sculpting (ZBrush)", "CAD modelling (Rhino)", "Design for manufacturing (DFM)", "Element/toy design", "Cross-functional collaboration"],
  },
  "mission-lab-playbook": {
    title: "Mission Lab Playbook",
    year: "2025",
    image: missionLabCover,
    description: [
      "The Mission Lab Playbook is a working document that describes how ATV — the Danish Academy of Technical Sciences — works with mission-oriented innovation. It was made in collaboration with experts across a range of fields, including user involvement, futures studies, design and climate IT.",
      "My role was to condense that large body of expert knowledge into a format that's simple to understand and quick to read for people who want to work more mission-oriented when developing technology.",
    ],
    learnings: [
      "Distilling expert knowledge for practitioners is its own design problem — the hard part isn't gathering the input, it's deciding what to cut so the format stays quick to read without losing what makes it useful.",
      "Working across fields as different as futures studies, design and climate IT meant finding a shared vocabulary and structure that felt native to none of them and useful to all of them.",
      "A playbook only works if people actually pick it up — designing for scannability and quick reference mattered as much as getting the content right.",
    ],
    skills: ["Editorial & information design", "Content strategy", "Stakeholder collaboration", "Mission-oriented innovation", "Facilitation"],
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
