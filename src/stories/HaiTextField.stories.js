import { HaiTextField } from '../components/HaiTextField';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiTextField',
  component: HaiTextField,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success', 'string'],
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'outlined', 'filled'],
    },
    margin: {
      control: 'select',
      options: ['dense', 'none', 'normal'],
    },
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password'],
    },
    maxRows: {
      control: {
        type: 'number',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    rows: {
      control: {
        type: 'number',
      },
    },
    multiline: {
      control: 'boolean',
      options: [true, false],
    },
    fullWidth: {
      control: 'boolean',
      options: [true, false],
    },
    disabled: {
      control: 'boolean',
      options: [true, false],
    },
    error: {
      control: 'boolean',
      options: [true, false],
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    color: 'primary',
    label: 'Enter value',
    variant: 'outlined',
    // defaultValue: '',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
    label: 'Enter value',
    variant: 'outlined',
    defaultValue: '',
  },
};

export const Large = {
  args: {
    label: 'Enter value',
    variant: 'outlined',
    size: 'large',
    defaultValue: '',
  },
};

export const Small = {
  args: {
    label: 'Enter value',
    variant: 'outlined',
    size: 'small',
    defaultValue: '',
  },
};

export const Disabled = {
  args: {
    color: 'primary',
    label: 'Enter value',
    variant: 'outlined',
    disabled: true,
    defaultValue: '',
  },
};

export const Number = {
  args: {
    color: 'primary',
    label: 'Add Number',
    variant: 'outlined',
    type: 'number',
    defaultValue: 0,
  },
};

export const Search = {
  args: {
    color: 'primary',
    label: 'Add Search Text',
    variant: 'outlined',
    type: 'search',
  },
};

export const Error = {
  args: {
    color: 'primary',
    label: 'Enter value',
    variant: 'outlined',
    error: true,
    defaultValue: 'Hello World',
    helperText: 'Incorrect entry.',
  },
};

export const Multiline = {
  args: {
    color: 'primary',
    label: 'Add Search Text',
    variant: 'outlined',
    multiline: true,
    rows: 5,
    maxRows: 5,
  },
};
