import { HaiCheckBox } from '../components/HaiCheckBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiCheckBox',
  component: HaiCheckBox,
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
    <HaiCheckBox size="small" text="Small" checked />
    <HaiCheckBox size="medium" text="Medium" checked />
    <HaiCheckBox size="large" text="Large" checked />
  </>
);

export const MultiColors = () => (
  <>
    <HaiCheckBox color="primary" text="Primary" checked />
    <HaiCheckBox color="secondary" text="Secondary" checked />
    <HaiCheckBox color="success" text="Success" checked />
  </>
);
