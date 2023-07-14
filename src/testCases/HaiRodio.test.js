import { HaiRadio } from '@/components/HaiRadio';
import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

test('renders the radio with custom props', () => {
  render(
    <HaiRadio
      checked={false}
      value="example"
      name="myradio"
      size="small"
      disabled
      required
      color="primary"
    />
  );
  const radio = screen.getByRole('radio');
  expect(radio).toBeInTheDocument();
  expect(radio).not.toBeChecked();
  expect(radio).toBeRequired();
  expect(radio).toBeDisabled();
  expect(radio).toHaveAttribute('name', 'myradio');
  expect(radio).toHaveAttribute('value', 'example');
  expect(radio).toHaveStyle('color:error');
});

test('Renders Radio component', () => {
  const { getByRole } = render(<HaiRadio />);
  const radioElement = getByRole('radio');
  expect(radioElement).toBeInTheDocument();
});

test('Handles Radio with onChange event', () => {
  const handleChange = jest.fn(); // serve as the event handler
  render(<HaiRadio onChange={handleChange} checked={false} />);
  const radio = screen.getByRole('radio');
  fireEvent.click(radio); // triggers the onChange event
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test('Renders Radio button with disabled state', () => {
  const { getByRole } = render(<HaiRadio disabled />);
  const radio = getByRole('radio');
  expect(radio).toBeDisabled();
});

test('Renders radio button with required attribute', () => {
  const { getByRole } = render(<HaiRadio required />);
  const radio = getByRole('radio');
  expect(radio).toHaveAttribute('required');
});

test('does not trigger onChange when disabled', () => {
  const handleChange = jest.fn();
  const { getByRole } = render(<HaiRadio onChange={handleChange} disabled />);
  const radio = getByRole('radio');
  fireEvent.click(radio);
  expect(handleChange).not.toBeCalled();
});
