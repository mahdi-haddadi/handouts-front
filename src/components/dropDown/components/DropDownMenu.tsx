import useClickOutSide from "../../../hooks/useClickOutSide";
import { ICloneProps } from "../DropDown";

const DropDownMenu = ({ active, setActive, children }: ICloneProps | any) => {
  const refNode = useClickOutSide(() => setActive(false));
  return (
    <div ref={refNode}>
      {active && children}
    </div>
  );
};

export default DropDownMenu;
