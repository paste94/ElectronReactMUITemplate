import { MemoryRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutesMaterial from './Routes/AppRoutesMaterial';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutesMaterial />
    </BrowserRouter>
  );
}
