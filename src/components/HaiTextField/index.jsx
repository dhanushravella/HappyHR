import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
// CLEAR ICON​,label position,max length,visible length,validations,error msg,class,on enter
export const HaiTextField = ({
  variant,
  label,
  name,
  defaultValue,
  autoComplete,
  helperText,
  required,
  disabled,
  type,
  error,
  multiline,
  rows,
  maxRows,
  minRows,
  size,
  margin,
  value,
  onChange,
  placeholder,
  className,
  InputProps,
  color,
  ...props
}) => {
  return (
    <>
      <TextField
        variant={variant}
        label={label}
        name={name}
        defaultValue={defaultValue}
        autoComplete={autoComplete}
        required={required}
        helperText={helperText}
        disabled={disabled}
        type={type}
        error={error}
        multiline={multiline}
        rows={rows}
        maxRows={maxRows}
        minRows={minRows}
        size={size}
        margin={margin}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        InputProps={InputProps}
        color={color}
      />
    </>
  );
};

HaiTextField.propTypes = {
  /**
   * The variant of the text field.
   */
  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
  /**
   * The label of the text field.
   */
  label: PropTypes.string,
  /**
   * The name attribute of the input element.
   */
  name: PropTypes.string,
  /**
   * The default value of the text field.
   */
  defaultValue: PropTypes.string,
  /**
   * The auto-complete attribute of the input element.
   */
  autoComplete: PropTypes.string,
  /**
   * The helper text to display below the text field.
   */
  helperText: PropTypes.string,
  /**
   * If `true`, the text field is required.
   */
  required: PropTypes.bool,
  /**
   * If `true`, the text field is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The type of the input element.
   */
  type: PropTypes.string,
  /**
   * If `true`, the text field has an error.
   */
  fullWidth: PropTypes.bool,
  /**
   * If `true`, the text field  take up the full width of its container.
   */
  error: PropTypes.bool,
  /**
   * If `true`, the text field is multiline.
   */
  multiline: PropTypes.bool,
  /**
   * The number of rows to display when `multiline` is `true`.
   */
  rows: PropTypes.number,
  /**
   * The maximum number of rows to display when `multiline` is `true`.
   */
  maxRows: PropTypes.number,
  /**
   * The minimum number of rows to display when `multiline` is `true`.
   */
  minRows: PropTypes.number,
  /**
   * The size of the text field.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The margin of the text field.
   */
  margin: PropTypes.oneOf(['none', 'dense', 'normal']),
  /**
   * The value of the text field.
   */
  value: PropTypes.string,
  /**
   * The function to call when the value of the text field changes.
   */
  onChange: PropTypes.func,
  /**
   * The placeholder text to display when the text field is empty.
   */
  placeholder: PropTypes.string,
  /**
   * The CSS class name to apply to the text field.
   */
  className: PropTypes.string,
  /**
   * The additional input props to pass to the text field.
   */
  InputProps: PropTypes.object,
  /**
   * The color of the text field.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
};

HaiTextField.defaultProps = {
  color: 'primary',
  variant: 'outlined',
  size: 'medium',
  name: 'text',
  onClick: undefined,
};
