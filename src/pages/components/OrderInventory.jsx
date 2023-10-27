// import { useState } from "react";
// import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Input } from "@chakra-ui/react";

// const InventoryTable = () => {
//   const [inventoryData, setInventoryData] = useState([
//     { id: 1, name: "Item 1", quantity: 10, price: 100 },
//     { id: 2, name: "Item 2", quantity: 5, price: 50 },
//     { id: 3, name: "Item 3", quantity: 20, price: 200 },
//     // Add more data as needed
//   ]);

//   const handleQuantityChange = (itemId, newQuantity) => {
//     setInventoryData((prevInventory) =>+++++++++
//       prevInventory.map((item) =>
//         item.id === itemId ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   return (
//     <Table variant="simple">
//       <Thead>
//         <Tr>
//           <Th>
//             <Checkbox /> {/* Checkbox for select all */}
//           </Th>
//           <Th>Item Name</Th>
//           <Th>Quantity</Th>
//           <Th>Price</Th>
//           <Th>Update Quantity</Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//         {inventoryData.map((item) => (
//           <Tr key={item.id}>
//             <Td>
//               <Checkbox /> {/* Checkbox for individual item selection */}
//             </Td>
//             <Td>{item.name}</Td>
//             <Td>{item.quantity}</Td>
//             <Td>{item.price}</Td>
//             <Td>
//               <Input
//                 type="number"
//                 value={item.quantity}
//                 onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//               />
//             </Td>
//           </Tr>
//         ))}
//       </Tbody>
//     </Table>
//   );
// };

// export default InventoryTable;

import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Input, Link, Box, Heading } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";


const OrderInventory = ({ products }) => {
  const [inventoryData, setInventoryData] = useState([]);

  

  const handleQuantityChange = (itemId, newQuantity) => {
    setInventoryData((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };


    // useEffect(() => {
    //   fetch('http://localhost:8000/products')
    //     .then(response => response.json())
    //     .then(data => {
    //       console.log(data); // Check the data structure here
    //       setInventoryData(data);
    //     })
    //     .catch(error => console.error('Error fetching data:', error));
    // }, []);

  return (
    <Box p={4} bg="#F5F5F5"
        >
      {/* Heading */}
      {/* <Heading as="h2" size="md" bg="#EDEDED" p={2} mb={2}>
        Inventory Table
      </Heading> */}

      {/* Table */}
      <Table variant="simple" w="100%">
        <Thead>
          <Tr bg="#F0F0F0">
            <Th>
              <Checkbox /> {/* Checkbox for select all */}
            </Th>
            <Th>Orders</Th>
            <Th>Date</Th>
            <Th>Customer</Th>
            <Th>Total</Th>
            <Th>Fulfillment Status</Th>
            <Th>Items</Th>
            <Th>Tags</Th>
          </Tr>
        </Thead>

        <Tbody>
          {products.map((item) => (
            <Tr
              key={item.id}
              _hover={{ boxShadow: "md" }} // Add hover shadow on each row
              cursor="pointer" // Change cursor to indicate clickable row
            >
              <Td>
                <Checkbox /> {/* Checkbox for individual item selection */}
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.id}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.orderDate}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.customerName}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.price}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.fulfillmentStatus}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.price}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.tags}</Box>
                </Link>
              </Td>
            </Tr>
          ))}
        </Tbody>


{/*         
        <Tbody>
          {inventoryData.map((item) => (
            <Tr
              key={item.id}
              _hover={{ boxShadow: "md" }} // Add hover shadow on each row
              cursor="pointer" // Change cursor to indicate clickable row
            >
              <Td>
                <Checkbox /> 
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.title}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.sku}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.quantity}</Box>
                </Link>
              </Td>
              <Td>
                <Link as={ReactLink} to={`/products/${item.id}`}>
                  <Box>{item.price}</Box>
                </Link>
              </Td>
              <Td style={{ width: "10px" }}>
                <Input
                  size="sm"
                  type="number"
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                />
              </Td>
            </Tr>
          ))}
        </Tbody> */}

      </Table>
    </Box>
  );
};

export default OrderInventory;
