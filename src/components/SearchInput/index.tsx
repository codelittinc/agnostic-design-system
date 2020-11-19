import React, { useRef } from 'react';
import ClassNames from 'classnames';

import styles from '@/components/SearchInput/SearchInput.css';

import IconSearch from '@/assets/images/icons/web/search-simple.svg';
import IconClose from '@/assets/images/icons/web/close.svg';

type Size = 'large' | 'medium';
type State = '' | 'valid' | 'invalid';

interface Props {
  clearInputClick: () => void;
  description?: string;
  disabled?: boolean;
  id: string;
  label?: string;
  message?: string;
  onChange: () => void;
  onSubmit: () => void;
  placeholder?: string;
  state?: State;
  size: Size;
  value?: string;
  variablesClassName?: string;
}

const SearchInput: React.FC<Props> = props => {
  const {
    clearInputClick,
    description,
    disabled,
    id,
    label,
    onChange,
    onSubmit,
    message,
    placeholder,
    size,
    state,
    value,
    variablesClassName,
    ...searchInputProps
  } = props;
  const sizeClass = `search--${size}`;
  const statusClass = state ? `search--${state}` : '';
  const sizeInputClass = `search-input--${size}`;
  const messageValidateClass = state ? `search-input--message-${state}` : '';

  const searchInput = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    if (searchInput && searchInput.current) {
      searchInput.current.focus();
    }
  };

  const handleSubmit = event => {
    if (event.keyCode === 13) onSubmit();
  };

  return (
    <div className={ClassNames(variablesClassName)}>
      {label ? (
        <label htmlFor={id} className={ClassNames(styles['search-label'])}>
          {label}
        </label>
      ) : (
        ''
      )}
      {description ? (
        <span className={ClassNames(styles['search-description'])}>{description}</span>
      ) : (
        ''
      )}
      <div className={ClassNames(styles.search, styles[sizeClass], styles[statusClass])}>
        <IconSearch
          height='15'
          width='15'
          title='Search Icon'
          aria-hidden='true'
          onClick={handleFocus}
        />
        <input
          {...searchInputProps}
          className={ClassNames(styles['search-input'], styles[sizeInputClass])}
          onChange={onChange}
          onKeyPress={handleSubmit}
          aria-label={label ? '' : placeholder}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          id={id}
          ref={searchInput}
        />
        <button onClick={clearInputClick} className={ClassNames(styles['search-button'])}>
          <IconClose
            className={ClassNames(styles['search-close-icon'])}
            height='10'
            width='10'
            title='Clear text'
          />
          <span className={ClassNames(styles['search-accessible-description'])}>
            Close icon on the right of the input text
          </span>
        </button>
      </div>
      {message ? (
        <span className={ClassNames(styles['search-message'], styles[messageValidateClass])}>
          {message}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

SearchInput.defaultProps = {
  id: 'search-input',
  size: 'large'
};

export default SearchInput;
