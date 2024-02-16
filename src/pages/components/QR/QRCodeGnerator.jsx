import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QRCodeGenerator() {
  const [qrData, setQrData] = useState('');

  const generateQRCode = () => {
    // Set the data to be encoded in the QR code
    const qrData = 'https://www.google.com';
    setQrData(qrData);
  };

  return (
    <div>
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrData && <QRCode value={qrData} />}
    </div>
  );
}

export default QRCodeGenerator;
