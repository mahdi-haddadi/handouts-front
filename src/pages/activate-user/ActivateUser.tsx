import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import Container from "../../components/container-user/Container";
import "./assets/activate-user.scss";
const ActivateUser = () => {
  const [code, setCode] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="activate-user">
      <Container>
        <div className="form-up d-flex j-c-c a-i-c flex-col">
          <div className="icon mb-4">
            <i className="fa-solid fa-key"></i>
          </div>
          <h4>ورود</h4>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <p className="text-center my-8">کد ارسال شده را وارد کنید</p>
            <div className="form-group">
              <input
                className="form-input"
                ref={ref}
                value={code}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const { value } = e.target;
                  if (!isNaN(+value) && value.length <= 6)
                    setCode(e.target.value);
                }}
                type={"tel"}
                maxLength={6}
              />
            </div>
            <button type="submit" className="btn">
              فعالسازی
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ActivateUser;
