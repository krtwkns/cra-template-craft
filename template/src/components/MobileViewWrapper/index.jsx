import React from 'react';

import { MobileWrapper } from './style';

const MobileViewWrapper = props => (
  <MobileWrapper>{props.children}</MobileWrapper>
);

export default MobileViewWrapper;
