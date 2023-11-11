// import { useState, useEffect } from "react";
// import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Input, Link, Box, Heading } from "@chakra-ui/react";
// import { Link as ReactLink } from "react-router-dom";

// const OrderInventory = ({ products }) => {
//   const [inventoryData, setInventoryData] = useState([]);

//   // Calculate and set the aggregated quantity for each item
//   useEffect(() => {
//     const updatedInventoryData = products.map((item) => {
//       // Calculate the aggregated quantity for each item
//       const totalQuantity = item.items.reduce((acc, product) => acc + product.quantity, 0);

//       return {
//         ...item,
//         totalQuantity: totalQuantity,
//       };
//     });

//     setInventoryData(updatedInventoryData);
//   }, [products]);

//   return (
//     <Box p={4} bg="#F5F5F5">
//       {/* Table */}
//       <Table variant="simple" w="100%">
//         <Thead>
//           <Tr bg="#F0F0F0">
//             <Th>
//               <Checkbox /> {/* Checkbox for select all */}
//             </Th>
//             <Th>Orders</Th>
//             <Th>Date</Th>
//             <Th>Customer</Th>
//             <Th>Total</Th>
//             <Th>Fulfillment Status</Th>
//             <Th>Items</Th>
//             <Th>Tags</Th>
//             <Th>Total Quantity</Th> {/* New column for aggregated quantity */}
//           </Tr>
//         </Thead>

//         <Tbody>
//           {inventoryData.map((item) => (
//             <Tr
//               key={item.id}
//               _hover={{ boxShadow: "md" }}
//               cursor="pointer"
//             >
//               <Td>
//                 <Checkbox />
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.id}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.orderDate}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.customerName}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.total}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.fulfillmentStatus}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.price}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.tags}</Box>
//                 </Link>
//               </Td>
//               <Td>
//                 <Link as={ReactLink} to={`/orders/${item.id}`}>
//                   <Box>{item.totalQuantity}</Box> {/* Display the aggregated quantity */}
//                 </Link>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// };

// export default OrderInventory;


import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Checkbox, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

const OrderInventory = ({ products }) => {
  const [inventoryData, setInventoryData] = useState([]);

  // Calculate and set the aggregated quantity for each item
  useEffect(() => {
    const updatedInventoryData = products.map((item) => {
      // Check if item.items is defined and not null
      const items = item.items || [];
  
      // Calculate the aggregated quantity for each item
      const totalQuantity = items.reduce((acc, product) => acc + product.quantity, 0);
  
      return {
        ...item,
        totalQuantity: totalQuantity,
      };
    });
  
    setInventoryData(updatedInventoryData);
  }, [products]);
  return (
    <Box p={4} bg="#F5F5F5">
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
            <Th>Total Quantity</Th> {/* New column for aggregated quantity */}
          </Tr>
        </Thead>

        <Tbody>
          {inventoryData.map((item) => (
            <Tr
              key={item.id}
              _hover={{ boxShadow: "md" }}
              cursor="pointer"
            >
              <Td>
                <Checkbox />
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.id}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.orderDate}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.customerName}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.total}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.fulfillmentStatus}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.price}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.tags}</Box>
                </ChakraLink>
              </Td>
              <Td>
                <ChakraLink as={ReactLink} to={`/orders/${item.id}`}>
                  <Box>{item.totalQuantity}</Box> {/* Display the aggregated quantity */}
                </ChakraLink>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default OrderInventory;


