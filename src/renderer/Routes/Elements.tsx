import { ReactElement } from 'react';
import Home from 'renderer/Pages/Home/Home';
import Patients from 'renderer/Pages/Patients/Patients';
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
    path: '/patients',
    text: 'Patients',
    main: <Patients />,
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

export { RouteType, routes };
