import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Notifications,
} from '@mui/icons-material';

import Logo from 'components/commons/Logo';

import {
  HeaderContainer,
  HeaderAccountContainer,
  ToolbarContainer,
  AccountButton,
  MenuItemText,
  ProfileAvatar,
} from './styles';

const Header = (props) => {
  const { menuItems, user } = props;
  const [anchorElement, setAnchorElement] = useState(null);
  const initials = `${user?.firstName.charAt(0)}${
    user?.lastName?.charAt(0) || ''
  }`;

  const onCloseAccountMenu = () => setAnchorElement(null);

  return (
    <>
      <HeaderContainer data-testid="header" position="fixed">
        <ToolbarContainer>
          <Logo />
          {user && (
            <HeaderAccountContainer>
              <IconButton>
                <Notifications />
              </IconButton>
              {!!menuItems.length && (
                <AccountButton
                  aria-haspopup="true"
                  id="basic-button"
                  endIcon={
                    !anchorElement ? <KeyboardArrowDown /> : <KeyboardArrowUp />
                  }
                  onClick={(event) => setAnchorElement(event.currentTarget)}
                >
                  <ProfileAvatar alt={initials}>{initials}</ProfileAvatar>
                </AccountButton>
              )}
              <Menu
                anchorEl={anchorElement}
                onClose={onCloseAccountMenu}
                open={!!anchorElement}
              >
                {menuItems.map(({ key, label, onClick }) => (
                  <MenuItem
                    key={key}
                    onClick={() => {
                      onClick();
                      onCloseAccountMenu();
                    }}
                  >
                    <MenuItemText>{label}</MenuItemText>
                  </MenuItem>
                ))}
              </Menu>
            </HeaderAccountContainer>
          )}
        </ToolbarContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
