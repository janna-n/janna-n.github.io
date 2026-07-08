import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { projects } from "../../user-data/data.js";
import { timeAgo } from "../utils/fetch.js";

const blogSkeleton = () => html`
  <div class="blog-card glass" aria-hidden="true">
    <div class="skeleton" style="height:14px;width:40%;margin-bottom:14px"></div>
    <div class="skeleton" style="height:20px;width:85%;margin-bottom:10px"></div>
    <div class="skeleton" style="height:14px;width:95%;margin-bottom:6px"></div>
    <div class="skeleton" style="height:14px;width:70%"></div>
  </div>
`;

const blogTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Portfolio</p>
      <h2 class="section-title" id="blog-title" data-reveal>
        Latest <span class="gradient-text">Projects</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        A selection of projects focused on automation, analytics, process improvement, and building tools that make operations easier.
      </p>
    </div>
    <div class="blog-grid" id="blogs">
      ${[0, 1, 2].map(() => blogSkeleton())}
    </div>
  </div>
`;

export function mountBlog() {
  return mount("blog", blogTemplate());
}

const categoryChips = (categories = []) => html`
  <div class="blog-tags">
    ${categories.slice(0, 3).map((tag) => html`<span class="chip">${tag}</span>`)}
  </div>
`;

const projectCard = (item, index) => html`
  <div
    class="blog-card glass glass-interactive glow-card"
    data-reveal
    style="--reveal-index: ${index}"
  >
    <img
      src="${item.image}"
      alt="${item.title}"
      class="project-image"
    />

    <h3 class="blog-title">${item.title}</h3>

    <p class="blog-excerpt">
      ${item.description}
    </p>

    <div class="blog-tags">
      ${item.tags?.map((tag) => html`<span class="chip">${tag}</span>`)}
    </div>
  </div>
`;

export function blogListTemplate() {
  return html`${projects.map((item, i) => blogCard(item, i))}`;
}