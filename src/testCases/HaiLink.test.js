import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { HaiLink } from '@/components/HaiLink';

const href = 'https://example.com';
const text = 'Example Link';

test('renders Link component', () => {
  const { getByRole } = render(<HaiLink href={href} text={text} />);
  const linkElement = getByRole('link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.getAttribute('href')).toBe(href);
});

test('applies additional class and color', () => {
  const className = 'custom-class';
  const color = '#80FF00';

  const { getByRole } = render(
    <HaiLink href={href} text={text} className={className} color={color} />
  );
  const linkElement = getByRole('link');

  expect(linkElement).toHaveClass(className);
  expect(linkElement).toHaveStyle(`color: ${color}`);
});

test('renders with underline', () => {
  const { getByRole } = render(<HaiLink href={href} text={text} underline={'always'} />);
  const linkElement = getByRole('link');

  expect(linkElement).toHaveStyle('text-decoration: underline');
});

test('renders with custom variant', () => {
  const { getByRole } = render(<HaiLink href={href} text={text} variant="body1" />);
  const linkElement = getByRole('link');
  expect(linkElement).toHaveClass(
    'MuiTypography-root MuiTypography-body1 MuiLink-root MuiLink-underlineAlways css-jj9aj1-MuiTypography-root-MuiLink-root'
  );
  // expect(linkElement).toHaveAttribute('variant', 'body1');
  // expect(linkElement).toHaveStyle(`font-variant: ${'MuiTypography-body1'}`);
});
