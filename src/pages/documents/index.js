import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DocumentsTable from "../../components/documentsTable";
import SearchBar from "../../components/searchBar";
import { getDocuments } from "../../redux/actions";
import "./documents.css";

const Documents = () => {
  const dispatch = useDispatch();

  const tokenState = useSelector((state) => state.token);

  const [token, setToken] = useState("");

  useEffect(() => setToken(tokenState), [tokenState]);

  useEffect(() => {
    if (/* token */ true) {
      dispatch(getDocuments({ token }));
    }
  }, [token]);

  return (
    <div className="documents">
      <nav className="nav-documents">
        <Link to="/login">
          <img src="img/logo.jpg" alt="JornalYa" className="logo-documents" />
        </Link>
      </nav>

      <div className="d-center-center-column documents-container">
        <SearchBar />

        <DocumentsTable />
      </div>
    </div>
  );
};

export default Documents;
