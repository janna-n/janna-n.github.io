import { html } from "https://unpkg.com/lit-html?module";
import { mount } from "../utils/dom.js";

const NAV_LINKS = [
  { href: "../../index.html", label: "Home" },
  { href: "../projects/workforce-tracking", label: "Crew Tracker" },
  { href: "../projects/attendance-reporting", label: "Attendance Reporting" },
  { href: "../projects/auto-pdf", label: "Auto PDF" },
  { href: "../projects/power-app", label: "Power Apps" },
  { href: "../../index.html#footer", label: "Contact" },
];

const linkItem = (link, mobile = false) => html`
  <li>
    <a
      href="${link.href}"
      class="nav-link underline-link${mobile ? " nav-link-mobile" : ""}"
      data-nav-link="undefined"
    >
      ${link.label}
    </a>
  </li>
`;

const navTemplate = () => html`
  <header class="site-nav glass" id="siteNav">
    <div class="container nav-inner">
      <a href="../index.html" class="nav-logo underline-link" aria-label="Janna Nystrom — back to top">
        Janna<span class="gradient-text">.</span>
      </a>

      <nav class="nav-links" aria-label="Primary">
        <ul>
          ${NAV_LINKS.map((link) => linkItem(link))}
        </ul>
      </nav>

      <div class="nav-actions">
        <button
          type="button"
          class="nav-icon-btn magnetic ripple"
          id="themeToggle"
          aria-label="Toggle color theme"
          title="Toggle theme"
        >
          <i class="fa-solid fa-moon" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="nav-icon-btn magnetic ripple"
          id="commandPaletteToggle"
          aria-label="Open command palette"
          title="Command palette (⌘K)"
        >
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button
          type="button"
          class="nav-mobile-toggle magnetic ripple"
          id="navMobileToggle"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="navMobileMenu"
        >
          <i class="fa-solid fa-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="nav-mobile-menu" id="navMobileMenu" aria-hidden="true">
      <ul>
        ${NAV_LINKS.map((link) => linkItem(link, true))}
      </ul>
    </div>
  </header>
`;

export function mountProjectNav() {
  return mount("nav-root", navTemplate());
}

export { NAV_LINKS };