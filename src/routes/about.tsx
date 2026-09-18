import { createFileRoute, Link } from "@tanstack/react-router";
import portraitAsset from "@/assets/profilbillede.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ebbe Bliksted" },
      { name: "description", content: "About Ebbe Bliksted, designer and innovation specialist." },
      { property: "og:title", content: "About — Ebbe Bliksted" },
      { property: "og:description", content: "About Ebbe Bliksted, designer and innovation specialist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const experience = [
  {
    years: "2024—2026",
    role: "Student Assistant",
    place: "ATV — Danish Academy of Technical Sciences",
    text: "Developed and facilitated cross-disciplinary Mission Labs connecting universities, companies and public authorities. Translated qualitative and quantitative insights into analyses, reports, recommendations and decision material.",
  },
  {
    years: "2023",
    role: "Teaching Assistant",
    place: "Technical University of Denmark",
    text: "Supported students in the course Design Thinking & Sociotechnical Systems and guided sociotechnical design projects.",
  },
  {
    years: "2022",
    role: "Element Designer",
    place: "The LEGO Group",
    text: "Developed new LEGO elements from early ideas to engineering handover, gaining practical experience in maturing concepts for production.",
  },
  {
    years: "2022",
    role: "Student Assistant",
    place: "Ready2LOOP",
    text: "Worked with communication and project support for a circular economy research initiative.",
  },
];

const skills = ["Design thinking", "Workshop facilitation", "LCA & ESG reporting", "Product development", "Social innovation", "Cross-disciplinary collaboration", "Partnership development", "Project management"];
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
        <h1 id="about-heading">I design products, systems and collaborations for complex challenges.</h1>
        <p className="about-lead">I’m a newly graduated design engineer from DTU with a strong methodological toolkit spanning design thinking, product development and qualitative research. Through more than two years at the think tank ATV, I have facilitated cross-disciplinary innovation across public authorities, universities and companies.</p>
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
              <div><h3>{item.role}</h3><p className="experience-place">{item.place}</p><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="education-heading">
        <div className="about-section-label"><span>02</span><h2 id="education-heading">Education</h2></div>
        <div className="education-grid">
          <article><p>2024—2026</p><h3>MSc Design &amp; Innovation</h3><span>Technical University of Denmark</span><p>Sustainable products, systems and services. Thesis on life cycle analysis and sustainability improvements for metal 3D-printed injection mould inserts.</p></article>
          <article><p>2025</p><h3>Industrial Engineering &amp; Technology Management</h3><span>POSTECH · South Korea</span><p>International exchange at Pohang University of Science and Technology.</p></article>
          <article><p>2020—2023</p><h3>BSc Design &amp; Innovation</h3><span>Technical University of Denmark</span><p>User-centred design and social innovation. Bachelor project on sociotechnical design and biodiversity in Copenhagen.</p></article>
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