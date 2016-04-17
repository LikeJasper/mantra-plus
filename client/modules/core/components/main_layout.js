import React, { PropTypes } from 'react';
import Helmet from './helmet';
import Navigation from './navigation';
import Footer from './footer';

const Layout = ({ content }) => (
  <div>
    <Helmet />
    <Navigation />

    <main>
      {content()}
    </main>

    <Footer />
  </div>
);

Layout.propTypes = {
  content: PropTypes.func.isRequired,
};

export default Layout;
