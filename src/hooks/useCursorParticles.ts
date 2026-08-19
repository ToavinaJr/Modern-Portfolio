import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  hue: number;
}

export function useCursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    if (!canvas || !finePointer.matches || reducedMotion.matches) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const particles: Particle[] = [];
    let frame = 0;
    let previousX = -100;
    let previousY = -100;

    const resize = () => {
      const ratio = Math.min(devicePixelRatio, 2);
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const move = (event: PointerEvent) => {
      const distance = Math.hypot(event.clientX - previousX, event.clientY - previousY);
      const amount = Math.min(5, Math.max(1, Math.floor(distance / 10)));
      for (let index = 0; index < amount; index += 1) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.15;
        particles.push({ x: event.clientX + (Math.random() - 0.5) * 8, y: event.clientY + (Math.random() - 0.5) * 8, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, life: 1, size: Math.random() * 2.8 + 1, hue: 185 + Math.random() * 90 });
      }
      if (particles.length > 80) particles.splice(0, particles.length - 80);
      previousX = event.clientX;
      previousY = event.clientY;
    };

    const draw = () => {
      context.clearRect(0, 0, innerWidth, innerHeight);
      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.008;
        particle.life -= 0.025;
        if (particle.life <= 0) { particles.splice(index, 1); continue; }
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
        context.fillStyle = `hsla(${particle.hue}, 90%, 65%, ${particle.life * 0.75})`;
        context.shadowBlur = 10;
        context.shadowColor = `hsl(${particle.hue}, 90%, 60%)`;
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    addEventListener('resize', resize);
    addEventListener('pointermove', move, { passive: true });
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('resize', resize);
      removeEventListener('pointermove', move);
    };
  }, []);

  return canvasRef;
}
