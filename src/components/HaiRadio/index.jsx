import { Radio } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export const HaiRadio = ({
  checked,
  onChange,
  defaultValue,
  value,
  name,
  size,
  disabled,
  required,
  color,
  ...props
}) => {
  return (
    <>
      <Radio
        checked={checked}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        name={name}
        size={size}
        disabled={disabled}
        required={required}
        color={color}
      />
    </>
  );
};

HaiRadio.propTypes = {
  /**
   * If `true`, the radio button is checked.
   */
  checked: PropTypes.bool,
  /**
   * The function to call when the checked state of the radio button changes.
   */
  onChange: PropTypes.func,
  /**
   * The default value of the radio button.
   */
  defaultValue: PropTypes.any,
  /**
   * The value of the radio button.
   */
  value: PropTypes.any,
  /**
   * The name attribute of the radio button.
   */
  name: PropTypes.string,
  /**
   * The size of the radio button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * If `true`, the radio button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the radio button is required.
   */
  required: PropTypes.bool,
  /**
   * The color of the radio button.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

HaiRadio.defaultProps = {
  color: 'primary',
  size: 'medium',
  checked: true,
};
