// src/components/IDCard.js
import React from 'react';
import QRCode from 'qrcode.react';
import './IDCard.css';

const IDCard = ({ employee }) => {
  const { name, id, designation, phone, dob, address, aadhar, bloodGroup, permanentAddress, photo, cardHolderSignature, authoritySignature } = employee;

  return (
    <div className="id-card">
      <div className="id-card-front">
        <div className="id-card-header">
          <img src="/logo-header.png" alt="Logo" className="logo" />
          <div>
            <h2>Govt. of Uttar Pradesh</h2>
            <h3>Dept. of Health & Family Welfare</h3>
          </div>
          <img src="/nhmlogo.png" alt="LogoNew" className="logo-2" />
        </div>
        <div className="id-card-body">
          <div className="id-card-info">
            <p><strong>Employee Name:</strong> {name}</p>
            <p><strong>Employee ID:</strong> {id}</p>
            <p><strong>Designation:</strong> {designation}</p>
            <p><strong>Mob No.:</strong> {phone}</p>
            <p><strong>DOB:</strong> {dob}</p>
            <p><strong>Office Address:</strong> {address}</p>
          </div>
          <div className="id-card-photo">
            {photo && <img src={photo} alt="Employee" />}
          </div>
        </div>
        <div className="id-card-footer">
          <div>
            <p>Signature of Card Holder</p>
            {cardHolderSignature && <img src={cardHolderSignature} alt="Card Holder Signature" className="signature" />}
          </div>
          <div>
            <p>Sign Issuing Authority</p>
            {authoritySignature && <img src={authoritySignature} alt="Authority Signature" className="signature" />}
          </div>
        </div>
      </div>
      <div className="id-card-back">
        <div className="id-card-header">
            <img src="/logo-header.png" alt="Logo" className="logo" />
            <div>
                <h2>Govt. of Uttar Pradesh</h2>
                <h3>Dept. of Health & Family Welfare</h3>
            </div>
            <img src="/nhmlogo.png" alt="LogoNew" className="logo-2" />
        </div>
        <div className="id-card-back-info">
          <p><strong>Aadhar No.:</strong> {aadhar}</p>
          <p><strong>Blood Grp:</strong> {bloodGroup}</p>
          <p><strong>Permanent Add:</strong> {permanentAddress}</p>
        </div>
        <div className="id-card-back-qr">
          <QRCode value={JSON.stringify(employee)} size={150} />
        </div>
      </div>
    </div>
  );
};

export default IDCard;
