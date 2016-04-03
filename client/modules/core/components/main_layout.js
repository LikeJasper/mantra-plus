import React, { Component, PropTypes } from 'react';
import Navigation from './navigation';
import Footer from './footer';

class Layout extends Component {
  getChildContext() {
    const { muiTheme } = this.props;
    return {
      muiTheme,
    };
  }

  render() {
    const { content } = this.props;
    return (
      <div>
        <Navigation />

        <main>
          {content()}
        </main>

        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  content:  PropTypes.func.isRequired,
  muiTheme: PropTypes.object,
};

Layout.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default Layout;
