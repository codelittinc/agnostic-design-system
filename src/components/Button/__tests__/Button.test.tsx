import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '@/components/Button';

describe('ExampleComponent', () => {
  it('renders correctly', () => {
    render(<Button text='this is a test' onClick={jest.fn()} />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toMatchSnapshot();
  });

  it('renders the variablesClassName', () => {
    const className = 'my-cool-class';
    render(<Button variablesClassName={className} text='this is a test' onClick={jest.fn()} />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass(className);
  });

  it('renders a fixed button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} fixed />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--fixed');
  });

  it('renders a primary button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} category='primary' />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--primary');
  });

  it('renders a secondary button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} category='secondary' fixed />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--secondary');
  });

  it('renders a positive button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} category='positive' />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--positive');
  });

  it('renders a neutral button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--neutral');
  });

  it('renders a negative button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} category='negative' />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--negative');
  });

  it('renders a ghost button', () => {
    render(<Button text='this is a test' onClick={jest.fn()} category='ghost' />);
    expect(screen.getByRole('button', { name: 'this is a test' })).toHaveClass('button--ghost');
  });

  it('calls onClick when button is clicked', () => {
    const handleClick = jest.fn();
    render(<Button text='this is a test' onClick={handleClick} />);
    const button = screen.getByRole('button', { name: 'this is a test' });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
