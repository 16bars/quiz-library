import React from 'react';
import PropTypes from 'prop-types';

const withLabel = (WrappedComponent) => {
  const ComponentWithLabel = ({ label, id, ...rest }) => (
    <React.Fragment>
      <WrappedComponent id={id} {...rest} />
      <label htmlFor={id}>{label}</label>
    </React.Fragment>
  )
  ComponentWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }
  return ComponentWithLabel;
}

export default withLabel;

