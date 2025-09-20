// public/scripts/toTopButton.js
(() => {
  const setup = (btn) => {
    const showAt = Number(btn.dataset.threshold) || 400;

    const onScroll = () => {
      if (window.scrollY > showAt) {
        btn.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        btn.classList.add('opacity-0', 'pointer-events-none');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    btn.addEventListener('click', () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    });

    onScroll();
  };

  const init = () => {
    const buttons = document.querySelectorAll('[data-totop]');
    buttons.forEach(setup);
  };

  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
