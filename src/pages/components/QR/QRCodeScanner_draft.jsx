import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function QRCodeScanner_draft() {

    const [scannedData, setScannedData] = useState('');
    const [error, setError] = useState(null);
    const [scanning, setScanning] = useState(true); // State to control scanning
  
    const handleScan = (data) => {
      if (data) {
        setScannedData(data.text); // Extract the 'text' property from the scanned data object
        setScanning(false); // Stop scanning after successful scan
      }
    };
  
    const handleError = (err) => {
      console.error('QR Code Scanner Error:', err);
      setError('Failed to scan QR code. Please try again.'); // Provide user feedback
    };
  
    return (
      <div>
        <QrScanner
          constraints={{ video: true, facingMode: 'environment' }} // Request video access
          onScan={handleScan}
          onError={handleError}
          style={{ width: '100%' }}
          showViewFinder={scanning} // Control whether the viewfinder is shown
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {scannedData && <p>Scanned Data: {scannedData}</p>}
      </div>
    );
  }

  
export default QRCodeScanner_draft;
