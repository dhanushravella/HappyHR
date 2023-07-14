import { HaiDatePicker } from '../components/HaiDatePicker';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiDatePicker',
  component: HaiDatePicker,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    openTo: {
      control: 'select',
      options: ['day', 'month', 'year'],
    },
    views: {
      control: 'multi-select',
      options: ['day', 'month', 'year'],
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    name: { control: 'text' },
    format: {
      control: 'select',
      options: [
        'DD/MM/YYYY',
        'MM/DD/YYYY',
        'YYYY/MM/DD',
        'DD MMM,YYYY',
        'dd MMM,YYYY',
        'DD MMM',
        'MMM YYYY',
        'MMM dd, YYYY',
        'YYYY-MM-dd',
        'YYYY',
        'MMM',
        'dd',
      ],
    },
    label: { control: { type: 'text' } },
    defaultValue: { control: { type: 'text' } },
    minDate: { control: { type: 'text' } },
    maxDate: { control: { type: 'text' } },
    helperText: { control: { type: 'text' } },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    color: 'primary',
    text: 'Button',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
    text: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    text: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    text: 'Button',
  },
};

export const MultiSize = () => (
  <Box sx={{ display: 'flex', gap: '16px' }}>
    <HaiDatePicker size="small" helperText="Small" />
    <HaiDatePicker size="medium" helperText="Medium" />
  </Box>
);

export const MultiColors = () => (
  <Box sx={{ display: 'flex', gap: '16px' }}>
    <HaiDatePicker color="primary" helperText="Primary" />
    <HaiDatePicker color="secondary" helperText="Secondary" />
    <HaiDatePicker color="success" helperText="Success" />
  </Box>
);

export const MultiFormat = () => (
  <>
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiDatePicker format="DD/MM/YYYY" />
      <HaiDatePicker format="YYYY" openTo="YYYY" />
      <HaiDatePicker format="dd MMM,YYYY" />
      <HaiDatePicker format="LL" />
    </Box>
  </>
);

export const MultiViews = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiDatePicker label={'"year", "month" and "day"'} views={['year', 'month', 'day']} />
    <HaiDatePicker label={'"month" and "year"'} views={['month', 'year']} />
    <HaiDatePicker label={'"day"'} views={['day']} />
  </Box>
);

export const MultiOpenTo = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiDatePicker label={'"year"'} openTo="year" />
    <HaiDatePicker label={'"month"'} openTo="month" views={['year', 'month', 'day']} />
  </Box>
);

export const MultiProps = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiDatePicker readOnly defaultValue={dayjs('2022-04-17')} label="Read Only" />
    <HaiDatePicker disabled label="Disabled" />
    <HaiDatePicker
      format="LL"
      defaultValue={dayjs('2022-07-17')}
      minDate={'2022-06-17'}
      maxDate={'2023-06-17'}
      helperText="Minumum date 2023-06-17 and Maximum Date 2023-06-17 "
    />
  </Box>
);
