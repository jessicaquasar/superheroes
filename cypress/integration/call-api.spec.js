// <reference types="cypress" />

import { configs } from "../../src/config/config";

describe("Call API", () => {
  before(() => {
    cy.visit("/");
  });

  it("response", () => {
    const timestamp = configs.ts;
    const publicKey = configs.pk;
    const hash = configs.hash;

    cy.request(
      `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    ).then((response) => {
      expect(response.body).to.have.property("code", 200);
    });
  });
});
