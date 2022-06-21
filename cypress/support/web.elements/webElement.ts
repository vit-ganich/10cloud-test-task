export default class WebElement {
  protected selector: string | keyof HTMLElementTagNameMap;

  /**
   *
   * @param selector string selector
   */
  constructor(selector: string | keyof HTMLElementTagNameMap) {
    this.selector = selector;
  }

  /**
   * Find an element using cy.get()
   * @param options
   * @returns
   */
  get(
    options?: Partial<
      Cypress.Loggable &
        Cypress.Timeoutable &
        Cypress.Withinable &
        Cypress.Shadow
    >,
  ) {
    return cy.get(this.selector, options);
  }

  /**
   * Click on the element
   * @param options
   * @returns
   */
  click(
    options?: Partial<Cypress.ClickOptions>,
  ): Cypress.Chainable<JQuery> | Cypress.Chainable<undefined> {
    return this.get().click(options);
  }
}
