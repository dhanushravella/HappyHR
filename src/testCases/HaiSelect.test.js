import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { HaiSelect } from '@/components/HaiSelect';

describe('HaiDateTimePicker', () => {
  const onChange = jest.fn();
  const optionsList = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  var label = 'Select an option';
  var defaultValue = 'option2';

  test('renders Select component', () => {
    const { getByTestId } = render(
      <HaiSelect
        optionsList={optionsList}
        onChange={onChange}
        value={defaultValue}
        inputProps={{ 'data-testid': 'component-under-test' }}
      />
    );
    const selectBoxElement = getByTestId('component-under-test');
    expect(selectBoxElement).toBeInTheDocument();
  });

  test('Updates value on change', async () => {
    render(
      <HaiSelect
        optionsList={optionsList}
        onChange={onChange}
        label={label}
        value={'option2'}
        inputProps={{ 'data-testid': 'component-under-test' }}
      />
    );
    const inputElement = screen.getByTestId('component-under-test');
    fireEvent.select(inputElement, { target: { value: 'option1' } });
    await waitFor(() => {
      expect(inputElement.value).toBe('option1');
    });
  });

  test('Updates multiple value on change', async () => {
    render(
      <HaiSelect
        optionsList={optionsList}
        onChange={onChange}
        label={label}
        value={['option2']}
        multiple={true}
        inputProps={{ 'data-testid': 'component-under-test' }}
      />
    );
    const inputElement = screen.getByTestId('component-under-test');
    fireEvent.select(inputElement, { target: { value: ['option2', 'option3'] } });
    await waitFor(() => {
      expect(inputElement.value.split(',')).toEqual(['option2', 'option3']);
    });
  });

  test('Renders TextBox component in disabled state', () => {
    render(
      <HaiSelect
        disabled={true}
        label={'Select an option'}
        optionsList={optionsList}
        value={'option3'}
        inputProps={{ 'data-testid': 'component-under-test' }}
      />
    );
    const textBoxElement = screen.getByTestId('component-under-test');
    expect(textBoxElement).toBeDisabled();
  });
});
