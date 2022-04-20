import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import Page1 from 'renderer/Pages/Page1/Page1';
import Page2 from 'renderer/Pages/Page2/Page2';
import TopNavBar from './TopNavBar';

function AppRoutes() {
  const routes = [
    {
      id: 0,
      path: '/page1',
      text: 'Page1',
      main: () => <Page1 />,
    },
    {
      id: 1,
      path: '/page2',
      text: 'Page2',
      main: () => <Page2 />,
    },
  ];

  return (
    <BrowserRouter>
      <Row id="row-router-header-navbar">
        <Col id="col-router-header-navbar">
          <TopNavBar />
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default AppRoutes;
