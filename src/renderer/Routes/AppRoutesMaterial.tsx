import React, { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';


//type Props = {}

const AppRoutesMaterial = (/*props: Props*/) => {
  const [value, setValue] = useState(false);

  const toggle = () => setValue(!value);

  const list = () => (
    <List>
      {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  )

  return (
    <React.Fragment key="key">
      <Button onClick={toggle}>PROVA</Button>
      <Drawer
        anchor="left"
        open={value}
        onClose={toggle}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default AppRoutesMaterial;
