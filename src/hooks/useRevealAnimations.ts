import { useEffect } from 'react';

export function useRevealAnimations() {
  useEffect(() => {
    const selector = '.hero-copy,.portrait,.section-heading,.split>div,.project-card,.info-card,.page-intro,.case-image,.case-study>section';
    const elements = [...document.querySelectorAll<HTMLElement>(selector)];
    document.documentElement.classList.add('motion-ready');
    elements.forEach((element, index) => {
      element.classList.add('reveal');
      element.style.setProperty('--reveal-delay', `${Math.min(index % 5, 4) * 60}ms`);
    });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}
