import React from 'react';

const Wrap = ({ children, ...rest }) => (
  <div style={{ position: 'relative' }} {...rest}>
    {children}
  </div>
);

export default Wrap;
