import React, { useState } from 'react';
import { IconButton, ListItemIcon, ListItemText } from '@mui/material';
import { Check, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

import { SelectButtonContainer, Menu, MenuItem } from './styles';

const SelectMenu = (props) => {
  const { items, selectedValue, onChange } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (value) => {
    if (selectedValue.value !== value) onChange(value);
    handleClose();
  };

  return (
    <>
      <SelectButtonContainer data-testid="select-menu" onClick={handleClick}>
        <IconButton
          onClick={handleClick}
          disableRipple
          data-testid="select-menu-button"
        >
          <span>{selectedValue.label}</span>
          {!anchorEl ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
        </IconButton>
      </SelectButtonContainer>
      <Menu
        anchorEl={anchorEl}
        data-testid="menu-select-menu"
        open={open}
        onClose={handleClose}
        onBackdropClick={handleClose}
        variant="menu"
      >
        {items.map(({ label, value }) => (
          <MenuItem
            onClick={() => handleMenuItemClick(value)}
            key={label}
            selected={selectedValue.value === value}
            disableRipple
          >
            {selectedValue.value === value && (
              <ListItemIcon>
                <Check fontSize="small" />
              </ListItemIcon>
            )}
            <ListItemText inset={selectedValue.value !== value}>
              {label}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectMenu;
