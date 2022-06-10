import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useSearchParams } from "react-router-dom";
import ActivateUser from "./pages/activate-user/ActivateUser";
import Hangouts from "./pages/hangouts/Hangouts";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { RootState } from "./redux";
const App = () => {
  const { search_key } = useSelector((state: RootState) => state.search_key);
  const a = useSearchParams()
  console.log(a);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/activate-user" element={<ActivateUser />} />
        <Route path={`/handouts`} element={<Hangouts />} />
      </Routes>
    </Fragment>
  );
};

export default App;
