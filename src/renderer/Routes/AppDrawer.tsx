import { Box, Divider, Drawer, ListItem, ListItemIcon, ListItemText, MenuList } from '@mui/material'
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
 * Defines the type of props for AppDrawer
 */
 type Props = {
  isOpen: boolean,
  toggle: () => void
}

/**
 * Creates a Drawer component for navigation using Routers
 * @param param0 isOpen defines the state od Drawer, toggle is a function that lets you toggle the Drawer
 * @returns The Drawer component
 */
const AppDrawer = ({isOpen, toggle}: Props) => {
  return (
    <React.Fragment >
      <Drawer anchor='left' open={isOpen} onClose={toggle}>
        <div
          role="presentation"
          onClick={toggle}
          onKeyDown={toggle}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggle}
            onKeyDown={toggle}
          >
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
