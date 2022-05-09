import { ChangeEvent, FormEvent, useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./assets/login.scss";
import Checkbox from "../../components/checkbox/Checkbox";
import CheckboxCore from "../../components/checkbox/CheckboxCore";
import Label from "../../components/checkbox/Label";
import Container from "../../components/container-user/Container";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <Container>
        <div className="form-up d-flex j-c-c a-i-c flex-col">
          <div className="icon mb-4">
            <i className="fa-solid fa-right-to-bracket"></i>
          </div>
          <h4>ورود</h4>
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
                active: form.password.length > 0,
              })}
            >
              <input
                value={form.password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                id="password"
                autoComplete="off"
                name="password"
                className="form-input"
                required
              />
              <label htmlFor="password" className="form-label">
                رمز عبور
              </label>
            </div>
            <div className="form-group d-flex a-i-c">
              <Checkbox value={rememberMe} onChange={setRememberMe}>
                <CheckboxCore />
                <Label>مرا به خاطر بسپار</Label>
              </Checkbox>
            </div>
            <button className="btn-signup" type="submit">
              ورود
            </button>
          </form>
          <p className="hadnot-account">
            حساب کاربری ندارید ؟ <Link to="/signup">ثبت نام</Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Login;
