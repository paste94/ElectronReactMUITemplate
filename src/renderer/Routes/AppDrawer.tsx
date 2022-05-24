import { Box, Divider, Drawer, ListItem, ListItemIcon, ListItemText, MenuList, Toolbar } from '@mui/material'
import React from 'react'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'
import { routes } from './Elements'
import InboxIcon from '@mui/icons-material/MoveToInbox';

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

/**
 * Creates a Drawer component for navigation using Routers
 * @param param0 isOpen defines the state od Drawer, toggle is a function that lets you toggle the Drawer
 * @returns The Drawer component
 */
const AppDrawer = () => {
  return (
    <React.Fragment >
      <Drawer variant='permanent' anchor='left'>
        <div
          role="presentation"
        >
          <Box
            sx={{ width: 200 }}
            role="presentation"
          >
            <Toolbar><h5>PatGest</h5></Toolbar>
            <Divider />
            <MenuList>
              {routes.map((prop) => {
              return (
                <ListItemLink to={prop.path} primary={prop.text} icon={prop.icon}/>
              );
            })}
            </MenuList>

          </Box>
        </div>
      </Drawer>
    </React.Fragment>
  )
}

export default AppDrawer;
