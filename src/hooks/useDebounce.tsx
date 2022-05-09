import { useEffect, useState } from "react";

const useDebounce = (value: string, time: number) => {
  const [result, setResult] = useState<string>(value);

  useEffect(() => {
    const handle: ReturnType<typeof setTimeout> = setTimeout(() => {
      setResult(value);
    }, time);
    return () => {
      clearTimeout(handle);
    };
  }, [time, value]);
  return result;
};
export default useDebounce;
