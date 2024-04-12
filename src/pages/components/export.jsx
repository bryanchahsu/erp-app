import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

function Export({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState('current');

  const handleExport = () => {
    if (selectedOption === 'current') {
      exportCurrentPageData(data);
    } else if (selectedOption === 'all') {
      exportAllOrders();
    } else if (selectedOption === 'date') {
      exportOrdersByDateRange();
    }
    onClose();
  };

  const exportCurrentPageData = (data) => {
    if (!data || data.length === 0) {
      console.error('No data to export');
      return;
    }

    const csvContent = convertToCSV(data);
    downloadCSV(csvContent, 'current_page_data.csv');
  };

  const convertToCSV = (data) => {
    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));

    for (const row of data) {
      const values = headers.map((header) => {
        const escapedValue = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escapedValue}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  const downloadCSV = (csvContent, filename) => {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  const exportAllOrders = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/orders/?all=true');
      if (!response.ok) {
        throw new Error('Failed to fetch all orders');
      }
      const orders = await response.json();
      const csvContent = convertToCSV(orders);
      downloadCSV(csvContent, 'all_orders.csv');
    } catch (error) {
      console.error('Error exporting all orders:', error.message);
    }
  };

  const exportOrdersByDateRange = () => {
    // Logic to export orders by date range as CSV
    console.log('Exporting orders by date range as CSV...');
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Button onClick={onOpen}>Export to CSV</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Export Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <label>
              <input
                type="radio"
                value="current"
                checked={selectedOption === 'current'}
                onChange={handleOptionChange}
              />
              Current Page
            </label>
            <label>
              <input
                type="radio"
                value="all"
                checked={selectedOption === 'all'}
                onChange={handleOptionChange}
              />
              All Orders
            </label>
            <label>
              <input
                type="radio"
                value="date"
                checked={selectedOption === 'date'}
                onChange={handleOptionChange}
              />
              Orders by Date
            </label>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleExport}>
              Export
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Export;
