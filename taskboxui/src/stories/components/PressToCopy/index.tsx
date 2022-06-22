import React, { Component } from 'react';
import PropTypes from 'prop-types';

const PressToCopy = () => {
  const onCopyClick = () => {};
  return (
    <div
      onClick={() => {
        onCopyClick();
      }}
    >
      111
    </div>
  );
};

export default PressToCopy;

PressToCopy.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

PressToCopy.defaultProps = {
  user: null,
};
