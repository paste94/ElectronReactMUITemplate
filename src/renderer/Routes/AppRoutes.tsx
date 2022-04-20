import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './Elements';

/**
 * Definisce il routing delle pagine
 * @returns Il component con navbar e router delle pagine
 */
function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>PatGest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {routes.map((r) => (
                <Nav.Link id={r.path} href={r.path}>
                  {r.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        {routes.map((r) => (
          <Route path={r.path} element={r.main} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
