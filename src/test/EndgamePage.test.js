import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import EndgamePage from '../Components/EndgamePage'

describe('EndgamePage', () => {
  beforeEach(() => {
    render(<EndgamePage />)
  })

  it('can display properly content', () => {
    const title = screen.getByText(/game over!/i)
    expect(title).toBeInTheDocument()
  })
})
