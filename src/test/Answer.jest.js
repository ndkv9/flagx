import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Answer from '../Components/Answer'

beforeEach(() => {
  const country = {
    name: {
      common: 'Finland',
    },
  }
  render(<Answer country={country} />)
})
