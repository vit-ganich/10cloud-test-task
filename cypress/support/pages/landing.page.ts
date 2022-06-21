import WebElement from '../web.elements/webElement';
import BasePage from './base.page';
import careersPage from './careers.page';

class LandingPage extends BasePage {
  constructor() {
    super('/');
  }

  // Tabs
  careersTab = new WebElement(
    "[class*='MenuItem__Wrapper']>[href='/careers/']",
  );

  visit() {
    cy.intercept('page-data/how-we-work/page-data.json').as('pageData');

    super.visit();

    // Sometimes Careers tab loads a bit slowly, need to wait for the pageData to be ready
    cy.wait('@pageData', { timeout: 10000 });
  }

  navigateToCareers() {
    this.careersTab.click();

    cy.url().should('contain', careersPage.url);
  }
}

export default new LandingPage();
