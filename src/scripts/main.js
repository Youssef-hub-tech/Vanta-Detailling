/* ───────────────────────────────────────────────────────────────────────────
   VANTA Detailing — interaction layer
   Small, dependency-free enhancements. Everything here is progressive: the
   page reads and navigates correctly with JavaScript disabled.
   ─────────────────────────────────────────────────────────────────────────── */

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const nav = document.querySelector('[data-nav]');
const toggle = document.querySelector('[data-toggle]');
const panel = document.querySelector('[data-panel]');

/* ── Navigation ──────────────────────────────────────────────────────────── */
if (nav) {
  const setStuck = () => nav.classList.toggle('is-stuck', window.scrollY > 12);
  setStuck();
  window.addEventListener('scroll', setStuck, { passive: true });
}

const setMenu = (open) => {
  if (!toggle || !nav) return;
  document.documentElement.classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  const label = toggle.querySelector('[data-label-open]');
  if (label) label.textContent = open ? label.dataset.labelClose : label.dataset.labelOpen;
};

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    setMenu(!document.documentElement.classList.contains('nav-open'));
  });

  // Close the mobile panel after following a link.
  panel?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.documentElement.classList.contains('nav-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // The panel becomes a desktop bar again past the breakpoint.
  const desktop = window.matchMedia('(min-width: 68.0625rem)');
  desktop.addEventListener('change', (event) => {
    if (event.matches) setMenu(false);
  });
}

/* ── Reveal on scroll ────────────────────────────────────────────────────── */
const revealables = document.querySelectorAll('.reveal');
if (!prefersReduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
  );
  revealables.forEach((el) => observer.observe(el));
} else {
  revealables.forEach((el) => el.classList.add('is-in'));
}

/* ── Before / after comparison ───────────────────────────────────────────── */
document.querySelectorAll('[data-compare]').forEach((compare) => {
  const input = compare.querySelector('[data-compare-input]');
  if (!input) return;

  const update = () => {
    const value = Number(input.value);
    compare.style.setProperty('--pos', `${value}%`);
    const before = input.dataset.labelBefore || '';
    const after = input.dataset.labelAfter || '';
    const beforePct = Math.round(value);
    input.setAttribute(
      'aria-valuetext',
      `${beforePct}% ${before} · ${100 - beforePct}% ${after}`
    );
  };
  update();
  input.addEventListener('input', update);
});

/* ── Hero parallax: pointer drift plus a little scroll depth ─────────────── */
const hero = document.querySelector('[data-hero]');
const stage = document.querySelector('[data-parallax]');
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (hero && stage && !prefersReduced) {
  let frame = 0;
  let scrollY = window.scrollY;

  const apply = () => {
    frame = 0;
    const drift = Math.min(scrollY, 700) * 0.035;
    stage.style.setProperty('--py', `${drift}px`);
  };

  if (finePointer) {
    hero.addEventListener('pointermove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      stage.style.setProperty('--px', `${x * 14}px`);
      stage.style.setProperty('--py', `${y * 6 + Math.min(scrollY, 700) * 0.035}px`);
    });
    hero.addEventListener('pointerleave', () => {
      stage.style.setProperty('--px', '0px');
      apply();
    });
  }

  window.addEventListener(
    'scroll',
    () => {
      scrollY = window.scrollY;
      if (!frame) frame = requestAnimationFrame(apply);
    },
    { passive: true }
  );
  apply();
}

/* ── Active section in the nav ───────────────────────────────────────────── */
const navLinks = [...document.querySelectorAll('.nav__links a')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

if (sections.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((section) => spy.observe(section));
}
