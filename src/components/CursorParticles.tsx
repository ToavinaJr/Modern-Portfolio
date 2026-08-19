import { useCursorParticles } from '../hooks/useCursorParticles';

export function CursorParticles() {
  const canvasRef = useCursorParticles();
  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-30" aria-hidden="true" />;
}
