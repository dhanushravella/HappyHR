import { HaiDatePicker } from '@/components/HaiDatePicker';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';

describe('HaiDatePicker', () => {
  const onChange = jest.fn();

  test('renders the DatePicker with default props', () => {
    render(<HaiDatePicker label="Select Date" />);
    const date = screen.getByLabelText('Select Date');
    expect(date).toBeInTheDocument();
    expect(date).not.toBeRequired();
  });

  test('Renders DatePicker with selected date', () => {
    const selectedDate = '10/10/2023';
    render(<HaiDatePicker defaultValue={selectedDate} onChange={onChange} label="Select Date" />);
    const inputElement = screen.getByLabelText('Select Date');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe('10/10/2023');
  });

  test('Renders DatePicker with diffrwnt formate', () => {
    const selectedDate = 'Su Oct,2023';
    render(
      <HaiDatePicker defaultValue={selectedDate} format={'dd MMM,YYYY'} label="Select Date" />
    );
    const inputElement = screen.getByLabelText('Select Date');
    expect(inputElement).toBeInTheDocument();
  });

  test('Calls onChange when a date is selected', async () => {
    render(
      <HaiDatePicker
        onChange={onChange}
        label="Select Date"
        value={dayjs('25/10/2023')} // Specify the input format here
        format={'DD/MM/YYYY'}
      />
    );

    const inputElement = screen.getByLabelText('Select Date');
    expect(inputElement).toBeInTheDocument();
    const newDate = dayjs('07/10/2023', 'DD/MM/YYYY');
    inputElement.value = newDate.format('DD/MM/YYYY');
    fireEvent.input(inputElement);

    await waitFor(() => {
      expect(inputElement.value).toBe('07/10/2023');
    });
  });

  test('Displays helper text', () => {
    const helperText = 'Please select a date';
    render(<HaiDatePicker onChange={onChange} label="Select Date" helperText={helperText} />);

    const helperTextElement = screen.getByText(helperText);
    expect(helperTextElement).toBeInTheDocument();
  });

  test('Renders datePicker  with disabled state', () => {
    render(<HaiDatePicker disabled label="Select Date" />);
    const datePicker = screen.getByLabelText('Select Date');
    expect(datePicker).toBeDisabled();
  });

  test('Renders datePicker  with read only state', () => {
    render(<HaiDatePicker readOnly label="Select Date" onChange={onChange} />);
    const datePicker = screen.getByLabelText('Select Date');
    expect(datePicker).toHaveAttribute('readOnly');
    fireEvent.click(datePicker);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('Renders datePicker with maximum date', () => {
    const maxDate = '2023-07-10';
    render(<HaiDatePicker maxDate={maxDate} label="Select Date" onChange={onChange} />);
    const datePicker = screen.getByLabelText('Select Date');

    const nextDate = '2023-07-11';
    fireEvent.change(datePicker, { target: { value: nextDate } });
    expect(onChange).not.toHaveBeenCalled();
  });

  test('Renders datePicker with minimum date', () => {
    const minDate = '2023-07-10';
    render(<HaiDatePicker minDate={minDate} label="Select Date" onChange={onChange} />);
    const datePicker = screen.getByLabelText('Select Date');

    const previousDate = '2023-07-09';
    fireEvent.change(datePicker, { target: { value: previousDate } });
    expect(onChange).not.toHaveBeenCalled();
  });
});
