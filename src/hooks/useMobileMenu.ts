import { useEffect, useState } from 'react';

export function useMobileMenu() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    addEventListener('keydown', close);
    return () => removeEventListener('keydown', close);
  }, [open]);
  return { open, close: () => setOpen(false), toggle: () => setOpen((current) => !current) };
}
