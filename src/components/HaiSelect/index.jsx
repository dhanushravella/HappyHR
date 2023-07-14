import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export const HaiSelect = ({
  value,
  onChange,
  color,
  optionsList,
  disabled,
  name,
  label,
  autoWidth,
  defaultValue,
  multiple,
  variant,
  width,
  displayEmpty,
  size,
  className,
  style,
  renderValue,
  inputProps,

  ...props
}) => {
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="test-select-label">{label}</InputLabel>
      <Select
        size={size}
        value={value}
        onChange={onChange}
        disabled={disabled}
        name={name}
        color={color}
        label={label}
        inputProps={inputProps}
        autoWidth={autoWidth}
        multiple={multiple}
        defaultValue={defaultValue}
        variant={variant}
        className={className}
        renderValue={renderValue}
        displayEmpty
        sx={{ width: width }}
      >
        {optionsList?.map((option) => (
          <MenuItem key={option.value} value={option.value} style={style}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

HaiSelect.propTypes = {
  /**
   * The selected value of the select.
   */
  value: PropTypes.any,
  /**
   * The function to call when the selected value of the select changes.
   */
  onChange: PropTypes.func,
  /**
   * An array of options for the select. Each option should have a `value` and `label` property.
   */
  optionsList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /**
   * If `true`, the select is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the select is required.
   */
  required: PropTypes.bool,
  /**
   * The name attribute of the select.
   */
  name: PropTypes.string,
  /**
   * The label of the select.
   */
  label: PropTypes.string,
  /**
   * The color of the text field.
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'error', 'warning', 'info', 'success']),
  /**
   * The size of the text field.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * If true, value must be an array and the menu will support multiple selections.
   */
  multiple: PropTypes.bool,
};
