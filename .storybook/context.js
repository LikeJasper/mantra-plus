import React, { Component, PropTypes } from 'react';
import rawTheme from '../client/configs/theme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class Context extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme(rawTheme),
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
