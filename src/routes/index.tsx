import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import bigSun from "@/assets/BigSun.png.asset.json";
import books from "@/assets/Bogreolen.png.asset.json";
import designPark from "@/assets/DesignPark.png.asset.json";
import explodedAssembly from "@/assets/exploded-assembly-drawing.jpg";
import fitphone from "@/assets/Fitphone.png.asset.json";
import flexmover from "@/assets/Flexmover.png.asset.json";
import foamMockup from "@/assets/foam-mockup.webp";
import playbook from "@/assets/Mission_Lab_Playbook.png.asset.json";
import openBox from "@/assets/open_box.jpg.asset.json";
import orion from "@/assets/Orion.jpg.asset.json";
import packing from "@/assets/PACKING.png.asset.json";
import picture from "@/assets/Picture3.jpg.asset.json";
import thesisCover from "@/assets/thesis-cover.jpg";
import { projectImages } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ebbe Bliksted · Design & Innovation" },
      { name: "description", content: "Portfolio of Ebbe Bliksted, Cand.poly in Design & Innovation." },
      { property: "og:title", content: "Ebbe Bliksted · Design & Innovation" },
      { property: "og:description", content: "Portfolio of Ebbe Bliksted, Cand.poly in Design & Innovation." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const trailImages = Array.from(
  new Set([
    bigSun.url,
    books.url,
    designPark.url,
    explodedAssembly,
    fitphone.url,
    flexmover.url,
    foamMockup,
    playbook.url,
    openBox.url,
    orion.url,
    packing.url,
    picture.url,
    thesisCover,
    ...projectImages,
  ]),
);

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j] as T, copy[i] as T];
  }
  return copy;
}

const TRAIL_SPACING = 78;
const TRAIL_MAX_ITEMS = 40;
const TRAIL_MAX_STEPS = 8;

function LandingPage() {
  const stageRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const stage = stageRef.current;
    const layer = trailRef.current;
    if (!stage || !layer) return;

    const ready: string[] = [];
    shuffled(trailImages).forEach((src) => {
      const preload = new Image();
      preload.onload = () => ready.push(src);
      preload.src = src;
    });

    let nextImage = 0;
    let last: { x: number; y: number } | null = null;

    const spawn = (x: number, y: number) => {
      if (ready.length === 0) return;
      const figure = document.createElement("figure");
      figure.className = "trail-image";
      figure.style.left = `${x}px`;
      figure.style.top = `${y}px`;
      figure.style.setProperty("--tilt", `${(Math.random() * 12 - 6).toFixed(1)}deg`);
      figure.style.setProperty("--s", (0.85 + Math.random() * 0.3).toFixed(2));

      const img = document.createElement("img");
      img.src = ready[nextImage % ready.length] as string;
      img.alt = "";
      img.draggable = false;
      figure.appendChild(img);
      nextImage += 1;

      figure.addEventListener("animationend", () => figure.remove(), { once: true });
      layer.appendChild(figure);
      while (layer.childElementCount > TRAIL_MAX_ITEMS) layer.firstElementChild?.remove();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      if (!last) {
        last = { x, y };
        spawn(x, y);
        return;
      }

      const dx = x - last.x;
      const dy = y - last.y;
      const distance = Math.hypot(dx, dy);
      if (distance < TRAIL_SPACING) return;

      if (distance > TRAIL_SPACING * TRAIL_MAX_STEPS) {
        last = { x, y };
        spawn(x, y);
        return;
      }

      const steps = Math.floor(distance / TRAIL_SPACING);
      for (let step = 1; step <= steps; step += 1) {
        spawn(last.x + (dx / distance) * TRAIL_SPACING * step, last.y + (dy / distance) * TRAIL_SPACING * step);
      }
      last = { x: last.x + (dx / distance) * TRAIL_SPACING * steps, y: last.y + (dy / distance) * TRAIL_SPACING * steps };
    };
    const handlePointerLeave = () => {
      last = null;
    };

    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
      layer.replaceChildren();
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
      <div ref={trailRef} className="trail" aria-hidden="true" />

      <p className="location">Copenhagen, DK</p>

      <Link to="/about" onClick={enterPortfolio} className="identity" aria-label="Enter Ebbe Bliksted's portfolio">
        <h1 className="sr-only">Ebbe Bliksted</h1>
        <p className="sr-only">CAND.POLYT DESIGN &amp; INNOVATION</p>
      </Link>
    </main>
  );
}
