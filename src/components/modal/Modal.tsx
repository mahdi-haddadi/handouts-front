import {
  Children,
  cloneElement,
  Dispatch,
  FC,
  Fragment,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface ICloneProps {
  children: JSX.Element;
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
interface Props {
  children: ReactNode;
  open?: boolean;
}
const Modal: FC<Props> = ({ open, children }) => {
  const [active, setActive] = useState<boolean>(open || false);
  const cloneChild = Children.map(children, (child: any) => {
    const clone = cloneElement(child, {
      isOpen: active,
      show: () => {
        setActive(true);
      },
      onClose: () => {
        setActive(false);
      },
    });
    return clone;
  });
  return <Fragment>{cloneChild}</Fragment>;
};

export default Modal;
