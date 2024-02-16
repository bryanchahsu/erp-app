import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRCodeScanner() {
  const [scannedData, setScannedData] = useState('');
  const [error, setError] = useState(null);
  const [cameraSource, setCameraSource] = useState('user'); // 'user' for front camera, 'environment' for back camera

  const handleScan = data => {
    if (data) {
      setScannedData(data)
      console.log(data)
      ;
    }
  };

  const handleError = err => {
    console.error('QR Code Scanner Error:', err);
    setError('Failed to scan QR code. Please try again.'); // Provide user feedback
  };

  const toggleCamera = () => {
    // Toggle between front and back camera sources
    const newCameraSource = cameraSource === 'user' ? 'environment' : 'user';
    console.log('New camera source:', newCameraSource); // Log the new camera source
    setCameraSource(newCameraSource);
  };
  
  return (
    <div>
      {/* <h2>QR Code Scanner</h2> */}
      <QrReader
        key="environment"
        constraints={{ facingMode: 'environment' }}
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <button onClick={toggleCamera}>Toggle Camera</button> {/* Button to toggle camera */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Scanned Data: {scannedData}</p>
    </div>
  );
}

export default QRCodeScanner;
