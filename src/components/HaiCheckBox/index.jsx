import { Checkbox } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export const HaiCheckBox = ({
  checked,
  onChange,
  defaultChecked,
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
      <Checkbox
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked}
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

HaiCheckBox.propTypes = {
  /**
   * If `true`, the checkbox button is checked.
   */
  checked: PropTypes.bool,
  /**
   * The function to call when the checked state of the checkbox button changes.
   */
  onChange: PropTypes.func,
  /**
   * The default value of the checkbox button.
   */
  defaultChecked: PropTypes.any,
  /**
   * The value of the checkbox button.
   */
  value: PropTypes.any,
  /**
   * The name attribute of the checkbox button.
   */
  name: PropTypes.string,
  /**
   * The size of the checkbox button.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * If `true`, the checkbox button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the checkbox button is required.
   */
  required: PropTypes.bool,
  /**
   * The color of the checkbox button.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
};

HaiCheckBox.defaultProps = {
  color: 'primary',
  size: 'medium',
  checked: true,
};
