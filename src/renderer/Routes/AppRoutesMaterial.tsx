import { closedDrawerWidth, openedDrawerWidth, routes } from './Elements';
import { Route, Routes } from 'react-router-dom';
import TopApBar from './TopAppBar';
import AppDrawer from './AppDrawer';
import { Grid } from '@mui/material';
import { useState } from 'react';

//type Props = {}

const AppRoutesMaterial = (/*props: Props*/) => {
  const [opened, setOpened]: [Boolean, Function] = useState(true);

  const toggle = () => setOpened(!opened)

  return (
    <Grid container spacing={0}>
      <Grid item style={{width: opened ? openedDrawerWidth : closedDrawerWidth}}>
        <AppDrawer opened={opened} toggle={toggle}/>
      </Grid>
      <Grid item xs>
        <TopApBar />
        <Routes>
          {routes.map((r) => (
            <Route path={r.path} element={r.main} />
          ))}
        </Routes>
      </Grid>
    </Grid>
  );
};

export default AppRoutesMaterial;
