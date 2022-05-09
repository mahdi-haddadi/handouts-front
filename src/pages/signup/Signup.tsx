import axios from "axios";
import classNames from "classnames";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../../components/container-user/Container";
import "./assets/signup.scss";
const Signup = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  };
  return (
    <div className="signup">
      <Container>
        <div className="form-up d-flex j-c-c a-i-c flex-col">
          <div className="icon mb-4">
            <i className="fa-solid fa-user"></i>
          </div>
          <h4>ثبت نام</h4>
        </div>
        <div className="form">
          <form className="register" onSubmit={handleSubmit}>
            <div
              className={classNames("form-group", {
                active: form.fullname.length > 0,
              })}
            >
              <input
                value={form.fullname}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                id="fullname"
                autoComplete="off"
                name="fullname"
                className="form-input"
                required
              />
              <label htmlFor="fullname" className="form-label">
                نام و نام خانوادگی
              </label>
            </div>
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
            <div
              className={classNames("form-group", {
                active: form.passwordConfirm.length > 0,
              })}
            >
              <input
                value={form.passwordConfirm}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setForm({ ...form, [e.target.name]: e.target.value })
                }
                id="password-confirm"
                autoComplete="off"
                name="passwordConfirm"
                className="form-input"
                required
              />
              <label htmlFor="password-confirm" className="form-label">
                تکرار رمز عبور
              </label>
            </div>
            <button className="btn-signup" type="submit">
              ثبت نام
            </button>
          </form>
          <p className="had-account">
            حساب کاربری دارید ؟ <Link to="/login">ورود</Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
