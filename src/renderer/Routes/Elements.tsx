import { ReactElement } from 'react';
import Home from 'renderer/Pages/Home/Home';
import Patients from 'renderer/Pages/Patients/Patients';
import Settings from 'renderer/Pages/Settings/Settings';

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
  },
  {
    id: 0,
    path: '/patients',
    text: 'Patients',
    main: <Patients />,
  },
  {
    id: 1,
    path: '/settings',
    text: 'Settings',
    main: <Settings />,
  },
];

export { RouteType, routes };
