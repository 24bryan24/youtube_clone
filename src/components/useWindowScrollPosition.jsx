import React, { useEffect, useState } from "react";

export const useWindowScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPosition);
  });

  const updateScrollPosition = () => {
    setScrollPosition({ scrollX: window.scrollX, scrollY: window.scrollY });
  };

  return scrollPosition;
};
