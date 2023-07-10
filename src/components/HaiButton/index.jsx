import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

/**
 * Primary UI component for user interaction
 */
export const HaiButton = ({ color, size, text, variant, ...props }) => {
  return (
    <Button variant={variant} color={color} size={size}>
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
