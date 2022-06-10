import { AnimatePresence, motion } from "framer-motion";
import useClickOutSide from "../../../hooks/useClickOutSide";
import { ICloneProps } from "../DropDown";

const DropDownMenu = ({ isOpen, onClose, children }: ICloneProps | any) => {
  const refNode = useClickOutSide(() => onClose());
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9,
            x: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            x: 10,
          }}
          ref={refNode}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropDownMenu;
