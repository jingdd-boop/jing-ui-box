import React, { Component } from 'react';
import PropTypes from 'prop-types';

const BottomButton = () => {
  return <div>111</div>;
};

export default BottomButton;

BottomButton.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

BottomButton.defaultProps = {
  user: null,
};
