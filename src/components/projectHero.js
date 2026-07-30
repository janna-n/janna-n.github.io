import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { contact, footer } from "../../user-data/data.js";

const hero = document.getElementById("hero");

const project = {
  name: hero.dataset.projectName,
  title: hero.dataset.projectTitle,
  description: hero.dataset.projectDescription,
};

const projectHeroTemplate = () => html`
  <div class="hero-bg" aria-hidden="true">
    <div class="hero-mesh"></div>
    <div class="hero-blob hero-blob-1"></div>
    <div class="hero-blob hero-blob-2"></div>
    <div class="hero-blob hero-blob-3"></div>
  </div>

  <div class="container hero-inner">
    <div class="hero-copy">

      <h1 class="hero-title" data-reveal>
        ${project.name}
      </h1>

      <p class="hero-role gradient-text-animated" data-reveal>
        ${project.title}
      </p>

      <p class="hero-description" data-reveal>
        ${project.description}
      </p>

    </div>
  </div>
`;

export function mountProjectHero() {
  return mount("hero", projectHeroTemplate());
}