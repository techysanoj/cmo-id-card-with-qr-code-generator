// src/components/IDCard.jsx
import React from 'react';
import QRCode from 'qrcode.react';
import './IDCard.css';

const IDCard = ({ employee, side = 'front' }) => {
  const {
    name,
    id,
    designation,
    phone,
    dob,
    address,
    aadhar,
    bloodGroup,
    permanentAddress,
    photo,
    cardHolderSignature,
    authoritySignature
  } = employee;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatAadhar = (aadharNumber) => {
    return aadharNumber.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
  };

  const qrData = {
    name,
    id,
    designation,
    phone,
    dob,
    aadhar,
    bloodGroup
  };

  if (side === 'front') {
    return (
      <div className="id-card front-side">
        <div className="card-background">
          <div className="geometric-pattern"></div>
          <div className="gradient-overlay"></div>
        </div>
        
        <div className="card-content">
          <div className="card-header">
            <div className="logo-section">
              <div className="logo-placeholder">🏛️</div>
            </div>
            <div className="header-text">
              <h2>Govt. of Uttar Pradesh</h2>
              <h3>Dept. of Health & Family Welfare</h3>
              <div className="card-type">EMPLOYEE ID CARD</div>
            </div>
            <div className="logo-section">
              <div className="logo-placeholder">🏥</div>
            </div>
          </div>

          <div className="card-body">
            <div className="employee-info">
              <div className="info-item">
                <span className="label">Name:</span>
                <span className="value">{name}</span>
              </div>
              <div className="info-item">
                <span className="label">ID:</span>
                <span className="value">{id}</span>
              </div>
              <div className="info-item">
                <span className="label">Designation:</span>
                <span className="value">{designation}</span>
              </div>
              <div className="info-item">
                <span className="label">Mobile:</span>
                <span className="value">{phone}</span>
              </div>
              <div className="info-item">
                <span className="label">DOB:</span>
                <span className="value">{formatDate(dob)}</span>
              </div>
              <div className="info-item address-item">
                <span className="label">Office Address:</span>
                <span className="value">{address}</span>
              </div>
            </div>
            
            <div className="photo-section">
              <div className="photo-frame">
                {photo && <img src={photo} alt="Employee" className="employee-photo" />}
              </div>
            </div>
          </div>

          <div className="card-footer">
            <div className="signature-section">
              <div className="signature-item">
                <div className="signature-image">
                  {cardHolderSignature && (
                    <img src={cardHolderSignature} alt="Card Holder Signature" />
                  )}
                </div>
                <div className="signature-label">Card Holder</div>
              </div>
              <div className="signature-item">
                <div className="signature-image">
                  {authoritySignature && (
                    <img src={authoritySignature} alt="Authority Signature" />
                  )}
                </div>
                <div className="signature-label">Issuing Authority</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="id-card back-side">
      <div className="card-background">
        <div className="geometric-pattern"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      <div className="card-content">
        <div className="card-header">
          <div className="logo-section">
            <div className="logo-placeholder">🏛️</div>
          </div>
          <div className="header-text">
            <h2>Govt. of Uttar Pradesh</h2>
            <h3>Dept. of Health & Family Welfare</h3>
          </div>
          <div className="logo-section">
            <div className="logo-placeholder">🏥</div>
          </div>
        </div>

        <div className="card-body back-body">
          <div className="back-info">
            <div className="info-item">
              <span className="label">Aadhar No.:</span>
              <span className="value">{formatAadhar(aadhar)}</span>
            </div>
            <div className="info-item">
              <span className="label">Blood Group:</span>
              <span className="value blood-group">{bloodGroup}</span>
            </div>
            <div className="info-item address-item">
              <span className="label">Permanent Address:</span>
              <span className="value">{permanentAddress}</span>
            </div>
          </div>
          
          <div className="qr-section">
            <div className="qr-container">
              <QRCode 
                value={JSON.stringify(qrData)} 
                size={120}
                level="M"
                includeMargin={true}
                renderAs="canvas"
              />
            </div>
            <div className="qr-label">Scan for Details</div>
          </div>
        </div>

        <div className="card-footer back-footer">
          <div className="validity-section">
            <div className="validity-text">
              <span>Valid Till: {new Date(new Date().setFullYear(new Date().getFullYear() + 5)).toLocaleDateString('en-IN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;