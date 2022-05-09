import { useEffect, useState } from "react";
const getWindow = () => {
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, heigth: innerHeight };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindow());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindow());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);
  return { width: windowDimensions.width, heigth: windowDimensions.heigth };
};

export default useWindowDimensions;
