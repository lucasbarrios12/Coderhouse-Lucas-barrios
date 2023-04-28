import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';


import "./Dashboard.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className='dashboard'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <Link to="/genero/Accion">
              Acción
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/genero/Documental">
            Documentales
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/genero/Terror">
            Terror
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/genero/Drama">
            Drama
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/genero/Comedia">
            Comedia
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/genero/Romance">
            Romance
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="/genero/Suspenso">
            Suspenso
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}