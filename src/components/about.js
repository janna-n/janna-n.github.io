import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { bio, experience } from "../../user-data/data.js";

function yearsOfExperience() {
  const starts = experience
    .map((item) => Date.parse(item.duration.split(/[–-]/)[0].trim()))
    .filter((n) => !Number.isNaN(n));
  if (!starts.length) return null;
  const earliest = Math.min(...starts);
  const years = (Date.now() - earliest) / (365.25 * 24 * 60 * 60 * 1000);
  return Math.floor(years);
}

function buildStats() {
  return [
  { value: "Ask 'Why'", label: "Challenge inefficient processes." },
  { value: "Find Patterns", label: "Spot trends others miss." },
  { value: "Build Systems", label: "Create tools that scale." },
  { value: "Keep It Simple", label: "Design for real users." },
];
}

const statCard = (stat) => html`
  <div class="about-stat glass glass-interactive" data-reveal>
    <p class="about-stat-value gradient-text">${stat.value}</p>
    <p class="about-stat-label">${stat.label}</p>
  </div>
`;

const aboutTemplate = () => html`
  <div class="container about-inner">
    <div class="about-copy">
      <p class="section-eyebrow" data-reveal>About</p>
      <h2 class="section-title" id="about-title" data-reveal>
        Turning chaos into systems people can actually use.
      </h2>
      <div class="about-bio" data-reveal>
        ${bio.map((paragraph) => html`<p>${paragraph}</p>`)}
      </div>
    </div>

    <div class="about-stats">
      ${buildStats().map((stat) => statCard(stat))}
    </div>
  </div>
`;

export function mountAbout() {
  return mount("about", aboutTemplate());
}
