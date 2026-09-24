import { createFileRoute, Link } from "@tanstack/react-router";
import portraitAsset from "@/assets/profilbillede.jpg.asset.json";
import atvLogo from "@/assets/logos/atv.svg";
import dtuLogo from "@/assets/logos/dtu.svg";
import legoLogo from "@/assets/logos/lego.svg";
import ready2loopLogo from "@/assets/logos/ready2loop.svg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Ebbe Bliksted" },
      { name: "description", content: "About Ebbe Bliksted, designer and innovation specialist." },
      { property: "og:title", content: "About · Ebbe Bliksted" },
      { property: "og:description", content: "About Ebbe Bliksted, designer and innovation specialist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const experience = [
  {
    years: "2024-2026",
    role: "Student Assistant",
    place: "ATV, Danish Academy of Technical Sciences",
    logo: atvLogo,
    text: "I develop and run Mission Labs where people from universities, companies and public authorities work on the same problem together. I also turn what comes out of it into analyses, reports and recommendations that people can actually use.",
  },
  {
    years: "2023",
    role: "Teaching Assistant",
    place: "Technical University of Denmark",
    logo: dtuLogo,
    text: "Helped students through the course Design Thinking & Sociotechnical Systems and guided their design projects.",
  },
  {
    years: "2022",
    role: "Element Designer",
    place: "The LEGO Group",
    logo: legoLogo,
    text: "Worked on new LEGO elements from the first sketches all the way to engineering handover, and learned a lot about what it actually takes to get a concept ready for production.",
  },
  {
    years: "2022",
    role: "Student Assistant",
    place: "Ready2LOOP",
    logo: ready2loopLogo,
    text: "Helped with communication and general project support for a research project on circular economy.",
  },
];

const skills = ["Design thinking", "Workshop facilitation", "LCA & ESG reporting", "Product development", "Social innovation", "Cross-disciplinary collaboration", "Partnership development", "Project management", "3D modelling"];
const tools = ["Figma", "Excel", "SimaPro", "Creo", "Fusion 360"];

function AboutPage() {
  return (
    <main className="about-page">
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

      <section className="about-intro" aria-labelledby="about-heading">
        <p className="about-kicker">About · Copenhagen</p>
        <figure className="about-portrait">
          <img src={portraitAsset.url} alt="Portrait of Ebbe Bliksted" width={800} height={1000} />
        </figure>
        <h1 id="about-heading">I design products, systems and collaborations for complex problems.</h1>
        <p className="about-lead">I'm fresh out of DTU with a degree in Design & Innovation, and more than two years of experience from the think tank ATV, where my job has been to bring very different people together and help them find real solutions to big societal challenges. I like design thinking, product development and understanding what people actually need, and I'm still very much in the mood to keep learning.</p>
        <div className="about-contact">
          <a href="mailto:ebbeab@hotmail.com">ebbeab@hotmail.com</a>
          <a href="tel:+4521496615">+45 21 49 66 15</a>
        </div>
      </section>

      <section className="about-section" aria-labelledby="experience-heading">
        <div className="about-section-label"><span>01</span><h2 id="experience-heading">Experience</h2></div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-item" key={`${item.role}-${item.place}`}>
              <p className="experience-years">{item.years}</p>
              <div>
                <div className="experience-org">
                  <img src={item.logo} alt="" className="experience-logo" />
                  <div><h3>{item.role}</h3><p className="experience-place">{item.place}</p></div>
                </div>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="education-heading">
        <div className="about-section-label"><span>02</span><h2 id="education-heading">Education</h2></div>
        <div className="education-grid">
          <article><p>2024-2026</p><h3>MSc Design &amp; Innovation</h3><span>Technical University of Denmark</span><p>Focused on sustainable products, systems and services. My thesis looked at life cycle analysis and sustainability improvements for metal 3D printed injection mould inserts.</p></article>
          <article><p>2025</p><h3>Industrial Engineering &amp; Technology Management</h3><span>POSTECH · South Korea</span><p>Exchange semester at Pohang University of Science and Technology.</p></article>
          <article><p>2020-2023</p><h3>BSc Design &amp; Innovation</h3><span>Technical University of Denmark</span><p>Focused on user-centred design and social innovation. My bachelor project was about sociotechnical design and biodiversity in Copenhagen.</p></article>
        </div>
      </section>

      <section className="about-section about-capabilities" aria-labelledby="skills-heading">
        <div className="about-section-label"><span>03</span><h2 id="skills-heading">Capabilities</h2></div>
        <div><ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul><p className="tools-label">Tools</p><p className="tools-list">{tools.join(" · ")}</p></div>
      </section>

      <footer className="about-footer"><p>Selected works · 2026</p><Link to="/work">Explore the work <span aria-hidden="true">↗</span></Link></footer>
    </main>
  );
}