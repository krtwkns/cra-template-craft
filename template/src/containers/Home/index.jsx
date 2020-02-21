import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as userAction from '../../redux/actions/user';
import MobileViewWrapper from '../../components/MobileViewWrapper';
import { BASE_API } from '../../constants';
import isEmpty from '../../utils/isEmpty';

import Title from './style';

const Home = props => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    props.requestUser(1);
  }, []);

  useEffect(() => {
    if (!isEmpty(props.user)) {
      setUserData(props.user);
    }
  }, [props.user]);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <MobileViewWrapper>
      <Title>{BASE_API}</Title>
    </MobileViewWrapper>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  requestUser: payload => dispatch(userAction.userRequest(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
