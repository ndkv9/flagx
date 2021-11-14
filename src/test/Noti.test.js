import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Noti from '../Components/Noti'

describe('Noti', () => {
  beforeEach(() => {
    render(<Noti />)
  })

  it('can display properly content', () => {
    const title = screen.getByText(/wrong answer!/i)
    expect(title).toBeInTheDocument()
  })
})
