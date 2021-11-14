import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import LandingPage from '../Components/LandingPage'

describe('LandingPage', () => {
  beforeEach(() => {
    render(<LandingPage />)
  })

  it('can display properly content', () => {
    const title = screen.getByText(/welcome!/i)
    expect(title).toBeInTheDocument()
  })
})
