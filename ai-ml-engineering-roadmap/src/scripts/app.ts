/**
 * The site's entire client runtime: deep links into collapsed modules, scroll
 * reveals and analytics hooks. Everything degrades to a working
 * static page if this never executes.
 */

/* ------------------------------------------------------------------ */
/* theme                                                               */
/* ------------------------------------------------------------------ */

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'cxr-theme';

function getStoredTheme(): Theme | null {
  try { return localStorage.getItem(STORAGE_KEY) as Theme | null; } catch { return null; }
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function syncCheckbox(theme: Theme): void {
  const cb = document.getElementById('theme-toggle') as HTMLInputElement | null;
  if (cb) cb.checked = theme === 'dark';
}

function applyTheme(theme: Theme, animate = false): void {
  if (animate) {
    document.documentElement.classList.add('theme-transitioning');
    requestAnimationFrame(() => {
      document.documentElement.setAttribute('data-theme', theme);
      syncCheckbox(theme);
      setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 350);
    });
  } else {
    document.documentElement.setAttribute('data-theme', theme);
    syncCheckbox(theme);
  }
  try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* private browsing */ }
}

function initTheme(): void {
  const stored = getStoredTheme();
  const theme: Theme = stored ?? getSystemTheme();
  document.documentElement.setAttribute('data-theme', theme);
}

function initThemeToggle(): void {
  const cb = document.getElementById('theme-toggle') as HTMLInputElement | null;
  if (!cb) return;

  // Sync checkbox to current theme on boot
  const current = (document.documentElement.getAttribute('data-theme') as Theme) ?? getSystemTheme();
  cb.checked = current === 'dark';

  // Checkbox change → toggle theme
  cb.addEventListener('change', () => {
    applyTheme(cb.checked ? 'dark' : 'light', true);
  });

  // Sync across tabs
  window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY && e.newValue) {
      applyTheme(e.newValue as Theme, true);
    }
  });

  // Follow system preference if user hasn't overridden
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) applyTheme(e.matches ? 'dark' : 'light', true);
  });
}


/* ------------------------------------------------------------------ */
/* analytics                                                           */
/* ------------------------------------------------------------------ */

declare global {
  interface Window {
    dataLayer?: unknown[];
    cxrTrack?: (event: string, props?: Record<string, unknown>) => void;
  }
}

/** Vendor-neutral: pushes to dataLayer and emits a DOM event to hook into. */
function track(event: string, props: Record<string, unknown> = {}): void {
  const payload = { event: `cxr_${event}`, ...props };
  (window.dataLayer ||= []).push(payload);
  window.dispatchEvent(new CustomEvent('cxr:track', { detail: payload }));
}
window.cxrTrack = track;

/* ------------------------------------------------------------------ */
/* deep links into collapsed modules                                   */
/* ------------------------------------------------------------------ */

/** A link to /level/1/#m1-3 should land on that module already expanded. */
function openHashTarget(): void {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (el instanceof HTMLDetailsElement && !el.open) el.open = true;
}

/* ------------------------------------------------------------------ */
/* scroll reveals                                                      */
/* ------------------------------------------------------------------ */

function initReveals(): void {
  const targets = document.querySelectorAll<HTMLElement>('.reveal');
  if (!targets.length) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  targets.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ */
/* analytics wiring                                                    */
/* ------------------------------------------------------------------ */

function initTracking(): void {
  const page = document.body.dataset.page ?? 'unknown';
  const level = document.body.dataset.levelNumber;
  track('page_view', { page, ...(level ? { level: Number(level) } : {}) });

  document.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-track]');
    if (!el) return;
    track(el.dataset.track!, { value: el.dataset.trackData ?? null, page });
  });

  document.querySelectorAll<HTMLDetailsElement>('details[data-track-expand]').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) track(d.dataset.trackExpand!, { value: d.dataset.trackData ?? null, page });
    });
  });
}

/* ------------------------------------------------------------------ */

function boot(): void {
  initTheme();
  openHashTarget();
  window.addEventListener('hashchange', openHashTarget);
  initReveals();
  initTracking();
  initThemeToggle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}

export {};
