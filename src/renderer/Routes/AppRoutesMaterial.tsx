import { useState } from 'react';
import { routes } from './Elements';
import { Route, Routes } from 'react-router-dom';
import TopApBar from './TopAppBar';
import AppDrawer from './AppDrawer';

//type Props = {}

const AppRoutesMaterial = (/*props: Props*/) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <TopApBar toggle={toggle} />
      <AppDrawer isOpen={isOpen} toggle={toggle} />

      <Routes>
        {routes.map((r) => (
          <Route path={r.path} element={r.main} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRoutesMaterial;
