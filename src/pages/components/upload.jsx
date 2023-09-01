import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Image,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false);

  const handleImageUpload = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      setSelectedImage(imageUrl);
    }
  };

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
  };

  return (
    <VStack spacing={4} align="center">
      <Flex direction="column" align="center">
        <Button as="label" htmlFor="image-upload" variant="outline">
          Upload Image
        </Button>
        <Input
          type="file"
          id="image-upload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        {selectedImage && (
          <Box
            mt={4}
            _hover={{ filter: "brightness(85%)", cursor: "pointer" }}
            onClick={openImageModal}
          >
            <Text>Uploaded Image:</Text>
            <Image src={selectedImage} alt="Uploaded" maxW="500px" />
          </Box>
        )}

        <Modal isOpen={isImageModalOpen} onClose={closeImageModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Full Image</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedImage} alt="Full Image"  />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Flex>
    </VStack>
  );
};

export default ImageUpload;
