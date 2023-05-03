import React from 'react';
import Header from './Header';
import Toolbar from './Toolbar';

function Layout({ children }) {
  return (
    <>
      <Toolbar />
      <div id='mainPart' className='mainPurt'>
        <Header />
        {children}
      </div>
    </>
  );
}

export default Layout;
