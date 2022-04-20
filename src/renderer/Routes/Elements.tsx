import { ReactElement } from 'react';
import Page1 from 'renderer/Pages/Page1/Page1';
import Page2 from 'renderer/Pages/Page2/Page2';

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
    path: '/page1',
    text: 'Page1',
    main: <Page1 />,
  },
  {
    id: 1,
    path: '/page2',
    text: 'Page2',
    main: <Page2 />,
  },
];

export { RouteType, routes };
