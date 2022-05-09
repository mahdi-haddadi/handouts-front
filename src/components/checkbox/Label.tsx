import './assets/label.scss'
const Label = ({ id, onChange, children }: any) => {
  return (
    <label htmlFor={id} className={'label mx-4'} onClick={() => onChange((state: boolean) => !state)}>
      {children}
    </label>
  );
};

export default Label;
