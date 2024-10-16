//import React from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MenuBar from '../MenuBar';
import Category from './components/Category/Category';

const Layout = ({ showHeader = true, showFooter = true, children }) => {
  return (
    <div>
      {showHeader && <Header />}
      <MenuBar/>
      <Category/>
      <main>{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

Layout.propTypes = {
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
