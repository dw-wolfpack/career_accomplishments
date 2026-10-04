(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");

  const initializeUniverse = (universe) => {
    if (universe.dataset.universeReady || reducedMotion.matches || !finePointer.matches) {
      return;
    }

    universe.dataset.universeReady = "true";
    const layers = universe.querySelectorAll("[data-universe-depth]");
    let animationFrame;

    const moveLayers = (event) => {
      const bounds = universe.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;
      const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 14;

      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        layers.forEach((layer) => {
          const depth = Number(layer.dataset.universeDepth);
          layer.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
        });
      });
    };

    const resetLayers = () => {
      cancelAnimationFrame(animationFrame);
      layers.forEach((layer) => {
        layer.style.transform = "translate3d(0, 0, 0)";
      });
    };

    universe.addEventListener("pointermove", moveLayers, { passive: true });
    universe.addEventListener("pointerleave", resetLayers);
  };

  const initialize = () => {
    document.querySelectorAll("[data-personal-universe]").forEach(initializeUniverse);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize, { once: true });
  } else {
    initialize();
  }
})();
