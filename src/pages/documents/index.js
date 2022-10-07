import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DocumentById from "../../components/documentById";
import DocumentsTable from "../../components/documentsTable";
import SearchBar from "../../components/searchBar";
import { getDocument, getDocuments } from "../../redux/actions";
import setPath from "../../utils";
import "./documents.css";

const Documents = () => {
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
  const [openModal, setOpenModal] = useState(false);

  /*
   * Functions to handle state changes
   */
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setPath();
  };
  const handleGetDocument = (id) => {
    handleOpenModal();

    dispatch(getDocument({ id, token }));

    setPath(id);
  };

  /*
   * useEffect to handle token state changes
   */
  useEffect(() => setToken(tokenState), [tokenState]);

  /*
   * useEffect to get documents
   */
  useEffect(() => {
    if (token) {
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

        <DocumentsTable handleGetDocument={handleGetDocument} />

        {openModal ? (
          <DocumentById handleCloseModal={handleCloseModal} />
        ) : null}
      </div>
    </div>
  );
};

export default Documents;
