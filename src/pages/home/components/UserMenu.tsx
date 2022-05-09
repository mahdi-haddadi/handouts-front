import React from "react";
import { Link } from "react-router-dom";
import "./../assets/user-menu.scss";
const UserMenu = () => {
  return (
    <div className="user-menu">
      <div className="item px-4 py-4">
        <Link to={"/login"} className="d-flex j-c-b a-i-c">
          <span>ورود</span>
          <i className="fa-solid fa-right-to-bracket"></i>
        </Link>
      </div>
      <div className="item px-4 py-4">
        <Link to={"/signup"} className="d-flex j-c-b a-i-c">
          <span>ثبت نام</span>
          <i className="fa-solid fa-user-plus"></i>
        </Link>
      </div>
    </div>
  );
};

export default UserMenu;
