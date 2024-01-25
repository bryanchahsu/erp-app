import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
const UserTable = ({ userData }) => {
  // Check if userData is an array; if not, transform it into an array
  const dataArray = Array.isArray(userData.customers) ? userData.customers : [userData.customers];
  console.log(userData)
  console.log(dataArray)
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Total Amount Spent</Th>
          <Th>Total Orders</Th>
        </Tr>
      </Thead>
      <Tbody>
        {dataArray.map((user) => (
          <Tr key={user.id}>
            <Td>{user.id}</Td>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.total_amount_spent}</Td>
            <Td>{user.total_orders}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default UserTable;
