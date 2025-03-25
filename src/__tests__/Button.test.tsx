import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import Button from '../components/Button';
import { expect, test, vi } from 'vitest';

test('Button renders with correct label', () => {
    const { getByText } = render(<Button label="Click me" onClick={() => {}} />);
    expect(getByText('Click me')).toBeInTheDocument();
});

test('Button calls onClick when clicked', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button label="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
