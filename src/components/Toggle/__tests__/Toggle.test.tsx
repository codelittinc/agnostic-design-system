import React, { useState } from 'react';
import Toggle from '@/components/Toggle';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Toggle', () => {
  it('renders correctly', () => {
    const wrapper = renderToggle();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Toggle rendered options', () => {
  it('will have the content passed in items', () => {
    renderToggle();
    const toggleRendered = screen.getByTestId('toggle-element');
    expect(toggleRendered).toHaveTextContent(/First/);
    expect(toggleRendered).toHaveTextContent(/Second/);
  });
});

describe('Toggle behaviour', () => {
  it('toggles value when clicked', () => {
    renderToggle();
    const testLabel = screen.getByTestId('toggle-label-First');
    const escalationLabel = screen.getByTestId('toggle-label-Second');

    expect(testLabel.getAttribute('data-active')).toEqual('true');
    expect(escalationLabel.getAttribute('data-active')).toEqual('false');

    fireEvent.click(screen.getByTestId('toggle-element-Second'));

    expect(testLabel.getAttribute('data-active')).toEqual('false');
    expect(escalationLabel.getAttribute('data-active')).toEqual('true');
  });
});

const items = [
  {
    title: 'First'
  },
  {
    title: 'Second'
  }
];

function Wrapper(props) {
  const [active, setActive] = useState(props.active);
  const getLabel = item => {
    return item.title;
  };
  const getValue = item => {
    return item.title;
  };
  return (
    <Toggle
      items={items}
      getLabel={getLabel}
      getValue={getValue}
      activeItem={active}
      onChange={setActive}
    />
  );
}

function renderToggle(activeItem = items[0]) {
  return render(<Wrapper active={activeItem} />);
}
