import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import urbanBloomImage from "@/assets/urban-bloom-phone.jpg.asset.json";
import thesisCoverImage from "@/assets/speciale-forside.jpg";
import designParkHero from "@/assets/design-park-hero.png";
import legoClubHero from "@/assets/lego-club-5083.jpg";
import missionLabCover from "@/assets/mission-lab-playbook-cover.png";
import bigSunHero from "@/assets/big-sun-uv-tower.webp";
import signatureNameTitle from "@/assets/signature-name-title.png";

const projects: Record<string, {
  title: string;
  year: string;
  image: string;
  description: string[];
  learnings: string[];
  skills: string[];
}> = {
  "metal-additive-manufacturing": {
    title: "Sustainable Metal Additive Manufacturing",
    year: "2026",
    image: thesisCoverImage,
    description: [
      "My thesis looks at how sustainable laser powder bed fusion (LPBF) actually is. It's a metal 3D printing process that's increasingly used to make injection moulding inserts with complex cooling channels inside them. Together with an industry partner's manufacturing team, I combined a review of existing research with a full life cycle assessment of a real production insert, to find out where its environmental impact actually comes from.",
      "Based on the LCA I came up with three improvement scenarios: relocating post-processing, using different materials and lightweighting the part through topology optimisation. I tested how feasible each one was through interviews with the manufacturing team, weighing the environmental gains against cost and what's realistic to actually change in a factory.",
    ],
    learnings: [
      "The printing step usually isn't the biggest contributor. Post-processing and the local energy mix can matter more for a part's footprint than the headline manufacturing technology does.",
      "A Life Cycle Assessment only matters if the team that has to act on it can actually use the recommendations.",
      "Environmental improvements can work against each other. Reducing one impact category sometimes increases another.",
    ],
    skills: ["Life Cycle Assessment", "Sustainability strategy", "Design Research Methodology", "Stakeholder interviews", "Industrial collaboration"],
  },
  "mission-lab-playbook": {
    title: "Mission Lab Playbook",
    year: "2025",
    image: missionLabCover,
    description: [
      "The Mission Lab Playbook is a working document about how ATV, the Danish Academy of Technical Sciences, works with mission-oriented innovation. I made it together with experts from a range of fields, including user involvement, futures studies, design and climate IT.",
      "My job was to take all that expert knowledge and turn it into something simple and quick to read, for people who want to work more mission-oriented when they develop new technology.",
    ],
    learnings: [
      "Turning expert knowledge into something practitioners can use is its own design problem. The hard part isn't gathering the input, it's deciding what to cut so the format stays quick to read without losing what makes it useful.",
      "Working across fields as different as futures studies, design and climate IT meant finding a shared language and structure that didn't feel native to any of them, but was useful for all of them.",
      "A playbook only works if people actually pick it up. Getting the content right mattered, but so did making it quick to scan and easy to use as a reference.",
    ],
    skills: ["Editorial & information design", "Content strategy", "Stakeholder collaboration", "Mission-oriented innovation", "Facilitation"],
  },
  "design-park": {
    title: "DesignPark",
    year: "2024",
    image: designParkHero,
    description: [
      "DesignPark looks at how primary schools without their own makerspace could still get hands-on access to digital fabrication. I used the N-model to move between the engineering, system and product levels, combining desk research, 17 stakeholder interviews and co-creation workshops at two schools. The goal was to understand why donated 3D printers and laser cutters so often just sit unused. Turns out schools have the equipment, but not the maintenance knowledge, curriculum or time to actually use it.",
      "The result is a 20-foot container fitted out as a mobile makerspace. Schools book a visit, a facilitator and a ready-made STEM curriculum through a website, while DesignPark keeps ownership of the machines and stays responsible for them. I tested the concept through a real co-creation workshop at a primary school, a website prototype, a business model canvas and a cost and market analysis.",
    ],
    learnings: [
      "A good product isn't enough on its own. The real barrier between schools and digital fabrication was organisational, things like maintenance, curriculum and teacher confidence, not physical space or budget.",
      "Letting teachers co-design without also holding onto a clear point of view just gives you a compromise, not a good makerspace. One interviewee put it well: 'if teachers get to design the makerspace, it will be a bad makerspace.' That line stuck with the whole team.",
      "With eight people and 17 interviews, structured project management mattered just as much as the design work. Momentum only picked up once we made roles and delegation explicit.",
    ],
    skills: ["Systems-level design (N-model)", "Stakeholder research & interviews", "Co-creation workshops", "Product-service system design", "CAD & prototyping", "Business modelling"],
  },
  "urban-bloom": {
    title: "Urban Bloom",
    year: "2023",
    image: urbanBloomImage.url,
    description: [
      "Urban Bloom looks at how design can strengthen the bond between city dwellers and the ecosystems around them. I used the Social Implication Design method to research urban ecology, behavioural psychology and municipal systems, to understand what actually stops Copenhageners from engaging with biodiversity close to home.",
      "The result is a mobile platform that gives citizens the legal right and the practical means to turn neglected pavement, curb strips and traffic islands into small, biodiversity-friendly plantings. I developed it in dialogue with Copenhagen Municipality and validated it through expert interviews and a narrative-based study.",
    ],
    learnings: [
      "Designing for behaviour change means designing the whole system around it, permissions, seed access, municipal process, not just the app.",
      "Grounding the concept in stakeholder interviews and literature before I started ideating kept the platform's rules realistic instead of just aspirational.",
      "A concept this civic needs a lot of iteration. Validation surfaced real feedback that the current prototype doesn't fully address yet.",
    ],
    skills: ["Social Implication Design", "Stakeholder research", "Service design", "UX/UI prototyping", "Workshop facilitation"],
  },
  "the-club": {
    title: "LEGO Element 5083: The Club",
    year: "2022",
    image: legoClubHero,
    description: [
      "During my internship on LEGO's element design team, I worked on Collectible Minifigures Series 25 and 26, mainly the prosthetic legs in Series 25 and Orion's club, element 5083, in Series 26. The club had to look like a heavy, hero-scale weapon in the hand of a tiny minifigure, but still mould cleanly and meet the same durability and safety standards every LEGO element has to meet.",
      "I worked closely with creative leads, element leads and engineers, and took the piece all the way from early exploration sketches, through 3D sculpting in ZBrush and surface modelling in Rhino, to design for manufacturing.",
    ],
    learnings: [
      "Designing at minifigure scale is its own discipline. A silhouette has to stay readable and full of character in just a few centimetres, which is a very different constraint than product design at full scale.",
      "Moving between ZBrush's organic sculpting and Rhino's precise surfacing taught me how to keep a design's character intact while making it manufacturable.",
      "Getting an element from concept to production is a team sport. Creative intent only survives moulding, safety and cost constraints if you work closely with element leads and engineers along the way.",
    ],
    skills: ["3D sculpting (ZBrush)", "CAD modelling (Rhino)", "Design for manufacturing (DFM)", "Element/toy design", "Cross-functional collaboration"],
  },
  "big-sun-project": {
    title: "Big Sun Project",
    year: "2022",
    image: bigSunHero,
    description: [
      "Big Sun was a project for the course Design of Mechatronic Systems. The task was to design an IoT product that could help people adjust to life after the pandemic, and we decided to focus on reminding people to use sunscreen now that festivals were finally back.",
      "The result is a pole that measures and shows the UV level on the spot. People can also sign up to get a notification for when they should reapply sunscreen, and we built an app that lets you check the UV index the pole is measuring from anywhere. The pole itself is a mix of 3D-printed and laser-cut parts, sensors and motors. It was exhibited in the DTU tent at Roskilde Festival 2022.",
    ],
    learnings: [
      "An IoT product like this is really three things that have to work together: the physical pole, the notification service and the app. Getting the hardware right wasn't enough on its own.",
      "Designing for a festival crowd is different from designing for a lab. The pole had to survive being poked, pointed at and rained on all week, not just work once in a demo.",
      "Mixing 3D-printed parts, laser-cut parts, sensors and motors in one build meant a lot of the actual work was in getting those pieces to fit and talk to each other, not just in the individual parts themselves.",
    ],
    skills: ["IoT prototyping", "3D printing & laser cutting", "Sensor & motor integration", "App design", "Mechatronic systems"],
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
