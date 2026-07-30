import { mountProjectHero } from "./components/projectHero.js";
import { mountFooter } from "./components/footer.js";
import { mountNav } from "./components/nav.js";

import { initNavScroll } from "./services/nav-scroll.js";
import { initTheme } from "./services/theme.js";
import { initInteractions } from "./animations/interactions.js";
import { observeReveals } from "./animations/scrollReveal.js";

function mountStaticSections() {
  mountNav();
  mountProjectHero();
  mountFooter();
}

function initServices() {
  initTheme();
  initNavScroll();
  initInteractions();
}

mountStaticSections();
initServices();
observeReveals();