import React from 'react';
import ReactHelmet from 'react-helmet';

const Helmet = () => (
  <ReactHelmet
    title="@AppName"
    link={[
      {
        rel:  'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins',
      },
    ]}
  />
);

export default Helmet;
