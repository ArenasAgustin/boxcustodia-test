import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import "./documentsTable.css";

const DocumentsTable = () => {
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
          {documents.map((document) => (
            <tr key={document.id}>
              <td>{document.attributes.ownerFullName}</td>
              <td>{document.attributes.ownerCuil}</td>
              <td>{document.attributes.name}</td>
              <td>{document.attributes.period}</td>
              <td>{parseDate(document.attributes.creationDate)}</td>
              <td>{parseDate(document.attributes.assignmentDate)}</td>
              <td>
                <button className="see-documents">
                  <FaSearch />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DocumentsTable;
