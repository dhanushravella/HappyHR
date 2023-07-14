import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HaiTextField } from '@/components/HaiTextField';

test('renders TextBox component', () => {
  const { getByRole } = render(<HaiTextField />);
  const textBoxElement = getByRole('textbox');
  expect(textBoxElement).toBeInTheDocument();
});

test('renders TextBox component with placeholder', () => {
  const placeholderText = 'Enter text';
  const { getByPlaceholderText } = render(<HaiTextField placeholder={placeholderText} />);
  const textBoxElement = getByPlaceholderText(placeholderText);
  expect(textBoxElement).toBeInTheDocument();
});

test('renders TextBox component with initial value', () => {
  const initialValue = 'Initial value';
  const { getByRole } = render(<HaiTextField value={initialValue} />);
  const textBoxElement = getByRole('textbox');
  expect(textBoxElement.value).toBe(initialValue);
});

test('Updates value on change', () => {
  const { getByRole } = render(<HaiTextField />);
  const textBoxElement = getByRole('textbox');
  fireEvent.change(textBoxElement, { target: { value: 'New value' } });
  expect(textBoxElement.value).toBe('New value');
});

test('Renders applies custom CSS class', () => {
  const customClass = 'custom-class';
  const { container } = render(<HaiTextField className={customClass} />);
  expect(container.firstChild).toHaveClass(customClass);
});

test('Renders TextBox component in disabled state', () => {
  const { getByRole } = render(<HaiTextField disabled />);
  const textBoxElement = getByRole('textbox');
  expect(textBoxElement).toBeDisabled();
});

test('Renders TextBox  with required attribute', () => {
  const { getByRole } = render(<HaiTextField required />);
  const textBoxElement = getByRole('textbox');
  expect(textBoxElement).toHaveAttribute('required');
});

test('Renders Textbox with required attribute and not added any value', () => {
  const { container } = render(
    <form onSubmit={(e) => e.preventDefault()}>
      <HaiTextField required />
      <button type="submit">Submit</button>
    </form>
  );
  const submitButton = container.querySelector('button[type="submit"]');
  fireEvent.click(submitButton);
  expect(container.querySelector('form:invalid')).toBeInTheDocument();
});

test('Renders TextBox component with error state', () => {
  const errormessage = 'Invalid input';
  const { getByRole } = render(<HaiTextField error errormessage={errormessage} />);
  const textBoxElement = getByRole('textbox');
  expect(textBoxElement).toBeInTheDocument();
});
