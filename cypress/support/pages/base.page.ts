import WebElement from '../web.elements/webElement';

/**
 * Base class for page objects
 */
abstract class BasePage {
  loadingIndicator = new WebElement('div[class*="LoadingIndicator"]');

  constructor(readonly url: string) {}

  /**
   * Visit page url.
   * Note: 'url' field must be initialized in the constructor
   */
  visit() {
    cy.visit(this.url);
    cy.url().should('contain', this.url);
  }

  /**
   * Wait for the page load completed
   */
  waitForLoad() {
    this.loadingIndicator.get().should('not.exist');
    cy.wait(1000); // TODO: add a smart wait
  }
}

export default BasePage;
