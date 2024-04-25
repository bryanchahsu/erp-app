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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Input,
  Flex,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronRightIcon } from '@chakra-ui/icons';

function Export({ data, api_type }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState('current');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
      // const response = await fetch('http://127.0.0.1:8000/orders/?all=true');
      // const url = `http://127.0.0.1:8000/search/${searchType}?q=${searchQuery}`;
      const url = `http://127.0.0.1:8000/${api_type}/?all=true`;

      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Failed to fetch all orders');
      }
      
      const data = await response.json();

      const csvContent = convertToCSV(data);

      downloadCSV(csvContent, 'all_orders.csv');
    } catch (error) {
      console.error('Error exporting all orders:', error.message);
    }
  };
  
  const exportOrdersByDateRange = async () => {
    try {
      const startDate = '2017-01-01'; // Example start date
      const endDate = '2024-04-30';   // Example end date
      let allOrders = [];
  
      // Fetch the first page of data
      let nextPage = `http://127.0.0.1:8000/orders/?order_date__gte=${startDate}&order_date__lte=${endDate}`;
      while (nextPage) {
        const response = await fetch(nextPage);
        if (!response.ok) {
          throw new Error('Failed to export data');
        }
        const data = await response.json();
  
        // Add results from the current page to the allOrders array
        allOrders = [...allOrders, ...data.results];
  
        // Check if there is a next page
        nextPage = data.next;
      }
  
      // Convert allOrders to CSV format
      const csvContent = convertToCSV(allOrders);
  
      // Download CSV
      downloadCSV(csvContent, 'orders.csv');
    } catch (error) {
      console.error('Error exporting data:', error.message);
    }
  };
  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <Button onClick={onOpen}>Export</Button>
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

            {api_type === 'orders' &&(<label>
              <input
                type="radio"
                value="date"
                checked={selectedOption === 'date'}
                onChange={handleOptionChange}
              />
              Orders by Date
            </label>
            )}
            {selectedOption === 'date' && (
              <div>
                <Flex alignItems="center" marginBottom="10px">
                  <Input
                    type="text"
                    placeholder="Start date"
                    value={startDate ? startDate.toLocaleDateString() : ''}
                    readOnly
                    marginRight="2"
                    flex="1"
                  />
                  <ChevronRightIcon boxSize={6} mt="2" mb="2" marginRight="2" />
                  <Input
                    type="text"
                    placeholder="End date"
                    value={endDate ? endDate.toLocaleDateString() : ''}
                    readOnly
                    flex="1"
                  />
                </Flex>
                <Flex justifyContent="space-between">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="MM/dd/yyyy"
                    inline
                  />
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="MM/dd/yyyy"
                    inline
                  />
                </Flex>
                <Flex justifyContent="flex-end" marginTop="10px">
                  <Button variant="outline" marginRight="2" onClick={() => {setStartDate(null); setEndDate(null);}}>
                    Clear Dates
                  </Button>
                  <Button colorScheme="teal" onClick={handleExport}>
                    Apply
                  </Button>
                </Flex>
              </div>
            )}
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
