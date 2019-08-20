import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ShoppingCart from '../ShoppingCart';

import './Navbar.css';

const Header = () => (
  <AppBar position="static">
    <Toolbar className="navbar">
      <Typography variant="h6">Shop</Typography>
      <ShoppingCart />
    </Toolbar>
  </AppBar>
);

export default Header;
