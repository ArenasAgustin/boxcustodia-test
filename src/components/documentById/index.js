import PdfViewer from "../pdfViewer";
import "./documentById.css";

const DocumentById = ({ handleOpenModal }) => {
  return (
    <div className="container-modal">
      <div className="modal d-center-center-column">
        <div className="header-modal d-between-center-row">
          <h1 className="title-modal">Recibos de sueldo</h1>

          <button className="close-modal" onClick={handleOpenModal}>
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
