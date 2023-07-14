import { HaiCheckBox } from '@/components/HaiCheckBox';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

test('renders the checkbox with custom props', () => {
  render(
    <HaiCheckBox
      checked={false}
      value="example"
      name="myradio"
      size="small"
      disabled
      required
      color="primary"
    />
  );
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();
  expect(checkbox).toBeRequired();
  expect(checkbox).toBeDisabled();
  expect(checkbox).toHaveAttribute('name', 'myradio');
  expect(checkbox).toHaveAttribute('value', 'example');
  expect(checkbox).toHaveStyle('color:error');
});

test('Renders Checkbox component', () => {
  const { getByRole } = render(<HaiCheckBox />);
  const radioElement = getByRole('checkbox');
  expect(radioElement).toBeInTheDocument();
});

test('Handles Checkbox with onChange event', () => {
  const handleChange = jest.fn(); // serve as the event handler
  render(<HaiCheckBox onChange={handleChange} checked={false} />);
  const checkbox = screen.getByRole('checkbox');
  fireEvent.click(checkbox); // triggers the onChange event
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('Renders Checkbox button with disabled state', () => {
  const { getByRole } = render(<HaiCheckBox disabled />);
  const checkbox = getByRole('checkbox');
  expect(checkbox).toBeDisabled();
});

test('Renders checkbox button with required attribute', () => {
  const { getByRole } = render(<HaiCheckBox required />);
  const checkbox = getByRole('checkbox');
  expect(checkbox).toHaveAttribute('required');
});
