import React from 'react';
import {List, ListItem} from "@chakra-ui/react"
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <List color = "white" fontSize= "1.1em">
            <ListItem>
                <NavLink to ="/">
                    Home
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to ="/Orders">
                    Orders
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to ="/Customers">
                    Customers
                </NavLink>
            </ListItem>

            <ListItem>
                <NavLink to ="/Analytics">
                    Create
                </NavLink>
            </ListItem>

        </List>

    );
}

export default Sidebar;