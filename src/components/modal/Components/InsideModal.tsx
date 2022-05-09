import "./../assets/inside-modal.scss";
const InsideModal = ({ children, active, setActive, title }: any) => {
  return (
    <div className="inside-modal">
      {active && <div className="layer" onClick={() => setActive(false)}></div>}
      {active && (
        <div className={"modal"}>
          <div className="head d-flex j-c-c a-i-c">
            <button className="close-modal" onClick={() => setActive(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <h3 className="text-center">{title}</h3>
          </div>
          <div className="body">{children}</div>
        </div>
      )}
    </div>
  );
};

export default InsideModal;
