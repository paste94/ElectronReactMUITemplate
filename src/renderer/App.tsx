import { MemoryRouter as Router, Routes, Route, HashRouter } from 'react-router-dom';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutesMaterial from './Routes/AppRoutesMaterial';

export default function App() {
  return (
    <HashRouter>
      <AppRoutesMaterial />
    </HashRouter>
  );
}
