import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import urbanBloomImage from "@/assets/urban-bloom-phone.jpg.asset.json";
import thesisCoverImage from "@/assets/speciale-forside.jpg";
import designParkHero from "@/assets/design-park-hero.png";
import designParkWorkshop from "@/assets/design-park-workshop.png";
import designParkPlatform from "@/assets/design-park-platform.png";
import designParkClassroom from "@/assets/design-park-classroom.png";
import legoClubHero from "@/assets/lego-club-5083.jpg";
import legoMinifigures from "@/assets/lego-minifigures-series-26.jpg";
import legoMinifiguresBox from "@/assets/lego-minifigures-series-26-box.png";
import missionLabCover from "@/assets/mission-lab-playbook-cover.png";
import missionLabFigure from "@/assets/mission-lab-figure.png";
import bigSunHero from "@/assets/big-sun-uv-tower.webp";
import bigSunElectronics from "@/assets/big-sun-electronics.jpg";
import bigSunInstalled from "@/assets/big-sun-installed.jpg";
import bigSunAppDemo from "@/assets/big-sun-app-demo.gif";
import mobiwagonScenario from "@/assets/mobiwagon-scenario.png";
import mobiwagonDetails from "@/assets/mobiwagon-details.png";
import mobiwagonTiltedRender from "@/assets/mobiwagon-tilted-render.png";
import mobiwagonSketch from "@/assets/mobiwagon-sketch.png";
import mobiwagonRemoteSketch from "@/assets/mobiwagon-remote-sketch.png";
import signatureNameTitle from "@/assets/signature-name-title.png";

