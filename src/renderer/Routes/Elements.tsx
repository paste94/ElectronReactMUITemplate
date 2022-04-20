import { ReactElement } from 'react';
import Page2 from 'renderer/Pages/Page2/Page2';
import Home from 'renderer/Pages/Home/Home';
import Patients from 'renderer/Pages/Patients/Patients';

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
    path: '/page2',
    text: 'Page2',
    main: <Page2 />,
  },
];

export { RouteType, routes };
