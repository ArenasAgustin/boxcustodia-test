import PdfViewer from "../reactPdf";
import "./documentById.css";

const DocumentById = ({ handleCloseModal }) => {
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
          <div className="canvas_container">
            {typeof window !== "undefined" ? <PdfViewer /> : null}
          </div>
        </div>
      </div>

      <div className="wrapper-modal"></div>
    </div>
  );
};

export default DocumentById;
