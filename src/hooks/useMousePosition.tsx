import React from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = React.useState({
    x: (window?.innerWidth ?? 0) / 2,
    y: (window?.innerHeight ?? 0) / 2,
  });
  React.useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;
