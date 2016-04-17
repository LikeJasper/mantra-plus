import React, { Component, PropTypes } from 'react';
import muiTheme from '../client/configs/muiTheme';

class Context extends Component {
  getChildContext() {
    return {
      muiTheme,
    };
  }

  render() {
    return this.props.children;
  }
}

Context.propTypes = {
  children: PropTypes.node.isRequired,
};

Context.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default Context;
