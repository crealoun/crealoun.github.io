import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFViewerX = ({ src }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    // Use fetch to load the PDF
    fetch(src)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load PDF');
        }
        return response.blob();
      })
      .then(blob => {
        // Use blob data to create a blob URL
        const blobUrl = URL.createObjectURL(blob);
        return blobUrl;
      })
      .then(url => {
        // Set the URL to the Document component
        setPdfError(null);
        return url;
      })
      .catch(error => {
        // Handle errors
        console.error('Error loading PDF:', error);
        setPdfError(error.message || 'Failed to load PDF');
      });
  }, [src]); // Re-run effect when src changes

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer">
      {pdfError ? (
        <p>Error: {pdfError}</p>
      ) : (
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} width={400} />
        </Document>
      )}
      <div className="page-nav">
        <p>
          Pagina {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Siguiente
        </button>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Anterior
        </button>
      </div>
    </div>
  );
};

export default PDFViewerX;