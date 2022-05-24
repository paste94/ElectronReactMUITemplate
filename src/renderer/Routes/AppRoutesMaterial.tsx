import { routes } from './Elements';
import { Route, Routes } from 'react-router-dom';
import TopApBar from './TopAppBar';
import AppDrawer from './AppDrawer';
import { Grid } from '@mui/material';

//type Props = {}

const AppRoutesMaterial = (/*props: Props*/) => {
  return (
    <Grid container spacing={0}>
      <Grid item style={{width: '200px'}}>
        <AppDrawer />
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
