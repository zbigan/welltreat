import React from 'react'
import App from './App'
import {render, screen} from '@testing-library/react'
import { waitForIonicReact } from '@ionic/react-test-utils'

import { mockIonicReact } from '@ionic/react-test-utils';
import { setupIonicReact } from '@ionic/react';

beforeAll(() => {
  setupIonicReact();
  mockIonicReact();
})

it ('Should render welcoming message', async () => {
  const searchKeyword = 'Category Select'
  render(<App />)
  await waitForIonicReact();
  expect(screen.getByText(searchKeyword)).toBeTruthy()
})
