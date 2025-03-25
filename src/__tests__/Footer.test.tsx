import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { expect, test } from 'vitest';

import '@testing-library/jest-dom/vitest';

test('Footer renders with correct content', () => {
    render(<Footer text='Footer content'/>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
});

test('Footer renders with correct text', () => {
    const { getByText } = render(<Footer text="Test Footer" />);
    expect(getByText('Test Footer')).toBeInTheDocument();
});
