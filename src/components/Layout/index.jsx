import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ current, footer, children }) => (
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

Layout.propTypes = {
  current: PropTypes.string.isRequired,
  footer: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  footer: false,
};

export default Layout;
