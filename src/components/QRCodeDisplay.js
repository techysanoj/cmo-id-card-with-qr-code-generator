// src/components/QRCodeDisplay.js
import React from 'react';
import QRCode from 'node_modules/qrcode.react';

const QRCodeDisplay = ({ value }) => {
  return (
    <div>
      <QRCode value={value} size={256} />
    </div>
  );
};

export default QRCodeDisplay;
