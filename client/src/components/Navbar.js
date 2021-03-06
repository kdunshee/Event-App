import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu color ='gray' >
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/create">
      <Menu.Item>
        Create
      </Menu.Item>
    </Link>
  </Menu>
)

export default Navbar;