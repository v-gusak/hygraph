import React from 'react';
import Header from './Header';
import Toolbar from './Toolbar';

function Layout({ children }) {
  return (
    <>
      <Toolbar />
      <Header />
      {children}
    </>
  );
}

export default Layout;
