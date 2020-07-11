import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import IApp from './app';

test('loads app correctly', async () => {
    render(<IApp />)
  
    expect(screen.getByText('Hello React Typescript!')).toHaveTextContent('Hello React Typescript!');
  })