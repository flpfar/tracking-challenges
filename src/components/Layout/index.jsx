import React from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ current, children, footer }) => {
  return (
    <>
      <section>
        <Header title={current} />
        <div className="container">
          { children }
        </div>
      </section>
      { footer ? <Footer /> : <Navbar />}
    </>
  );
};

export default Layout;
