import React from 'react';
import PropTypes from 'prop-types';

export const CheckBox = ({ onClick, id, name, value, error, success, label }) => {
  return (
    <div className="checkbox">
      <input type="checkbox" id={id} name={name} value={value} onClick={onClick} error={error} success={success} label={label}></input>
    </div>
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
