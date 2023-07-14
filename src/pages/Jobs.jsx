import React from 'react';
import { DashboardLayout } from '@/layout';
import { useRef, useState } from 'react';
import { HaiTextField } from '@/components/HaiTextField';
import { HaiRadio } from '@/components/HaiRadio';
import { HaiDatePicker } from '@/components/HaiDatePicker';
import dayjs from 'dayjs';
import { HaiSelect } from '@/components/HaiSelect';
import { HaiButton } from '@/components/HaiButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Jobs = () => {
  const [value, setValue] = useState('');
  const [chack, setCheck] = useState(true);
  const [date, setdate] = React.useState(dayjs('2022-04-17'));
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <DashboardLayout>
        <HaiTextField
          value={value}
          onChange={handleChange}
          placeholder={'Enter text'}
          // label={'Search'}
          // variant="outlined"
        />
        <HaiRadio label={'Radio'} checked={chack} value={chack} onChange={() => setCheck(!chack)} />
        <HaiDatePicker
          onChange={(newValue) => setdate(newValue)}
          value={date}
          name="date"
          size="small"
          disabled={false}
          required={true}
          color="secondary"
          label="Select a date"
          helperText="Please select a date"
        />
        <HaiSelect
          value={value}
          label="Select an option"
          defaultValue="Option-1"
          onChange={handleChange}
          optionsList={options}
          autoWidth={true}
          width={'25ch'}
        />
        <HaiButton variant="outlined" startIcon={<DeleteIcon />} text={'Delete'} />
      </DashboardLayout>
    </>
  );
};

export default Jobs;
