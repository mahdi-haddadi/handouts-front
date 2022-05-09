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
}
const DropDown: FC<Props> = ({ children }) => {
  const [active, setActive] = useState<boolean>(false);
  const childNode = Children.map(children, (child: any) => {
    const clone = cloneElement(child && child, { active, setActive });
    return clone;
  });
  return <Fragment>{childNode}</Fragment>;
};

export default DropDown;
