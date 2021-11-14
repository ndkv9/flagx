/* eslint-disable jest/expect-expect */
describe('FlagX app', function () {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('front page can be opened', function () {
    cy.contains(/flagx/i)
    cy.contains(/welcome!/i)
  })
  it('can start the game', () => {
    cy.contains(/start/i).click()
    cy.get('[data-testid=country-img]')
  })
})
