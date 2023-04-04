import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

it ('Should render welcoming message', () => {
  const searchKeyword = 'Hello Welltreat!'
  render(<App />)
  expect(screen.getByText(searchKeyword)).toBeTruthy()
})
