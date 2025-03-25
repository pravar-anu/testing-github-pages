import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { expect, test } from 'vitest';

import '@testing-library/jest-dom/vitest'

test('Header renders with correct title', () => {
    render(<Header title="Welcome" />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
});
