import { useEffect, useState } from "react";

const useMotion = (event: boolean, close: any = null, time: number = 10) => {
  const [active, setActive] = useState(event);

  const closeMotion = () => {
    setActive(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setActive(event);
    }, time);

  }, [event, time]);

  return { activeMotion: active, closeMotion };
};

export default useMotion;
