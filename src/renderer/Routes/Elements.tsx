import { ReactElement } from 'react';
import Home from 'renderer/Pages/Home/Home';
import Users from 'renderer/Pages/Users/Users';
import Settings from 'renderer/Pages/Settings/Settings';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';


/**
 * Definisce il tipo dell'oggetto che deve
 * essere utilizzato per creare una entry nella
 * TopNavBar e che crea una pagina di routing.
 */
type RouteType = {
  id: number;
  path: string;
  text: string;
  main: ReactElement;
  icon: ReactElement;
};

/**
 * Array che indica tutte le pagine possibili dell'app.
 */
const routes: Array<RouteType> = [
  {
    id: 0,
    path: '/',
    text: 'Home',
    main: <Home />,
    icon: <HomeIcon />,
  },
  {
    id: 1,
    path: '/users',
    text: 'Users',
    main: <Users />,
    icon: <PersonIcon />,
  },
  {
    id: 2,
    path: '/settings',
    text: 'Settings',
    main: <Settings />,
    icon: <SettingsIcon />,
  },
];

const getText = (path: String) => {
  let ret = 'ERROR: Element not found!!!'
  routes.forEach((element) => {
    if (element.path === path)
      ret = element.text
  })
  return ret
}

const openedDrawerWidth = 200;
const closedDrawerWidth = 55;

export { RouteType, routes, getText, openedDrawerWidth, closedDrawerWidth};
