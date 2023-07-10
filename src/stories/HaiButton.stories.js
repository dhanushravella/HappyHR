import { HaiButton } from '../components/HaiButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiButton',
  component: HaiButton,
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
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    text: {
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
  <>
    <HaiButton size="small" text="Small" />
    <HaiButton size="medium" text="Medium" />
    <HaiButton size="large" text="Large" />
  </>
);

export const Variants = () => (
  <>
    <HaiButton variant="text" text="Text" />
    <HaiButton variant="outlined" text="Outlined" />
    <HaiButton variant="contained" text="Contained" />
  </>
);

export const Colors = () => (
  <>
    <HaiButton color="primary" text="Primary" />
    <HaiButton color="secondary" text="Secondary" />
    <HaiButton color="success" text="Success" />
  </>
);
