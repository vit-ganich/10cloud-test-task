import Dropdown from '../web.elements/dropdown';
import WebElement from '../web.elements/webElement';
import BasePage from './base.page';

/**
 * Careers - find open positions & reasons to work at 10Clouds
 */
class CareersPage extends BasePage {
  seeOpenPositionsBtn = new WebElement('.contact-btn>span');
  jobOffersSearch = new WebElement('#job-offers__search');
  jobOffersTitlesList = new WebElement('.job-offer__title');

  departmentsDropdown = new Dropdown('label:contains("Department")');

  constructor() {
    super('/careers/');
  }

  goToOpenPositions() {
    this.seeOpenPositionsBtn.click();
    this.jobOffersSearch.get().scrollIntoView();
  }

  selectDepartment(department: string) {
    this.departmentsDropdown.select(department);
  }

  verifyJobOfferAmount(jobOfferTitle: string, amount = 1) {
    this.jobOffersTitlesList
      .get()
      .parent()
      .find(`h2:contains("${jobOfferTitle}")`)
      .should('have.length', amount);
  }

  verifyPositionsTitles(expectedTitle: RegExp) {
    this.jobOffersTitlesList.get().each(($title) => {
      const actualTitle = $title.text();
      expect(actualTitle).to.match(expectedTitle);
    });
  }
}

export default new CareersPage();
