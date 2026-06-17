import { useEffect, useState } from "react";

const useIsPhoneScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 700px)");

    const handleChange = () => {
      setIsSmallScreen(mediaQuery.matches);
    };

    handleChange(); // initial check

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isSmallScreen;
};

export default useIsPhoneScreen;
