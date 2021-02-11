import {isEmptyString} from './validation';

const EMPTY_STRING = '';
const SINGLE_SPACE = ' ';

export const getCurrentSearchKey = (value) => {
  if (isEmptyString(value)) return EMPTY_STRING;
  const values = value.split(SINGLE_SPACE);
  return values[values.length - 1].trim();
};
