import Header from "./components/Header";
import ResultSearch from "./components/ResultSearch";
import Search from "./components/Search";
import "./assets/home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div
        className="d-flex flex-col j-c-c a-i-c"
        style={{ margin: "10rem auto" }}
      >
        <Search />
        <ResultSearch />
      </div>
    </div>
  );
};

export default Home;
