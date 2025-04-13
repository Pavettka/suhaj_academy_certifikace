export const customElement = (selector) => {
  const element = {
    isVisible() {
      cy.get(selector).should("be.visible");
      return element;
    },
    haveText(text) {
      cy.get(selector).should("have.text", text);
      return element;
    },
    exist() {
      cy.get(selector).should("exist");
      return element;
    },
    containsText(text) {
      cy.get(selector).should("contain.text", text);
      return element;
    },
    haveValue(value) {
      cy.get(selector).should("have.value", value);
      return element;
    },
    havePlaceholder(placeholder) {
      cy.get(selector).should("have.attr", "placeholder", placeholder);
      return element;
    },

    haveResponse(api) {
      cy.wait(api).its("response.body.access_token").should("exist");
      return element;
    },

    haveAttribute(attribute, value) {
      cy.get(selector).should("have.attr", attribute, value);
      return element;
    },
    click() {
      cy.get(selector).click();
      return element;
    },
    check() {
      cy.get(selector).check();
      return element;
    },
    setDate(date) {
      cy.get(selector).type(date);
      return element;
    },
    get() {
      return cy.get(selector);
    },
  };
  return element;
};
