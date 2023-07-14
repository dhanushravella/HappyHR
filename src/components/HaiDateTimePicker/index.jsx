import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import PropTypes from 'prop-types';
import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { DateTimePicker } from '@mui/x-date-pickers';

export const HaiDateTimePicker = ({
  ampm,
  onChange,
  value,
  name,
  size,
  disabled,
  disableFuture,
  disablePast,
  minDateTime,
  maxDateTime,
  // disableHighlightToday,
  // disableIgnoringDatePartForTimeValidation,
  // disableOpenPicker,
  // displayWeekNumber,
  // fixedWeekNumber,
  // formatDensity,
  // loading,
  // maxTime,
  // minTime,
  // maxDateTime,
  // minutesStep,
  // timeSteps,
  // selectedSections,
  // timezone,
  // viewRenderers,
  // renderTimeViewClock,

  color,
  format,
  label,
  helperText,
  openTo,
  views,
  readOnly,
  defaultValue,
  maxDate,
  minDate,
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
        <DateTimePicker
          ampm={ampm}
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          format={format}
          label={label}
          slotProps={slotProps}
          openTo={openTo}
          views={views}
          readOnly={readOnly}
          defaultValue={defaultValue}
          maxDateTime={dayjs(maxDateTime)}
          minDateTime={dayjs(minDateTime)}
          // maxTime={dayjs(maxTime) || ''}
          // minTime={dayjs(minTime) || ''}
          // maxDateTime={dayjs(maxDateTime) || ''}
          // minutesStep={minutesStep}
          // viewRenderers={{
          //   hours: renderTimeViewClock || null,
          //   minutes: renderTimeViewClock || null,
          //   seconds: renderTimeViewClock || null,
          // }}
          disableFuture={disableFuture}
          disablePast={disablePast}
        />
      </LocalizationProvider>
    </>
  );
};

HaiDateTimePicker.propTypes = {
  /**
   * 12h/24h view for hour selection clock.
   */
  ampm: PropTypes.bool,
  /**
   * The function to call when the selected date changes.
   */
  onChange: PropTypes.func,
  /**
   * The value of the selected date. It can be a Date object or a string representation of a date.
   */
  value: PropTypes.any,
  /**
   * The name attribute of the date picker.
   */
  name: PropTypes.string,
  /**
   * The size of the date picker. It can be one of: 'small', 'medium', or 'large'.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   *
   * If true, the picker and text field are disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The color of the date picker. It can be one of: 'default', 'primary', or 'secondary'.
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
   * The label of the date picker.
   */
  label: PropTypes.string,
  /**
   * The default value of the date picker.
   */
  defaultValue: PropTypes.string,
  /**
   * The helper text to display below the date picker.
   */
  helperText: PropTypes.string,
  /**
   *Format of the date when rendered in the input(s). Defaults to localized format based on the used views.
   */
  format: PropTypes.string,
  /**
   * Maximal selectable date.
   */
  maxDateTime: PropTypes.string,
  /**
   * Minimal selectable date.
   */
  minDateTime: PropTypes.string,
};

HaiDateTimePicker.defaultProps = {
  color: 'primary',
  size: 'medium',
};
