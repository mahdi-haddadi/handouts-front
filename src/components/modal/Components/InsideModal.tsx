import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import useClickOutSide from "../../../hooks/useClickOutSide";
import Portal from "../../../utils/Portal";
import "./../assets/inside-modal.scss";
const InsideModal = ({ children, isOpen, onClose, title }: any) => {
  const closeModal = useClickOutSide(() => {
    onClose();
  });
  return (
    <AnimatePresence> 
      {isOpen && (
        <Portal className="modal-portal">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className={classNames("inside-modal")}
          >
            <motion.div
              initial={{
                y: -400,
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                y: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                y: -400,
                scale: 0.9,
                opacity: 0,
              }}
              className={"modal"}
              ref={closeModal}
            >
              <div className="head d-flex j-c-c a-i-c">
                <button className="close-modal" onClick={onClose}>
                  <i className="fa-solid fa-xmark"></i>
                  close
                </button>
                <h3 className="text-center text-light">{title}</h3>
              </div>
              <div className="content">{children}</div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default InsideModal;
