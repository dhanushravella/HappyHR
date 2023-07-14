import { HaiTimePicker } from '@/components/HaiTimePicker';
import { fireEvent, render, screen, wait, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';

describe('HaiTimePicker', () => {
  const onChange = jest.fn();

  test('renders the TimePicker with default props', () => {
    render(<HaiTimePicker label="Select Time" />);
    const time = screen.getByLabelText('Select Time');
    expect(time).toBeInTheDocument();
    expect(time).not.toBeRequired();
  });

  test('Renders TimePicker with selected time', () => {
    const selectedTime = '2022-04-17T09:30';
    render(
      <HaiTimePicker
        value={dayjs(selectedTime)}
        ampm={true}
        onChange={onChange}
        label="Select Time"
      />
    );
    const inputElement = screen.getByLabelText('Select Time');

    expect(inputElement).toBeInTheDocument();
    expect(screen.getByLabelText('Select Time').value).toBe(dayjs(selectedTime).format('HH:mm A'));
  });

  test('Renders TimePicker with diffrwnt formate', () => {
    const selectedTime = '07:15:56';
    render(<HaiTimePicker defaultValue={selectedTime} format={'hh:mm:ss'} label="Select Time" />);
    const inputElement = screen.getByLabelText('Select Time');
    expect(inputElement).toBeInTheDocument();
  });

  test('Calls onChange when a time is selected', async () => {
    let setDate = dayjs('2022-04-17T09:30');
    render(<HaiTimePicker onChange={onChange} label="Select Time" value={setDate} />);
    const inputElement = screen.getByLabelText('Select Time');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: dayjs(setDate).format('HH:mm A') } });
    await waitFor(() => {
      expect(inputElement.value).toBe(setDate.format('HH:mm A'));
    });
  });

  test('Displays helper text', () => {
    const helperText = 'Please select a time';
    render(<HaiTimePicker onChange={onChange} label="Select Time" helperText={helperText} />);

    const helperTextElement = screen.getByText(helperText);
    expect(helperTextElement).toBeInTheDocument();
  });

  test('Renders timePicker  with disabled state', () => {
    render(<HaiTimePicker disabled label="Select Time" />);
    const timePicker = screen.getByLabelText('Select Time');
    expect(timePicker).toBeDisabled();
  });

  test('Renders timePicker  with read only state', () => {
    render(<HaiTimePicker readOnly label="Select Time" onChange={onChange} />);
    const timePicker = screen.getByLabelText('Select Time');
    expect(timePicker).toHaveAttribute('readOnly');
    fireEvent.click(timePicker);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('Renders timePicker with maximum time', () => {
    const maxTime = '9';
    render(<HaiTimePicker maxTime={maxTime} label="Select Time" onChange={onChange} />);
    const timePicker = screen.getByLabelText('Select Time');

    const nextTime = '10';
    fireEvent.change(timePicker, { target: { value: nextTime } });
    expect(onChange).not.toHaveBeenCalled();
  });

  test('Renders timePicker with minimum time', () => {
    const minTime = '9';
    render(<HaiTimePicker minTime={minTime} label="Select Time" onChange={onChange} />);
    const timePicker = screen.getByLabelText('Select Time');

    const previousTime = '8';
    fireEvent.change(timePicker, { target: { value: previousTime } });
    expect(onChange).not.toHaveBeenCalled();
  });
});
