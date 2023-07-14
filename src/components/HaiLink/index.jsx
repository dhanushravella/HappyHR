import { Link } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export const HaiLink = ({ href, text, className, color, underline, variant, ...props }) => {
  return (
    <>
      <Link href={href} className={className} color={color} underline={underline} variant={variant}>
        {text}
      </Link>
    </>
  );
};

HaiLink.propTypes = {
  /**
   * The  URL of the page the link goes to.
   */
  href: PropTypes.string,
  /**
   * The text which will get displayed for the href
   */
  text: PropTypes.string,
  /**
   * Controls when the link should have an underline.
   */
  underline: PropTypes.oneOf(['always', 'hover', 'none']),
  /**
   * Applies the theme typography styles.
   */
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'button',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
  /**
   * If `true`, the link button is disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The color of the link button.
   */
  color: PropTypes.any,
};

HaiLink.defaultProps = {
  href: '#',
};
