import { useState, useEffect } from 'react';
import { useBreakpoint } from './useBreakpoint';

export const useSidebar = (breakpoint: number) => {
  const [isOpen, setIsOpen] = useState(false);
  const isAboveBreakpoint = useBreakpoint(breakpoint);

  useEffect(() => {
    if (isAboveBreakpoint) {
      setIsOpen(false);
    }
  }, [isAboveBreakpoint]);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    close,
  };
};
