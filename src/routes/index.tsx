import { createFileRoute, Link } from "@tanstack/react-router";

import bigSun from "@/assets/BigSun.png.asset.json";
import books from "@/assets/Bogreolen.png.asset.json";
import designPark from "@/assets/DesignPark.png.asset.json";
import fitphone from "@/assets/Fitphone.png.asset.json";
import flexmover from "@/assets/Flexmover.png.asset.json";
import playbook from "@/assets/Mission_Lab_Playbook.png.asset.json";
import openBox from "@/assets/open_box.jpg.asset.json";
import orion from "@/assets/Orion.jpg.asset.json";
import packing from "@/assets/PACKING.png.asset.json";
import picture from "@/assets/Picture3.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ebbe Bliksted — Design & Innovation" },
      { name: "description", content: "Portfolio of Ebbe Bliksted, Cand.poly in Design & Innovation." },
      { property: "og:title", content: "Ebbe Bliksted — Design & Innovation" },
      { property: "og:description", content: "Portfolio of Ebbe Bliksted, Cand.poly in Design & Innovation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const fragments = [
  { src: bigSun.url, alt: "Interactive strength test at an outdoor event", className: "fragment fragment-sun" },
  { src: books.url, alt: "Book recommendation interface", className: "fragment fragment-books" },
  { src: designPark.url, alt: "Modular product display in an open container", className: "fragment fragment-park" },
  { src: fitphone.url, alt: "Technical drawing of a handheld product", className: "fragment fragment-fitphone" },
  { src: flexmover.url, alt: "Flexmover industrial transport concept", className: "fragment fragment-flex" },
  { src: playbook.url, alt: "Mission Lab playbook cover", className: "fragment fragment-playbook" },
  { src: openBox.url, alt: "Electronics prototype in an open enclosure", className: "fragment fragment-box" },
  { src: orion.url, alt: "Orion character model", className: "fragment fragment-orion" },
  { src: packing.url, alt: "Packaging simulation result", className: "fragment fragment-packing" },
  { src: picture.url, alt: "Mobile interface prototype tested outdoors", className: "fragment fragment-phone" },
];

function LandingPage() {
  return (
    <main className="landing-stage">
      <div className="collage" aria-hidden="true">
        {fragments.map((fragment, index) => (
          <figure className={fragment.className} key={fragment.src} style={{ "--delay": `${index * 0.12}s` } as React.CSSProperties}>
            <img src={fragment.src} alt="" draggable={false} />
          </figure>
        ))}
      </div>

      <Link to="/work" className="identity group" aria-label="Enter Ebbe Bliksted's portfolio">
        <h1>Ebbe Bliksted</h1>
        <p>Cand.poly Design &amp; Innovation</p>
        <span className="enter-label" aria-hidden="true">Enter portfolio <span>↗</span></span>
      </Link>

      <p className="edition">Selected works · 2026</p>
      <p className="location">Copenhagen, DK</p>
    </main>
  );
}