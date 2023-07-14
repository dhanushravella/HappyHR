import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PropTypes from 'prop-types';
import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { TimePicker } from '@mui/x-date-pickers';
dayjs.extend(utc);
dayjs.extend(timezone);

export const HaiTimePicker = ({
  label,
  className,
  defaultValue,
  onChange,
  format,
  ampm,
  helperText,
  disabled,
  minTime,
  maxTime,
  shouldDisableTime,
  value,
  name,
  size,
  color,
  openTo,
  views,
  readOnly,
  ...props
}) => {
  const slotProps = {
    textField: {
      helperText: helperText,
      size: size,
      color: color,
    },
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <TimePicker
          ampm={ampm}
          onChange={onChange}
          className={className}
          value={value}
          name={name}
          disabled={disabled}
          // renderInput={(params) => <input {...params} />} // Customize the input field if needed
          format={format}
          label={label}
          slotProps={slotProps}
          openTo={openTo}
          views={views}
          readOnly={readOnly}
          defaultValue={dayjs(defaultValue)}
          maxTime={dayjs().set('hour', maxTime).startOf('hour')}
          minTime={dayjs().set('hour', minTime).startOf('hour')}
          shouldDisableTime={shouldDisableTime}
        />
      </LocalizationProvider>
    </>
  );
};

HaiTimePicker.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  className: PropTypes.object,
  /**
   * 12h/24h view for hour selection clock.
   */
  ampm: PropTypes.bool,
  /**
   * The function to call when the selected time changes.
   */
  onChange: PropTypes.func,
  /**
   * The value of the selected date. It can be a Date object or a string representation of a date.
   */
  value: PropTypes.any,
  /**
   * The name attribute of the time picker.
   */
  name: PropTypes.string,
  /**
   * The size of the time picker. It can be one of: 'small', 'medium', or 'large'.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   *
   * If true, the picker and text field are disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The color of the time picker. It can be one of: 'default', 'primary', or 'secondary'.
   */
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  /**
   * The visible view. Used when the component view is controlled.
   */
  views: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   * The visible view. Used when the component view is controlled.
   */
  openTo: PropTypes.oneOf(['day', 'month', 'year']),
  /**
   *  If true, the picker and text field are Read Only.
   */
  readOnly: PropTypes.bool,
  /**
   * The label of the time picker.
   */
  label: PropTypes.string,
  /**
   * The default value of the time picker.
   */
  defaultValue: PropTypes.string,
  /**
   * The helper text to display below the time picker.
   */
  helperText: PropTypes.string,
  /**
   *Format of the time when rendered in the input(s). Defaults to localized format based on the used views.
   */
  format: PropTypes.string,
  /**
   * Maximal selectable Time in hour.
   */
  maxTime: PropTypes.string,
  /**
   * Minimal selectable Time in hour..
   */
  minTime: PropTypes.string,
  /**
   * function(value: TDate, view: TimeView) => boolean
value: The value to check.
view: The clock type of the timeValue.
returns (boolean): If true the time will be disabled.
   */
  shouldDisableTime: PropTypes.func,
};

HaiTimePicker.defaultProps = {
  color: 'primary',
  size: 'medium',
};
