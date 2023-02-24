import React from 'react'
import {render, screen} from '@testing-library/react'
import App from './App'

it ('Should render welcoming message', () => {
  const searchKeyword = 'weelltreat'
  render(<App />)
  expect(screen.getByText(searchKeyword)).toBeTruthy()
})