import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams , useNavigate} from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import { searchKey } from "../../../redux/actions/SearchAction";
import "./../assets/search.scss";

const Search = () => {
  const [input, setInput] = useState("");

  const [search, setSearch] = useSearchParams();

  const value = useDebounce(input, 500);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(searchKey(value));
  }, [dispatch, value]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchKey(value));
    // setSearch({q:input})
    // navigate('/handouts')
  };

  return (
    <div className="container-search">
      <div className="box-search">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            type="text"
            name="search"
            id="search"
            placeholder="جزوه ، درس ، مبحث ..."
            autoComplete="off"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
          />
          <button type="submit" className="btn-search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
