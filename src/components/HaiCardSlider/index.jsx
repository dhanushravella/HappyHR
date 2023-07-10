import React from 'react';
import HorizontalSlide from '../HorizontalSlide';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HaiCardSlider = ({ title, items, height, width, id, chartType, onClickHandle }) => {
  return (
    <>
      <HorizontalSlide
        title={title || 'Menu 1'}
        data={items}
        height={height || '300'}
        width={width || '300'}
        id={id || 1}
        chartType={chartType || 'pie'}
        onClickHandle={onClickHandle}
      />
    </>
  );
};
