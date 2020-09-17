import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';

const Layout = ({ current, children }) => {
  return (
    <>
      <section>
        <Header title={current} />
        <div className="container">
          { children }
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default Layout;