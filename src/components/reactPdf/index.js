import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { useSelector } from "react-redux";

const PdfViewer = () => {
  const pageNumber = 1;

  const documentState = useSelector((state) => state.document);

  const [document, setDocument] = useState(documentState);

  useEffect(() => setDocument(documentState), [documentState]);

  return (
    <div>
      {document && typeof window !== "undefined" ? (
        <Document
          file={document}
          options={{ workerSrc: "pdf.worker.js" }}
          onLoadError={console.error}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      ) : null}
    </div>
  );
};

export default PdfViewer;
