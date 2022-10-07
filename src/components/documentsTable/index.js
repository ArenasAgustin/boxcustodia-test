import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./documentsTable.css";

const DocumentsTable = ({ handleGetDocument }) => {
  const dispatch = useDispatch();

  const documentsState = useSelector((state) => state.documents);
  const tokenState = useSelector((state) => state.token);

  const [documents, setDocuments] = useState([]);
  const [token, setToken] = useState("");

  const parseDate = (date) => {
    const parsedDate = new Date(date);

    const day = parsedDate.getDate();
    const month = parsedDate.getMonth() + 1;
    const year = parsedDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => setDocuments(documentsState), [documentsState]);
  useEffect(() => setToken(tokenState), [tokenState]);

  return (
    <div className="d-center-center-column container-table">
      <table className="documents-table text-center">
        <thead>
          <tr>
            <th>Colaborador</th>
            <th>Cuil</th>
            <th>Nombre documento</th>
            <th>Periodo</th>
            <th>Fecha creación</th>
            <th>Fecha asignación</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {documents.length ? (
            documents.map(({ id, attributes }) => (
              <tr key={id}>
                <td>{attributes.ownerFullName}</td>
                <td>{attributes.ownerCuil}</td>
                <td>{attributes.name}</td>
                <td>{attributes.period}</td>
                <td>{parseDate(attributes.creationDate)}</td>
                <td>{parseDate(attributes.assignmentDate)}</td>
                <td>
                  <button
                    className="see-documents"
                    onClick={() => handleGetDocument(id)}
                  >
                    <FaSearch />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center-important">
                No hay documentos para mostrar, por favor ingrese con su usuario
                y contraseña <Link to="/login">aquí</Link>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
