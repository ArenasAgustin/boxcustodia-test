import { FaArrowLeft } from "react-icons/fa";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="d-between-center-row search-bar">
      <h1 className="d-center-center-column title-documents">
        <FaArrowLeft /> Mi panel / <span>Firmar documentos</span>
      </h1>

      <form className="d-between-center-row container-search">
        <input type="text" placeholder="Nombre" className="input-search" />

        <button type="submit" className="btn-search">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
