import { HaiDateTimePicker } from '@/components/HaiDateTimePicker';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';

describe('HaiDateTimePicker', () => {
  const onChange = jest.fn();

  test('renders the DateTimePicker with default props', () => {
    render(<HaiDateTimePicker label="Select Date" />);
    const dateTime = screen.getByLabelText('Select Date');
    expect(dateTime).toBeInTheDocument();
    expect(dateTime).not.toBeRequired();
  });

  test('Renders DateTimePicker with selected dateTime', () => {
    const selectedDate = '2022-04-17T09:30';
    render(
      <HaiDateTimePicker
        value={dayjs(selectedDate)}
        onChange={onChange}
        label="Select Date"
        format={'DD/MM/YYYY HH:mm'}
      />
    );
    const inputElement = screen.getByLabelText('Select Date');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(dayjs('2022-04-17T09:30').format('DD/MM/YYYY HH:mm'));
  });

  test('Renders DateTimePicker with diffrent formate', () => {
    const selectedDate = dayjs('Jul We, 2023 15:00');
    render(
      <HaiDateTimePicker value={selectedDate} format={'MMM dd, YYYY HH:mm'} label="Select Date" />
    );
    const inputElement = screen.getByLabelText('Select Date');
    expect(inputElement).toBeInTheDocument();
  });

  test('Calls onChange when a dateTime is selected', async () => {
    let setDate = dayjs('2022-06-17T09:30');
    render(
      <HaiDateTimePicker
        onChange={onChange}
        label="Select Time"
        value={setDate}
        format={'DD/MM/YYYY HH:mm'}
      />
    );
    const inputElement = screen.getByLabelText('Select Time');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {
      target: { value: dayjs(setDate).format('DD/MM/YYYY HH:mm') },
    });
    await waitFor(() => {
      expect(inputElement.value).toBe(setDate.format('DD/MM/YYYY HH:mm'));
    });
  });

  test('Displays helper text', () => {
    const helperText = 'Please select a dateTime';
    render(<HaiDateTimePicker onChange={onChange} label="Select Date" helperText={helperText} />);

    const helperTextElement = screen.getByText(helperText);
    expect(helperTextElement).toBeInTheDocument();
  });

  test('Renders dateTimePicker  with disabled state', () => {
    render(<HaiDateTimePicker disabled label="Select Date" />);
    const dateTimePicker = screen.getByLabelText('Select Date');
    expect(dateTimePicker).toBeDisabled();
  });

  test('Renders dateTimePicker  with read only state', () => {
    render(<HaiDateTimePicker readOnly label="Select Date" onChange={onChange} />);
    const dateTimePicker = screen.getByLabelText('Select Date');
    expect(dateTimePicker).toHaveAttribute('readOnly');
    fireEvent.click(dateTimePicker);
    expect(onChange).not.toHaveBeenCalled();
  });

  test('Renders dateTimePicker with maximum dateTime', () => {
    const maxDateTime = '07/20/2023 12:00 AM';
    render(<HaiDateTimePicker maxDateTime={maxDateTime} label="Select Date" onChange={onChange} />);
    const dateTimePicker = screen.getByLabelText('Select Date');

    const nextDate = '07/29/2023 12:00 AM';
    fireEvent.change(dateTimePicker, { target: { value: nextDate } });
    expect(onChange).not.toHaveBeenCalled();
  });

  test('Renders dateTimePicker with minimum dateTime', () => {
    const minDateTime = '07/20/2023 12:00 AM';
    render(<HaiDateTimePicker minDateTime={minDateTime} label="Select Date" onChange={onChange} />);
    const dateTimePicker = screen.getByLabelText('Select Date');

    const previousDate = '07/11/2023 12:00 AM';
    fireEvent.change(dateTimePicker, { target: { value: previousDate } });
    expect(onChange).not.toHaveBeenCalled();
  });
});