const projects: Record<string, {
  title: string;
  year: string;
  image: string;
  description: string[];
  learnings: string[];
  learningsHeading?: string;
  learningsAsProse?: boolean;
  skills: string[];
  gallery?: { src: string; alt: string }[];
  galleryLayout?: "feature";
  download?: { text: string; href: string; label: string };
}> = {
  "metal-additive-manufacturing": {
    title: "Sustainable Metal Additive Manufacturing",
    year: "2026",
    image: thesisCoverImage,
    description: [
      "Metal additive manufacturing is an energy intensive process and the metal used often contains hazardous substances. However, metal 3d-printing is also a great tool for manufacturing shapes that otherwise wouldn’t be possible, which down the line could lead to more efficient production and perhaps also more sustainable production. This was the challenge, that led me to my thesis.",
      "My thesis looks at how production companies can leverage the positives of using 3d printed inserts for injection molding while limiting the environmental impacts of producing the molds. Together with the metal additive manufacturing team at LEGO my team and I conducted a Life Cycle Assessment (LCA) of their process, which highlighted the significant environmental impacts. Based on these results we proposed and quantified 3 different improvements scenarios which led to the development of an automated process that could save up to 8% of material.",
      "The scenarios were evaluated with members of different teams, weighing the environmental gains against cost and what’s realistic to change in a factory setting.",
    ],
    learningsHeading: "What I learned",
    learningsAsProse: true,
    learnings: [
      "Doing the project, I learned a lot about collecting data within a complex production setup. How much persistence and email it takes to get information from subcontractors.",
      "I also learnt a lot about the context of which large production companies base their decisions, and how LCA results play a part in their decision-making process. I also learnt a lot about communicating LCA results to an audience without prior experience in this field.",
    ],
    skills: ["Life Cycle Assessment", "Sustainability strategy", "Design Research Methodology", "Stakeholder interviews", "Industrial collaboration"],
  },
  "mission-lab-playbook": {
    title: "Mission Lab Playbook",
    year: "2025",
    image: missionLabCover,
    description: [
      "The Mission Lab Playbook is a working document about how ATV, the Danish Academy of Technical Sciences, works with mission-oriented innovation. I made it together with experts from a range of fields, including user involvement, futures studies, design and climate IT.",
      "My job was to take all that expert knowledge and turn it into something simple and quick to read, for people who want to work more mission-oriented when they develop new technology or new ways to use existing technology.",
    ],
    download: {
      text: "The playbook can be downloaded at:",
      href: "https://atv.dk/udgivelser-viden/mission-lab-playbook",
      label: "atv.dk/udgivelser-viden/mission-lab-playbook",
    },
    learningsHeading: "What I learned",
    learningsAsProse: true,
    learnings: [
      "This project was done In a collaboration with a group of practitioners within different fields. Condensing all their knowledge without losing context and still doing their deep knowledge justice required some tough redactional decisions.",
      "As a trained InDesign and Illustrator user it was tough creating the document within the constraints of Miro hurt a little in the beginning. But having a tool that is easily accessible to create changes in is great when it is a working document for a project where learnings and changes comes along often",
    ],
    skills: ["Editorial & information design", "Content strategy", "Stakeholder collaboration", "Mission-oriented innovation", "Facilitation"],
    gallery: [
      { src: missionLabFigure, alt: "A spread from the playbook contrasting traditional investment logic with mission-oriented logic" },
    ],
  },
  "design-park": {
    title: "DesignPark",
    year: "2024",
    image: designParkHero,
    description: [
      "Many Danish public schools don’t have access to digital fabrication tools, and some of those who do have trouble maintaining their machines, leaving them sitting collecting dust.",
      "The DesignPark project looks at how Danish public schools could get access without having to maintain the machines themselves. During the project my team and I moved between the engineering, system and product levels, combining desk research, 17 stakeholder interviews and co-creation workshops at two schools. The goal was to understand why donated 3D printers and laser cutters so often just sit unused. Turns out schools have the equipment, but not the maintenance knowledge, curriculum or time to actually use it.",
      "These problems is avoided by supplying everything in a container.  Schools book a visit, a facilitator and a ready-made STEM curriculum through a website, while DesignPark keeps ownership of the machines and stays responsible for them. We tested the concept through a real co-creation workshop at a primary school, a website prototype, a business model canvas and a cost and market analysis with multiple foundations interested in donating funds to the project.",
      "The project moved on as the start up Gnist Education",
    ],
    learningsHeading: "What I learned",
    learningsAsProse: true,
    learnings: [
      "Besides sharpening my 3d modelling skills, I learned a lot about project and stakeholder management. Collaborating with teachers, students, school and other organizations helped us sharpen the project and the value we could offer.",
      "The project was done as a part of a systems engineering course, and the many different aspects of this project taught me the importance of keeping everybody aligned and getting the individual pieces to work together",
    ],
    skills: ["Systems-level design (N-model)", "Stakeholder research & interviews", "Co-creation workshops", "Product-service system design", "CAD & prototyping", "Business modelling"],
    gallery: [
      { src: designParkWorkshop, alt: "The mobile makerspace prototype being built" },
      { src: designParkPlatform, alt: "The DesignPark booking platform for schools" },
      { src: designParkClassroom, alt: "A co-creation workshop with students at Hellerup Skole" },
    ],
  },
  "urban-bloom": {
    title: "Urban Bloom",
    year: "2023",
    image: urbanBloomImage.url,
    description: [
      "Urban Bloom looks at how design can strengthen the bond between urban citizens and the ecosystems around them. We used the Social Implication Design method to research urban ecology, behavioural psychology and municipal systems, to understand what actually stops Copenhageners from engaging with biodiversity close to home.",
      "The result is a mobile platform that gives citizens the legal right and the practical means to turn neglected pavement, curb strips and traffic islands into small, biodiversity-friendly plantings. A prototype was developed in Figma and presented to employees in the municipality and tested with potential users.",
    ],
    learnings: [
      "Designing for behaviour change means designing the whole system around it.",
      "Grounding the concept in stakeholder interviews and literature before starting  ideation kept the platform's rules realistic instead of just aspirational.",
      "Making a change this big to urban spaces and the way we interact with them needs a lot of stakeholder management.",
    ],
    skills: ["Social Implication Design", "Stakeholder research", "Service design", "UX/UI prototyping", "Workshop facilitation"],
  },
  "the-club": {
    title: "LEGO Element 5083: The Club",
    year: "2022",
    image: legoClubHero,
    description: [
      "During my internship on LEGO's element design team, I worked on Collectible Minifigures Series 25 and 26, mainly the prosthetic legs in Series 25 and Orion's club, element 5083, in Series 26. The club had to look like the club the greek god Orion is often depicted holding.  It should mould cleanly and meet the same durability and safety standards every LEGO element has to meet.",
      "I worked closely with creative leads, element leads and engineers, and took the piece all the way from early exploration sketches, through 3D sculpting in ZBrush and surface modelling in Rhino, to design for manufacturing.",
    ],
    learnings: [
      "When designing at a small scale all details matter. ",
      "Moving between ZBrush's organic sculpting and Rhino's precise surfacing taught me how to keep a design's character intact while making it manufacturable.",
      "Getting an element from concept to production is a collaborative effort. Creative intent only survives moulding, safety and cost constraints if you work closely with element leads and engineers along the way.",
    ],
    skills: ["3D sculpting (ZBrush)", "CAD modelling (Rhino)", "Design for manufacturing (DFM)", "Element/toy design", "Cross-functional collaboration"],
    gallery: [
      { src: legoMinifigures, alt: "Four Collectible Minifigures from Series 26, including Orion with the club" },
      { src: legoMinifiguresBox, alt: "The Collectible Minifigures Series 26 packaging" },
    ],
  },
  "big-sun-project": {
    title: "Big Sun Project",
    year: "2022",
    image: bigSunHero,
    description: [
      "Big Sun was a project for the course Design of Mechatronic Systems. The task was to design an IoT product that could help people adjust to life after the pandemic, and we decided to focus on reminding people to use sunscreen now that festivals were finally back.",
      "The result is a pole that measures and shows the UV level on the spot. People can also sign up to get a notification for when they should apply sunscreen, and we built an app that lets you check the UV index the pole is measuring from anywhere. The pole itself is a mix of 3D-printed, laser-cut and traditonally built parts, sensors and motors. It was exhibited in the DTU tent at Roskilde Festival 2022.",
    ],
    learnings: [
      "Plan for unstable internet!.",
      "Designing for a festival crowd.  The pole had to survive being poked, pointed at and rained on all week.",
      "Make it more interactive. A large pole that displays the UV index is more fun if the UV changes during the hours it is on display.",
    ],
    skills: ["IoT prototyping", "3D printing & laser cutting", "Sensor & motor integration", "App design", "Mechatronic systems"],
    gallery: [
      { src: bigSunElectronics, alt: "The pole's electronics, wired up on a breadboard and prototyping board before final assembly" },
      { src: bigSunInstalled, alt: "The finished UV pole installed and ready to go" },
      { src: bigSunAppDemo, alt: "The companion app showing the live UV index on a phone" },
    ],
  },
  "plasterboard-wagon-redesign": {
    title: "MOBIWAGON: Redesign of a Plasterboard Wagon",
    year: "2021",
    image: mobiwagonTiltedRender,
    description: [
      "This project was a redesign of Flexmover's wagon for moving plasterboards on construction sites. The boards are 90cm wide, but most interior doors are only 82cm, so movers were stuck taking boards off the wagon and carrying them through doorways by hand. That's heavy, awkward work, often done by one person alone on site.",
      "The vision was a wagon a single mover could load, drive through a standard door, tilt and unload without ever having to lift a board by hand. The final concept, MOBIWAGON, has a tiltable bed, a new wheel system with rollers for the final unload, mechanical arms with extension rods to steady the load, and a wireless remote control so the mover can steer the wagon through the doorway instead of pushing it.\u00a0",
    ],
    learnings: [
      "Quick simple cardboard prototypes works almost everytime",
      "Planning what needs to be done in CAD instead of just starting saves a lot of time.",
      "Henry Ford is bad at Asking Questions",
    ],
    skills: ["Product design", "CAD & mechanism design", "User research", "Ergonomics", "Concept development"],
    galleryLayout: "feature",
    gallery: [
      { src: mobiwagonScenario, alt: "The usage scenario for MOBIWAGON, showing a mover loading, driving through a door and unloading plasterboards solo" },
      { src: mobiwagonSketch, alt: "An early concept sketch of the tiltable wagon and its wireless remote" },
      { src: mobiwagonRemoteSketch, alt: "Sketches exploring the shape and button layout of the ergonomic remote control" },
      { src: mobiwagonDetails, alt: "Detail renders of MOBIWAGON loaded with a board, passing through a doorway and navigating between plasterboard panels" },
    ],
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
          <div className={`project-gallery${project.galleryLayout === "feature" ? " project-gallery--feature" : ""}`}>
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
