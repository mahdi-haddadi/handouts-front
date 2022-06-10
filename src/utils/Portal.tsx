import { FC, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: JSX.Element;
  parent?: HTMLElement;
  className?: string;
}
const Portal: FC<Props> = ({ children, parent, className }) => {
  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;
    const classList = ["portal-container"];
    if (className)
      className.split(" ").forEach((item: string) => classList.push(item));
    classList.forEach((item: string) => el.classList.add(item));
    target.appendChild(el);
    return () => {
      target.removeChild(el);
    };
  }, [className, el, parent]);

  return createPortal(children, el);
};

export default Portal;
