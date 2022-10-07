import React, { useEffect, useState, useRef, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { useParams } from "react-router-dom";

export default function PdfViewer() {
  const { id } = useParams();

  const canvasRef = useRef();
  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  const [pdfRef, setPdfRef] = useState();

  const renderPage = useCallback(
    (pdf = pdfRef) => {
      pdf &&
        pdf.getPage(1).then(function (page) {
          const viewport = page.getViewport({ scale: 1.5 });
          const canvas = canvasRef.current;
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          const renderContext = {
            canvasContext: canvas.getContext("2d"),
            viewport: viewport,
          };
          page.render(renderContext);
        });
    },
    [pdfRef]
  );

  useEffect(() => {
    renderPage(pdfRef);
  }, [pdfRef, renderPage]);

  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument({
      url: "https://sbox-dev.boxcustodia.com/api-test/document/5df857fa-e16f-45ab-9c4e-d8b1726cf27c",
      httpHeaders: { headers: { Token: "r2n2naaavgh4i0am98gq9" /* token */ } },
      withCredentials: true,
    });
    loadingTask.promise.then(
      (loadedPdf) => {
        setPdfRef(loadedPdf);
      },
      function (reason) {
        console.error(reason);
      }
    );
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
