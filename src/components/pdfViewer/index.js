import React, { useEffect, useState, useRef, useCallback } from "react";
import * as pdfjsLib from "pdfjs-dist/build/pdf";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PdfViewer() {
  /*
   * Initialize id, and navigate
   */
  const { id } = useParams();
  const canvasRef = useRef();

  /*
   * Initialize global state variables
   */
  const tokenState = useSelector((state) => state.token);

  /*
   * Initialize state variables
   */
  const [token, setToken] = useState("");
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

  pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

  /*
   * useEffect to handle token and pdfRef state changes
   */
  useEffect(() => setToken(tokenState), [tokenState]);
  useEffect(() => renderPage(pdfRef), [pdfRef, renderPage]);

  /*
   * useEffect to display the pdf
   */
  useEffect(() => {
    const loadingTask = pdfjsLib.getDocument({
      url: `https://sbox-dev.boxcustodia.com/api-test/document/${id}`,
      httpHeaders: { headers: { Token: token } },
      withCredentials: true,
    });

    loadingTask.promise.then(
      (loadedPdf) => setPdfRef(loadedPdf),
      (reason) => console.error(reason)
    );
  }, []);

  return <canvas ref={canvasRef}></canvas>;
}
