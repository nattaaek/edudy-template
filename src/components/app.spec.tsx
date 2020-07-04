import * as React from 'react';
import { render } from '@testing-library/react';

import IApp from './app';

test('loads items eventually', async () => {
    const a = render(<IApp />)
  
    // Wait for page to update with query text
    const items = await a.findByText("Hello React Typescript!");
    expect(items.innerHTML).toStrictEqual("Hello React Typescript!");
  })