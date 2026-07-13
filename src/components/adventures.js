import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";
import { adventures } from "../../user-data/data.js";

const adventureItem = (item) => html`
  <li class="adventure-item">
    <div class="adventure-item-top">
      <span class="adventure-name">${item.name}</span>
      <span class="adventure-state">
        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
        ${item.state}
      </span>
    </div>
    <div class="adventure-meta">
      <span class="chip">${item.Place1}</span>
      ${item.Place2 ? html`<span class="chip">${item.Place2}</span>` : ""}
      ${item.Place3 ? html`<span class="chip">${item.Place3}</span>` : ""}
      ${item.Place4 ? html`<span class="chip">${item.Place4}</span>` : ""}
      ${item.Place5 ? html`<span class="chip">${item.Place5}</span>` : ""}
      ${item.Place6 ? html`<span class="chip">${item.Place6}</span>` : ""}
      ${item.Place7 ? html`<span class="chip">${item.Place7}</span>` : ""}
    </div>
  </li>
`;

const adventureGroup = (group, index) => html`
  <article class="adventure-group glass glass-interactive" data-reveal style="--reveal-index: ${index}">
    <div class="adventure-group-head">
      <span class="adventure-group-icon adventure-accent-${group.accent}">
        <i class="${group.icon}" aria-hidden="true"></i>
      </span>
      <div>
        <h3>${group.title}</h3>
        <p>${group.items.length} adventures logged</p>
      </div>
    </div>
    <ul class="adventure-items">
      ${group.items.map((item) => adventureItem(item))}
    </ul>
  </article>
`;

const adventuresTemplate = () => html`
  <div class="container">
    <div class="section-heading">
      <p class="section-eyebrow" data-reveal>Off the Clock</p>
      <h2 class="section-title" id="adventures-title" data-reveal>
        Places <span class="gradient-text">& Photography</span>
      </h2>
      <p class="section-subtitle" data-reveal>
        When I'm not organizing data, I'm usually organizing photos from somewhere new.
        Travel has taken me through unfamiliar places, languages, and cultures.
        Its constantly teaching me how to adapt and problem solve.
      </p>
    </div>
    <div class="adventure-grid">
      ${adventures.map((group, i) => adventureGroup(group, i))}
    </div>
  </div>
`;

export function mountAdventures() {
  return mount("adventures", adventuresTemplate());
}
