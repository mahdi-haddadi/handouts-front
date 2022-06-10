import classNames from "classnames";
import { forwardRef, RefObject, useEffect, useState } from "react";
import "./effect-modal.scss";
interface Props {
  children: any;
  activeEl: boolean;
  refEl: RefObject<HTMLElement>;
  time?: number;
  onClose: () => void;
}
const EffectModal = ({
  children,
  activeEl,
  onClose,
  time = 5000,
  refEl,
}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    const { current }: any = refEl;

    const transitionEnd = () => setActive(activeEl);

    const keyHandler = (e: KeyboardEvent) => {
      if ([27].indexOf(e.which) >= 0) {
        setActive(false);
        onClose();
      }
    };

    if (activeEl) {
      setTimeout(() => {
        if (document.activeElement instanceof HTMLElement) {
          document?.activeElement?.blur();
          setActive(activeEl);
        }
      }, time);
    }
    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      window.addEventListener("keyup", keyHandler);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        window.removeEventListener("keyup", keyHandler);
      }
    };
  }, [activeEl, onClose, refEl, time]);

  return (
    <div className={classNames("effect-modal", { active: active && activeEl })}>
      {children}
    </div>
  );
};
export default EffectModal;
