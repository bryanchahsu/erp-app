import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
} from "@chakra-ui/react";

const Export = () => {
  const [isExportModalOpen, setExportModalOpen] = useState(false);

  const openExportModal = () => {
    setExportModalOpen(true);
  };

  const closeExportModal = () => {
    setExportModalOpen(false);
  };

  const handleExportToCSV = () => {
    // Logic to export data to CSV file
    console.log("Exporting to CSV...");
    // Replace the above line with actual export logic
  };

  return (
    <>
      <Button onClick={openExportModal}>Export</Button>

      <Modal isOpen={isExportModalOpen} onClose={closeExportModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Export Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Button onClick={handleExportToCSV} colorScheme="blue">
                Export to CSV
              </Button>
              {/* Add more export options here */}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Export;
