import classNames from "classnames";
import { ChangeEvent, useState } from "react";
import Container from "../../components/container-user/Container";

const ForgetPassword = () => {
  const [form, setForm] = useState({
    email: "",
    code: "",
  });
  const handleSubmit = () => {};
  return (
    <div className="forget-password">
      <Container>
        <div className="form-up d-flex j-c-c a-i-c flex-col">
          <div className="icon mb-4">
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
          <h4>فراموشی رمز عبور</h4>
        </div>
        <div className="form">
          <form className="signin" onSubmit={handleSubmit}>
            <div
              className={classNames("form-group", {
                active: form.email.length > 0,
              })}
            >
              <input
                value={form.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                id="email"
                autoComplete="off"
                name="email"
                className="form-input"
                required
              />
              <label htmlFor="email" className="form-label">
                ایمیل
              </label>
            </div>
            <div
              className={classNames("form-group", {
                active: form.code.length > 0,
              })}
            >
              <input
                value={form.code}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                id="code"
                autoComplete="off"
                name="code"
                className="form-input"
                required
              />
              <label htmlFor="code" className="form-label">
                کد ارسال شده
              </label>
            </div>

            <button className="btn-signup" type="submit">
              ورود
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ForgetPassword;
