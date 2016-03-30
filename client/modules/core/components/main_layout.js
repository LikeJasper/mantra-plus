import React, { PropTypes } from 'react';
import Navigation from './navigation';
import Footer from './footer.jsx';

const Layout = ({ content = () => null }) => (
  <div>
    <Navigation />

    <main>
      {content()}
    </main>

    <Footer />
  </div>
);

Layout.propTypes = {
  content: PropTypes.func,
};

export default Layout;
