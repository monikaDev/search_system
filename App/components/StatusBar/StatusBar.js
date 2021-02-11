import React from 'react';
import PropTypes from 'prop-types';

import {StatusBar as RNStatusBar} from 'react-native';
import {UIColors} from '../../utilities/Constant';

const StatusBar = (props) => {
  const {textColor, backgroundColor, ...rest} = props;
  let barStyle = 'default';

  switch (textColor) {
    case 'dark':
      barStyle = 'dark-content';
      break;

    case 'light':
      barStyle = 'light-content';
      break;
  }

  return (
    <RNStatusBar
      {...rest}
      barStyle={barStyle}
      backgroundColor={backgroundColor}
    />
  );
};

StatusBar.propTypes = {
  textColor: PropTypes.oneOf(['light', 'dark']),
};

StatusBar.defaultProps = {
  backgroundColor: UIColors.gray.medium,
  textColor: 'light',
  translucent: true,
};

export default StatusBar;
