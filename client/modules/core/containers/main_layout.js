// import React, { Component, PropTypes } from 'react';
import Layout from '../components/main_layout';
import { composeAll, useDeps } from 'mantra-core';

export const depsMapper = ({ muiTheme }) => ({
  muiTheme,
});

export default composeAll(
  useDeps(depsMapper)
)(Layout);
