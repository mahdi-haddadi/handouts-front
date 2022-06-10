const BtnModal = ({ children, show }: any) => {
  return (
    <div className="btn-modal" onClick={show}>
      {children}
    </div>
  );
};

export default BtnModal;
