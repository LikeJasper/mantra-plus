import React from 'react';
import { AppBar, IconMenu, IconButton, MenuItem } from 'material-ui';
import { NavigationMenu as MenuIcon } from 'material-ui/lib/svg-icons';

const NavigationMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MenuIcon /></IconButton>
    }
    targetOrigin={ { horizontal: 'right', vertical: 'top' } }
    anchorOrigin={ { horizontal: 'right', vertical: 'top' } }
  >
    <MenuItem
      key="home"
      primaryText="Home"
      linkButton
      href="/"
    />
    <MenuItem
      key="new-post"
      primaryText="New Post"
      linkButton
      href="/new-post"
    />
  </IconMenu>
);

const Navigation = () => (
  <header>
    <AppBar
      title="Mantra Voice"
      iconElementLeft={<NavigationMenu />}
    />
  </header>
);

export default Navigation;
