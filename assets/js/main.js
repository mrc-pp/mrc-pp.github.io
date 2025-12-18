// Mobile menu
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Tabs for Results
const tabSim = document.getElementById("tab-sim");
const tabReal = document.getElementById("tab-real");
const panelSim = document.getElementById("panel-sim");
const panelReal = document.getElementById("panel-real");

function activate(which) {
  const sim = which === "sim";
  tabSim.classList.toggle("is-active", sim);
  tabReal.classList.toggle("is-active", !sim);

  tabSim.setAttribute("aria-selected", String(sim));
  tabReal.setAttribute("aria-selected", String(!sim));

  panelSim.classList.toggle("is-active", sim);
  panelReal.classList.toggle("is-active", !sim);
}

if (tabSim && tabReal && panelSim && panelReal) {
  tabSim.addEventListener("click", () => activate("sim"));
  tabReal.addEventListener("click", () => activate("real"));
}

// Copy BibTeX
const copyBtn = document.getElementById("copyBib");
const bibBlock = document.getElementById("bibtexBlock");

if (copyBtn && bibBlock) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(bibBlock.innerText.trim());
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy BibTeX"), 1200);
    } catch {
      copyBtn.textContent = "Copy failed";
      setTimeout(() => (copyBtn.textContent = "Copy BibTeX"), 1200);
    }
  });
}

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());
