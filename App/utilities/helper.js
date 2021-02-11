import {EMPTY_STRING, SINGLE_SPACE} from './Constant';
import {isEmptyString} from './validation';

/**
 * This function is used to get the current search key.
 * Which is currently last value
 **/
export const getCurrentSearchKey = (value) => {
  if (isEmptyString(value)) return EMPTY_STRING;
  const values = value.split(SINGLE_SPACE);
  return values[values.length - 1].trim();
};
