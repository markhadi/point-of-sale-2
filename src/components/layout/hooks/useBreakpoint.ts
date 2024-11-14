import { useState, useEffect } from 'react';

export const useBreakpoint = (breakpoint: number) => {
  const [isAboveBreakpoint, setIsAboveBreakpoint] = useState(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsAboveBreakpoint(window.innerWidth >= breakpoint);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isAboveBreakpoint;
};
