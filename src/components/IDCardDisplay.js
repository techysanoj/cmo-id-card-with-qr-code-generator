// src/components/IDCardDisplay.js
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IDCard from './IDCard';
import './IDCardDisplay.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const IDCardDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { employee } = location.state || {};

  if (!employee) {
    navigate('/');
    return null;
  }

  const handleDownloadPDF = () => {
    const input = document.getElementById('id-card');
    html2canvas(input, { useCORS: true, backgroundColor: null }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save(`${employee.name}-IDCard.pdf`);
    });
  };

  return (
    <div className="id-card-display">
      <div id="id-card">
        <IDCard employee={employee} />
      </div>
      <button onClick={handleDownloadPDF} className="download-button">
        Download PDF
      </button>
    </div>
  );
};

export default IDCardDisplay;
