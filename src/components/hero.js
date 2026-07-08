import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { RESUME_URL } from "../constants/urls.js";

const FLOATING_BADGES = [
  { label: "Data Analysis", icon: "fa-solid fa-magnifying-glass-chart", pos: "badge-1" },
  { label: "Excel", icon: "fa-solid fa-file-excel", pos: "badge-2" },
  { label: "Process Design", icon: "fa-solid fa-diagram-project", pos: "badge-3" },
  { label: "Programming", icon: "fa-solid fa-terminal", pos: "badge-4" },
  { label: "Automation", icon: "fa-solid fa-bolt", pos: "badge-5" },
];

const badgeTemplate = (badge) => html`
  <div class="hero-badge glass ${badge.pos}" aria-hidden="true">
    <i class="${badge.icon}" aria-hidden="true"></i>
    <span>${badge.label}</span>
  </div>
`;

const heroTemplate = () => html`
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-mesh"></div>
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    <div class="hero-blob hero-blob-3"></div>
  </div>

  <div class="container hero-inner">
    <div class="hero-copy">
      <p class="hero-eyebrow" data-reveal>
        <span class="hero-status-dot"></span>
        Always asking, "Why are we doing it like this?"
      </p>
      <h1 class="hero-title" data-reveal>
        Janna Nystrom
      </h1>
      <p class="hero-role gradient-text-animated" data-reveal>Building better ways of working</p>
      <p class="hero-description" data-reveal>
        I enjoy untangling messy workflows and building
        practical tools that make people's jobs easier.
        Most of my projects combine Excel, automation,
        reporting, and process design to streamline
        repetitive work.
      </p>
      <div class="hero-cta-row" data-reveal>
        <a
          class="btn btn-primary magnetic ripple" href="#experience"
        >
          View Projects
        </a>
        <a class="btn btn-secondary magnetic ripple"
        href="${RESUME_URL}"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
          Resume
        </a>
        <a class="btn btn-ghost underline-link magnetic" href="#contact">
          Contact
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </div>

    <div class="hero-visual" data-reveal>
      <div class="hero-orbit">
        <div class="hero-orbit-core glass">
          <i class="fa-solid fa-code" aria-hidden="true"></i>
        </div>
        ${FLOATING_BADGES.map((badge) => badgeTemplate(badge))}
      </div>
    </div>
  </div>

  <a class="hero-scroll-cue underline-link" href="#about" aria-label="Scroll to About section">
    <span>Scroll</span>
    <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
  </a>
`;

export function mountHero() {
  return mount("hero", heroTemplate());
}
