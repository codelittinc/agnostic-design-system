import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Tab from '@/components/Tab';
import { mount } from 'enzyme';

describe('Tab', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <Tab
        menuItems={[
          { title: 'Test Active', active: true, key: '1' },
          { title: 'Test Inactive', key: '2' }
        ]}
        components={[
          <>
            <div>active</div>
          </>,
          <>
            <div>inactive</div>
          </>
        ]}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  describe('Clicking on an inactive menu button', () => {
    it('opens the corresponding container', () => {
      const { getByText, queryByText } = render(
        <Tab
          menuItems={[
            { title: 'first', active: true, key: '1' },
            { title: 'second', key: '2' }
          ]}
          components={[
            <>
              <div>First Component</div>
            </>,
            <>
              <div>Second Component</div>
            </>
          ]}
        />
      );

      expect(queryByText('First Component')).toBeInTheDocument();
      expect(queryByText('Second Component')).not.toBeInTheDocument();

      fireEvent.click(getByText('second'));

      expect(queryByText('First Component')).not.toBeInTheDocument();
      expect(queryByText('Second Component')).toBeInTheDocument();
    });
  });
});
