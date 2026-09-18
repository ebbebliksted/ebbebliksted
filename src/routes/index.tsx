import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";

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
  { src: bigSun.url, alt: "Interactive strength test at an outdoor event", className: "fragment fragment-sun", depth: 1, exit: "-75vw, -65vh" },
  { src: books.url, alt: "Book recommendation interface", className: "fragment fragment-books", depth: -0.7, exit: "-80vw, 70vh" },
  { src: designPark.url, alt: "Modular product display in an open container", className: "fragment fragment-park", depth: 0.8, exit: "75vw, -70vh" },
  { src: fitphone.url, alt: "Technical drawing of a handheld product", className: "fragment fragment-fitphone", depth: -1.15, exit: "-75vw, 5vh" },
  { src: flexmover.url, alt: "Flexmover industrial transport concept", className: "fragment fragment-flex", depth: 0.65, exit: "80vw, 70vh" },
  { src: playbook.url, alt: "Mission Lab playbook cover", className: "fragment fragment-playbook", depth: -0.85, exit: "5vw, -85vh" },
  { src: openBox.url, alt: "Electronics prototype in an open enclosure", className: "fragment fragment-box", depth: 1.1, exit: "-10vw, 90vh" },
  { src: orion.url, alt: "Orion character model", className: "fragment fragment-orion", depth: -1, exit: "85vw, -5vh" },
  { src: packing.url, alt: "Packaging simulation result", className: "fragment fragment-packing", depth: 0.9, exit: "75vw, 55vh" },
  { src: picture.url, alt: "Mobile interface prototype tested outdoors", className: "fragment fragment-phone", depth: -0.6, exit: "-55vw, 80vh" },
];

function LandingPage() {
  const stageRef = useRef<HTMLElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !window.matchMedia("(pointer: fine)").matches) return;

    const items = Array.from(stage.querySelectorAll<HTMLElement>(".fragment")).map((el) => ({ el, zoom: 0 }));
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let pointerX = -Infinity;
    let pointerY = -Infinity;
    let frame = 0;

    const animate = () => {
      current.x += (target.x - current.x) * 0.09;
      current.y += (target.y - current.y) * 0.09;

      items.forEach((item) => {
        const depth = Number(item.el.dataset["depth"] ?? 1);
        item.el.style.setProperty("--mouse-x", `${current.x * depth * 34}px`);
        item.el.style.setProperty("--mouse-y", `${current.y * depth * 25}px`);

        // Proximity zoom: the closer the cursor, the bigger the image.
        const rect = item.el.getBoundingClientRect();
        const dist = Math.hypot(pointerX - (rect.left + rect.width / 2), pointerY - (rect.top + rect.height / 2));
        const reach = Math.max(rect.width, rect.height) * 1.6;
        const targetZoom = pointerX === -Infinity ? 0 : Math.max(0, Math.min(1, 1 - dist / reach));
        item.zoom += (targetZoom - item.zoom) * 0.12;
        item.el.style.setProperty("--zoom", `${1 + item.zoom * 0.22}`);
      });

      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      target.x = event.clientX / window.innerWidth - 0.5;
      target.y = event.clientY / window.innerHeight - 0.5;
    };
    const handlePointerLeave = () => {
      pointerX = -Infinity;
      pointerY = -Infinity;
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

  const enterPortfolio = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isExiting) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      void navigate({ to: "/about" });
      return;
    }

    setIsExiting(true);
    window.setTimeout(() => void navigate({ to: "/about" }), 950);
  };

  return (
    <main ref={stageRef} className={`landing-stage${isExiting ? " is-exiting" : ""}`}>
      <div className="collage" aria-hidden="true">
        {fragments.map((fragment, index) => (
          <figure
            className={fragment.className}
            data-depth={fragment.depth}
            key={fragment.src}
            style={{
              "--delay": `${index * 0.1}s`,
              "--exit-x": fragment.exit.split(", ")[0],
              "--exit-y": fragment.exit.split(", ")[1],
            } as CSSProperties}
          >
            <img src={fragment.src} alt="" draggable={false} />
          </figure>
        ))}
      </div>

      <Link to="/about" onClick={enterPortfolio} className="identity group" aria-label="Enter Ebbe Bliksted's portfolio">
        <h1>Ebbe Bliksted</h1>
        <p>Cand.poly Design &amp; Innovation</p>
        <span className="enter-label" aria-hidden="true">Enter portfolio <span>↗</span></span>
      </Link>

      <p className="edition">Selected works · 2026</p>
      <p className="location">Copenhagen, DK</p>
    </main>
  );
}