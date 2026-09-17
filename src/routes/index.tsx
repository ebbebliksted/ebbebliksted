import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, type CSSProperties } from "react";

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
  { src: bigSun.url, alt: "Interactive strength test at an outdoor event", className: "fragment fragment-sun", depth: 1 },
  { src: books.url, alt: "Book recommendation interface", className: "fragment fragment-books", depth: -0.7 },
  { src: designPark.url, alt: "Modular product display in an open container", className: "fragment fragment-park", depth: 0.8 },
  { src: fitphone.url, alt: "Technical drawing of a handheld product", className: "fragment fragment-fitphone", depth: -1.15 },
  { src: flexmover.url, alt: "Flexmover industrial transport concept", className: "fragment fragment-flex", depth: 0.65 },
  { src: playbook.url, alt: "Mission Lab playbook cover", className: "fragment fragment-playbook", depth: -0.85 },
  { src: openBox.url, alt: "Electronics prototype in an open enclosure", className: "fragment fragment-box", depth: 1.1 },
  { src: orion.url, alt: "Orion character model", className: "fragment fragment-orion", depth: -1 },
  { src: packing.url, alt: "Packaging simulation result", className: "fragment fragment-packing", depth: 0.9 },
  { src: picture.url, alt: "Mobile interface prototype tested outdoors", className: "fragment fragment-phone", depth: -0.6 },
];

function LandingPage() {
  const stageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;

    const items = Array.from(stage.querySelectorAll<HTMLElement>(".fragment"));
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let frame = 0;

    const animate = () => {
      current.x += (target.x - current.x) * 0.09;
      current.y += (target.y - current.y) * 0.09;

      items.forEach((item) => {
        const depth = Number(item.dataset.depth ?? 1);
        item.style.setProperty("--mouse-x", `${current.x * depth * 34}px`);
        item.style.setProperty("--mouse-y", `${current.y * depth * 25}px`);
      });

      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX / window.innerWidth - 0.5;
      target.y = event.clientY / window.innerHeight - 0.5;
    };
    const handlePointerLeave = () => {
      target.x = 0;
      target.y = 0;
    };

    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerleave", handlePointerLeave);
    frame = window.requestAnimationFrame(animate);

    return () => {
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main ref={stageRef} className="landing-stage">
      <div className="collage" aria-hidden="true">
        {fragments.map((fragment, index) => (
          <figure
            className={fragment.className}
            data-depth={fragment.depth}
            key={fragment.src}
            style={{ "--delay": `${index * 0.1}s` } as CSSProperties}
          >
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