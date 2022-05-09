import { ICloneProps } from "../DropDown";

const BtnDropDownMenu = ({
  active,
  setActive,
  children,
}: ICloneProps | any) => {
  return <div onClick={() => setActive(!active)}>{children}</div>;
};

export default BtnDropDownMenu;
