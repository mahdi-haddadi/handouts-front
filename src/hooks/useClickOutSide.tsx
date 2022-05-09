import { useEffect, useRef } from "react";

const useClickOutSide = (handler: any, classname?: any) => {
  const domNode = useRef<any>(null);
  useEffect(() => {
    const handlerClick = (e: any) => {
      if (
        !domNode.current?.contains(e.target) ||
        domNode.current?.contains(classname)
      ) {
        handler();
      }
    };
    document.addEventListener("mousedown", handlerClick);
    return () => {
      document.removeEventListener("mousedown", handlerClick);
    };
  }, [classname, handler]);

  return domNode;
};
export default useClickOutSide;
