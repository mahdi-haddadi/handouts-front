import {
  Children,
  cloneElement,
  Dispatch,
  FC,
  Fragment,
  SetStateAction,
} from "react";
interface Props {
  value?: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
  children: any;
}
const Checkbox: FC<Props> = ({ value = false, onChange, children }) => {
  const allChildren = Children.map(children, (child: any) => {
    const clone = cloneElement(child, { value,onChange});
    return clone;
  });
  return <Fragment>{allChildren}</Fragment>;
};

export default Checkbox;
