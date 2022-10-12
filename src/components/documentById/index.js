import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./documentById.css";

const DocumentById = ({ handleCloseModal }) => {
  const documentState = useSelector((state) => state.document);

  const [document, setDocument] = useState(documentState);
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    setNewUrl(URL.createObjectURL(documentState));
  }, [documentState]);

  return (
    <div className="container-modal">
      <div className="modal d-center-center-column">
        <div className="header-modal d-between-center-row">
          <h1 className="title-modal">Recibos de sueldo</h1>

          <button className="close-modal" onClick={handleCloseModal}>
            Cerrar
          </button>
        </div>

        <div className="pdf-viewer">
          <div className="canvas-container">
            <iframe
              src={newUrl}
              /* srcDoc={document} */
              title="Recibo de sueldo"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="wrapper-modal"></div>
    </div>
  );
};

export default DocumentById;
