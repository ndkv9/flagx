import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import CountryFlag from '../Components/CountryFlag'

describe('CountryFlag', () => {
  beforeEach(() => {
    render(<CountryFlag />)
  })

  it('can return the flag of the country', () => {
    const flag = screen.getByTestId('country-img')
    expect(flag).toBeInTheDocument()
  })
})
