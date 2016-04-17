import React, { Component, PropTypes } from 'react';
import Layout from '../components/main_layout';
import { composeAll, useDeps } from 'mantra-core';

export const depsMapper = ({ muiTheme }) => ({
  muiTheme,
});

export class LayoutWithContext extends Component {
  getChildContext() {
    const { muiTheme } = this.props;
    return {
      muiTheme,
    };
  }

  render() {
    return <Layout content={ this.props.content } />;
  }
}

LayoutWithContext.propTypes = {
  content:  PropTypes.func.isRequired,
  muiTheme: PropTypes.object,
};

LayoutWithContext.childContextTypes = {
  muiTheme: PropTypes.object,
};

export default composeAll(
  useDeps(depsMapper)
)(LayoutWithContext);
