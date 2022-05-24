import { closedDrawerWidth, openedDrawerWidth, routes } from './Elements';
import { Route, Routes } from 'react-router-dom';
import TopApBar from './TopAppBar';
import AppDrawer from './AppDrawer';
import { Grid } from '@mui/material';
import { useState } from 'react';
import Collapse from '@mui/material/Collapse';

//type Props = {}

const AppRoutesMaterial = (/*props: Props*/) => {
  const [opened, setOpened]: [boolean, Function] = useState(true);

  const toggle = () => setOpened(!opened)

  return (
    <Grid container spacing={0}>
      <Collapse orientation="horizontal" in={opened} collapsedSize={closedDrawerWidth}>
        <Grid item style={{width: openedDrawerWidth}}>
          <AppDrawer opened={opened} toggle={toggle}/>
        </Grid>
      </Collapse>
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
