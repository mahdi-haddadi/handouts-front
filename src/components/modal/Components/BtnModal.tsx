const BtnModal = ({ children, setActive }: any) => {
  return (
    <div className="btn-modal" onClick={() => setActive(true)}>
      {children}
    </div>
  );
};

export default BtnModal;
