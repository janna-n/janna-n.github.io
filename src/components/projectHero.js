import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";

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
        Project Title
      </h1>

      <p class="hero-role gradient-text-animated" data-reveal>
        Building better ways of working
      </p>

      <p class="hero-description" data-reveal>
        I enjoy untangling messy workflows and building practical tools
        that make people's jobs easier. Most of my projects combine Excel,
        automation, reporting, and process design to streamline repetitive work.
      </p>

    </div>
  </div>
`;

export function mountProjectHero() {
  return mount("hero", projectHeroTemplate());
}