import { HaiTimePicker } from '../components/HaiTimePicker';
import { Box } from '@mui/material';

export default {
  title: 'HaiTimePicker',
  component: HaiTimePicker,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    ampm: {
      control: {
        type: 'boolean',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    onChange: {
      control: {
        type: null,
      },
    },
    shouldDisableTime: {
      control: {
        type: null,
      },
    },
    format: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    minTime: {
      control: {
        type: 'text',
      },
    },
    maxTime: {
      control: {
        type: 'text',
      },
    },
    shouldDisableTime: { control: null },
    value: {
      control: {
        type: 'text',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    openTo: {
      control: 'select',
      options: ['hours', 'minutes', 'seconds'],
    },
    views: {
      control: 'multi-select',
      options: ['hours', 'minutes', 'seconds'],
    },
    readOnly: { control: 'boolean' },
  },
};

export const Primary = {
  args: {
    color: 'primary',
    label: 'Select Time',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
    label: 'Select Time',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Select Time',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Select Time',
  },
};

export const MultiSize = () => (
  <Box sx={{ display: 'flex', gap: '16px' }}>
    <HaiTimePicker size="small" helperText="Small" />
    <HaiTimePicker size="medium" helperText="Medium" />
    <HaiTimePicker size="large" helperText="large" />
  </Box>
);

export const MultiColors = () => (
  <Box sx={{ display: 'flex', gap: '16px' }}>
    <HaiTimePicker color="primary" helperText="Primary" />
    <HaiTimePicker color="secondary" helperText="Secondary" />
    <HaiTimePicker color="success" helperText="Success" />
  </Box>
);

export const MultiFormat = () => (
  <>
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiTimePicker
        format="hh:mm:ss"
        views={['hours', 'minutes', 'seconds']}
        ampm={true}
        label={'"hours", "minutes" and "seconds"'}
      />
      <HaiTimePicker
        format="hh:mm"
        views={['hours', 'minutes']}
        ampm={true}
        label={'"hours", "minutes"'}
      />
      <HaiTimePicker
        format="mm:ss"
        views={['minutes', 'seconds']}
        ampm={true}
        label={'"minutes" and "seconds"'}
      />
      <HaiTimePicker format="hh" views={['hours']} ampm={true} label={'"hours"'} />
    </Box>
  </>
);

export const MultiViews = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiTimePicker
      label={'"hours", "minutes" and "seconds"'}
      views={['hours', 'minutes', 'seconds']}
    />
    <HaiTimePicker label={'"minutes" and "seconds"'} views={['minutes', 'seconds']} />
    <HaiTimePicker label={'"hours"'} views={['hours']} />
  </Box>
);

export const MultiProps = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiTimePicker readOnly label="Read Only" />
    <HaiTimePicker disabled label="Disabled" />
    <HaiTimePicker
      ampm={true}
      views={['hours', 'minutes', 'seconds']}
      maxTime={12}
      minTime={8}
      helperText="Maximum Date 9 and Minumum Time 6  "
    />
  </Box>
);
