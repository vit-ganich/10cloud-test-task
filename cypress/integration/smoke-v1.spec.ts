import careersPage from '../support/pages/careers.page';
import landingPage from '../support/pages/landing.page';

describe('Career Page test suit', () => {
  beforeEach(() => {
    // open 10cloud landing page
    landingPage.visit();

    // open Careers tab
    landingPage.navigateToCareers();
    careersPage.waitForLoad();

    // go to Open Positions
    careersPage.goToOpenPositions();
  });

  it('should have only one "Senior QA Automation Engineer" role open', () => {
    careersPage.verifyJobOfferAmount('Senior QA Automation Engineer');
  });

  it('should contain "QA Automation" or "QA Engineer" in the title', () => {
    careersPage.selectDepartment('QA');
    careersPage.verifyPositionsTitles(/QA (Engineer|Automation)/);
  });
});
