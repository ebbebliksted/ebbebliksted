import { createFileRoute, Link } from "@tanstack/react-router";
import urbanBloomImage from "@/assets/urban-bloom-phone.jpg.asset.json";
import thesisCoverImage from "@/assets/speciale-forside.jpg";
import designParkHero from "@/assets/design-park-hero.png";
import legoClubHero from "@/assets/lego-club-5083.jpg";
import missionLabCover from "@/assets/mission-lab-playbook-cover.png";
import bigSunHero from "@/assets/big-sun-uv-tower.webp";
import signatureNameTitle from "@/assets/signature-name-title.png";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work · Ebbe Bliksted" },
      { name: "description", content: "Selected design and innovation work by Ebbe Bliksted." },
      { property: "og:title", content: "Selected Work · Ebbe Bliksted" },
      { property: "og:description", content: "Selected design and innovation work by Ebbe Bliksted." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    image: thesisCoverImage,
    title: "Sustainable Metal Additive Manufacturing",
    slug: "metal-additive-manufacturing",
    year: "2026",
    text: "My master's thesis on the environmental footprint of metal 3D printed tooling for injection moulding, done in collaboration with an industrial manufacturing partner.",
  },
  {
    image: missionLabCover,
    title: "Mission Lab Playbook",
    slug: "mission-lab-playbook",
    year: "2025",
    text: "A working document I made for ATV, the Danish Academy of Technical Sciences, about mission-oriented innovation. I took input from experts in user involvement, futures studies, design and climate IT and turned it into a playbook that's quick to read and actually use.",
  },
  {
    image: designParkHero,
    title: "DesignPark",
    slug: "design-park",
    year: "2024",
    text: "A systems-design project about DesignPark, a mobile makerspace in a shipping container that brings 3D printers and laser cutters directly to primary schools, together with a booking platform and a ready-made curriculum.",
  },
  {
    image: urbanBloomImage.url,
    title: "Urban Bloom",
    slug: "urban-bloom",
    year: "2023",
    text: "My bachelor thesis on how design can turn neglected urban plots into biodiversity. Urban Bloom is a mobile platform where citizens can claim and green disused spaces, made in collaboration with Copenhagen Municipality.",
  },
  {
    image: legoClubHero,
    title: "LEGO Element 5083: The Club",
    slug: "the-club",
    year: "2022",
    text: "During my internship on LEGO's element design team, I designed Orion's club, element 5083, for Collectible Minifigures Series 26. Took it all the way from the first sculpt to a part that could actually be moulded.",
  },
  {
    image: bigSunHero,
    title: "Big Sun Project",
    slug: "big-sun-project",
    year: "2022",
    text: "An IoT pole built for the course Design of Mechatronic Systems that measures and shows UV levels, reminding festival-goers to put sunscreen on. Exhibited in the DTU tent at Roskilde Festival 2022.",
  },
];

function WorkPage() {
  return (
    <main className="about-page work-page">
      <header className="about-header">
        <Link to="/" className="about-identity" aria-label="Ebbe Bliksted, Cand.poly Design & Innovation — home">
          <img src={signatureNameTitle} alt="Ebbe Bliksted, Cand.poly Design & Innovation" className="about-identity-signature" />
        </Link>
        <nav aria-label="Portfolio navigation">
          <Link to="/about">About</Link>
          <a href="mailto:ebbeab@hotmail.com">Contact</a>
        </nav>
      </header>

      <section className="work-intro" aria-labelledby="work-heading">
        <p className="about-kicker">Selected work · 2022-2026</p>
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
