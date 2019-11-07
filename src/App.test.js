import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('loads and displays greeting', () => {
  const greeting = 'Hello world!'

  const container = render(<App greeting={greeting} />)

  expect(container.queryByText(greeting)).toBeVisible()
})
