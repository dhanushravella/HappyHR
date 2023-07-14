import { HaiRadio } from '../components/HaiRadio';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiRadio',
  component: HaiRadio,
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
    checked: {
      control: 'boolean',
      options: [true, false],
    },
    disabled: {
      control: 'boolean',
      options: [true, false],
    },
    name: {
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
    text: 'Button',
    checked: true,
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
    text: 'Button',
    checked: true,
  },
};

export const Large = {
  args: {
    size: 'large',
    text: 'Button',
    checked: true,
  },
};

export const Small = {
  args: {
    size: 'small',
    text: 'Button',
    checked: true,
  },
};

export const MultiSize = () => (
  <>
    <HaiRadio size="small" text="Small" checked />
    <HaiRadio size="medium" text="Medium" checked />
    <HaiRadio size="large" text="Large" checked />
  </>
);

export const MultiColors = () => (
  <>
    <HaiRadio color="primary" text="Primary" checked />
    <HaiRadio color="secondary" text="Secondary" checked />
    <HaiRadio color="success" text="Success" checked />
  </>
);
