import React from 'react';
import PropTypes from 'prop-types';
import { withLabel } from '../../decorators';

export const Checkbox = ({ onClick, id, name, value, error, success, label, ...rest }) => {
  return (
    /* @todo error and success states still need to be handled */
    < input type="checkbox" id={id} name={name} value={value} onClick={onClick} error={error} success={success} label={label} />
  );
}

Checkbox.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool
};

Checkbox.defaultProps = {
  value: false
};

export const LabeledCheckbox = withLabel(Checkbox);
