// // src/components/IDCardDisplay.js
// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import IDCard from './IDCard';
// import './IDCardDisplay.css';
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const IDCardDisplay = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { employee } = location.state || {};

//   if (!employee) {
//     navigate('/');
//     return null;
//   }

//   const handleDownloadPDF = () => {
//     const input = document.getElementById('id-card');
//     html2canvas(input, { useCORS: true, backgroundColor: null }).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 0, 0);
//       pdf.save(`${employee.name}-IDCard.pdf`);
//     });
//   };

//   return (
//     <div className="id-card-display">
//       <div id="id-card">
//         <IDCard employee={employee} />
//       </div>
//       <button onClick={handleDownloadPDF} className="download-button">
//         Download PDF
//       </button>
//     </div>
//   );
// };

// export default IDCardDisplay;


// src/components/IDCardDisplay.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IDCard from './IDCard';
import './IDCardDisplay.css';

const IDCardDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state || {};
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!employee) {
    navigate('/');
    return null;
  }

  const handleDownloadPDF = async () => {
    setIsDownloading(true);
    
    try {
      // Dynamic import for better bundle splitting
      const html2canvas = await import('html2canvas');
      const jsPDF = await import('jspdf');
      
      const frontCard = document.getElementById('id-card-front');
      const backCard = document.getElementById('id-card-back');
      
      const frontCanvas = await html2canvas.default(frontCard, {
        useCORS: true,
        backgroundColor: null,
        scale: 1,
        logging: false,
      });
      
      const backCanvas = await html2canvas.default(backCard, {
        useCORS: true,
        backgroundColor: null,
        scale: 1,
        logging: false,
      });
      
      const pdf = new jsPDF.default('p', 'mm', 'a4');
      
      // Add front side
      const frontImgData = frontCanvas.toDataURL('image/png');
      pdf.addImage(frontImgData, 'PNG', 50, 50, 108, 125);

      pdf.addPage();

      // Add back side
      const backImgData = backCanvas.toDataURL('image/png');
      pdf.addImage(backImgData, 'PNG', 50, 50, 108, 125);

      
      pdf.save(`${employee.name.replace(/\s+/g, '_')}_ID_Card.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleBackToForm = () => {
    navigate('/');
  };

  return (
    <div className="id-card-display-container">
      <div className="display-header">
        <h1>Your ID Card is Ready!</h1>
        <p>Review your ID card and download it as PDF</p>
      </div>

      <div className="card-container">
        <div className={`card-wrapper ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-inner">
            <div className="card-front">
              <IDCard employee={employee} side="front" />
            </div>
            <div className="card-back">
              <IDCard employee={employee} side="back" />
            </div>
          </div>
        </div>
        
        <button onClick={handleFlipCard} className="flip-button">
          <span className="flip-icon">🔄</span>
          Flip Card
        </button>
      </div>

      <div className="action-buttons">
        <button onClick={handleBackToForm} className="btn btn-secondary">
          <span>←</span>
          Back to Form
        </button>
        
        <button 
          onClick={handleDownloadPDF} 
          className="btn btn-primary"
          disabled={isDownloading}
        >
          {isDownloading ? (
            <>
              <div className="loading-spinner"></div>
              Generating PDF...
            </>
          ) : (
            <>
              <span>📄</span>
              Download PDF
            </>
          )}
        </button>
      </div>

      {/* Hidden elements for PDF generation */}
      <div className="pdf-elements">
        <div id="id-card-front">
          <IDCard employee={employee} side="front" />
        </div>
        <div id="id-card-back">
          <IDCard employee={employee} side="back" />
        </div>
      </div>
    </div>
  );
};

export default IDCardDisplay;