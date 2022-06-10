import { ICloneProps } from "../DropDown";

const BtnDropDownMenu = ({ show, children }: ICloneProps | any) => {
  return <div className="btn-dd" onClick={show}>{children}</div>;
};

export default BtnDropDownMenu;
