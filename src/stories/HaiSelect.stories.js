import { action } from '@storybook/addon-actions';
import { HaiSelect } from '../components/HaiSelect';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import { Chip, Stack } from '@mui/material';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];
const defaultValue = 'option1';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'HaiSelect',
  component: HaiSelect,
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
    disabled: {
      control: 'boolean',
      options: [true, false],
    },
    displayEmpty: {
      control: 'boolean',
      options: [true, false],
    },
    multiple: {
      control: 'boolean',
      options: [true, false],
    },
    autoWidth: {
      control: 'boolean',
      options: [true, false],
    },
    name: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: null,
    },
    onChange: {
      control: null,
    },
  },
};

const Default = ({ chnage, label }) => {
  const [value, setValue] = useState('option2');
  return (
    <>
      <HaiSelect
        color={chnage}
        optionsList={options}
        value={value}
        label={label}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Primary = () => {
  const [value, setValue] = useState('option2');
  return (
    <>
      <HaiSelect
        displayEmpty={true}
        color={'primary'}
        optionsList={options}
        value={value}
        label={'Primary'}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Secondary = () => {
  const [value, setValue] = useState('option2');
  return (
    <>
      <HaiSelect
        color={'secondary'}
        optionsList={options}
        value={value}
        label={'Secondary'}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Large = () => {
  const [value, setValue] = useState('option2');
  return (
    <>
      <HaiSelect
        color={'secondary'}
        optionsList={options}
        value={value}
        size="large"
        label={'Large'}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const Small = () => {
  const [value, setValue] = useState('option2');
  return (
    <>
      <HaiSelect
        color={'secondary'}
        optionsList={options}
        value={value}
        size="small"
        label={'Small'}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export const MultiSize = () => {
  const [value, setValue] = useState('option2');
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiSelect
        size="small"
        optionsList={options}
        value={value}
        label="small"
        onChange={(e) => setValue(e.target.value)}
      />

      <HaiSelect
        size="medium"
        optionsList={options}
        label="medium"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <HaiSelect size="large" optionsList={options} value={defaultValue} label="large" /> */}
    </Box>
  );
};

export const MultiColors = () => {
  const [value, setValue] = useState('option2');
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiSelect
        color="primary"
        label="Primary"
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <HaiSelect
        color="secondary"
        label="Secondary"
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <HaiSelect
        color="success"
        label="Success"
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};

export const MultiSelect = () => {
  const [value, setValue] = useState([]);

  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiSelect
        color="success"
        label="Default Multiple Select"
        multiple={true}
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <HaiSelect
        color="success"
        label="Chip Multiple Select"
        multiple={true}
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
      />
    </Box>
  );
};

export const MultiProps = () => {
  const [value, setValue] = useState('option2');
  return (
    <Box sx={{ display: 'flex', gap: '20px' }}>
      <HaiSelect
        label="Disabled"
        disabled
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <HaiSelect
        color="secondary"
        label="Secondary"
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <HaiSelect
        color="success"
        label="Success"
        optionsList={options}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Box>
  );
};
