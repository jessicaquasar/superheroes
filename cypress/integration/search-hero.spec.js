// <reference types="cypress" />

describe("Search Hero", () => {
  before(() => {
    cy.visit("/");
  });

  it("type hero name", () => {
    cy.get('[data-testid="home_input_search"]')
      .first()
      .type("Gamora")
      .type("{enter}");
  });

  it("hero founded", () => {
    cy.get('[data-testid="list-label-hero"]').first().contains("Gamora");
  });
});
