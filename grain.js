/**
 * Yak N Sup — Animated Film Grain Overlay
 * Canvas-based noise rendered at ~12fps for authentic vintage texture.
 * Respects prefers-reduced-motion. Pauses when tab is hidden.
 */
(function() {
  'use strict';

  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'film-grain';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let w, h, animId, lastTime = 0;
  const FPS = 12; // Low fps = natural film grain, not digital noise
  const INTERVAL = 1000 / FPS;

  function resize() {
    // Use a smaller canvas scaled up — cheaper and looks more like real grain
    const scale = 0.85;
    w = canvas.width  = Math.ceil(window.innerWidth  * scale);
    h = canvas.height = Math.ceil(window.innerHeight * scale);
    canvas.style.width  = '100%';
    canvas.style.height = '100%';
  }

  function drawGrain() {
    const imageData = ctx.createImageData(w, h);
    const data = imageData.data;
    const len = data.length;
    // Near-neutral grey noise — close to 128 so it barely shifts underlying colors
    for (let i = 0; i < len; i += 4) {
      const v = 110 + ((Math.random() * 36) | 0); // 110-145, tight range near 128
      data[i]     = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = 255;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function tick(ts) {
    animId = requestAnimationFrame(tick);
    if (ts - lastTime < INTERVAL) return;
    lastTime = ts;
    drawGrain();
  }

  function start() {
    resize();
    animId = requestAnimationFrame(tick);
  }

  function stop() {
    cancelAnimationFrame(animId);
  }

  // Pause when tab not visible (saves battery/CPU)
  document.addEventListener('visibilitychange', () => {
    document.hidden ? stop() : start();
  });

  // Resize handler — debounced
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }, { passive: true });

  start();
})();
