import React from 'react';
import PropTypes from 'prop-types';

import {StatusBar as RNStatusBar} from 'react-native';

const StatusBar = (props) => {
  const {textColor, ...rest} = props;
  let barStyle = 'default';

  switch (textColor) {
    case 'dark':
      barStyle = 'dark-content';
      break;

    case 'light':
      barStyle = 'light-content';
      break;
  }

  return <RNStatusBar {...rest} barStyle={barStyle} />;
};

StatusBar.propTypes = {
  textColor: PropTypes.oneOf(['light', 'dark']),
};

StatusBar.defaultProps = {
  backgroundColor: 'white',
  textColor: 'light',
  translucent: true,
};

export default StatusBar;
