import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Answer from '../Components/Answer'

describe('Answer', () => {
  beforeEach(() => {
    const country = {
      name: {
        common: 'Finland',
      },
    }
    const answer = jest.fn()
    render(<Answer country={country} answer={answer} />)
  })

  it('can return the name of the country', () => {
    const countryName = screen.getByText('Finland')
    expect(countryName).toBeInTheDocument()
  })
})
