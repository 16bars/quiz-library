import React from 'react';
import PropTypes from 'prop-types';

// display error and correct states 

export const CheckBox = ({ onClick, id, name, value, error, success, label, ...rest }) => {
  return (
    <label>
      <input type="checkbox" id={id} name={name} value={value} onClick={onClick} error={error} success={success} label={label} />
      {label}
    </label>
  );
}

CheckBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool
};

CheckBox.defaultProps = {
  value: false
};

export default CheckBox;
