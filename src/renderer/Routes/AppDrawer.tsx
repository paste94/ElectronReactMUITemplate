import { Box, Collapse, Divider, Drawer, Grid, IconButton, ListItem, ListItemIcon, ListItemText, MenuList, Toolbar } from '@mui/material'
import React, { useState } from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { closedDrawerWidth, openedDrawerWidth, routes } from './Elements'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


/**
 * Defines the type of props for ListItemLink
 */
interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

/**
 * Creates a component similar to ListTiem but can be used as a NavLink
 * @param props Props for the Component
 * @returns A component which is similar to ListTiem but can be used as a NavLink
 */
function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
        itemProps,
        ref,
      ) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

type Props = {
  opened: boolean,
  toggle: () => void,
}

/**
 * Creates a Drawer component for navigation using Routers
 * @param param0 isOpen defines the state od Drawer, toggle is a function that lets you toggle the Drawer
 * @returns The Drawer component
 */
const AppDrawer = (props: Props) => {
  const {opened, toggle} = props

  return (
    <React.Fragment >
      <Drawer variant='permanent' anchor='left'>
        <div
          role="presentation"
        >
          <Collapse in={opened} collapsedSize={closedDrawerWidth} orientation='horizontal'>
            <Box
              sx={{ width: openedDrawerWidth }}
              role="presentation"
            >
              <Toolbar>
                <Grid
                  container
                  justifyContent="space-between"
                  alignContent='left'
                  >
                  { opened &&
                    <Grid item>
                      <h5 style={{marginTop: '0.5rem'}}>PatGest</h5>
                    </Grid>
                  }
                  <Grid item>
                    <IconButton edge="start" style={{color:'#b0bec5'}} title={opened ? 'Comprimi' : 'Espandi'} onClick={toggle}>
                      {opened ? <KeyboardArrowLeftIcon/> : <KeyboardArrowRightIcon/>}
                    </IconButton>
                  </Grid>
                </Grid>
              </Toolbar>
              <Divider />
              <MenuList>
                {routes.map((prop) => {
                return (
                  <ListItemLink to={prop.path} primary={prop.text} icon={prop.icon}/>
                );
              })}
              </MenuList>
            </Box>
          </Collapse>
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default AppDrawer;
