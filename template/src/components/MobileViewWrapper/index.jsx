import React from 'react';

import { MobileWrapper } from './style';

const MobileViewWrapper = props => (
  <MobileWrapper>
    {props.children}
    <h1>Test</h1>
  </MobileWrapper>
);

export default MobileViewWrapper;
