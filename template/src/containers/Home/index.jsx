import React from 'react';

import MobileViewWrapper from '../../components/MobileViewWrapper';
import { BASE_API } from '../../constants';

import Title from './style';

const Home = () => (
  <MobileViewWrapper>
    <Title>{BASE_API}</Title>
  </MobileViewWrapper>
);

export default Home;
