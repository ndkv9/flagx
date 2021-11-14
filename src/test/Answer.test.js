import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Answer from '../Components/Answer'

const country = {
  name: {
    common: 'Finland',
  },
}
const answer = jest.fn()

describe('Answer', () => {
  beforeEach(() => {
    render(<Answer country={country} answer={answer} />)
  })

  it('can return the name of the country', () => {
    const countryName = screen.getByText('Finland')
    expect(countryName).toBeInTheDocument()
  })

  it('can call the callback fn', () => {
    const countryName = screen.getByText('Finland')
    fireEvent.click(countryName)
    expect(answer).toBeCalled()
  })
})
