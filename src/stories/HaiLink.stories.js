import { Box } from '@mui/material';
import { HaiLink } from '../components/HaiLink';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiLink',
  component: HaiLink,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'warning', 'info', 'success'],
    },
    underline: {
      control: 'select',
      options: ['always', 'hover', 'none'],
    },
    variant: {
      control: 'select',
      options: [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2',
      ],
    },
    disabled: {
      control: 'boolean',
      options: [true, false],
    },
    text: {
      control: {
        type: 'text',
      },
    },
    href: {
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
    text: 'Link',
  },
};

export const Secondary = {
  args: {
    color: 'secondary',
    text: 'Link',
  },
};

export const Underline = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiLink underline="none" href="#" text="Underline None" />
    <HaiLink underline="hover" href="#" text="Underline Hover" />
    <HaiLink underline="always" href="#" text="Underline Always" />
  </Box>
);

export const Variants = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiLink variant="text" href="#" text="Text" />
    <HaiLink color="inherit" href="#" text="Color inherit" />
    <HaiLink variant="body2" href="#" text="Body2" />
  </Box>
);

export const Colors = () => (
  <Box sx={{ display: 'flex', gap: '20px' }}>
    <HaiLink color="#80FF00" text="Link" />
    <HaiLink color="#FF0080" text="Link" />
    <HaiLink color="#FF0000" text="Link" />
  </Box>
);
