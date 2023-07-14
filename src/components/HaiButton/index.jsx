import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

/**
 * Primary UI component for user interaction
 */
export const HaiButton = ({
  color,
  size,
  text,
  variant,
  disabled,
  required,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <Button props>
      {text}
    </Button>
  );
};

HaiButton.propTypes = {
  /**
   * What color to use? primary | secondary | error | success
   */
  color: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,
  /**
   * If `true`, the  button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  button is required.
   */
  required: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

HaiButton.defaultProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
  onClick: undefined,
};
