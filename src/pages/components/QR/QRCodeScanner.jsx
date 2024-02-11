import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

function QRCodeScanner() {
  const [scannedData, setScannedData] = useState('');
  const [error, setError] = useState(null);

  const handleScan = data => {
    if (data) {
      setScannedData(data);
      setError(null); // Reset error if scanning succeeds
    }
  };

  const handleError = err => {
    console.error('QR Code Scanner Error:', err);
    setError('Failed to scan QR code. Please try again.'); // Provide user feedback
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {scannedData && <p>Scanned Data: {scannedData}</p>}
    </div>
  );
}

export default QRCodeScanner;
