import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";
import "./searchBar.css";
import { getDocuments } from "../../redux/actions";

const SearchBar = () => {
  /*
   * Initialize dispatch
   */
  const dispatch = useDispatch();

  /*
   * Initialize global state variables
   */
  const tokenState = useSelector((state) => state.token);

  /*
   * Initialize state variables
   */
  const [token, setToken] = useState("");
  const [search, setSearch] = useState("");

  /*
   * Functions to handle state changes
   */
  const handleSearch = (e) => setSearch(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(getDocuments({ token, name: search }));
  };

  /*
   * useEffect to handle token state changes
   */
  useEffect(() => setToken(tokenState), [tokenState]);

  return (
    <div className="d-between-center-row search-bar">
      <h1 className="d-center-center-column title-documents">
        <FaArrowLeft /> Mi panel / <span>Firmar documentos</span>
      </h1>

      <form
        className="d-between-center-row container-search"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Nombre"
          className="input-search"
          onChange={handleSearch}
          value={search}
        />

        <button type="submit" className="btn-search">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
