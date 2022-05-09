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
  show?:boolean
}
const Modal: FC<Props> = ({ show,children }) => {
  const [active, setActive] = useState<boolean>(show || false);
  const cloneChild = Children.map(children, (child: any) => {
    const clone = cloneElement(child, { active, setActive });
    return clone;
  });
  return <Fragment>{cloneChild}</Fragment>;
};

export default Modal;
