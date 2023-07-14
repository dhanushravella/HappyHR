import { HaiDateTimePicker } from '../components/HaiDateTimePicker';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiDateTimePicker',
  component: HaiDateTimePicker,
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
      options: ['day', 'month', 'year', 'hours', 'meridiem', 'minutes', 'seconds'],
    },
    views: {
      control: 'multi-select',
      options: ['day', 'month', 'year', 'hours', 'meridiem', 'minutes', 'seconds'],
    },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    ampm: { control: 'boolean' },
    disablePast: { control: 'boolean' },
    disableFuture: { control: 'boolean' },
    name: { control: 'text' },
    format: {
      control: 'select',
      options: [
        'DD/MM/YYYY HH:mm',
        'MM/DD/YYYY HH:mm',
        'YYYY/MM/DD HH:mm',
        'DD MMM,YYYY HH:mm',
        'dd MMM,YYYY HH:mm',
        'DD MMM HH:mm',
        'MMM YYYY HH:mm',
        'MMM dd, YYYY HH:mm',
        'YYYY-MM-dd HH:mm',
        'YYYY HH:mm',
        'MMM HH:mm',
        'dd HH:mm',
      ],
    },
    label: { control: { type: 'text' } },
    defaultValue: { control: { type: 'text' } },
    maxDateTime: { control: { type: 'text' } },
    minDateTime: { control: { type: 'text' } },
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
    <HaiDateTimePicker size="small" helperText="Small" />
    <HaiDateTimePicker size="medium" helperText="Medium" />
  </Box>
);

export const MultiColors = () => (
  <Box sx={{ display: 'flex', gap: '16px' }}>
    <HaiDateTimePicker color="primary" helperText="Primary" />
    <HaiDateTimePicker color="secondary" helperText="Secondary" />
    <HaiDateTimePicker color="success" helperText="Success" />
  </Box>
);

export const MultiFormat = () => (
  <>
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiDateTimePicker format="YYYY-MM-DD HH:mm:ss" />
      <HaiDateTimePicker format="YYYY-MM-dd HH:mm:ss" />
    </Box>
    <br />
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiDateTimePicker format="MM/dd/YYYY HH:mm:ss" />
      <HaiDateTimePicker format="dd/MM/YYYY HH:mm:ss" />
      <HaiDateTimePicker format="LL" />
    </Box>
  </>
);

export const MultiViews = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiDateTimePicker label={'"year", "month" and "day"'} views={['year', 'month', 'day']} />
    <HaiDateTimePicker label={'"month" and "year"'} views={['month', 'year']} />
    <HaiDateTimePicker label={'"day"'} views={['day']} />
  </Box>
);

export const MultiOpenTo = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiDateTimePicker label={'"year"'} openTo="year" />
    <HaiDateTimePicker label={'"month"'} openTo="month" views={['year', 'month', 'day']} />
  </Box>
);

export const MultiProps = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiDateTimePicker readOnly defaultValue={dayjs('2022-04-17')} label="Read Only" />
    <HaiDateTimePicker disabled label="Disabled" />
  </Box>
);
