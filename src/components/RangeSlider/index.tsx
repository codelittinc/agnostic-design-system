/* eslint-disable react/self-closing-comp */
import React from 'react';
import styles from './RangeSlider.css';
import Slider from 'rc-slider';
import classNames from 'classnames';
import 'rc-slider/assets/index.css';

interface Props<T> {
  disabled?: boolean;
  dotStyle?: React.CSSProperties;
  handle?: (props) => React.ReactElement;
  handleStyle?: React.CSSProperties;
  label?: string;
  marks?: T[];
  max?: number;
  min?: number;
  onChange?: (value: number) => void;
  railStyle?: React.CSSProperties;
  step?: number;
  trackStyle?: React.CSSProperties;
  value?: number;
  variablesClassName?: string;
}

const RangeSlider = <T extends {}>(props: Props<T>) => {
  const {
    disabled,
    dotStyle,
    handle,
    handleStyle,
    label,
    marks,
    max,
    min,
    onChange,
    railStyle,
    step,
    trackStyle,
    value,
    variablesClassName
  } = props;

  return (
    <div className={classNames(styles['range-slider-container'], variablesClassName)}>
      <label>{label}</label>
      <Slider
        disabled={disabled}
        onChange={onChange}
        min={min}
        max={max}
        marks={marks}
        value={value}
        step={step}
        trackStyle={trackStyle}
        railStyle={railStyle}
        dotStyle={dotStyle}
        handle={handle}
        handleStyle={handleStyle}
      />
    </div>
  );
};

RangeSlider.defaultProps = {
  trackStyle: {
    backgroundColor: 'var(--range-slider-track-background-color, var(--success-color))',
    height: 'var(--range-slider-track-height, 0.75rem)',
    borderRadius: 'var(--range-slider-track-border-radius, 0.25rem)'
  },
  railStyle: {
    backgroundColor: 'var(--range-slider-rail-background-color, var(--primary-color-500))',
    height: 'var(--range-slider-rail-height, 0.75rem)',
    borderRadius: 'var(--range-slider-rail-border-radius, 0.25rem)'
  },
  dotStyle: { display: 'none' },
  handleStyle: {
    backgroundColor: 'var(--range-slider-handle-background-color, var(--success-color))',
    border: 'var(--range-slider-handle-border, 0.0625rem solid var(--structure-color-white))',
    boxShadow: 'var(--range-slider-handle-box-shadow, none)',
    borderRadius: 'var(--range-slider-handle-border-radius, 0.0625rem)',
    width: 'var(--range-slider-handle-width, 0.5rem)',
    height: 'var(--range-slider-handle-height, 1.625rem)',
    marginTop: 'var(--range-slider-handle-margin-top, -0.4375rem)'
  }
};

export default RangeSlider;
